import Header from "@/components/Header"
import HeroSlider from "@/components/HeroSlider"
import CollageSection from "@/components/CollageSection"
import ConfiguratorSection from "@/components/ConfiguratorSection"
import BrandPillars from "@/components/BrandPillars"
import CommunitySection from "@/components/CommunitySection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Header />
      <HeroSlider />
      <CollageSection />
      <ConfiguratorSection />
      <BrandPillars />
      <CommunitySection />
      <Footer />
    </main>
  );
}