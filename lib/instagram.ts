export type InstagramPost = {
  id: string;
  caption: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM" | string;
  mediaUrl: string;
  permalink: string;
  timestamp: string;
};

type InstagramApiItem = {
  id: string;
  caption?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  permalink?: string;
  timestamp?: string;
};

type InstagramApiResponse = {
  data?: InstagramApiItem[];
};

const INSTAGRAM_API_VERSION = "v23.0";
const DEFAULT_REVALIDATE_SECONDS = 900;

export async function fetchLatestInstagramPosts(limit = 8): Promise<InstagramPost[]> {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!userId || !accessToken) {
    return [];
  }

  const params = new URLSearchParams({
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp",
    limit: String(limit),
    access_token: accessToken,
  });

  const endpoint = `https://graph.facebook.com/${INSTAGRAM_API_VERSION}/${userId}/media?${params.toString()}`;

  try {
    const response = await fetch(endpoint, {
      next: { revalidate: DEFAULT_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as InstagramApiResponse;
    const items = payload.data ?? [];

    return items
      .map<InstagramPost | null>((item) => {
        const mediaUrl = item.media_type === "VIDEO" ? item.thumbnail_url ?? item.media_url : item.media_url;
        if (!item.id || !mediaUrl || !item.permalink || !item.timestamp) {
          return null;
        }

        return {
          id: item.id,
          caption: item.caption ?? "",
          mediaType: item.media_type ?? "IMAGE",
          mediaUrl,
          permalink: item.permalink,
          timestamp: item.timestamp,
        };
      })
      .filter((item): item is InstagramPost => item !== null);
  } catch {
    return [];
  }
}
