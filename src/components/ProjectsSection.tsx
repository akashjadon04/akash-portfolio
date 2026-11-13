import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layers, Bot, Cpu, Network, ShieldCheck, Sparkles, Filter, FileDown } from "lucide-react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
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
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return sovereignProjects;
    return sovereignProjects.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const handleCardClick = (project: Project) => {
    if (onSelectProject) {
      onSelectProject(project);
    } else {
      setModalProject(project);
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-gradient-to-b from-fable-midnight via-[#0b0318] to-[#120524] px-4 py-20 sm:py-28 md:px-8 lg:px-12 text-white font-sans overflow-hidden"
    >
      {/* Background accents */}
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-30" aria-hidden="true" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 mb-4"
          >
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-cinzel tracking-widest">SOVEREIGN SYSTEMS REPOSITORY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Engineered For <span className="gold-text">Autonomous Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-stone-300 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Explore sovereign distributed state engines, multi-agent LLM harnesses, and resilient SaaS fabrics built with zero-tolerance for failure. Click on any system for full deep-dive architectural specifications.
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
                    ? "bg-amber-400 text-fable-midnight shadow-lg shadow-amber-500/25 scale-105 border border-amber-400"
                    : "bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${
                    isActive ? "bg-fable-midnight/20 text-fable-midnight" : "bg-white/10 text-stone-400"
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
              onSelect={handleCardClick}
            />
          ))}
        </div>

        {/* Engineering Rigor Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center sm:text-left w-full md:w-auto">
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-amber-400">13</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Sovereign Repos</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-white">246</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Synced Nodes</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-amber-400">&lt;10ms</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">MCP Tool Dispatch</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-white">100%</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Idempotent</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="/Akash_Jadon_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-fable-midnight px-5 py-3 font-cinzel font-bold text-xs text-amber-300 transition-all hover:scale-105"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (CV)</span>
            </a>

            <a
              href="https://github.com/akashjadon04"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-6 py-3 font-cinzel font-bold text-xs text-fable-midnight shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>Explore GitHub Organizations</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Fallback Modal */}
      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
