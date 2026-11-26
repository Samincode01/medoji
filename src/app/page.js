import Hero from "@/components/home/Hero";
import EcosystemSection from "@/components/home/EcosystemSection";
import FinalCTA from "@/components/home/FinalCTA";
import ImpactSection from "@/components/home/ReviewSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ImpactSection></ImpactSection>
      <EcosystemSection />
      <FinalCTA />
    </div>
  );
}
