import { NextResponse } from "next/server";
import { fetchLatestInstagramPosts } from "@/lib/instagram";

export async function GET() {
  const posts = await fetchLatestInstagramPosts(8);

  return NextResponse.json(
    { posts },
    {
      headers: {
        "Cache-Control": "public, s-maxage=900, stale-while-revalidate=3600",
      },
    }
  );
}
