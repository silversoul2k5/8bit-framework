import Navigation from "@/components/Navigation";
import OpeningCountdown from "@/components/OpeningCountdown";
import Hero from "@/components/sections/Hero";
import TextMarquee from "@/components/sections/TextMarquee";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-full bg-[var(--paper)]">
      <OpeningCountdown />
      <Navigation />
      <main className="pb-4 md:pb-6">
        <Hero />
        <TextMarquee />
        <Projects />
        <Services />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
