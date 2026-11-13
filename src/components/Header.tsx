import { useState, useEffect } from "react";
import {
  FileDown,
  GitBranch,
  Mail,
  Menu,
  X,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { NatureZenLeaf } from "./NatureGraphics";
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
      setScrolled(window.scrollY > 30);
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
            ? "border-emerald-900/15 bg-white/95 shadow-md shadow-emerald-950/5 backdrop-blur-xl"
            : "border-emerald-900/10 bg-white/85 shadow-sm backdrop-blur-md"
        }`}
      >
        {/* Left: Brand / Identity OR Back Button */}
        <div className="flex items-center gap-3 shrink-0">
          {activeProject ? (
            <button
              onClick={onBackToCatalog}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-700 hover:text-white px-3.5 py-1.5 text-xs font-cinzel font-bold text-emerald-900 transition-all shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Systems</span>
            </button>
          ) : (
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
                <NatureZenLeaf className="w-4 h-4 text-emerald-200" />
              </div>

              <div className="flex flex-col">
                <span className="font-cinzel text-xs sm:text-sm font-black tracking-widest text-slate-900 group-hover:text-emerald-800 transition-colors">
                  AKASH JADON
                </span>
                <span className="hidden sm:inline-block text-[9px] font-mono tracking-widest text-emerald-800 font-semibold uppercase">
                  EVOLNEX.DIGITAL
                </span>
              </div>
            </a>
          )}

          {/* Lead Architect Live Chip */}
          {!activeProject && (
            <div className="hidden lg:flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-mono text-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>LEAD ARCHITECT</span>
            </div>
          )}
        </div>

        {/* Center: Navigation Links (Desktop) */}
        {!activeProject && (
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs font-cinzel font-bold tracking-wider">
            <a
              href="#systems"
              className="text-slate-600 hover:text-emerald-800 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Architecture
            </a>
            <a
              href="#showcase"
              className="text-slate-600 hover:text-emerald-800 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Flagships
            </a>
            <a
              href="#projects"
              className="text-slate-600 hover:text-emerald-800 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              All Systems
            </a>
            <a
              href="#closing"
              className="text-slate-600 hover:text-emerald-800 transition-colors py-1 relative hover:scale-105 duration-200"
            >
              Contact
            </a>
          </nav>
        )}

        {/* Right: Actions (Resume + GitHub + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Resume Download / View Button */}
          <a
            href="/Akash_Jadon_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-900 border border-sky-200/80 px-3.5 py-1.5 text-xs font-cinzel font-bold tracking-wider shadow-sm transition-all hover:scale-105"
            title="Download Akash Jadon Resume (PDF)"
          >
            <FileDown className="w-3.5 h-3.5 text-sky-700" />
            <span className="hidden sm:inline">Resume</span>
            <span className="sm:hidden">CV</span>
          </a>

          {/* GitHub Profile Icon */}
          <a
            href="https://github.com/akashjadon04"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 hover:text-emerald-800 text-slate-700 transition shadow-sm"
            title="GitHub: @akashjadon04"
          >
            <GitBranch className="w-4 h-4" />
          </a>

          {/* Contact Dispatch Button */}
          <a
            href="#closing"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-1.5 text-xs font-cinzel font-bold tracking-wider shadow-sm transition hover:scale-105"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-white text-slate-800 hover:bg-emerald-50 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 p-5 rounded-3xl border border-emerald-900/15 bg-white/95 shadow-xl backdrop-blur-2xl animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3 font-cinzel font-bold text-sm text-slate-800">
            <a
              href="#systems"
              onClick={closeMenu}
              className="py-2 px-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              Architecture
            </a>
            <a
              href="#showcase"
              onClick={closeMenu}
              className="py-2 px-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              Flagships
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="py-2 px-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              Sovereign Systems
            </a>
            <a
              href="#closing"
              onClick={closeMenu}
              className="py-2 px-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-900 transition"
            >
              Contact
            </a>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a
                href="/Akash_Jadon_CV.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl bg-sky-50 text-sky-900 border border-sky-200 py-2.5 text-xs font-bold"
              >
                <FileDown className="w-4 h-4 text-sky-700" />
                <span>View Resume (PDF)</span>
              </a>

              <a
                href="https://github.com/akashjadon04"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-700"
              >
                <GitBranch className="w-4 h-4" />
                <span>GitHub: @akashjadon04</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
