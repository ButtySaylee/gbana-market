import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { verifyAdminRequest } from "@/lib/admin-auth";

interface CreateOpportunityPayload {
  title?: unknown;
  description?: unknown;
  type?: unknown;
  organization?: unknown;
  location?: unknown;
  deadline?: unknown;
  requirements?: unknown;
  application_url?: unknown;
  image_url?: unknown;
}

export async function POST(req: NextRequest) {
  const authError = verifyAdminRequest(req);
  if (authError) return authError;

  const body = (await req.json()) as CreateOpportunityPayload;

  const title = String(body.title ?? "").trim();
  const description = String(body.description ?? "").trim();
  const type = String(body.type ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const location = String(body.location ?? "").trim();
  const deadline = String(body.deadline ?? "").trim() || null;
  const requirements = String(body.requirements ?? "").trim() || null;
  const application_url = String(body.application_url ?? "").trim();
  const image_url = String(body.image_url ?? "").trim();

  if (!title || !description || !organization || !location || !application_url || !image_url) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!["job", "scholarship"].includes(type)) {
    return NextResponse.json({ error: "Invalid opportunity type" }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("opportunities").insert({
    title,
    description,
    type,
    organization,
    location,
    deadline,
    requirements,
    application_url,
    image_url,
  });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
