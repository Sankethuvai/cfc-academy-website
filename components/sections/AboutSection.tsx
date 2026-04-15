import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { siteConfig } from "@/lib/siteConfig";

export function AboutSection() {
  return (
    <section id="about" className="bg-[color:var(--surface)] py-20 md:py-24">
      <SectionReveal className="mx-auto grid w-full max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-6">
        <div className="space-y-6 text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
            {siteConfig.about.title}
          </p>
          <div className="mx-auto h-0.5 w-16 bg-[color:var(--premium)]/55 md:mx-0" />
          <h2 className="text-3xl font-black uppercase text-[color:var(--brand-dark)] md:text-4xl">
            Building Better Cricketers And Better Individuals
          </h2>
          <div className="space-y-4 text-sm leading-7 text-[color:var(--foreground)] md:text-base">
            {siteConfig.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)]">
          <Image
            src="/images/about-ground.png"
            alt="CFC Excellence ground and practice nets"
            width={1000}
            height={700}
            className="h-full min-h-[260px] w-full object-cover"
            priority={false}
          />
        </div>
      </SectionReveal>
    </section>
  );
}
