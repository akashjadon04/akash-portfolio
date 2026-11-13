import { useState, useEffect, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, Sparkles, GitBranch, Linkedin, Mail } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CinematicSection from "./components/CinematicSection";
import SystemsShowcase from "./components/SystemsShowcase";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetailPage from "./components/ProjectDetailPage";
import AstraAIPage from "./components/AstraAIPage";
import ClosingPage from "./components/ClosingPage";
import Particles from "./components/Particles";
import { sovereignProjects, type Project } from "./data/projectsData";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);

  // Helper to resolve project ID from URL
  const getProjectFromUrl = useCallback((): Project | null => {
    if (typeof window === "undefined") return null;

    // Check query param e.g. ?project=tandem-flow
    const searchParams = new URLSearchParams(window.location.search);
    const projectIdFromQuery = searchParams.get("project");
    if (projectIdFromQuery) {
      const found = sovereignProjects.find((p) => p.id === projectIdFromQuery);
      if (found) return found;
    }

    // Check hash e.g. #project/tandem-flow
    const hash = window.location.hash;
    if (hash.startsWith("#project/")) {
      const projectIdFromHash = hash.replace("#project/", "");
      const found = sovereignProjects.find((p) => p.id === projectIdFromHash);
      if (found) return found;
    }

    return null;
  }, []);

  // Initialize URL routing & handle browser Back/Forward (popstate)
  useEffect(() => {
    setMounted(true);

    const initialProject = getProjectFromUrl();
    if (initialProject) {
      setCurrentProject(initialProject);
    }

    const handlePopState = () => {
      const project = getProjectFromUrl();
      setCurrentProject(project);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [getProjectFromUrl]);

  // Lenis Smooth Scroll Setup for main catalog
  useEffect(() => {
    if (currentProject) return;

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
  }, [currentProject]);

  // Open dedicated project deep dive page
  const handleSelectProject = (project: Project) => {
    setCurrentProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.id);
    url.hash = "";
    window.history.pushState({ projectId: project.id }, "", url.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Return from project page back to systems catalog
  const handleBackToCatalog = () => {
    setCurrentProject(null);
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.pushState(null, "", url.pathname);

    // Scroll smoothly to projects section
    setTimeout(() => {
      const projectsEl = document.getElementById("projects");
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#070211]">
      <Particles />

      {/* Floating Glassmorphic Header */}
      <Header
        activeProject={currentProject}
        onBackToCatalog={handleBackToCatalog}
      />

      {/* Conditional View: Dedicated Project Webpage OR Main Systems Portfolio */}
      {currentProject ? (
        <ProjectDetailPage
          project={currentProject}
          onBack={handleBackToCatalog}
          onSelectProject={handleSelectProject}
        />
      ) : (
        <main className="relative z-10">
          {/* 1. ATTENTION-COMMANDING HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-fable-midnight">
            <Hero />
          </section>

          {/* 2. CINEMATIC 3D SYSTEMS ARCHITECT EXPERIENCE */}
          <section className="relative w-full overflow-hidden bg-fable-midnight">
            <CinematicSection />
          </section>

          {/* 3. 3D ATROPOS LIVE ECOSYSTEM SHOWCASE */}
          <section className="relative w-full overflow-hidden">
            <SystemsShowcase onSelectProject={handleSelectProject} />
          </section>

          {/* 4. COMPLETE 13 SOVEREIGN SYSTEMS CATALOG */}
          <ProjectsSection onSelectProject={handleSelectProject} />

          {/* 5. ASTRA AI FLAGSHIP DEEP DIVE */}
          <section
            id="astra-ai"
            className="page section-dark flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 md:px-12"
          >
            <AstraAIPage />
          </section>

          {/* 6. CLOSING CREDENTIALS & DIRECT DISPATCH */}
          <section
            id="closing"
            className="page section-parchment parchment flex min-h-screen flex-col justify-center px-4 py-16 sm:px-6 md:px-12"
          >
            <ClosingPage />
          </section>
        </main>
      )}

      {/* Sovereign Verified Badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden items-center gap-2 rounded-full border border-amber-400/30 bg-black/75 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md no-print md:flex shadow-2xl">
        <Lock className="h-3.5 w-3.5 text-amber-400" />
        <span className="font-cinzel tracking-wider text-[11px] font-bold text-amber-200">
          Staff / Lead Architect · Evolnex Digital
        </span>
      </div>
    </div>
  );
}
