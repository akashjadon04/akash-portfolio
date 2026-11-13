import { motion } from "framer-motion";
import { Mail, GitBranch, Phone, Sparkles, Terminal, Globe } from "lucide-react";

export default function ClosingPage() {
  return (
    <div className="mx-auto w-full max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-fable-purple/30 bg-fable-purple/10 px-4 py-1.5 text-sm font-medium text-fable-purple">
          <Sparkles className="h-4 w-4" />
          <span className="font-cinzel tracking-widest">MISSION-CRITICAL SOVEREIGN ARCHITECTURE</span>
        </div>

        <h2 className="font-cinzel text-4xl font-bold text-fable-midnight md:text-6xl">
          Engineered for Resilience & Scale.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl font-cormorant text-2xl italic leading-relaxed text-amber-900/80 md:text-3xl">
          From 246-node distributed state synchronization to multi-threaded JVM agent harnesses and zero-leak LLM runtimes, every system is crafted with mathematical idempotency and enterprise-grade fault tolerance.
        </p>

        {/* Lead Architect Credentials Box */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-amber-600/30 bg-amber-50/90 p-6 md:p-8 text-left shadow-lg">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5 font-cinzel text-lg font-bold text-amber-950">
              <Terminal className="h-5 w-5 text-amber-800" />
              <span>Akash Jadon · Lead Systems & Automation Architect</span>
            </div>
            <span className="hidden sm:inline-block rounded-full bg-amber-200/60 px-3 py-1 text-xs font-semibold text-amber-900 font-cinzel">
              Evolvix Technology
            </span>
          </div>
          <p className="font-inter text-sm md:text-base leading-relaxed text-stone-800">
            Delivering sovereign backend fabrics, autonomous agent DAG orchestrators, high-concurrency event telemetry, and production Make.com / n8n enterprise workflows for global clients and high-velocity engineering teams.
          </p>
        </div>

        {/* Direct Contact Cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <a
            href="mailto:evolvixtechnology@gmail.com"
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-fable-purple/20 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-fable-purple/50 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fable-purple to-fable-royal text-white shadow-md">
              <Mail className="h-5 w-5" />
            </div>
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-fable-midnight">Email Dispatch</span>
            <span className="text-xs text-stone-600 font-mono truncate w-full px-1">evolvixtechnology@gmail.com</span>
          </a>

          <a
            href="https://github.com/akashjadon04"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-fable-purple/20 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-fable-purple/50 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fable-purple to-fable-royal text-white shadow-md">
              <GitBranch className="h-5 w-5" />
            </div>
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-fable-midnight">GitHub Repos</span>
            <span className="text-xs text-stone-600 font-mono">@akashjadon04</span>
          </a>

          <a
            href="https://www.linkedin.com/in/akashjadon/"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-fable-purple/20 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-fable-purple/50 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fable-purple to-fable-royal text-white shadow-md">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.55a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </div>
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-fable-midnight">LinkedIn Profile</span>
            <span className="text-xs text-stone-600 font-mono">in/akashjadon</span>
          </a>

          <a
            href="https://wa.me/917668758238"
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-center gap-2.5 rounded-2xl border border-fable-purple/20 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:border-fable-purple/50 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-fable-purple to-fable-royal text-white shadow-md">
              <Phone className="h-5 w-5" />
            </div>
            <span className="font-cinzel font-bold text-xs uppercase tracking-wider text-fable-midnight">Direct / WhatsApp</span>
            <span className="text-xs text-stone-600 font-mono">+91 76687 58238</span>
          </a>
        </div>

        <p className="mt-14 font-cinzel text-xs font-semibold uppercase tracking-[0.3em] text-amber-900/60">
          Akash Jadon · Sovereign Systems & AI Automation Architect · 2026
        </p>
      </motion.div>
    </div>
  );
}
