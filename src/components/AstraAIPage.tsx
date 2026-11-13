import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Cpu, MessageSquare, Shield, Zap, ExternalLink, Sparkles } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";

const features = [
  {
    icon: Brain,
    title: "Multi-Model Intelligence",
    desc: "Seamlessly routes between Claude 3.5 Sonnet, GPT-4o, DeepSeek, and Gemini Pro for optimal reasoning and speed.",
  },
  {
    icon: Cpu,
    title: "Interactive Code Canvas",
    desc: "Live in-browser coding sandbox with real-time preview, multi-file code editing, and execution sandbox.",
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
    desc: "Isolated session memory, client-side encryption, and zero data leakage for enterprise-grade confidentiality.",
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
        activeOffset: 45,
        shadowScale: 1.05,
        highlight: true,
        rotateXMax: 14,
        rotateYMax: 14,
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
          <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-3xl pointer-events-none" />

          <div ref={atroposRef} className="atropos w-full rounded-2xl cursor-pointer">
            <div className="atropos-scale">
              <div className="atropos-rotate">
                <div className="atropos-inner rounded-2xl overflow-hidden shadow-2xl border border-amber-400/30 bg-black/60">
                  <div data-atropos-offset="-4" className="relative w-full aspect-[16/10] overflow-hidden">
                    <img
                      src="/images/projects/astra-ai-full.png"
                      alt="Astra AI Platform"
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  </div>

                  {/* Floating live domain badge */}
                  <div
                    data-atropos-offset="6"
                    className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 px-4 py-1.5 text-xs font-bold text-amber-300 shadow-2xl"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>astra.ai</span>
                  </div>

                  {/* Floating bottom status label */}
                  <div data-atropos-offset="4" className="absolute bottom-0 left-0 right-0 p-5 text-white z-20 pointer-events-none">
                    <div className="text-[11px] uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                      Multimodal AI Architecture
                    </div>
                    <div className="text-xl font-cinzel font-bold tracking-tight text-white drop-shadow-md">
                      Astra AI Workspace
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300">
            <Brain className="h-4 w-4" />
            <span className="font-cinzel tracking-widest">FLAGSHIP PLATFORM</span>
          </div>
          <h2 className="font-cinzel text-4xl font-bold text-white md:text-5xl">
            Astra <span className="gold-text">AI</span>
          </h2>
          <p className="mt-4 font-cormorant text-2xl italic text-fable-parchment/90 md:text-3xl">
            Unrestricted multimodal AI workspace with real-time multi-model routing, canvas code execution, and deep thinking.
          </p>
          <p className="mt-5 font-inter leading-relaxed text-white/80">
            Engineered as a full-featured AI operating system. Astra AI provides unrestricted reasoning with intelligent multi-model routing across Claude, GPT-4o, and DeepSeek, alongside an interactive code execution sandbox, document parsing, and autonomous tool calling.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-amber-400/40 hover:bg-white/10"
              >
                <feature.icon className="mb-2 h-6 w-6 text-amber-400" />
                <h3 className="font-cinzel text-base font-bold text-white">{feature.title}</h3>
                <p className="mt-1 font-inter text-sm text-white/70">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <a
              href="https://astra-frontend-backup.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-amber-400/10 px-6 py-3 font-cinzel font-bold text-amber-300 transition hover:bg-amber-400 hover:text-fable-midnight"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Launch astra.ai</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
