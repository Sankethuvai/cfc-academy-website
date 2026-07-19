import { createWhatsAppUrl } from "@/lib/siteConfig";

export function StickyTrialBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1FAF5A]/20 bg-white/95 p-3 backdrop-blur md:hidden">
      <a
        href={createWhatsAppUrl("Hi, I want to book a free cricket appointment.")}
        target="_blank"
        rel="noreferrer"
        className="block rounded-full bg-[#1FAF5A] px-4 py-3 text-center text-sm font-bold text-white"
      >
        Book Free Appointment
      </a>
    </div>
  );
}
