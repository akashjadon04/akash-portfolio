import { useState, useEffect, useCallback } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lock, Sparkles, GitBranch, Linkedin, Mail } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SystemsShowcase from "./components/SystemsShowcase";
import ProjectsSection from "./components/ProjectsSection";
import ProjectDetailPage from "./components/ProjectDetailPage";
import AstraAIPage from "./components/AstraAIPage";
import ClosingPage from "./components/ClosingPage";
import { NatureZenLeaf } from "./components/NatureGraphics";
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

  useEffect(() => {
    setMounted(true);

    // Initial check for deep-link project URL
    const initialProject = getProjectFromUrl();
    if (initialProject) {
      setCurrentProject(initialProject);
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const proj = getProjectFromUrl();
      setCurrentProject(proj);
    };
    window.addEventListener("popstate", handlePopState);

    // Initialize Lenis smooth scroll
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
      window.removeEventListener("popstate", handlePopState);
      gsap.ticker.remove(handleRaf);
      lenis.destroy();
    };
  }, [getProjectFromUrl]);

  // Navigate to dedicated project page
  const handleSelectProject = (project: Project) => {
    setCurrentProject(project);
    const url = new URL(window.location.href);
    url.searchParams.set("project", project.id);
    window.history.pushState(null, "", url.toString());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Return back to main catalog
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#fbfdfa] text-slate-900 selection:bg-emerald-200 selection:text-emerald-950">
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
          {/* 1. MINIMALIST LIGHT NATURE HERO SECTION */}
          <section id="hero" className="relative w-full overflow-hidden bg-[#fbfdfa]">
            <Hero />
          </section>

          {/* 2. 3D ATROPOS LIVE ECOSYSTEM SHOWCASE */}
          <section id="systems" className="relative w-full overflow-hidden">
            <SystemsShowcase onSelectProject={handleSelectProject} />
          </section>

          {/* 3. COMPLETE 13 SOVEREIGN SYSTEMS CATALOG */}
          <ProjectsSection onSelectProject={handleSelectProject} />

          {/* 4. ASTRA AI FLAGSHIP DEEP DIVE */}
          <section
            id="astra-ai"
            className="relative w-full bg-[#fbfdfa] py-20 sm:py-28 px-4 sm:px-6 md:px-12"
          >
            <AstraAIPage />
          </section>

          {/* 5. CLOSING CREDENTIALS & DIRECT DISPATCH */}
          <section id="closing" className="relative w-full">
            <ClosingPage />
          </section>
        </main>
      )}

      {/* Sovereign Verified Badge */}
      <div className="fixed bottom-4 left-4 z-40 hidden items-center gap-2 rounded-full border border-emerald-600/20 bg-white/90 px-3.5 py-1.5 text-xs text-slate-800 backdrop-blur-md no-print md:flex shadow-sm">
        <NatureZenLeaf className="h-3.5 w-3.5 text-emerald-700" />
        <span className="font-cinzel tracking-wider text-[11px] font-bold text-emerald-950">
          Staff / Lead Architect · Evolnex Digital
        </span>
      </div>
    </div>
  );
}
