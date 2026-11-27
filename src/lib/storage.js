import fsSync from "fs";
import fs from "fs/promises";
import path from "path";

const AZURE_WWWROOT = "/home/site/wwwroot";
const AZURE_PERSISTENT_ROOT = "/home/chamak-data";

export function getPersistentRoot() {
  if (process.env.CHAMAK_STORAGE_DIR) {
    return process.env.CHAMAK_STORAGE_DIR;
  }
  if (fsSync.existsSync(AZURE_WWWROOT)) {
    return AZURE_PERSISTENT_ROOT;
  }
  return null;
}

export function getUploadDir() {
  const root = getPersistentRoot();
  return root
    ? path.join(root, "uploads")
    : path.join(process.cwd(), "public", "uploads");
}

export function getDataFilePath(filename) {
  const root = getPersistentRoot();
  return root
    ? path.join(root, "data", filename)
    : path.join(process.cwd(), "src", "data", filename);
}

/**
 * Ensures the target data file exists; if running with persistent storage
 * and the file does not exist yet, seeds it from the bundled src/data file
 * or writes fallbackJson.
 */
export async function ensureSeededDataFile(filename, fallbackJson = "[]") {
  const targetPath = getDataFilePath(filename);
  try {
    await fs.access(targetPath);
    return targetPath;
  } catch {
    await fs.mkdir(path.dirname(targetPath), { recursive: true });
    const bundledPath = path.join(process.cwd(), "src", "data", filename);
    if (bundledPath !== targetPath) {
      try {
        const bundled = await fs.readFile(bundledPath, "utf-8");
        await fs.writeFile(targetPath, bundled, "utf-8");
        return targetPath;
      } catch {
        // Fall through to fallbackJson
      }
    }
    await fs.writeFile(targetPath, fallbackJson, "utf-8");
    return targetPath;
  }
}
