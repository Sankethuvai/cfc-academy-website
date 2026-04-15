import { createWhatsAppUrl } from "@/lib/siteConfig";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={createWhatsAppUrl("Hi, I want to know about CFC Excellence trial sessions.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_6px_18px_rgba(8,84,38,0.38),0_0_0_1px_rgba(255,255,255,0.1)_inset] ring-2 ring-white/20 transition duration-200 hover:scale-[1.05] hover:bg-[#20b858] hover:shadow-[0_8px_22px_rgba(8,84,38,0.45)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:h-10 md:w-10"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M19.1 17.3c-.3-.2-1.6-.8-1.8-.9-.2-.1-.4-.2-.6.1-.2.3-.7.9-.9 1.1-.1.2-.3.2-.5.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1.1 2.6.1.2 1.8 2.8 4.4 3.9 2.6 1.1 2.6.7 3.1.7.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.4z" />
        <path d="M16 3.2C9 3.2 3.3 8.9 3.3 15.9c0 2.2.6 4.2 1.6 6l-1.1 4.9 5-.9c1.7.9 3.7 1.4 5.8 1.4h.1c7 0 12.7-5.7 12.7-12.7S23 3.2 16 3.2zm0 22.9h-.1c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3 .6.6-2.9-.3-.5c-1-1.5-1.5-3.3-1.5-5.1 0-5.4 4.4-9.9 9.9-9.9s9.9 4.4 9.9 9.9c0 5.5-4.4 9.9-9.9 9.9z" />
      </svg>
    </a>
  );
}
