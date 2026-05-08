import Navigation from "@/components/Navigation";
import OpeningCountdown from "@/components/OpeningCountdown";
import Hero from "@/components/sections/Hero";
import TextMarquee from "@/components/sections/TextMarquee";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-full bg-[var(--paper)]">
      <OpeningCountdown />
      <Navigation />
      <main className="pb-4 pt-[5.5rem] md:pb-6 md:pt-[6.5rem]">
        <Hero />
        <TextMarquee />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
