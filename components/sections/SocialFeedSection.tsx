import { SectionReveal } from "@/components/common/SectionReveal";
import { fetchLatestInstagramPosts } from "@/lib/instagram";
import { siteConfig } from "@/lib/siteConfig";

function formatPostDate(timestamp: string): string {
  const date = new Date(timestamp);
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export async function SocialFeedSection() {
  const posts = await fetchLatestInstagramPosts(8);

  return (
    <section id="testimonials" className="bg-[color:var(--surface)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--premium)]">
            {siteConfig.socialProof.title}
          </p>
          <h2 className="mt-3 text-center text-3xl font-black uppercase text-[color:var(--brand-dark)] md:text-4xl">
            {siteConfig.socialProof.hashtag}
          </h2>
        </SectionReveal>

        {posts.length > 0 ? (
          <div className="mt-10 flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory">
            {posts.map((post) => (
              <SectionReveal key={post.id} className="snap-start shrink-0 basis-[88%] sm:basis-[55%] lg:basis-[31%]">
                <article className="h-full overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)]">
                  <a href={post.permalink} target="_blank" rel="noreferrer" className="block">
                    <img
                      src={post.mediaUrl}
                      alt={post.caption ? post.caption.slice(0, 80) : "Instagram post from CFC Excellence"}
                      className="h-56 w-full object-cover"
                      loading="lazy"
                    />
                  </a>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--premium)]">
                      {formatPostDate(post.timestamp)}
                    </p>
                    <p className="mt-3 max-h-[84px] overflow-hidden text-sm leading-7 text-[color:var(--foreground)]">
                      {post.caption || "Latest update from CFC Excellence Cricket Academy."}
                    </p>
                    <a
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex text-sm font-semibold text-[color:var(--brand)] transition hover:text-[color:var(--accent)]"
                    >
                      View on Instagram
                    </a>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        ) : (
          <SectionReveal className="mt-10 rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)] p-6 text-center">
            <p className="text-sm text-[color:var(--foreground)]">
              Instagram feed is temporarily unavailable. Check our latest updates directly on Instagram.
            </p>
            <a
              href={siteConfig.socialProof.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full border border-[color:var(--brand)] px-5 py-2 text-sm font-semibold text-[color:var(--brand)] transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Open Instagram Profile
            </a>
          </SectionReveal>
        )}
      </div>
    </section>
  );
}
