import { navLinks, siteConfig } from "@/lib/siteConfig";

export function FooterSection() {
  return (
    <footer className="bg-[color:var(--brand-dark)] py-12 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="text-lg font-bold">{siteConfig.academyName}</h3>
          <p className="mt-3 text-sm text-white/75">
            8CFF+WX8 CFC excellence - cricket academy, Aramghar X Road, Hyderabad
          </p>
          <a className="mt-2 block text-sm text-white/75" href={`tel:${siteConfig.phoneDial}`}>
            {siteConfig.phoneDisplay}
          </a>
          <div className="mt-3 flex items-center gap-4 text-sm">
            <a className="transition hover:text-[color:var(--premium)]" href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="transition hover:text-[color:var(--premium)]" href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="transition hover:text-[color:var(--premium)]" href={siteConfig.socialLinks.google} target="_blank" rel="noreferrer">
              Google
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-[color:var(--premium)]" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Get Started</h4>
          <p className="mt-3 text-sm text-white/75">
            Book your free trial session and begin your performance journey.
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} CFC Excellence Cricket Academy. All rights reserved.
      </p>
    </footer>
  );
}
