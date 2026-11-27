import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { ensureSeededDataFile, getDataFilePath, getUploadDir } from "@/lib/storage";

const UPLOAD_DIR = getUploadDir();
const MEDIA_FILENAME = "media.json";
const MEDIA_FILE = getDataFilePath(MEDIA_FILENAME);

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

export async function POST(req) {
  try {
    await fs.mkdir(UPLOAD_DIR, { recursive: true });

    const contentType = req.headers.get("content-type") || "";

    // Multipart Form Data upload
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const files = formData.getAll("file").concat(formData.getAll("files"));

      if (!files || files.length === 0) {
        return NextResponse.json(
          { success: false, error: "No files were uploaded" },
          { status: 400 }
        );
      }

      const currentMedia = await getMediaList();
      const uploadedResults = [];

      for (const file of files) {
        if (!file || typeof file === "string" || !file.name) continue;

        const originalName = file.name;
        const ext = path.extname(originalName).toLowerCase() || ".jpg";
        const baseName = path
          .basename(originalName, ext)
          .toLowerCase()
          .replace(/[^a-z0-9_-]/g, "-")
          .slice(0, 32);

        const safeFilename = `${Date.now()}-${baseName}${ext}`;
        const filePath = path.join(UPLOAD_DIR, safeFilename);

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        await fs.writeFile(filePath, buffer);

        const mediaItem = {
          id: `med_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
          name: originalName,
          filename: safeFilename,
          url: `/api/uploads/${safeFilename}`,
          size: file.size || buffer.length,
          type: file.type || "image/jpeg",
          uploadedAt: new Date().toISOString(),
          isPreset: false,
        };

        uploadedResults.push(mediaItem);
        currentMedia.unshift(mediaItem);
      }

      await saveMediaList(currentMedia);

      return NextResponse.json({
        success: true,
        message: `${uploadedResults.length} file(s) uploaded successfully`,
        data: uploadedResults.length === 1 ? uploadedResults[0] : uploadedResults,
      });
    }

    // JSON base64 upload fallback
    if (contentType.includes("application/json")) {
      const body = await req.json();
      if (!body.data || !body.filename) {
        return NextResponse.json(
          { success: false, error: "Missing filename or data" },
          { status: 400 }
        );
      }

      const originalName = body.filename;
      const ext = path.extname(originalName).toLowerCase() || ".jpg";
      const baseName = path
        .basename(originalName, ext)
        .toLowerCase()
        .replace(/[^a-z0-9_-]/g, "-")
        .slice(0, 32);

      const safeFilename = `${Date.now()}-${baseName}${ext}`;
      const filePath = path.join(UPLOAD_DIR, safeFilename);

      // Extract base64 data without data URL prefix
      const base64Data = body.data.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      await fs.writeFile(filePath, buffer);

      const mediaItem = {
        id: `med_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        name: originalName,
        filename: safeFilename,
        url: `/api/uploads/${safeFilename}`,
        size: buffer.length,
        type: body.type || "image/jpeg",
        uploadedAt: new Date().toISOString(),
        isPreset: false,
      };

      const currentMedia = await getMediaList();
      currentMedia.unshift(mediaItem);
      await saveMediaList(currentMedia);

      return NextResponse.json({
        success: true,
        message: "File uploaded successfully",
        data: mediaItem,
      });
    }

    return NextResponse.json(
      { success: false, error: "Unsupported content type" },
      { status: 400 }
    );
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process upload" },
      { status: 500 }
    );
  }
}

