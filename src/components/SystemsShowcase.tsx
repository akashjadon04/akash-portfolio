import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ExternalLink, Cpu, Bot, Network, FileText, CheckCircle2 } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import ProjectModal from "./ProjectModal";
import { sovereignProjects, type Project } from "../data/projectsData";

const showcases = [
  {
    id: "tandem-flow",
    title: "TandemFlow",
    domain: "sync.evolnex.digital",
    href: "https://github.com/akashjadon04/tandem-flow",
    category: "Distributed State Synchronization",
    image: "/images/projects/tandem-flow.svg",
    icon: Network,
    description:
      "Enterprise 246-node bi-directional synchronization engine with distributed Redis mutex locks, SHA-256 delta diffing, and zero recursive webhook loop echoes.",
    highlights: ["246 Synced Execution Nodes", "Cryptographic Delta Diffing", "Zero-Echo Mutex Locking"],
    projectId: "tandem-flow",
  },
  {
    id: "bossconsole",
    title: "BossConsole",
    domain: "mcp.boss",
    href: "https://github.com/akashjadon04/BossConsole",
    category: "Agentic AI & MCP Runtime",
    image: "/images/projects/bossconsole.png",
    icon: Bot,
    description:
      "Open-source multi-threaded JVM harness for autonomous AI agents on Java 21 Virtual Threads, executing 100+ Model Context Protocol (MCP) sandboxed tools.",
    highlights: ["100+ MCP Tools Harness", "Java 21 Virtual Threads", "Sub-10ms Tool Execution"],
    projectId: "bossconsole",
  },
  {
    id: "astraquote",
    title: "AstraQuote / DevisBat",
    domain: "astraquote.com",
    href: "https://astraquote-site.vercel.app/",
    category: "Enterprise Quoting & Swiss VAT",
    image: "/images/projects/astraquote.png",
    icon: FileText,
    description:
      "Intelligent SaaS for Swiss general contractors converting plain audio and text descriptions into compliant PDF quotes with automated Swiss VAT (8.1%).",
    highlights: ["3-Tier LLM Cascade", "Automated Swiss VAT Engine", "Instant PDF Generation"],
    projectId: "astraquote",
  },
];

type Props = {
  onSelectProject?: (project: Project) => void;
};

export default function SystemsShowcase({ onSelectProject }: Props) {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  useEffect(() => {
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop) return;

    const refs = [card1Ref, card2Ref, card3Ref];
    const instances: any[] = [];

    refs.forEach((r) => {
      if (r.current) {
        const inst = Atropos({
          el: r.current,
          activeOffset: 45,
          shadowScale: 1.05,
          highlight: true,
          rotateXMax: 14,
          rotateYMax: 14,
          shadow: true,
        });
        instances.push(inst);
      }
    });

    return () => {
      instances.forEach((inst) => inst.destroy());
    };
  }, []);

  const handleProjectClick = (projectId: string) => {
    const found = sovereignProjects.find((p) => p.id === projectId);
    if (!found) return;

    if (onSelectProject) {
      onSelectProject(found);
    } else {
      setModalProject(found);
    }
  };

  return (
    <div
      id="showcase"
      className="relative w-full bg-gradient-to-b from-[#0b0416] via-[#110624] to-fable-midnight px-4 py-16 sm:py-24 md:px-8 lg:px-12 text-white font-sans overflow-hidden"
    >
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-300 mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-cinzel tracking-widest">LIVE ECOSYSTEM SHOWCASE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Flagship <span className="gold-text">Sovereign Platforms</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-stone-300 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Distributed state synchronization engines, virtual-thread agent runtimes, and high-precision financial quoting systems built for mission-critical loads.
          </motion.p>
        </div>

        {/* 3D Atropos Interactive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {showcases.map((item, idx) => {
            const ref = idx === 0 ? card1Ref : idx === 1 ? card2Ref : card3Ref;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="flex flex-col h-full"
              >
                <div 
                  ref={ref} 
                  className="atropos w-full rounded-2xl cursor-pointer flex-1"
                  onClick={() => handleProjectClick(item.projectId)}
                >
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner rounded-2xl overflow-hidden border border-white/10 bg-[#0e061c] shadow-2xl p-4 sm:p-5 flex flex-col h-full transition hover:border-amber-400/40 group">
                        {/* 3D Visual Screenshot Container */}
                        <div
                          data-atropos-offset="-4"
                          className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-4 flex items-center justify-center p-3"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                          {/* Top Floating Domain Badge */}
                          <div
                            data-atropos-offset="6"
                            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-bold text-amber-300 shadow-xl"
                          >
                            <Sparkles className="w-3 h-3 text-amber-400" />
                            <span>{item.domain}</span>
                          </div>

                          {/* Bottom Floating Title */}
                          <div
                            data-atropos-offset="4"
                            className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none"
                          >
                            <span className="text-[10px] uppercase tracking-widest text-amber-400 font-cinzel font-bold block mb-0.5">
                              {item.category}
                            </span>
                            <span className="text-base sm:text-lg font-cinzel font-bold text-white drop-shadow-md">
                              {item.title}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div data-atropos-offset="2" className="flex-1 flex flex-col justify-between">
                          <p className="text-stone-300 text-xs sm:text-sm font-inter leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className="space-y-1.5 mb-5">
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-stone-200">
                                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>

                          {/* Direct Action Links */}
                          <div className="grid grid-cols-2 gap-2 mt-auto">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleProjectClick(item.projectId);
                              }}
                              className="inline-flex items-center justify-center rounded-xl bg-amber-400 text-fable-midnight px-3 py-2 text-xs font-cinzel font-bold transition hover:bg-amber-300 shadow-md"
                            >
                              <span>Inspect Specs</span>
                            </button>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 text-xs font-cinzel font-bold text-amber-300 transition"
                            >
                              <span>Open</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Telemetry Bar & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center sm:text-left w-full md:w-auto">
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-amber-400">99.99%</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-white">13+</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Sovereign Builds</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-black text-amber-400">&lt;10ms</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-stone-400 font-medium">Tool Dispatch</div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href="#projects"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-6 py-3 font-cinzel font-bold text-xs text-fable-midnight shadow-lg shadow-amber-500/20 transition-all hover:scale-105"
            >
              <span>View All 13 Sovereign Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>

      <ProjectModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </div>
  );
}
