import { useState, useEffect } from "react";
import {
  FileDown,
  GitBranch,
  Mail,
  Menu,
  X,
  Sparkles,
  ArrowLeft,
  Terminal,
  ExternalLink,
} from "lucide-react";
import type { Project } from "../data/projectsData";

type Props = {
  activeProject?: Project | null;
  onBackToCatalog?: () => void;
};

export default function Header({ activeProject, onBackToCatalog }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 md:px-8 max-w-7xl mx-auto pointer-events-none no-print">
      <div
        className={`pointer-events-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-amber-400/30 bg-[#0d051c]/90 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(251,191,36,0.15)] backdrop-blur-xl"
            : "border-white/10 bg-[#0d051c]/75 shadow-xl backdrop-blur-md"
        }`}
      >
        {/* Left: Brand / Identity OR Back Button */}
        <div className="flex items-center gap-3 shrink-0">
          {activeProject ? (
            <button
              onClick={onBackToCatalog}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-fable-midnight px-3 py-1.5 text-xs font-cinzel font-bold text-amber-300 transition-all shadow-md group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Systems</span>
            </button>
          ) : (
            <a
              href="#"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-700 via-amber-400 to-amber-200 p-[1.5px] shadow-md group-hover:scale-105 transition-transform">
                <div className="w-full h-full rounded-full bg-[#0d051c] flex items-center justify-center">
                  <span className="font-cinzel font-black text-xs text-amber-300 tracking-wider">
                    AJ
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-xs sm:text-sm font-black tracking-widest text-white group-hover:text-amber-300 transition-colors">
                  AKASH JADON
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-amber-400/90 font-semibold uppercase">
                  EVOLNEX.DIGITAL
                </span>
              </div>
            </a>
          )}

          {/* Evolnex Digital Live Chip */}
          {!activeProject && (
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-2.5 py-0.5 text-[10px] font-mono text-emerald-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>LEAD ARCHITECT</span>
            </div>
          )}
        </div>

        {/* Center: Navigation Links (Desktop) */}
        {!activeProject && (
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-cinzel font-bold tracking-wider">
            <a
              href="#systems"
              className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Architecture
            </a>
            <a
              href="#showcase"
              className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Ecosystem
            </a>
            <a
              href="#projects"
              className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Sovereign Systems
            </a>
            <a
              href="#astra-ai"
              className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Flagship
            </a>
            <a
              href="#closing"
              className="text-stone-300 hover:text-amber-300 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Contact
            </a>
          </nav>
        )}

        {/* Right: Actions (Resume, Socials, Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Prominent Resume (CV) Button */}
          <a
            href="/Akash_Jadon_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-fable-midnight px-3.5 sm:px-4 py-1.5 text-xs font-cinzel font-black shadow-md shadow-amber-500/20 transition-all hover:scale-105"
            title="Open or Download Akash Jadon's verified CV"
          >
            <FileDown className="w-3.5 h-3.5 stroke-[2.5]" />
            <span className="hidden xs:inline">Resume</span>
            <span className="xs:hidden">CV</span>
          </a>

          {/* GitHub Icon Link */}
          <a
            href="https://github.com/akashjadon04"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <GitBranch className="w-4 h-4 text-amber-300" />
          </a>

          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/akashjadon/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-4 fill-amber-300" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
            </svg>
          </a>

          {/* Direct Contact Button */}
          {!activeProject && (
            <a
              href="#closing"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white px-3.5 py-1.5 text-xs font-cinzel font-bold transition-all hover:border-amber-400/50"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>Contact</span>
            </a>
          )}

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-stone-300 hover:text-white transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 rounded-3xl border border-amber-400/30 bg-[#0e061c]/95 backdrop-blur-2xl shadow-2xl p-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex flex-col">
              <span className="font-cinzel text-sm font-bold text-white">AKASH JADON</span>
              <span className="text-[10px] font-mono text-amber-400">EVOLNEX DIGITAL</span>
            </div>
            <span className="rounded-full bg-emerald-950/60 border border-emerald-400/30 px-2 py-0.5 text-[9px] font-mono text-emerald-300">
              Lead Architect
            </span>
          </div>

          <nav className="flex flex-col space-y-3 font-cinzel text-sm font-bold">
            <a
              href="#systems"
              onClick={closeMenu}
              className="text-stone-300 hover:text-amber-300 transition py-1"
            >
              System Architecture
            </a>
            <a
              href="#showcase"
              onClick={closeMenu}
              className="text-stone-300 hover:text-amber-300 transition py-1"
            >
              Flagship Ecosystem
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="text-stone-300 hover:text-amber-300 transition py-1"
            >
              13 Sovereign Systems
            </a>
            <a
              href="#astra-ai"
              onClick={closeMenu}
              className="text-stone-300 hover:text-amber-300 transition py-1"
            >
              Astra AI Flagship
            </a>
            <a
              href="#closing"
              onClick={closeMenu}
              className="text-stone-300 hover:text-amber-300 transition py-1"
            >
              Contact Architect
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <a
              href="/Akash_Jadon_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 py-2.5 font-cinzel font-bold text-xs text-fable-midnight shadow-md shadow-amber-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Full Resume (CV)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://github.com/akashjadon04"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-cinzel text-stone-300 hover:text-white"
              >
                <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/akashjadon/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-cinzel text-stone-300 hover:text-white"
              >
                <svg className="w-3.5 h-3.5 fill-amber-400" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
