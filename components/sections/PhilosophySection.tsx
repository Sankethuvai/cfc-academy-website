import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { siteConfig } from "@/lib/siteConfig";

export function PhilosophySection() {
  return (
    <section
      className="relative overflow-hidden bg-[url('/images/philosophy-group-bg.png')] bg-cover bg-center bg-no-repeat py-28 md:bg-fixed md:py-36"
    >
      <div className="relative mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal className="grid gap-8 rounded-3xl border border-[color:var(--border-soft)]/80 bg-[color:var(--surface)]/88 p-6 shadow-[0_16px_38px_rgba(0,0,0,0.18)] md:grid-cols-2 md:items-center md:p-10">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
              {siteConfig.philosophy.title}
            </p>
            <h2 className="text-3xl font-black uppercase text-[color:var(--brand-dark)] md:text-4xl">
              Cricket For All, Character For Life
            </h2>
            <div className="space-y-4 text-sm leading-7 text-[color:var(--foreground)] md:text-base">
              {siteConfig.philosophy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[color:var(--border-soft)]">
            <Image
              src="/images/philosophy-coach.png"
              alt="Coach and mentor at CFC Excellence nets"
              width={1000}
              height={700}
              className="h-full min-h-[260px] w-full object-cover"
            />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
