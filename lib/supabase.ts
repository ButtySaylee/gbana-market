import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client using service role (server-side only)
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!serviceRoleKey) {
  console.warn(
    "[supabase] SUPABASE_SERVICE_ROLE_KEY is not set — " +
      "admin operations will use the anon key and will fail on RLS-protected tables."
  );
}

export const supabaseAdmin = createClient(
  supabaseUrl,
  serviceRoleKey ?? supabaseAnonKey
);
