import { motion } from "framer-motion";
import { ArrowRight, FileDown, Sparkles } from "lucide-react";
import {
  NatureTopography,
  NatureZenLeaf,
  BioDigitalSunCore,
  LivingBranchConnector,
} from "./NatureGraphics";

interface HeroProps {
  onSelectProject?: (id: string) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  return (
    <div className="relative w-full min-h-[95vh] flex flex-col justify-between overflow-hidden bg-[#fbfdfa] text-slate-900 pt-28 sm:pt-36">
      {/* 1. Subtle Calming Ambient Glows (Sage Green, Sky Blue, Solar Amber) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Minimalist Topographic Elevation Contours */}
      <NatureTopography className="opacity-35" />

      {/* 3. Hero Content Grid: Editorial Intelligence (Left) & Bio-Digital Sun Core (Right) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Authoritative Editorial Positioning */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Calming Role Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-50/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-emerald-900 mb-6 shadow-sm">
              <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-cinzel tracking-wider text-[11px] sm:text-xs font-bold">
                AKASH JADON · LEAD SYSTEMS ARCHITECT
              </span>
              <span className="text-emerald-400">·</span>
              <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
                EVOLNEX.DIGITAL
              </span>
            </div>

            {/* Master Headline: Living Code & Sovereign Systems */}
            <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.08] mb-6">
              Autonomous Systems &{" "}
              <span className="block mt-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-sky-700 to-orange-600">
                Living Code.
              </span>
            </h1>

            {/* Engaging Technical Narrative */}
            <p className="font-inter text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Synthesizing biophilic organic resilience with high-throughput distributed engineering: 246-node state synchronization meshes, 100+ MCP tool JVM agent harnesses, and sovereign full-stack cloud software crafted with calm mathematical precision.
            </p>

            {/* Tactile Action Button Cluster */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
              {/* Primary CTA */}
              <a
                href="#cinematic"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-md shadow-emerald-900/15 transition-all hover:scale-105"
              >
                <span>Explore Systems</span>
                <ArrowRight className="w-4 h-4 text-emerald-200" />
              </a>

              {/* Download Resume (CV) */}
              <a
                href="/Akash_Jadon_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50/70 hover:bg-sky-100/90 text-sky-900 px-6 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-sm transition-all hover:scale-105"
              >
                <FileDown className="w-4 h-4 text-sky-700" />
                <span>Download Resume (CV)</span>
              </a>

              {/* Contact Dispatch */}
              <a
                href="#closing"
                className="inline-flex items-center gap-1.5 rounded-full border border-orange-300/60 bg-orange-50/50 hover:bg-orange-100/80 text-orange-950 px-6 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider transition-all hover:scale-105"
              >
                <span>Direct Contact</span>
              </a>
            </div>

            {/* Telemetry Whispers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs text-slate-500 font-inter py-2.5 px-5 rounded-full bg-white/70 border border-slate-200/60 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-800">246 Synced Nodes</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span className="font-semibold text-slate-800">100+ MCP Tools JVM</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="font-semibold text-slate-800">13 Sovereign Systems</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Living Bio-Digital Sun Core Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <BioDigitalSunCore onSelectProject={onSelectProject} />
          </motion.div>
        </div>
      </div>

      {/* 4. Living Green Branches Weaving into Section 2 */}
      <div className="relative w-full z-10 pt-4">
        <LivingBranchConnector className="h-28 sm:h-36" />
      </div>
    </div>
  );
}
