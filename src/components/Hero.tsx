import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FileDown,
  ArrowRight,
  Sparkles,
  Server,
  Zap,
  Cpu,
  Layers,
  ChevronDown,
  Radio,
  ExternalLink,
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const layers = containerRef.current?.querySelector("[data-parallax-layers]");
      if (!layers) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0.5,
        },
      });

      [
        { layer: "1", yPercent: 40 },
        { layer: "2", yPercent: 25 },
        { layer: "3", yPercent: 10 },
      ].forEach((config, idx) => {
        tl.to(
          layers.querySelectorAll(`[data-parallax-layer="${config.layer}"]`),
          { yPercent: config.yPercent, ease: "none", force3D: true },
          idx === 0 ? undefined : "<"
        );
      });

      // Gentle fade & drift out of hero foreground content on deep scroll
      if (contentRef.current) {
        tl.to(
          contentRef.current,
          {
            y: -100,
            opacity: 0.2,
            ease: "power1.in",
            force3D: true,
          },
          0
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-fable-midnight" ref={containerRef}>
      {/* Background Parallax Depth Canvas */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div data-parallax-layers className="relative w-full h-full">
          {/* Layer 1: Sky & Atmosphere */}
          <img
            src="/images/parallax/layer-sky.webp"
            loading="eager"
            data-parallax-layer="1"
            alt=""
            className="absolute inset-0 w-full h-[125%] -top-[20%] object-cover opacity-60 pointer-events-none"
          />

          {/* Layer 2: Mountain Ridge Silhouette */}
          <img
            src="/images/parallax/layer-mountains.webp"
            loading="eager"
            data-parallax-layer="2"
            alt=""
            className="absolute inset-0 w-full h-[120%] -top-[10%] object-cover opacity-50 pointer-events-none"
          />

          {/* Layer 3: Foreground Atmospheric Silhouette */}
          <img
            src="/images/parallax/layer-foreground.webp"
            loading="eager"
            data-parallax-layer="3"
            alt=""
            className="absolute inset-0 w-full h-[115%] -top-[5%] object-cover opacity-40 pointer-events-none"
          />
        </div>

        {/* Cinematic Vignette & Radial Glow */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#0f041e]/70 to-[#070110] pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-700/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[300px] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* Foreground Attention-Commanding Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-24 min-h-screen flex flex-col justify-center items-center text-center will-change-transform"
      >
        {/* Top Status & Role Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-[#16072b]/80 backdrop-blur-xl px-4 py-1.5 text-xs font-semibold text-amber-300 mb-6 sm:mb-8 shadow-xl shadow-amber-500/10 animate-in fade-in duration-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
          <span className="font-cinzel tracking-wider text-[11px] sm:text-xs font-bold text-amber-200">
            LEAD SYSTEMS, FULL-STACK & AGENTIC AI ARCHITECT
          </span>
          <span className="text-amber-400/50">·</span>
          <span className="font-mono text-[10px] text-amber-400 font-bold tracking-wider">
            EVOLNEX.DIGITAL
          </span>
        </div>

        {/* Master Headline */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mb-6">
          Architecting Sovereign Backends,{" "}
          <span className="gold-text block sm:inline">
            Distributed Runtimes & Autonomous AI.
          </span>
        </h1>

        {/* High-Impact Value Proposition / Positioning Statement */}
        <p className="font-inter text-base sm:text-lg md:text-xl text-stone-200/90 leading-relaxed max-w-3xl mb-8 sm:mb-10 font-normal">
          Engineering high-concurrency event telemetry, 246-node distributed state synchronization, multi-threaded JVM agent harnesses with 100+ Model Context Protocol (MCP) tools, and commercial Swiss fintech platforms with mathematical idempotency and zero tolerance for failure.
        </p>

        {/* Live KPI Stat Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl mb-10 sm:mb-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl text-center shadow-lg transition-transform hover:scale-105 hover:border-amber-400/40">
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-amber-400">13</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-300 font-bold mt-1 font-cinzel">
              Sovereign Systems
            </div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 font-inter mt-0.5">
              Production Repos
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl text-center shadow-lg transition-transform hover:scale-105 hover:border-amber-400/40">
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-white">246</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-300 font-bold mt-1 font-cinzel">
              Synced Nodes
            </div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 font-inter mt-0.5">
              Redis Mutex Mesh
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl text-center shadow-lg transition-transform hover:scale-105 hover:border-amber-400/40">
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-amber-400">&lt;10ms</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-300 font-bold mt-1 font-cinzel">
              MCP Tool Dispatch
            </div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 font-inter mt-0.5">
              JVM Virtual Threads
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl text-center shadow-lg transition-transform hover:scale-105 hover:border-amber-400/40">
            <div className="font-cinzel text-2xl sm:text-3xl font-black text-white">CHF 2.4M+</div>
            <div className="text-[10px] sm:text-xs uppercase tracking-wider text-stone-300 font-bold mt-1 font-cinzel">
              Quotes Processed
            </div>
            <div className="text-[9px] sm:text-[10px] text-stone-400 font-inter mt-0.5">
              Swiss VAT SaaS
            </div>
          </div>
        </div>

        {/* Primary Action Button Cluster */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          {/* Explore Sovereign Systems */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 px-7 py-3.5 font-cinzel font-black text-xs sm:text-sm text-fable-midnight shadow-xl shadow-amber-500/25 transition-all hover:scale-105"
          >
            <span>Explore Sovereign Systems</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* View / Download Resume (CV) */}
          <a
            href="/Akash_Jadon_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 hover:bg-amber-400 hover:text-fable-midnight px-6 py-3.5 font-cinzel font-bold text-xs sm:text-sm text-amber-300 transition-all hover:scale-105 shadow-lg"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume (CV)</span>
          </a>

          {/* Inspect Architecture */}
          <a
            href="#systems"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-cinzel font-semibold text-xs sm:text-sm text-white transition-all hover:border-white/30"
          >
            <Cpu className="w-4 h-4 text-amber-400" />
            <span>Inspect Architecture</span>
          </a>

          {/* Contact Architect */}
          <a
            href="#closing"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-6 py-3.5 font-cinzel font-semibold text-xs sm:text-sm text-stone-300 hover:text-white transition-all hover:border-white/30"
          >
            <span>Contact Lead Architect</span>
          </a>
        </div>

        {/* Core Architectural Stack Ticker */}
        <div className="w-full max-w-4xl pt-6 border-t border-white/10">
          <div className="text-[10px] font-cinzel uppercase tracking-[0.2em] text-stone-400 mb-3 font-bold">
            Core Production Architecture & Runtime Fabric
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {[
              "Java 21 Virtual Threads",
              "Model Context Protocol (MCP)",
              "Next.js 15 App Router",
              "FastAPI Asynchronous Gateway",
              "Distributed Redis Mutex (SETNX)",
              "PostgreSQL Row-Level Security",
              "Columnar ClickHouse & Parquet",
              "Go 1.22 Fiber",
              "LangGraph Agent DAGs",
              "WebContainers Sandbox",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-mono text-stone-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#systems"
          className="mt-12 inline-flex flex-col items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors group"
          aria-label="Scroll down to inspect systems architecture"
        >
          <span className="text-[10px] font-cinzel uppercase tracking-widest font-semibold">
            Scroll to Inspect Architecture
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-amber-400" />
        </a>
      </div>
    </div>
  );
}
