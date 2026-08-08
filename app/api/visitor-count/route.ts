import { NextRequest, NextResponse } from "next/server";
import { getVisitorCount, incrementVisitorCount } from "@/lib/visitor-store";

const COOKIE_NAME = "vynox_vid";
const ONE_YEAR = 60 * 60 * 24 * 365;

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const hasVisited = request.cookies.has(COOKIE_NAME);

  const count = hasVisited
    ? await getVisitorCount()
    : await incrementVisitorCount();

  const response = NextResponse.json({ count });

  if (!hasVisited) {
    response.cookies.set(COOKIE_NAME, crypto.randomUUID(), {
      maxAge: ONE_YEAR,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });
  }

  return response;
}
