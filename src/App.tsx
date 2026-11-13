import { useState, useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, Sparkles, GitBranch, Linkedin, Mail } from "lucide-react";
import Hero from "./components/Hero";
import CinematicSection from "./components/CinematicSection";
import SystemsShowcase from "./components/SystemsShowcase";
import ProjectsSection from "./components/ProjectsSection";
import AstraAIPage from "./components/AstraAIPage";
import ClosingPage from "./components/ClosingPage";
import Particles from "./components/Particles";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const lenis = new Lenis({
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const handleRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(handleRaf);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(handleRaf);
      lenis.destroy();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Particles />

      {/* Fluffy White Cloud Header with Purple Links */}
      <header className="cloud-header no-print">
        <a
          href="#"
          className="font-cinzel text-sm sm:text-base font-black tracking-widest text-[#4c1d95] hover:text-[#2e1065] transition shrink-0"
        >
          AKASH JADON
        </a>
        <div className="h-4 w-px bg-purple-200 shrink-0" />
        <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm font-bold">
          <a href="#systems" className="font-cinzel text-[#5b21b6] hover:text-[#2e1065] transition">
            Architecture
          </a>
          <a href="#showcase" className="font-cinzel text-[#5b21b6] hover:text-[#2e1065] transition">
            Flagships
          </a>
          <a href="#projects" className="font-cinzel text-[#5b21b6] hover:text-[#2e1065] transition">
            Sovereign Systems
          </a>
          <a href="#closing" className="font-cinzel text-[#5b21b6] hover:text-[#2e1065] transition">
            Contact
          </a>
        </nav>
      </header>

      <main className="relative z-10">
        {/* HERO WITH OSMO PARALLAX SCROLLING */}
        <section className="relative w-full overflow-hidden bg-fable-midnight">
          <Hero />
        </section>

        {/* SECTION 2: CINEMATIC 3D SYSTEMS ARCHITECT EXPERIENCE */}
        <section className="relative w-full overflow-hidden bg-fable-midnight">
          <CinematicSection />
        </section>

        {/* SECTION 3: 3D ATROPOS LIVE ECOSYSTEM SHOWCASE */}
        <section className="relative w-full overflow-hidden">
          <SystemsShowcase />
        </section>

        {/* SECTION 4: COMPLETE SOVEREIGN SYSTEMS CATALOG WITH CATEGORY TABS & ENLARGED MODAL */}
        <ProjectsSection />

        {/* SECTION 5: ASTRA AI FLAGSHIP DEEP DIVE */}
        <section id="astra-ai" className="page section-dark flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 md:px-12">
          <AstraAIPage />
        </section>

        {/* SECTION 6: CLOSING CREDENTIALS & DIRECT DISPATCH */}
        <section id="closing" className="page section-parchment parchment flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 md:px-12">
          <ClosingPage />
        </section>
      </main>

      {/* Sovereign Verified Badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden items-center gap-2 rounded-full border border-amber-400/30 bg-black/60 px-3.5 py-1.5 text-xs text-white/80 backdrop-blur-md no-print md:flex shadow-xl">
        <Lock className="h-3.5 w-3.5 text-amber-400" />
        <span className="font-cinzel tracking-wider text-[11px] font-bold text-amber-200">
          Staff / Lead Architect Portfolio
        </span>
      </div>
    </div>
  );
}

export default App;
