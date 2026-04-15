import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { createWhatsAppUrl, galleryImages } from "@/lib/siteConfig";

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <h2 className="text-center text-3xl font-black uppercase text-[#0b2b18] md:text-4xl">
            Capturing Match Moments
          </h2>
        </SectionReveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryImages.map((image, idx) => (
            <SectionReveal key={image}>
              <Image
                src={image}
                alt={`CFC gallery image ${idx + 1}`}
                width={700}
                height={600}
                className="h-40 w-full rounded-2xl object-cover transition hover:scale-[1.02] md:h-52"
              />
            </SectionReveal>
          ))}
        </div>
        <SectionReveal className="mt-8 text-center">
          <a
            href={createWhatsAppUrl("Hi, please share more photos and academy details.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-[#1FAF5A] px-6 py-3 text-sm font-bold text-[#1FAF5A] transition hover:bg-[#1FAF5A] hover:text-white"
          >
            View More
          </a>
        </SectionReveal>
      </div>
    </section>
  );
}
