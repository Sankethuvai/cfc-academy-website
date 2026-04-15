import Image from "next/image";
import { SectionReveal } from "@/components/common/SectionReveal";

const approachItems = [
  "Skill Development",
  "Strategy Training",
  "Match Awareness",
  "Fitness & Discipline",
];

export function ApproachSection() {
  return (
    <section className="bg-white py-20">
      <SectionReveal className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1FAF5A]">
            Training Approach
          </p>
          <h2 className="text-3xl font-black uppercase text-[#0b2b18] md:text-4xl">
            Skill + Strategy = Success
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {approachItems.map((item) => (
              <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=1200&q=80"
          alt="Coach and players during training"
          width={900}
          height={700}
          className="h-80 w-full rounded-3xl object-cover"
        />
      </SectionReveal>
    </section>
  );
}
