import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { siteConfig } from "@/lib/siteConfig";

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="bg-[color:var(--surface-muted)] py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--premium)]">
            Why Choose Us
          </p>
          <div className="mx-auto mt-3 h-0.5 w-20 bg-[color:var(--premium)]/80" />
          <h2 className="mt-3 text-center text-3xl font-black uppercase text-[color:var(--brand-dark)] md:text-4xl">
            Why Choose Us
          </h2>
        </SectionReveal>
        <div id="programs" className="mt-10 grid gap-5 md:grid-cols-3">
          {siteConfig.whyChooseCards.map((card) => {
            const isCoachesCard = card.title === "Coaches";
            const isProgrammesCard = card.title === "Programmes";
            const isFacilitiesCard = card.title === "Facilities";

            return (
              <SectionReveal key={card.title}>
                <div
                  className={`group h-full rounded-2xl border bg-[color:var(--surface)] p-6 shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55)] transition duration-300 ${
                    isProgrammesCard
                      ? "border-[color:var(--premium)]/40 md:hover:-translate-y-1.5 md:hover:shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55),0_18px_34px_rgba(19,47,82,0.22)]"
                      : isCoachesCard
                        ? "border-[color:var(--premium)]/35 md:hover:-translate-y-1.5 md:hover:shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55),0_18px_34px_rgba(19,47,82,0.2)]"
                      : isFacilitiesCard
                        ? "border-[color:var(--premium)]/35 md:hover:-translate-y-1.5 md:hover:shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55),0_18px_34px_rgba(12,60,112,0.24)]"
                      : "border-[color:var(--border-soft)] md:hover:-translate-y-1 md:hover:shadow-[inset_0_2px_0_0_rgba(212,175,55,0.55),0_14px_26px_rgba(19,47,82,0.18)]"
                  }`}
                >
                  {isCoachesCard && (
                    <div className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--premium)]/40">
                      <Image
                        src="/images/coaches-card.jpg"
                        alt="Certified coaches guiding trainees at CFC Excellence Cricket Academy"
                        width={1200}
                        height={800}
                        className="h-44 w-full object-cover object-center transition duration-500 ease-out md:group-hover:scale-[1.06] md:group-hover:-translate-y-1"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--brand-dark)]/55 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[color:var(--brand-dark)]/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full border border-[color:var(--premium)]/60 bg-[color:var(--brand-dark)]/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--premium)] shadow-[0_6px_18px_rgba(15,30,55,0.35)] transition duration-300 md:group-hover:translate-x-1">
                        Certified Coaches
                      </span>
                    </div>
                  )}
                  {isProgrammesCard && (
                    <div className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--premium)]/45">
                      <Image
                        src="/images/summer-camp-programmes-card.png"
                        alt="Summer camp 2026 programmes at CFC Excellence Cricket Academy"
                        width={768}
                        height={1024}
                        className="h-44 w-full object-cover object-top transition duration-500 ease-out md:group-hover:scale-[1.08] md:group-hover:-translate-y-1"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--brand-dark)]/60 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[color:var(--brand-dark)]/45 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full border border-[color:var(--premium)]/60 bg-[color:var(--brand-dark)]/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--premium)] shadow-[0_6px_18px_rgba(15,30,55,0.35)] transition duration-300 md:group-hover:translate-x-1">
                        Summer Camp 2026
                      </span>
                    </div>
                  )}
                  {isFacilitiesCard && (
                    <div className="relative mb-5 overflow-hidden rounded-xl border border-[color:var(--premium)]/40">
                      <video
                        src="/videos/facility-running.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                        className="h-44 w-full object-cover transition duration-500 ease-out md:group-hover:scale-[1.06] md:group-hover:-translate-y-1"
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color:var(--brand-dark)]/55 via-transparent to-transparent" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[color:var(--brand-dark)]/40 to-transparent" />
                      <span className="absolute bottom-3 left-3 rounded-full border border-[color:var(--premium)]/60 bg-[color:var(--brand-dark)]/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--premium)] shadow-[0_6px_18px_rgba(15,30,55,0.35)] transition duration-300 md:group-hover:translate-x-1">
                        Live Facility Session
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[color:var(--brand-dark)]">{card.title}</h3>
                  <p
                    className={`mt-3 text-sm leading-7 text-[color:var(--foreground)] ${
                      isCoachesCard || isProgrammesCard || isFacilitiesCard
                        ? "md:group-hover:text-[color:var(--brand-dark)]/95"
                        : ""
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
