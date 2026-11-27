import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import fs from "fs/promises";
import path from "path";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { getDataFilePath } from "@/lib/storage";

const NO_CACHE_HEADERS = {
  "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
  Pragma: "no-cache",
  Expires: "0",
};

const RESEEDABLE = new Set(["pressUploads.json", "events.json", "media.json"]);

async function requireAdmin() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SESSION_COOKIE_NAME);
  if (!sessionCookie?.value) return null;
  return await verifySessionToken(sessionCookie.value);
}

export async function POST(req) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401, headers: NO_CACHE_HEADERS });
  }

  try {
    const body = await req.json().catch(() => ({}));
    const file = body.file;
    if (!file || !RESEEDABLE.has(file)) {
      return NextResponse.json(
        { success: false, error: `file must be one of: ${[...RESEEDABLE].join(", ")}` },
        { status: 400, headers: NO_CACHE_HEADERS }
      );
    }

    const bundledPath = path.join(process.cwd(), "src", "data", file);
    const targetPath = getDataFilePath(file);

    const bundled = await fs.readFile(bundledPath, "utf-8");
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    await fs.writeFile(targetPath, bundled, "utf-8");

    return NextResponse.json(
      { success: true, file, bytes: bundled.length, target: targetPath },
      { headers: NO_CACHE_HEADERS }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message || "Reseed failed" },
      { status: 500, headers: NO_CACHE_HEADERS }
    );
  }
}
