import { SectionReveal } from "@/components/common/SectionReveal";
import { testimonials } from "@/lib/siteConfig";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0f6f39] py-20 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <SectionReveal>
          <h2 className="text-center text-3xl font-black uppercase md:text-4xl">What Families Say</h2>
        </SectionReveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <SectionReveal key={testimonial.author}>
              <article className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm leading-7 text-white/95">{testimonial.quote}</p>
                <p className="mt-4 text-sm font-bold text-[#d8ffe7]">{testimonial.author}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
