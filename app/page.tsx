import { FloatingCallButton } from "@/components/common/FloatingCallButton";
import { FloatingWhatsAppButton } from "@/components/common/FloatingWhatsAppButton";
import { StickyTrialBar } from "@/components/common/StickyTrialBar";
import { StickyHeader } from "@/components/layout/StickyHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { CampusTourSection } from "@/components/sections/CampusTourSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationContactSection } from "@/components/sections/LocationContactSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { SocialFeedSection } from "@/components/sections/SocialFeedSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <StickyHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <WhyChooseUsSection />
        <CampusTourSection />
        <SocialFeedSection />
        <LocationContactSection />
      </main>
      <FooterSection />
      <div className="fixed bottom-24 right-4 z-50 flex flex-col items-center gap-2 md:bottom-6 md:right-6">
        <FloatingWhatsAppButton />
        <FloatingCallButton />
      </div>
      <StickyTrialBar />
    </div>
  );
}
