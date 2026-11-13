import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import { NatureZenLeaf } from "./NatureGraphics";
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
      activeOffset: 30,
      shadowScale: 1.03,
      highlight: true,
      rotateXMax: 10,
      rotateYMax: 10,
      shadow: true,
    });

    return () => {
      instance.destroy();
    };
  }, []);

  // Category specific pastel badges
  const getCategoryBadgeClass = (category: string) => {
    if (category === "Enterprise Automation") {
      return "bg-emerald-50 text-emerald-900 border-emerald-200/80";
    }
    if (category === "Agentic AI & Runtimes") {
      return "bg-sky-50 text-sky-900 border-sky-200/80";
    }
    return "bg-orange-50 text-orange-900 border-orange-200/80";
  };

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
            <div className="atropos-inner rounded-3xl overflow-hidden border border-emerald-900/10 bg-white p-5 flex flex-col h-full shadow-sm transition duration-300 hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-950/5">
              {/* Banner Container */}
              <div
                data-atropos-offset="-3"
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 mb-5 flex items-center justify-center p-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Top Category Badge */}
                <div
                  data-atropos-offset="5"
                  className={`absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold shadow-sm backdrop-blur-md ${getCategoryBadgeClass(
                    project.category
                  )}`}
                >
                  <NatureZenLeaf className="w-3 h-3 text-emerald-700" />
                  <span>{project.category}</span>
                </div>

                {/* Top Right Expand Icon */}
                <div
                  data-atropos-offset="6"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 flex items-center justify-center text-slate-700 transition-transform group-hover:scale-110 group-hover:bg-emerald-800 group-hover:text-white shadow-sm"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Title in Banner */}
                <div
                  data-atropos-offset="3"
                  className="absolute bottom-3 left-4 right-4 z-20"
                >
                  <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-cinzel font-bold block mb-0.5">
                    {project.role.split("·")[0]}
                  </span>
                  <span className="text-lg sm:text-xl font-cinzel font-bold text-slate-900">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Card Content & Telemetry */}
              <div data-atropos-offset="2" className="flex-1 flex flex-col justify-between">
                <p className="text-slate-600 text-xs sm:text-sm font-inter leading-relaxed line-clamp-2 mb-4">
                  {project.tagline}
                </p>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-slate-200/80 bg-slate-50/70 p-2 text-center"
                    >
                      <div className="font-cinzel text-sm sm:text-base font-bold text-emerald-900">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-800">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Clickable Inspection Trigger */}
                <div className="w-full mt-auto inline-flex items-center justify-between rounded-xl bg-slate-50 group-hover:bg-emerald-800 group-hover:text-white border border-slate-200 group-hover:border-emerald-800 px-4 py-2.5 text-xs font-cinzel font-bold text-emerald-900 transition-all shadow-sm">
                  <span>Open Deep-Dive Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
