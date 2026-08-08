/**
 * Persistent visitor counter.
 *
 * When SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are configured, the count
 * is stored in a Postgres table ("visitor_counter") via Supabase's REST
 * (PostgREST) API, using a Postgres RPC function so the increment is atomic.
 * See README.md for the exact SQL to run once in your Supabase project.
 *
 * Without those env vars (e.g. first local run before you've set up
 * Supabase), the counter falls back to an in-memory value so the UI still
 * works during development — this fallback does NOT persist across server
 * restarts or serverless cold starts, and should not be relied on in
 * production.
 */

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY);

// In-memory fallback (per server instance only).
let memoryCount = 1284;

async function callRpc(fn: string): Promise<number | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      },
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    // Postgres functions returning a single bigint come back as a plain number.
    if (typeof data === "number") return data;
    if (Array.isArray(data) && typeof data[0] === "number") return data[0];
    return null;
  } catch {
    return null;
  }
}

/** Increments the persistent counter by one and returns the new total. */
export async function incrementVisitorCount(): Promise<number> {
  if (isSupabaseConfigured) {
    const result = await callRpc("increment_visitor_count");
    if (result !== null) return result;
  }
  memoryCount += 1;
  return memoryCount;
}

/** Reads the current persistent count without incrementing it. */
export async function getVisitorCount(): Promise<number> {
  if (isSupabaseConfigured) {
    const result = await callRpc("get_visitor_count");
    if (result !== null) return result;
  }
  return memoryCount;
}

export const visitorStoreBackend = isSupabaseConfigured ? "supabase" : "memory";
