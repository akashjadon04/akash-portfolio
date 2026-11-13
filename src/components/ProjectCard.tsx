import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight, Cpu, Layers, GitBranch, CheckCircle2 } from "lucide-react";
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="flex flex-col h-full"
    >
      <div
        ref={cardRef}
        onClick={() => onSelect(project)}
        className="atropos w-full rounded-3xl cursor-pointer flex-1 group"
      >
        <div className="atropos-scale">
          <div className="atropos-rotate">
            <div className="atropos-inner rounded-3xl overflow-hidden border border-white/10 bg-[#0e061c]/90 shadow-2xl p-5 flex flex-col h-full transition duration-300 hover:border-amber-400/50 hover:shadow-[0_15px_35px_-10px_rgba(251,191,36,0.2)]">
              {/* Screenshot / Banner Container */}
              <div
                data-atropos-offset="-3"
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/70 border border-white/10 mb-5 flex items-center justify-center p-4"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Top Category Badge */}
                <div
                  data-atropos-offset="5"
                  className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-amber-300 shadow-xl"
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{project.category}</span>
                </div>

                {/* Top Right Expand Icon */}
                <div
                  data-atropos-offset="6"
                  className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 transition-transform group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-fable-midnight shadow-lg"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Title in Banner */}
                <div
                  data-atropos-offset="3"
                  className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none"
                >
                  <span className="text-[10px] uppercase tracking-widest text-amber-400/90 font-cinzel font-bold block mb-0.5">
                    {project.role.split("·")[0]}
                  </span>
                  <span className="text-lg sm:text-xl font-cinzel font-bold text-white drop-shadow-md">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Card Content & Telemetry */}
              <div data-atropos-offset="2" className="flex-1 flex flex-col justify-between">
                <p className="text-stone-300 text-xs sm:text-sm font-inter leading-relaxed line-clamp-2 mb-4">
                  {project.tagline}
                </p>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {project.metrics.slice(0, 2).map((m, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/5 bg-white/[0.03] p-2.5 text-center"
                    >
                      <div className="font-cinzel text-sm sm:text-base font-bold text-amber-400">
                        {m.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">
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
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-stone-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] font-medium text-amber-300">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Clickable Inspection Trigger */}
                <div className="w-full mt-auto inline-flex items-center justify-between rounded-xl bg-white/5 group-hover:bg-amber-400 group-hover:text-fable-midnight border border-white/10 group-hover:border-amber-400 px-4 py-2.5 text-xs font-cinzel font-bold text-amber-300 transition-all shadow-md">
                  <span>Inspect Architecture</span>
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
