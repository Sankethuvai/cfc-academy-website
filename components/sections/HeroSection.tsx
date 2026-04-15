"use client";

import { createWhatsAppUrl, siteConfig } from "@/lib/siteConfig";

export function HeroSection() {
  const tickerItems = [
    siteConfig.heroTicker.campaign,
    siteConfig.heroTicker.startsFrom,
    siteConfig.topBar.locationLabel,
  ];

  return (
    <section>
      <div className="relative min-h-[88vh] overflow-hidden pt-36 text-white md:pt-44">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={siteConfig.heroVideoPath} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(19,47,82,0.5)_0%,rgba(19,47,82,0.24)_34%,rgba(19,47,82,0.08)_58%,rgba(19,47,82,0)_76%)]" />
        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center px-4 pb-20 md:px-6 md:pb-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand-soft)]">
              Skill. Discipline. Success.
            </p>
            <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl md:text-6xl">
              {siteConfig.hero.title}
            </h1>
            <p className="max-w-xl text-base text-white/90 md:text-lg">{siteConfig.hero.subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={createWhatsAppUrl("Hi, I would like to book a free trial at CFC Excellence.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-white transition hover:scale-[1.02] hover:bg-[color:var(--accent-strong)]"
              >
                Book Free Trial
              </a>
              <a
                href={`tel:${siteConfig.phoneDial}`}
                className="rounded-full border border-[color:var(--brand-soft)]/80 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-24 right-4 z-30 flex flex-col items-end gap-2 md:bottom-20 md:right-6">
          <a
            href={siteConfig.socialLinks.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--brand-soft)]/55 bg-[color:var(--brand-dark)]/45 text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M14.5 8.5V6.8c0-.7.5-.8.8-.8h1.7V3h-2.3C12 3 11 5 11 7v1.5H9v3h2V21h3.5v-9.5h2.1l.4-3H14.5z" />
            </svg>
          </a>
          <a
            href={siteConfig.socialLinks.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--brand-soft)]/55 bg-[color:var(--brand-dark)]/45 text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
              <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href={siteConfig.socialLinks.google}
            target="_blank"
            rel="noreferrer"
            aria-label="Google map link"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--brand-soft)]/55 bg-[color:var(--brand-dark)]/45 text-white transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" aria-hidden="true">
              <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" strokeWidth="1.8" />
              <circle cx="12" cy="11" r="2.2" strokeWidth="1.8" />
            </svg>
          </a>
        </div>
      </div>
      <div className="relative z-20 border-t border-[color:var(--premium)]/30 bg-[linear-gradient(90deg,rgba(19,47,82,0.92)_0%,rgba(26,63,109,0.9)_45%,rgba(19,47,82,0.92)_100%)] shadow-[0_-6px_20px_rgba(12,30,56,0.4)]">
        <div className="hero-ticker-track">
          {[0, 1].map((track) => (
            <div className="hero-ticker-content" key={track}>
              {tickerItems.map((item) => (
                <span key={`${track}-${item}`} className="hero-ticker-item">
                  {item}
                </span>
              ))}
              <a
                href={`tel:${siteConfig.phoneDial}`}
                aria-label={`Call ${siteConfig.academyName} at ${siteConfig.phoneDisplay}`}
                className="hero-ticker-item hero-ticker-call"
              >
                {siteConfig.heroTicker.ctaLabel}: {siteConfig.phoneDisplay}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
