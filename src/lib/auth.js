// Chamak Foundation Admin Authentication & Session Management
// Works across Node.js runtime and Next.js Edge Middleware

export const SESSION_COOKIE_NAME = "chamak_admin_session";
const DEFAULT_SECRET = "chamak_secret_key_production_2026_foundation";

export const ADMIN_CONFIG = {
  // Support both username and email login
  username: process.env.ADMIN_USERNAME || "admin",
  email: process.env.ADMIN_EMAIL || "chamakfoundation23@gmail.com",
  password: process.env.ADMIN_PASSWORD || "Chamak@2026!",
};

function getSecret() {
  return process.env.SESSION_SECRET || DEFAULT_SECRET;
}

function base64UrlEncode(str) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlDecode(str) {
  let base64 = str.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  return decodeURIComponent(escape(atob(base64)));
}

function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

function base64UrlToUint8Array(base64url) {
  let base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  while (base64.length % 4) base64 += "=";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function signData(data, secret = getSecret()) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return bufferToBase64Url(signature);
}

export async function verifySignature(data, signature, secret = getSecret()) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const sigBuffer = base64UrlToUint8Array(signature);
  return crypto.subtle.verify("HMAC", key, sigBuffer, enc.encode(data));
}

export async function createSessionToken(username) {
  const payload = {
    username,
    role: "admin",
    exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days validity
  };
  const payloadStr = base64UrlEncode(JSON.stringify(payload));
  const signature = await signData(payloadStr);
  return `${payloadStr}.${signature}`;
}

export async function verifySessionToken(token) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [payloadStr, signature] = parts;
  try {
    const isValid = await verifySignature(payloadStr, signature);
    if (!isValid) return null;
    const jsonStr = base64UrlDecode(payloadStr);
    const payload = JSON.parse(jsonStr);
    if (payload.exp && Date.now() > payload.exp) return null;
    return payload;
  } catch (err) {
    return null;
  }
}
