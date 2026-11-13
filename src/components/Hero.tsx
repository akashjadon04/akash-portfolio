import { motion } from "framer-motion";
import { ArrowRight, FileDown, ArrowDown, Sparkles } from "lucide-react";
import { NatureTopography, NatureZenLeaf, NatureSunHorizon, NatureOrganicBranch } from "./NatureGraphics";

export default function Hero() {
  return (
    <div className="relative w-full min-h-[92vh] flex flex-col justify-center items-center overflow-hidden bg-[#fbfdfa] text-slate-900 pt-28 pb-16 sm:pt-36 sm:pb-20">
      {/* 1. Subtle Calming Ambient Glows (Sage Green, Light Sky Blue, Soft Sunrise Orange) */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-orange-100/30 rounded-full blur-[120px] pointer-events-none" />

      {/* 2. Minimalist Topographic Contour Lines */}
      <NatureTopography className="opacity-40" />

      {/* 3. Zen Sun Horizon Arc (Centered Behind Headline) */}
      <NatureSunHorizon className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]" />

      {/* 4. Elegant Minimalist Botanical Branch Graphic on the side */}
      <div className="hidden lg:block absolute left-8 xl:left-16 bottom-16 opacity-60 pointer-events-none">
        <NatureOrganicBranch className="w-24 h-36" />
      </div>
      <div className="hidden lg:block absolute right-8 xl:right-16 top-32 opacity-40 pointer-events-none scale-x-[-1]">
        <NatureOrganicBranch className="w-20 h-32" />
      </div>

      {/* 5. Minimalist Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Calming Role Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50/80 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-emerald-900 mb-6 shadow-sm"
        >
          <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
          <span className="font-cinzel tracking-wider text-[11px] sm:text-xs font-bold">
            AKASH JADON · LEAD SYSTEMS ARCHITECT
          </span>
          <span className="text-emerald-400">·</span>
          <span className="font-mono text-[10px] text-emerald-700 font-bold uppercase tracking-wider">
            EVOLNEX.DIGITAL
          </span>
        </motion.div>

        {/* Striking Minimalist Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-cinzel text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
        >
          Sovereign Systems{" "}
          <span className="block mt-1 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-sky-700 to-orange-600">
            & Living Code.
          </span>
        </motion.h1>

        {/* Refined 2-Line Narrative Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-inter text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
        >
          Designing 246-node bi-directional state synchronization engines, multi-threaded JVM agent harnesses with 100+ MCP tools, and sovereign full-stack cloud software with calm mathematical precision.
        </motion.p>

        {/* Minimalist Action Pill Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14"
        >
          {/* Primary CTA: Explore Systems */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-7 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-md shadow-emerald-900/15 transition-all hover:scale-105"
          >
            <span>Explore Systems</span>
            <ArrowRight className="w-4 h-4 text-emerald-200" />
          </a>

          {/* Secondary CTA: Download Resume (CV) */}
          <a
            href="/Akash_Jadon_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50/70 hover:bg-sky-100/90 text-sky-900 px-6 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider shadow-sm transition-all hover:scale-105"
          >
            <FileDown className="w-4 h-4 text-sky-700" />
            <span>Download Resume (CV)</span>
          </a>

          {/* Tertiary CTA: Contact */}
          <a
            href="#closing"
            className="inline-flex items-center gap-1.5 rounded-full border border-orange-300/60 bg-orange-50/50 hover:bg-orange-100/80 text-orange-950 px-6 py-3.5 font-cinzel font-bold text-xs sm:text-sm tracking-wider transition-all hover:scale-105"
          >
            <span>Get in Touch</span>
          </a>
        </motion.div>

        {/* Minimalist Stat Whispers (Clean single line with breathing room) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-slate-500 font-inter py-3 px-6 rounded-full bg-white/70 border border-slate-200/60 shadow-sm backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-slate-800">246 Synced Nodes</span>
            <span className="text-slate-400 font-mono text-[11px]">(TandemFlow)</span>
          </div>

          <span className="hidden sm:inline text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            <span className="font-semibold text-slate-800">100+ MCP Tools</span>
            <span className="text-slate-400 font-mono text-[11px]">(BossConsole)</span>
          </div>

          <span className="hidden sm:inline text-slate-300">·</span>

          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            <span className="font-semibold text-slate-800">CHF 2.4M+ Processed</span>
            <span className="text-slate-400 font-mono text-[11px]">(Swiss VAT SaaS)</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Hint */}
      <a
        href="#systems"
        className="mt-10 inline-flex items-center gap-1.5 text-[11px] font-cinzel tracking-widest text-slate-400 hover:text-emerald-800 transition-colors"
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-emerald-600 animate-bounce" />
      </a>
    </div>
  );
}
