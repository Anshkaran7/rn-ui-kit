import { ComponentsPreview } from "@/components/ComponentsPreview";
import { DesignSystemsPreview } from "@/components/DesignSystemsPreview";
import { EarlyAccessCTA } from "@/components/EarlyAccessCTA";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

export default function Component() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #FFF9E5 0%, #DCDD8 50%, #FFF9E5 100%)",
      }}
    >
      <Header />
      <main className="flex-1">
        <HeroSection />
        <DesignSystemsPreview />
        <FeaturesSection />
        <ComponentsPreview />
        <EarlyAccessCTA />
      </main>
      <Footer />
    </div>
  );
}
