import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "src", "data", "pressUploads.json");

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

async function readList() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    try {
      await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
      await fs.writeFile(DATA_FILE, "[]", "utf-8");
    } catch {}
    return [];
  }
}

async function writeList(list) {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf-8");
}

export async function GET() {
  const list = await readList();
  return NextResponse.json(
    { success: true, count: list.length, data: list },
    { headers: NO_CACHE_HEADERS }
  );
}

export async function POST(req) {
  try {
    const body = await req.json();
    const incoming = Array.isArray(body.items) ? body.items : [body];

    const list = await readList();
    const created = [];

    for (const item of incoming) {
      if (!item || !item.image) continue;
      const nameFromFile = (item.name || item.filename || "Press Clipping")
        .replace(/\.[^/.]+$/, "")
        .replace(/[-_]+/g, " ")
        .trim();

      const today = new Date();
      const entry = {
        id: `press-upload-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        year: String(today.getFullYear()),
        date: today.toISOString().split("T")[0],
        dateFormatted: today.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }),
        source: "Press Coverage",
        badge: "Media Clipping",
        category: "Press Coverage",
        titleEnglish: nameFromFile || "Press Clipping",
        image: item.image,
        alt: nameFromFile || "Press clipping",
        uploadedAt: new Date().toISOString(),
      };
      list.unshift(entry);
      created.push(entry);
    }

    await writeList(list);
    return NextResponse.json(
      { success: true, count: created.length, data: created },
      { status: 201, headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to save press clippings" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json(
        { success: false, error: "id is required" },
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }
    const list = await readList();
    const filtered = list.filter((p) => p.id !== id);
    if (filtered.length === list.length) {
      return NextResponse.json(
        { success: false, error: "Not found" },
        { status: 404, headers: NO_CACHE_HEADERS }
      );
    }
    await writeList(filtered);
    return NextResponse.json(
      { success: true, deletedId: id, remainingCount: filtered.length },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to delete" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
