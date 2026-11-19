import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const MIME_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
};

export async function GET(req, { params }) {
  try {
    const fileSegments = (await params).file;
    if (!fileSegments || fileSegments.length === 0) {
      return new NextResponse("File not specified", { status: 400 });
    }

    const safeFilename = path.basename(fileSegments.join("/"));
    const filePath = path.join(process.cwd(), "public", "uploads", safeFilename);

    try {
      const buffer = await fs.readFile(filePath);
      const ext = path.extname(safeFilename).toLowerCase();
      const contentType = MIME_TYPES[ext] || "application/octet-stream";

      return new NextResponse(buffer, {
        status: 200,
        headers: {
          "Content-Type": contentType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    } catch (notFound) {
      return new NextResponse("File not found", { status: 404 });
    }
  } catch (err) {
    return new NextResponse("Error reading file", { status: 500 });
  }
}
