import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Network, Bot, FileText, CheckCircle2 } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import { NatureTopography, NatureZenLeaf } from "./NatureGraphics";
import { sovereignProjects, type Project } from "../data/projectsData";

type Props = {
  onSelectProject?: (project: Project) => void;
};

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

export default function SystemsShowcase({ onSelectProject }: Props) {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

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
          activeOffset: 35,
          shadowScale: 1.04,
          highlight: true,
          rotateXMax: 12,
          rotateYMax: 12,
          shadow: true,
        });
        instances.push(inst);
      }
    });

    return () => {
      instances.forEach((inst) => inst.destroy());
    };
  }, []);

  const handleOpenDetail = (projectId: string) => {
    const found = sovereignProjects.find((p) => p.id === projectId);
    if (found && onSelectProject) {
      onSelectProject(found);
    }
  };

  return (
    <div
      id="showcase"
      className="relative w-full bg-[#f4f7f4] px-4 py-20 sm:py-28 md:px-8 lg:px-12 text-slate-900 font-sans overflow-hidden"
    >
      {/* Nature subtle topography & gentle ambient light orbs */}
      <NatureTopography className="opacity-30" />
      <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-sky-100/60 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-900 mb-3 shadow-sm"
          >
            <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-cinzel tracking-widest">FLAGSHIP SOVEREIGN PLATFORMS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900"
          >
            Mission-Critical{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-sky-700">
              Living Architectures
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 text-slate-600 font-inter text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            Distributed state synchronization engines, virtual-thread agent runtimes, and high-precision financial quoting systems built for continuous enterprise uptime.
          </motion.p>
        </div>

        {/* 3D Atropos Interactive Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-18">
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
                  className="atropos w-full rounded-3xl cursor-pointer flex-1"
                  onClick={() => handleOpenDetail(item.projectId)}
                >
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner rounded-3xl overflow-hidden border border-emerald-900/10 bg-white shadow-sm p-5 flex flex-col h-full transition duration-300 hover:border-emerald-600/30 hover:shadow-lg hover:shadow-emerald-950/5 group">
                        {/* 3D Visual Screenshot Container */}
                        <div
                          data-atropos-offset="-3"
                          className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 mb-4 flex items-center justify-center p-4"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />

                          {/* Top Floating Domain Badge */}
                          <div
                            data-atropos-offset="5"
                            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 px-3 py-1 text-[11px] font-bold text-emerald-800 shadow-sm"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>{item.domain}</span>
                          </div>

                          {/* Bottom Floating Title */}
                          <div
                            data-atropos-offset="3"
                            className="absolute bottom-3 left-3 right-3 z-20"
                          >
                            <span className="text-[10px] uppercase tracking-widest text-emerald-700 font-cinzel font-bold block mb-0.5">
                              {item.category}
                            </span>
                            <span className="text-base sm:text-lg font-cinzel font-bold text-slate-900">
                              {item.title}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div data-atropos-offset="2" className="flex-1 flex flex-col justify-between">
                          <p className="text-slate-600 text-xs sm:text-sm font-inter leading-relaxed mb-4">
                            {item.description}
                          </p>

                          <div className="space-y-1.5 mb-5">
                            {item.highlights.map((h, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                                handleOpenDetail(item.projectId);
                              }}
                              className="inline-flex items-center justify-center rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white px-3 py-2 text-xs font-cinzel font-bold transition shadow-sm"
                            >
                              <span>Read Case Study</span>
                            </button>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 px-3 py-2 text-xs font-cinzel font-bold text-slate-700 transition"
                            >
                              <span>Repo / Demo</span>
                              <ExternalLink className="w-3 h-3 text-slate-400" />
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
          className="rounded-3xl border border-emerald-900/10 bg-white p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center sm:text-left w-full md:w-auto">
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-emerald-800">99.99%</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-sky-800">13+</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Sovereign Repos</div>
            </div>
            <div>
              <div className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-orange-700">&lt;10ms</div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-medium">Tool Dispatch</div>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <a
              href="#projects"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-emerald-800 hover:bg-emerald-900 px-6 py-3 font-cinzel font-bold text-xs text-white shadow-sm transition hover:scale-105"
            >
              <span>Explore All 13 Sovereign Systems</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
