import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const type = searchParams.get("type") ?? "all";
  const q = searchParams.get("q")?.trim() ?? "";
  const itemsPerPage = 12;
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage - 1;

  let query = supabase
    .from("opportunities")
    .select(
      "id, created_at, title, description, type, organization, location, deadline, requirements, application_url, image_url, is_active",
      { count: "exact" }
    )
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .range(start, end);

  if (type !== "all") query = query.eq("type", type);

  if (q) {
    const escaped = q.replace(/,/g, " ");
    query = query.or(
      `title.ilike.%${escaped}%,description.ilike.%${escaped}%,organization.ilike.%${escaped}%`
    );
  }

  const { data, count, error } = await query;

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ opportunities: data ?? [], total: count ?? 0 });
}
