import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layers, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { NatureTopography, NatureZenLeaf } from "./NatureGraphics";
import { sovereignProjects, type Project, type ProjectCategory } from "../data/projectsData";

type CategoryTab = "All" | ProjectCategory;

const categories: { label: CategoryTab; count: number }[] = [
  { label: "All", count: sovereignProjects.length },
  {
    label: "Enterprise Automation",
    count: sovereignProjects.filter((p) => p.category === "Enterprise Automation").length,
  },
  {
    label: "Agentic AI & Runtimes",
    count: sovereignProjects.filter((p) => p.category === "Agentic AI & Runtimes").length,
  },
  {
    label: "Sovereign SaaS & Platforms",
    count: sovereignProjects.filter((p) => p.category === "Sovereign SaaS & Platforms").length,
  },
];

type Props = {
  onSelectProject?: (project: Project) => void;
};

export default function ProjectsSection({ onSelectProject }: Props) {
  const [activeTab, setActiveTab] = useState<CategoryTab>("All");

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return sovereignProjects;
    return sovereignProjects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="projects"
      className="relative w-full bg-[#fbfdfa] px-4 py-20 sm:py-28 md:px-8 lg:px-12 text-slate-900 font-sans overflow-hidden"
    >
      {/* Background accents */}
      <NatureTopography className="opacity-30" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-900 mb-4 shadow-sm"
          >
            <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-cinzel tracking-widest">SOVEREIGN SYSTEMS REPOSITORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Engineered For{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-sky-700 to-orange-600">
              Autonomous Scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-slate-600 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Explore sovereign distributed state engines, multi-agent LLM harnesses, and resilient SaaS fabrics built with zero-tolerance for failure.
          </motion.p>
        </div>

        {/* Filter Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12 sm:mb-16"
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`flex items-center gap-2 rounded-full px-4 sm:px-5 py-2 text-xs font-cinzel font-bold transition-all ${
                  isActive
                    ? "bg-emerald-800 text-white shadow-sm border border-emerald-800 scale-105"
                    : "bg-white text-slate-700 hover:text-emerald-900 hover:bg-emerald-50/60 border border-slate-200/90 shadow-sm"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Interactive Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={(p) => {
                if (onSelectProject) onSelectProject(p);
              }}
            />
          ))}
        </div>

        {/* Engineering Rigor Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left w-full md:w-auto">
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-emerald-800">13</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Sovereign Repos</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-sky-800">246</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Synced Nodes</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-orange-700">&lt;10ms</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">MCP Tool Dispatch</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-slate-800">100%</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Idempotent</div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href="https://github.com/akashjadon04"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 hover:bg-emerald-900 px-6 py-3 font-cinzel font-bold text-xs text-white shadow-sm transition-all hover:scale-105"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
