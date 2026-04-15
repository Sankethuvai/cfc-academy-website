import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";
import { programs } from "@/lib/siteConfig";

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#f3f6f4] py-20">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <h2 className="text-center text-3xl font-black uppercase text-[#0b2b18] md:text-4xl">
            Our Training Programs
          </h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <SectionReveal key={program.title}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={700}
                    height={480}
                    className="h-52 w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white">{program.title}</h3>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
