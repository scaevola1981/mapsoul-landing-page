import Hero from "@/components/Hero";
import SpecializationsGrid from "@/components/SpecializationsGrid";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <SpecializationsGrid />
      <AboutMe />
    </main>
  );
}
