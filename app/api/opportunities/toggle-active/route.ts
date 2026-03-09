import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { verifyAdminRequest } from "@/lib/admin-auth";

export async function PATCH(req: NextRequest) {
  const authError = verifyAdminRequest(req);
  if (authError) return authError;

  const body = await req.json();
  const id = String(body.id ?? "").trim();
  const is_active = Boolean(body.is_active);

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  const { error } = await supabaseAdmin
    .from("opportunities")
    .update({ is_active })
    .eq("id", id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
