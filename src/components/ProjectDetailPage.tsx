import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  GitBranch,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Layers,
  Sparkles,
  Server,
  Zap,
  Terminal,
  FileDown,
  Building2,
  Workflow,
  Radio,
  Clock,
  Code2,
} from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import { NatureTopography, NatureZenLeaf } from "./NatureGraphics";
import { sovereignProjects, type Project } from "../data/projectsData";

type Props = {
  project: Project;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
};

export default function ProjectDetailPage({ project, onBack, onSelectProject }: Props) {
  const atroposRef = useRef<HTMLDivElement>(null);

  // Scroll to top on mount or when project changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [project.id]);

  // 3D Atropos effect on banner
  useEffect(() => {
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop || !atroposRef.current) return;

    const instance = Atropos({
      el: atroposRef.current,
      activeOffset: 30,
      shadowScale: 1.03,
      highlight: true,
      rotateXMax: 8,
      rotateYMax: 8,
      shadow: true,
    });

    return () => {
      instance.destroy();
    };
  }, [project.id]);

  // Find previous and next project for sequential navigation
  const currentIndex = sovereignProjects.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? sovereignProjects[currentIndex - 1] : sovereignProjects[sovereignProjects.length - 1];
  const nextProject =
    currentIndex < sovereignProjects.length - 1 ? sovereignProjects[currentIndex + 1] : sovereignProjects[0];

  return (
    <div className="relative min-h-screen bg-[#fbfdfa] text-slate-900 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
      {/* Background ambient lighting */}
      <NatureTopography className="opacity-25" />
      <div className="fixed top-20 right-10 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-[500px] h-[500px] bg-sky-100/40 rounded-full blur-[150px] pointer-events-none" />

      {/* Sticky Project Header Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-800 hover:text-white px-3.5 py-1.5 text-xs font-cinzel font-bold text-emerald-900 transition-all shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Systems</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="text-emerald-800 font-cinzel font-bold">EVOLNEX.DIGITAL</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>/</span>
              <span className="text-slate-900 font-semibold">{project.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white hover:bg-emerald-50 px-3.5 py-1.5 text-xs font-cinzel font-bold text-slate-800 transition shadow-sm"
            >
              <GitBranch className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-emerald-800 hover:bg-emerald-900 px-3.5 py-1.5 text-xs font-cinzel font-bold text-white transition shadow-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Launch Platform</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Case Study Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Title, Category & Role Badge */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 font-cinzel">
              <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
              {project.category.toUpperCase()}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 font-inter shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-emerald-700" />
              {project.role}
            </span>
          </div>

          <h1 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            {project.title}
          </h1>

          <p className="font-inter text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* 3D Visual Architecture Showcase Banner */}
        <div ref={atroposRef} className="atropos w-full rounded-3xl cursor-pointer">
          <div className="atropos-scale">
            <div className="atropos-rotate">
              <div className="atropos-inner rounded-3xl overflow-hidden border border-emerald-900/10 bg-white shadow-sm p-4 sm:p-6 transition hover:shadow-lg">
                <div
                  data-atropos-offset="-2"
                  className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-6"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain"
                  />

                  {/* Corner Badge */}
                  <div
                    data-atropos-offset="5"
                    className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1 text-xs font-bold text-emerald-900 shadow-sm"
                  >
                    <Server className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Evolnex Digital Sovereign Kernel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telemetry Benchmarks */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-800 font-cinzel font-bold">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Production Telemetry & Performance Benchmarks</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-emerald-900/10 bg-white p-4 text-center shadow-sm"
              >
                <div className="font-cinzel text-xl sm:text-2xl font-bold text-emerald-800">
                  {m.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Case Study Sections */}
        <div className="grid gap-8">
          {/* 1. Architectural Summary */}
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-emerald-800 font-cinzel font-bold">
              <Cpu className="w-4 h-4 text-emerald-600" />
              <span>System Architecture & Engineering Dynamics</span>
            </div>
            <p className="font-inter text-slate-700 text-sm sm:text-base leading-relaxed">
              {project.architectureSummary}
            </p>
          </div>

          {/* 2. Evolnex Digital Contribution */}
          {project.evolnexContribution && (
            <div className="rounded-3xl border border-emerald-600/30 bg-emerald-50/50 p-6 sm:p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-emerald-900 font-cinzel font-bold">
                <Building2 className="w-4 h-4 text-emerald-700" />
                <span>Evolnex Digital Engineering Contribution</span>
              </div>
              <p className="font-inter text-emerald-950 text-sm sm:text-base leading-relaxed">
                {project.evolnexContribution}
              </p>
            </div>
          )}

          {/* 3. Core Invariants & Fault Tolerance */}
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-emerald-800 font-cinzel font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Core Invariants & Fault Tolerance Guarantees</span>
            </div>
            <div className="space-y-2.5">
              {project.invariants.map((inv, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3.5 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{inv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Technologies & Protocols */}
          <div className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 text-xs uppercase tracking-widest text-emerald-800 font-cinzel font-bold">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Technologies, Protocols & Core Stack</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sequential Navigation Footer */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="w-full sm:w-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-cinzel font-bold text-slate-700 transition shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous: {prevProject.title}</span>
          </button>

          <button
            onClick={onBack}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-2.5 text-xs font-cinzel font-bold transition shadow-sm"
          >
            <span>Back to All Systems</span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="w-full sm:w-auto inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 px-5 py-2.5 text-xs font-cinzel font-bold text-slate-700 transition shadow-sm"
          >
            <span>Next: {nextProject.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </main>
    </div>
  );
}
