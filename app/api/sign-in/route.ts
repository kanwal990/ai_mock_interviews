import { auth } from "@/firebase/admin";
import { NextRequest, NextResponse } from "next/server";

const SESSION_DURATION = 60 * 60 * 24 * 7; // 1 week

export async function POST(req: NextRequest) {
  const { idToken } = await req.json();

  // Create session cookie
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: SESSION_DURATION * 1000,
  });

  const response = NextResponse.json({ success: true });
  response.cookies.set("session", sessionCookie, {
    maxAge: SESSION_DURATION,
    httpOnly: true,
    secure: false, // Always false for local development
    path: "/",
    sameSite: "lax",
  });

  return response;
}
