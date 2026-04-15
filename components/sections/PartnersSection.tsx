import { SectionReveal } from "@/components/common/SectionReveal";
import { siteConfig } from "@/lib/siteConfig";

export function PartnersSection() {
  return (
    <section id="gallery" className="bg-[color:var(--surface-muted)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <h2 className="text-center text-3xl font-black uppercase text-[color:var(--brand-dark)] md:text-4xl">
            {siteConfig.partners.title}
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.partners.names.map((name) => (
            <SectionReveal key={name}>
              <div className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] px-5 py-8 text-center text-sm font-semibold text-[color:var(--brand-dark)] shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55)]">
                {name}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
