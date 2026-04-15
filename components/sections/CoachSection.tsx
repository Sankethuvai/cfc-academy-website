import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { createWhatsAppUrl } from "@/lib/siteConfig";

export function CoachSection() {
  return (
    <section className="bg-white py-20">
      <SectionReveal className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <Image
          src="https://images.unsplash.com/photo-1521417531039-5df51bcb2fda?auto=format&fit=crop&w=1000&q=80"
          alt="Academy head coach"
          width={900}
          height={700}
          className="h-80 w-full rounded-3xl object-cover"
        />
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1FAF5A]">Founder Message</p>
          <h2 className="text-3xl font-black uppercase text-[#0b2b18] md:text-4xl">Join the Journey</h2>
          <p className="text-sm leading-7 text-slate-600 md:text-base">
            Coach Name (to be updated) welcomes every aspiring cricketer with a mission: build
            discipline first, then unlock performance. At CFC Excellence, we mentor players to grow
            on and off the field.
          </p>
          <a
            href={createWhatsAppUrl("Hi Coach, I would like to join CFC Excellence Academy.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-[#1FAF5A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#158e47]"
          >
            Book Free Trial
          </a>
        </div>
      </SectionReveal>
    </section>
  );
}
