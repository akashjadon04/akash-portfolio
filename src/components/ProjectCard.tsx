import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Network, Bot, Cpu, Sparkles, CheckCircle2 } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import type { Project } from "../data/projectsData";

type Props = {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, index, onSelect }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop || !cardRef.current) return;

    const instance = Atropos({
      el: cardRef.current,
      activeOffset: 35,
      shadowScale: 1.04,
      highlight: true,
      rotateXMax: 12,
      rotateYMax: 12,
      shadow: true,
    });

    return () => {
      instance.destroy();
    };
  }, []);

  // Category thematic attributes (Nature + Next-Tech)
  const isAutomation = project.category === "Enterprise Automation";
  const isAgentic = project.category === "Agentic AI & Runtimes";

  const themeConfig = isAutomation
    ? {
        accent: "#15803d",
        accentLight: "#dcfce7",
        borderHover: "hover:border-emerald-500/50",
        shadowHover: "hover:shadow-emerald-950/10",
        badge: "bg-emerald-50 text-emerald-900 border-emerald-300/70",
        glow: "from-emerald-100/40 via-transparent to-transparent",
        dotColor: "bg-emerald-500",
        icon: Network,
      }
    : isAgentic
    ? {
        accent: "#0284c7",
        accentLight: "#e0f2fe",
        borderHover: "hover:border-sky-500/50",
        shadowHover: "hover:shadow-sky-950/10",
        badge: "bg-sky-50 text-sky-900 border-sky-300/70",
        glow: "from-sky-100/40 via-transparent to-transparent",
        dotColor: "bg-sky-500",
        icon: Bot,
      }
    : {
        accent: "#ea580c",
        accentLight: "#ffedd5",
        borderHover: "hover:border-orange-500/50",
        shadowHover: "hover:shadow-orange-950/10",
        badge: "bg-orange-50 text-orange-900 border-orange-300/70",
        glow: "from-orange-100/40 via-transparent to-transparent",
        dotColor: "bg-orange-500",
        icon: Sparkles,
      };

  const CategoryIcon = themeConfig.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="flex flex-col h-full"
    >
      <div
        ref={cardRef}
        onClick={() => onSelect(project)}
        className="atropos w-full rounded-3xl cursor-pointer flex-1 group"
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            {/* Main Ceramic Slate Card */}
            <div
              className={`atropos-inner rounded-3xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-white via-[#fcfdfc] to-[#f4f7f4] p-5 sm:p-6 flex flex-col h-full shadow-sm transition-all duration-300 ${themeConfig.borderHover} ${themeConfig.shadowHover} relative`}
            >
              {/* Subtle Ambient Theme Mesh Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${themeConfig.glow} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                aria-hidden="true"
              />

              {/* Card Header Specimen Bar */}
              <div
                data-atropos-offset="4"
                className="relative z-20 flex items-center justify-between mb-4"
              >
                {/* Specimen Index & Pulsing Diode */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/90 border border-slate-200/80 px-2.5 py-1 text-[10px] font-mono font-bold text-slate-700 shadow-sm backdrop-blur-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${themeConfig.dotColor} animate-pulse`} />
                  <span>SYS-{String(index + 1).padStart(2, "0")}</span>
                </div>

                {/* Category Pill with Thematic Icon */}
                <div
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold shadow-sm backdrop-blur-sm ${themeConfig.badge}`}
                >
                  <CategoryIcon className="w-3 h-3 shrink-0" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* 3D Visual Viewport & Blueprint Diagram */}
              <div
                data-atropos-offset="-2"
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50/90 border border-slate-200/80 mb-5 flex items-center justify-center p-3 group/banner"
              >
                {/* Subtle Grid Watermark */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:14px_14px]"
                  aria-hidden="true"
                />

                {/* System Image / SVG Architecture */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover/banner:scale-108"
                  loading="lazy"
                />

                {/* Floating Invariant Guarantee Badge at bottom of preview */}
                {project.invariants && project.invariants.length > 0 && (
                  <div
                    data-atropos-offset="5"
                    className="absolute bottom-2 left-2 right-2 z-20 hidden sm:flex items-center gap-1.5 rounded-xl bg-white/95 border border-slate-200 px-2.5 py-1 text-[10px] text-slate-700 shadow-sm backdrop-blur-md truncate"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span className="truncate font-mono font-medium">
                      {project.invariants[0]}
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Technical Role */}
              <div data-atropos-offset="3" className="relative z-10 mb-3">
                <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-slate-400 block mb-1">
                  {project.role.split("·")[0]}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-emerald-900 transition-colors tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Tagline Narrative */}
              <p
                data-atropos-offset="2"
                className="text-slate-600 text-xs sm:text-sm font-inter leading-relaxed line-clamp-2 mb-4 flex-1"
              >
                {project.tagline}
              </p>

              {/* Telemetry Indicator Strip */}
              <div
                data-atropos-offset="3"
                className="grid grid-cols-2 gap-2 mb-4 relative z-10"
              >
                {project.metrics.slice(0, 2).map((m, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-200/80 bg-white/90 p-2 text-center shadow-xs"
                  >
                    <div
                      className="font-cinzel text-sm sm:text-base font-bold leading-tight"
                      style={{ color: themeConfig.accent }}
                    >
                      {m.value}
                    </div>
                    <div className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold mt-0.5 truncate">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Micro Tech Stack Badges */}
              <div
                data-atropos-offset="2"
                className="flex flex-wrap gap-1.5 mb-5 relative z-10"
              >
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-200 bg-white/80 px-2 py-0.5 text-[10px] font-mono font-medium text-slate-700 shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="rounded-md border border-slate-200 bg-slate-100/70 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Card Action Link Bar */}
              <div
                data-atropos-offset="5"
                className="mt-auto pt-3 border-t border-slate-200/80 flex items-center justify-between relative z-10"
              >
                <span className="text-xs font-cinzel font-bold text-slate-800 group-hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5">
                  <span>Deep-Dive Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>

                <span className="text-[10px] font-mono text-slate-400 font-medium">
                  {project.metrics.length} Verified KPIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
