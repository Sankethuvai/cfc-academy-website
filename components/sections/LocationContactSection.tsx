import { siteConfig } from "@/lib/siteConfig";
import { SectionReveal } from "@/components/common/SectionReveal";

export function LocationContactSection() {
  return (
    <section id="contact" className="bg-[color:var(--surface-muted)] py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <SectionReveal className="overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)]">
          <iframe
            title="CFC Academy location map"
            src={siteConfig.mapEmbedUrl}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </SectionReveal>

        <SectionReveal className="rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--premium)]">Location</p>
          <h2 className="mt-3 text-3xl font-black uppercase text-[color:var(--brand-dark)]">Visit Our Academy</h2>
          <p className="mt-5 text-sm leading-7 text-[color:var(--foreground)]">
            8CFF+WX8 CFC excellence - cricket academy, Aramghar X Road, Mohan Reddy Nagar,
            Hyderabad, Shivarampally Jagir, Telangana 500030
          </p>
          <div className="mt-6 space-y-3 text-sm text-[color:var(--foreground)]">
            <a className="block transition hover:text-[color:var(--brand)]" href={`tel:${siteConfig.phoneDial}`}>
              +91 {siteConfig.phoneDial}
            </a>
            <a
              className="block transition hover:text-[color:var(--brand)]"
              href="mailto:cricketkioc@hotmail.com"
            >
              cricketkioc@hotmail.com
            </a>
            <p>9:30 AM - 6:00 PM, Tuesday - Sunday</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
