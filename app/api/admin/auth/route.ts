import { NextRequest, NextResponse } from "next/server";
import { getAdminToken } from "@/lib/admin-auth";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

// In-memory rate limiter (per warm function instance).
// Resets on cold start — still meaningfully limits brute-force within a session.
const attempts = new Map<string, { count: number; lockedUntil: number }>();
const MAX_FAILURES = 5;
const LOCK_MS = 15 * 60 * 1000; // 15 minutes

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getIp(request);
  const now = Date.now();
  const state = attempts.get(ip);

  if (state && state.count >= MAX_FAILURES && now < state.lockedUntil) {
    return NextResponse.json(
      { error: "Too many failed attempts. Try again in 15 minutes." },
      { status: 429 }
    );
  }

  try {
    const { password } = await request.json();

    if (!password || password !== ADMIN_PASSWORD) {
      const current = attempts.get(ip) ?? { count: 0, lockedUntil: 0 };
      const newCount = now > current.lockedUntil ? 1 : current.count + 1;
      attempts.set(ip, {
        count: newCount,
        lockedUntil:
          newCount >= MAX_FAILURES ? now + LOCK_MS : current.lockedUntil,
      });
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Successful login — clear failure record
    attempts.delete(ip);
    return NextResponse.json({ success: true, token: getAdminToken() });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
