import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, MessageSquare, Shield, Zap, ExternalLink, Sparkles } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import { NatureZenLeaf } from "./NatureGraphics";

const features = [
  {
    icon: Brain,
    title: "Multi-Model Intelligence",
    desc: "Seamlessly routes between Claude 3.5 Sonnet, GPT-4o, DeepSeek, and Gemini for optimal reasoning and sub-40ms speed.",
  },
  {
    icon: Cpu,
    title: "Interactive Code Canvas",
    desc: "Live in-browser coding sandbox with real-time preview, multi-file code editing, and execution runtime.",
  },
  {
    icon: MessageSquare,
    title: "Multimodal Vision & Audio",
    desc: "Processes complex diagrams, PDFs, and screenshots with state-of-the-art vision models and voice synthesis.",
  },
  {
    icon: Zap,
    title: "Autonomous Agent Dispatch",
    desc: "Triggers background tasks, web research, scrapers, and external APIs directly from conversational context.",
  },
  {
    icon: Shield,
    title: "Enterprise Data Privacy",
    desc: "Isolated session memory, client-side encryption, and zero data retention for complete enterprise confidentiality.",
  },
];

export default function AstraAIPage() {
  const atroposRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop =
      window.innerWidth >= 768 &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!isDesktop) return;

    if (atroposRef.current) {
      const instance = Atropos({
        el: atroposRef.current,
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
    }
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Atropos 3D Screenshot column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-100/50 blur-3xl pointer-events-none" />

          <div ref={atroposRef} className="atropos w-full rounded-3xl cursor-pointer">
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner rounded-3xl overflow-hidden shadow-sm border border-emerald-900/10 bg-white p-4">
                  <div data-atropos-offset="-3" className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-slate-50 border border-slate-200">
                    <img
                      src="/images/projects/astra-ai-full.png"
                      alt="Astra AI Platform"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>

                  {/* Floating live domain badge */}
                  <div
                    data-atropos-offset="5"
                    className="absolute top-7 right-7 z-20 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-3.5 py-1 text-xs font-bold text-emerald-900 shadow-sm"
                  >
                    <NatureZenLeaf className="w-3.5 h-3.5 text-emerald-700" />
                    <span>astra.ai</span>
                  </div>

                  {/* Floating bottom status label */}
                  <div data-atropos-offset="3" className="p-4 text-slate-900">
                    <div className="text-[11px] uppercase tracking-widest text-emerald-700 font-cinzel font-bold">
                      Multimodal AI Architecture
                    </div>
                    <div className="text-xl font-cinzel font-bold tracking-tight text-slate-900">
                      Astra AI Sovereign Workspace
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-900 shadow-sm">
            <Brain className="h-4 w-4 text-emerald-700" />
            <span className="font-cinzel tracking-widest">FLAGSHIP AI RUNTIME</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-slate-900">
            Astra <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-sky-700">AI Core</span>
          </h2>

          <p className="mt-4 font-cormorant text-2xl italic text-emerald-950/80 md:text-3xl">
            Unrestricted multimodal AI workspace with real-time multi-model routing, canvas code execution, and deep thinking.
          </p>

          <p className="mt-5 font-inter leading-relaxed text-slate-600">
            Engineered as a full-featured AI operating system at Evolnex Digital. Astra AI provides unrestricted reasoning with intelligent multi-model routing across Claude, GPT-4o, and DeepSeek, alongside an interactive WebContainers code execution sandbox, document parsing, and autonomous tool calling.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className="rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm hover:border-emerald-600/30 transition"
              >
                <feature.icon className="mb-2 h-5 w-5 text-emerald-700" />
                <h3 className="font-cinzel text-sm font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1 font-inter text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://astra-frontend-backup.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 font-cinzel font-bold text-xs tracking-wider shadow-sm transition hover:scale-105"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Launch astra.ai Platform</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
