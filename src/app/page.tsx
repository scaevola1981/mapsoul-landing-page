import Hero from "@/components/Hero";
import JungQuote from "@/components/JungQuote";
import SpecializationsCarousel from "@/components/SpecializationsCarousel";
import MethodSteps from "@/components/MethodSteps";
import Testimonials from "@/components/Testimonials";
import PlanetaryCards from "@/components/PlanetaryCards";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <JungQuote />
      <SpecializationsCarousel />
      <MethodSteps />
      <Testimonials />
      <PlanetaryCards />
    </main>
  );
}
