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
      activeOffset: 35,
      shadowScale: 1.04,
      highlight: true,
      rotateXMax: 10,
      rotateYMax: 10,
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
    <div className="relative min-h-screen bg-[#070211] text-white font-sans antialiased selection:bg-amber-400 selection:text-fable-midnight">
      {/* Background ambient lighting */}
      <div className="bg-grid-theme fixed inset-0 z-0 pointer-events-none opacity-25" aria-hidden="true" />
      <div className="fixed top-20 right-10 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-[600px] h-[600px] bg-amber-400/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Sticky Project Header Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d051c]/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-amber-400 hover:text-fable-midnight hover:border-amber-400 px-3.5 py-1.5 text-xs font-cinzel font-bold text-stone-200 transition-all shadow-md group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Systems</span>
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs text-stone-400 font-mono">
              <span className="text-amber-400/80 font-cinzel font-bold">EVOLNEX.DIGITAL</span>
              <span>/</span>
              <span>{project.category}</span>
              <span>/</span>
              <span className="text-white font-semibold">{project.title}</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="/Akash_Jadon_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 hover:bg-amber-400 hover:text-fable-midnight px-3.5 py-1.5 text-xs font-cinzel font-bold text-amber-300 transition-all"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume (CV)</span>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 text-xs font-cinzel font-bold text-stone-200 transition-all"
            >
              <GitBranch className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Source Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-3.5 py-1.5 text-xs font-cinzel font-bold text-fable-midnight shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <span>Launch Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Project Breadcrumb & Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-400/10 px-3.5 py-1 text-xs font-cinzel font-bold text-amber-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            {project.category.toUpperCase()}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-400/30 bg-purple-900/20 px-3.5 py-1 text-xs font-inter font-semibold text-purple-200">
            <Building2 className="w-3.5 h-3.5 text-purple-300" />
            {project.role}
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-950/30 px-3 py-1 text-xs font-mono font-medium text-emerald-300">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
            Production Sovereign Fabric
          </span>
        </motion.div>

        {/* Project Title & High-Impact Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10"
        >
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="mt-4 font-inter text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed max-w-4xl">
            {project.tagline}
          </p>
        </motion.div>

        {/* 3D Visual Architecture Showcase Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-14"
        >
          <div ref={atroposRef} className="atropos w-full rounded-3xl overflow-hidden shadow-2xl">
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner relative rounded-3xl overflow-hidden border border-amber-400/30 bg-[#0d041c] p-4 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-[0_20px_60px_-15px_rgba(251,191,36,0.2)]">
                  {/* Visual Image / Diagram */}
                  <div
                    data-atropos-offset="-3"
                    className="relative w-full md:w-3/5 aspect-[16/10] rounded-2xl overflow-hidden bg-black/80 border border-white/10 flex items-center justify-center p-4 sm:p-6 shadow-inner group"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-bold text-amber-300">
                      <Server className="w-3.5 h-3.5 text-amber-400" />
                      <span>Evolnex Digital Sovereign Kernel</span>
                    </div>
                  </div>

                  {/* Quick Architectural Snapshot */}
                  <div data-atropos-offset="3" className="w-full md:w-2/5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest mb-3">
                        <Terminal className="w-4 h-4 text-amber-400" />
                        <span>Architectural Brief</span>
                      </div>
                      <p className="text-stone-300 text-sm sm:text-base font-inter leading-relaxed mb-6">
                        {project.architectureSummary}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-5 py-3 text-xs font-cinzel font-bold text-fable-midnight shadow-lg shadow-amber-500/25 transition-all hover:scale-105"
                      >
                        <GitBranch className="w-4 h-4" />
                        <span>Inspect Repository on GitHub</span>
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/40 bg-white/5 hover:bg-amber-400 hover:text-fable-midnight px-5 py-3 text-xs font-cinzel font-bold text-amber-300 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Launch Live Platform</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Telemetry Benchmarks Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
            <Zap className="w-4 h-4" />
            <span>Engine Telemetry & Benchmarks</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all hover:border-amber-400/40 hover:bg-white/[0.05]"
              >
                <div className="font-cinzel text-2xl sm:text-3xl font-black text-amber-400 mb-1">
                  {m.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-stone-200 font-bold mb-1 font-cinzel">
                  {m.label}
                </div>
                {m.detail && (
                  <div className="text-[11px] text-stone-400 font-inter leading-relaxed">
                    {m.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Deep Dive Core Breakdown Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Main 2-Column: How It Works & How We Engineered It */}
          <div className="lg:col-span-2 space-y-8">
            {/* 1. How It Works */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
                <Workflow className="w-4 h-4" />
                <span>System Dynamics & How It Works</span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                Operational Lifecycle & Execution Pipeline
              </h2>
              <p className="text-stone-300 font-inter text-sm sm:text-base leading-relaxed">
                {project.howItWorks}
              </p>
            </motion.div>

            {/* 2. How We Engineered It */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2.5 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
                <Cpu className="w-4 h-4" />
                <span>Engineering & Concurrency Architecture</span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                State Management, Concurrency & Fault Tolerance
              </h2>
              <p className="text-stone-300 font-inter text-sm sm:text-base leading-relaxed">
                {project.howWeEngineeredIt}
              </p>
            </motion.div>

            {/* 3. Evolnex Digital Contribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-400/10 via-purple-900/15 to-transparent p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-amber-500/5"
            >
              <div className="flex items-center gap-2.5 mb-4 text-xs font-cinzel font-bold text-amber-300 uppercase tracking-widest">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Evolnex Digital Architectural Contribution</span>
              </div>
              <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-white mb-4">
                Studio Leadership & Enterprise Delivery
              </h2>
              <p className="text-stone-200 font-inter text-sm sm:text-base leading-relaxed">
                {project.evolnexContribution}
              </p>
            </motion.div>
          </div>

          {/* Right Sidebar: Invariants, Key Capabilities & Stack */}
          <div className="space-y-8">
            {/* Core Invariants */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4" />
                <span>Core Invariants & Guarantees</span>
              </div>

              <div className="space-y-3">
                {project.invariants.map((inv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-stone-200 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{inv}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Key Capabilities */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-2 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  <span>Key Architectural Features</span>
                </div>

                <div className="space-y-2.5">
                  {project.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Technology Stack Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2 mb-4 text-xs font-cinzel font-bold text-amber-400 uppercase tracking-widest">
                <Code2 className="w-4 h-4" />
                <span>Technologies & Protocols</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-400/30 bg-purple-900/20 px-3 py-1 text-xs font-inter font-semibold text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Sequential Navigation Switcher (Prev / Next Project) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-white/10 py-8 mb-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Previous Project */}
          <button
            onClick={() => onSelectProject(prevProject)}
            className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-amber-400/40 p-4 transition-all text-left group"
          >
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 group-hover:text-amber-400 group-hover:border-amber-400 transition-all shrink-0">
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] uppercase font-cinzel font-bold text-amber-400/80">
                Previous System
              </div>
              <div className="text-base font-cinzel font-bold text-white truncate">
                {prevProject.title}
              </div>
              <div className="text-xs text-stone-400 font-inter truncate">
                {prevProject.category}
              </div>
            </div>
          </button>

          {/* Next Project */}
          <button
            onClick={() => onSelectProject(nextProject)}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 hover:border-amber-400/40 p-4 transition-all text-right group"
          >
            <div className="min-w-0 text-left md:text-right">
              <div className="text-[10px] uppercase font-cinzel font-bold text-amber-400/80">
                Next System
              </div>
              <div className="text-base font-cinzel font-bold text-white truncate">
                {nextProject.title}
              </div>
              <div className="text-xs text-stone-400 font-inter truncate">
                {nextProject.category}
              </div>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-stone-400 group-hover:text-amber-400 group-hover:border-amber-400 transition-all shrink-0">
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </motion.div>

        {/* Lead Architect Credentials & Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-amber-400/30 bg-gradient-to-br from-[#120626] to-[#0a0315] p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-400/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-cinzel font-bold text-amber-300 mb-4">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>EVOLNEX DIGITAL · LEAD SYSTEMS ARCHITECT</span>
            </span>

            <h3 className="font-cinzel text-2xl sm:text-4xl font-black text-white tracking-tight mb-3">
              Need a Sovereign System Architected?
            </h3>
            <p className="text-stone-300 font-inter text-sm sm:text-base leading-relaxed mb-8">
              Akash Jadon consults and leads high-impact architecture for distributed event pipelines, multi-agent runtimes, sovereign backends, and enterprise automation at Evolnex Digital.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/Akash_Jadon_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-6 py-3 font-cinzel font-bold text-xs text-fable-midnight shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (CV)</span>
              </a>

              <a
                href="mailto:contact@evolnex.digital"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/5 hover:bg-white/10 px-6 py-3 font-cinzel font-bold text-xs text-amber-300 transition-all"
              >
                <span>Dispatch Technical Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-cinzel font-bold text-xs text-stone-300 transition-all"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Catalog</span>
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
