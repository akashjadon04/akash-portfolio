import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Wallet, Layers, Sparkles } from "lucide-react";
import Atropos from "atropos";
import "atropos/css";
import type { Project } from "../App";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectPage({ project, index }: Props) {
  const isDark = index % 2 === 0;
  const Section = isDark ? "section-dark" : "section-parchment parchment";
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
    <div
      id={project.id}
      className={`page ${Section} flex min-h-screen flex-col justify-center px-6 py-16 md:px-12`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={index % 2 === 1 ? "lg:col-start-2" : ""}
          >
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium ${isDark ? "border-amber-400/30 bg-amber-400/10 text-amber-300" : "border-fable-purple/30 bg-fable-purple/10 text-fable-purple"}`}>
              <Layers className="h-4 w-4" />
              <span className="font-cinzel tracking-widest">PROJECT {String(index + 1).padStart(2, "0")}</span>
            </div>

            <h2 className={`font-cinzel text-4xl font-bold md:text-5xl ${isDark ? "text-white" : "text-fable-midnight"}`}>
              {project.title}
            </h2>
            <p className={`mt-2 font-cormorant text-2xl italic ${isDark ? "text-amber-200" : "text-amber-800"}`}>
              {project.subtitle}
            </p>

            <div className={`mt-6 flex flex-wrap gap-4 font-inter text-sm ${isDark ? "text-white/70" : "text-stone-700"}`}>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {project.client}
              </div>
              <div className="flex items-center gap-1.5">
                <Wallet className="h-4 w-4" />
                {project.budget}
              </div>
            </div>

            <p className={`mt-6 font-inter text-base leading-relaxed ${isDark ? "text-fable-parchment/90" : "text-stone-800"}`}>
              {project.description}
            </p>

            <ul className="mt-6 space-y-3">
              {project.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3">
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${isDark ? "bg-amber-400" : "bg-fable-purple"}`} />
                  <span className={`font-inter text-sm leading-relaxed ${isDark ? "text-white/85" : "text-stone-700"}`}>
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-3 py-1 text-xs font-semibold ${isDark ? "border-white/20 bg-white/10 text-white/90" : "border-fable-purple/20 bg-fable-purple/5 text-fable-purple"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link.href}
                target="_blank"
                rel="noreferrer"
                className={`print-link mt-8 inline-flex items-center gap-2 rounded-full border px-6 py-3 font-cinzel font-bold transition ${isDark ? "border-amber-400 bg-amber-400/10 text-amber-300 hover:bg-amber-400 hover:text-fable-midnight" : "border-fable-purple bg-fable-purple/10 text-fable-purple hover:bg-fable-purple hover:text-white"}`}
              >
                <ExternalLink className="h-4 w-4" />
                Visit {project.link.label}
              </a>
            )}
          </motion.div>

          {/* Atropos 3D Screenshot column */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`relative ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
          >
            <div ref={atroposRef} className="atropos w-full rounded-2xl cursor-pointer">
              <div className="atropos-scale">
                <div className="atropos-rotate">
                  <div className="atropos-inner rounded-2xl overflow-hidden shadow-2xl border border-amber-400/20 bg-black/40">
                    <div data-atropos-offset="-4" className="relative w-full aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </div>

                    {/* Floating top badge */}
                    {project.link && (
                      <div
                        data-atropos-offset="6"
                        className="absolute top-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-bold text-amber-300 shadow-xl"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>{project.link.label}</span>
                      </div>
                    )}

                    {/* Floating bottom label */}
                    <div data-atropos-offset="4" className="absolute bottom-0 left-0 right-0 p-5 text-white z-20 pointer-events-none">
                      <div className="text-[11px] uppercase tracking-widest text-amber-400 font-cinzel font-bold">
                        {project.tags[0]} · Production
                      </div>
                      <div className="text-xl font-cinzel font-bold tracking-tight text-white drop-shadow-md">
                        {project.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fable corner flourish */}
            <div className={`absolute -bottom-4 -right-4 hidden h-24 w-24 md:block pointer-events-none ${isDark ? "text-amber-400/30" : "text-fable-purple/30"}`}>
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M100 0C55 0 20 5 0 40c10-5 30-10 60 0 15 5 35-5 40-40z" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
