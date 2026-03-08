import { createHmac, timingSafeEqual } from "crypto";
import { NextRequest, NextResponse } from "next/server";

/**
 * Derives a stateless admin token from the admin password.
 * Token changes automatically if ADMIN_PASSWORD is rotated.
 */
export function getAdminToken(): string {
  const pw = process.env.ADMIN_PASSWORD ?? "";
  return createHmac("sha256", pw).update("gbana_admin_v1").digest("hex");
}

/**
 * Call at the top of every protected admin API route.
 * Returns a 401 NextResponse if the request is not authorised,
 * or null if the caller is allowed to proceed.
 * Uses timing-safe comparison to prevent timing attacks.
 */
export function verifyAdminRequest(req: NextRequest): NextResponse | null {
  const auth = req.headers.get("Authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const expected = getAdminToken();
  try {
    const tokenBuf = Buffer.from(token);
    const expectedBuf = Buffer.from(expected);
    if (
      tokenBuf.length !== expectedBuf.length ||
      !timingSafeEqual(tokenBuf, expectedBuf)
    ) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null;
}
