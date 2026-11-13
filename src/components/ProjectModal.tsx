import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ExternalLink, 
  GitBranch, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Sparkles,
  Server,
  Zap,
  Terminal
} from "lucide-react";
import type { Project } from "../data/projectsData";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop with intense blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-amber-400/40 bg-[#0d051c] shadow-[0_25px_60px_-15px_rgba(251,191,36,0.25)] overflow-hidden z-10"
        >
          {/* Subtle Radial Glow in Header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-amber-400/10 blur-[80px] pointer-events-none" />

          {/* Top Bar / Header */}
          <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4 bg-[#110724]/90 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300 font-cinzel">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {project.category.toUpperCase()}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-stone-400 font-inter">
                <Terminal className="w-3 h-3 text-amber-400/70" />
                {project.role}
              </span>
            </div>

            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full p-2 text-stone-400 hover:text-white hover:bg-white/10 transition border border-transparent hover:border-white/20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="overflow-y-auto px-6 py-6 md:px-8 space-y-6">
            {/* Title & Subtitle */}
            <div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                {project.title}
              </h2>
              <p className="mt-2 text-stone-300 font-inter text-sm sm:text-base leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Architecture Banner / Visual */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-amber-400/30 bg-black/60 shadow-inner group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain p-4 md:p-6 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* In-Image Status Pill */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-bold text-amber-300 shadow-xl">
                <Server className="w-3.5 h-3.5 text-amber-400" />
                <span>Production Fabric</span>
              </div>
            </div>

            {/* Performance Telemetry Grid */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                <Zap className="w-3.5 h-3.5" />
                <span>Engine Telemetry & Benchmarks</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-white/10 bg-white/5 p-3.5 text-center backdrop-blur-sm"
                  >
                    <div className="font-cinzel text-lg sm:text-xl font-black text-amber-400">
                      {m.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Architecture Overview */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                <Cpu className="w-3.5 h-3.5" />
                <span>Architectural Overview</span>
              </div>
              <p className="text-stone-300 text-sm font-inter leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            {/* Core Invariants & Fault Tolerance */}
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Core Invariants & Fault Tolerance</span>
              </div>
              <div className="space-y-2">
                {project.invariants.map((inv, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{inv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                <Layers className="w-3.5 h-3.5" />
                <span>Technologies & Protocols</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-purple-400/30 bg-purple-900/20 px-3 py-1 text-xs font-semibold text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="border-t border-white/10 px-6 py-4 bg-[#110724]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-5 py-2.5 text-xs font-cinzel font-bold text-fable-midnight shadow-lg shadow-amber-500/20 transition hover:scale-105"
              >
                <GitBranch className="w-4 h-4" />
                <span>View Source Code on GitHub</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400/40 bg-white/5 hover:bg-amber-400 hover:text-fable-midnight px-4 py-2.5 text-xs font-cinzel font-bold text-amber-300 transition"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Launch Live Platform</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-cinzel font-semibold text-stone-400 hover:text-white transition"
            >
              Close Inspector (Esc)
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
