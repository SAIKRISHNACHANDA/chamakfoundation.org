import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_CONFIG, createSessionToken, SESSION_COOKIE_NAME } from "@/lib/auth";

export async function POST(request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { username, password } = body;

    if (!username || !password) {
      return NextResponse.json(
        { success: false, message: "Please provide both username and password." },
        { status: 400 }
      );
    }

    const trimmedUser = String(username).trim().toLowerCase();
    const expectedUser = ADMIN_CONFIG.username.toLowerCase();
    const expectedEmail = ADMIN_CONFIG.email.toLowerCase();

    const isUserValid = trimmedUser === expectedUser || trimmedUser === expectedEmail;
    const isPassValid = String(password) === ADMIN_CONFIG.password;

    if (!isUserValid || !isPassValid) {
      return NextResponse.json(
        { success: false, message: "Invalid username or password." },
        { status: 401 }
      );
    }

    // Create secure signed session token
    const token = await createSessionToken(trimmedUser);

    // Set HTTP-only secure cookie
    const cookieStore = await cookies();
    cookieStore.set({
      name: SESSION_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
    });

    return NextResponse.json({
      success: true,
      message: "Authentication successful.",
      user: {
        username: trimmedUser,
        role: "admin",
      },
    });
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error during login." },
      { status: 500 }
    );
  }
}
