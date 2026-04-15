import { createWhatsAppUrl, siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/common/SectionReveal";

export function CampusTourSection() {
  return (
    <section className="bg-[color:var(--brand-dark)] py-20 text-white md:py-24">
      <SectionReveal className="mx-auto w-full max-w-4xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--premium)]">Campus Tour</p>
        <h2 className="mt-3 text-3xl font-black uppercase md:text-4xl">{siteConfig.campusTour.title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 md:text-base">
          {siteConfig.campusTour.description}
        </p>
        <a
          href={createWhatsAppUrl("Hi, I would like to schedule a campus tour.")}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex rounded-full border border-[color:var(--premium)]/80 bg-[color:var(--accent)] px-7 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition hover:bg-[color:var(--accent-strong)]"
        >
          {siteConfig.campusTour.ctaLabel}
        </a>
      </SectionReveal>
    </section>
  );
}
