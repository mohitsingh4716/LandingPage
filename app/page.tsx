import { HeroSection } from "@/components/sections/hero";
import { FeatureCards } from "@/components/sections/feature-cards";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { StatsSection } from "@/components/sections/stats";

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <FeatureCards />
      <StatsSection />
      <TestimonialsSection />
    </main>
  );
}