import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { ensureSeededDataFile, getDataFilePath, getUploadDir } from "@/lib/storage";

const UPLOAD_DIR = getUploadDir();
const MEDIA_FILENAME = "media.json";
const MEDIA_FILE = getDataFilePath(MEDIA_FILENAME);

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

async function getMediaList() {
  try {
    await ensureSeededDataFile(MEDIA_FILENAME, "[]");
    const raw = await fs.readFile(MEDIA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
}

async function saveMediaList(list) {
  try {
    await fs.mkdir(path.dirname(MEDIA_FILE), { recursive: true });
    await fs.writeFile(MEDIA_FILE, JSON.stringify(list, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to save media list", err);
    return false;
  }
}

export async function GET() {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });
    const stored = await getMediaList();

    // Also check files in upload directory to include any unindexed images
    try {
      const files = await fs.readdir(UPLOAD_DIR);
      const existingUrls = new Set(stored.map((m) => m.url));

      for (const file of files) {
        if (file.startsWith(".")) continue;
        const fileUrl = `/api/uploads/${file}`;
        if (!existingUrls.has(fileUrl) && !existingUrls.has(`/uploads/${file}`)) {
          const filePath = path.join(UPLOAD_DIR, file);
          const stat = await fs.stat(filePath);
          stored.push({
            id: `disc_${file}`,
            name: file,
            filename: file,
            url: fileUrl,
            size: stat.size,
            type: "image/jpeg",
            uploadedAt: stat.mtime.toISOString(),
            isPreset: false,
          });
        }
      }
    } catch (readErr) {
      // ignore
    }

    return NextResponse.json(
      {
        success: true,
        count: stored.length,
        data: stored,
      },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to retrieve media library" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const filename = searchParams.get("filename");
    const url = searchParams.get("url");

    let list = await getMediaList();
    const item = list.find(
      (m) =>
        (id && m.id === id) ||
        (filename && m.filename === filename) ||
        (url && m.url === url)
    );

    if (item && !item.isPreset) {
      if (item.filename) {
        const filePath = path.join(UPLOAD_DIR, item.filename);
        try {
          await fs.unlink(filePath);
        } catch (unlinkErr) {
          console.warn("Could not delete file from disk:", unlinkErr);
        }
      }
      list = list.filter((m) => m !== item);
      await saveMediaList(list);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Media item deleted successfully",
      },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete media item" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
