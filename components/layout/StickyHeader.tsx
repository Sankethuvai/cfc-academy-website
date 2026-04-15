"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createWhatsAppUrl, navLinks, siteConfig } from "@/lib/siteConfig";

export function StickyHeader() {
  const [open, setOpen] = useState(false);
  const [isCompactNav, setIsCompactNav] = useState(true);
  const ctaHref = createWhatsAppUrl(
    `Hi ${siteConfig.academyName}, I want to book a free trial session.`
  );

  useEffect(() => {
    const syncViewport = () => {
      const compact = window.innerWidth < 1024;
      setIsCompactNav(compact);
      if (!compact) {
        setOpen(false);
      }
    };

    syncViewport();
    window.addEventListener("resize", syncViewport);
    return () => window.removeEventListener("resize", syncViewport);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[color:var(--brand-dark-soft)]/35 bg-[color:var(--brand-dark)]/95 text-white backdrop-blur-md">
      <div className="border-b border-white/15">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-end gap-2 px-4 py-2 text-xs md:px-6">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-right text-white/90">
            <a
              href={`tel:${siteConfig.phoneDial}`}
              className="transition hover:text-[color:var(--premium)]"
            >
              +91 {siteConfig.topBar.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image
            src={siteConfig.logoPath}
            alt={`${siteConfig.academyName} logo`}
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white md:text-base">
            CFC Excellence
          </span>
        </a>

        {!isCompactNav && (
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 transition hover:text-[color:var(--premium)]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {!isCompactNav ? (
            <a
              href={ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-[color:var(--premium)]/80 bg-[color:var(--accent)] px-5 py-2 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_6px_18px_rgba(232,119,34,0.35)] transition hover:bg-[color:var(--accent-strong)]"
            >
              {siteConfig.headerCta.label}
            </a>
          ) : (
            <button
              type="button"
              className="rounded-md border border-white/30 px-3 py-2 text-xs font-semibold text-white lg:hidden"
              onClick={() => setOpen((state) => !state)}
            >
              Menu
            </button>
          )}
        </div>
      </div>
      {isCompactNav && open && (
        <nav className="flex flex-col gap-2 border-t border-white/15 bg-[color:var(--brand-dark)] px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-2 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full border border-[color:var(--premium)]/80 bg-[color:var(--accent)] px-5 py-2 text-center text-sm font-extrabold uppercase tracking-[0.08em] text-white"
          >
            {siteConfig.headerCta.label}
          </a>
        </nav>
      )}
    </header>
  );
}
