import Hero from "@/components/home/Hero";
import CareDiscovery from "@/components/home/CareDiscovery";
import ServicesSection from "@/components/home/ServicesSection";
import AIToolsSection from "@/components/home/AIToolsSection";
import PharmacySection from "@/components/home/PharmacySection";
import EcosystemSection from "@/components/home/EcosystemSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AIToolsSection />
      <PharmacySection />
      <EcosystemSection />
      <FinalCTA />
    </div>
  );
}
