import { motion } from "framer-motion";

/**
 * Continuous Living Green Branch Vine that connects sections down the page.
 * Features organic curving branch stems, delicate leaf buds, and pulsating digital energy packets.
 */
export function LivingBranchConnector({ height = 600, className = "" }: { height?: number; className?: string }) {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="w-full h-full mx-auto"
        viewBox="0 0 1200 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="branchGradGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#15803d" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#16a34a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="branchGradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Main Organic Botanical Branch 1 (Emerald Green) */}
        <path
          id="mainBranchPath"
          d="M0,80 C260,180 480,20 780,160 C980,260 1100,120 1200,190"
          stroke="url(#branchGradGreen)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Supporting Secondary Vine 2 (Sky Blue Circuit) */}
        <path
          d="M0,130 C320,60 520,220 840,90 C1040,15 1140,170 1200,140"
          stroke="url(#branchGradBlue)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="5 7"
        />

        {/* Solar Warmth Conductor 3 (Terracotta Amber) */}
        <path
          d="M0,105 C380,145 590,75 880,135 C1080,175 1160,85 1200,110"
          stroke="#ea580c"
          strokeWidth="1.2"
          opacity="0.35"
        />

        {/* Sprouting Botanical Leaves along Branch 1 */}
        {/* Leaf Cluster 1 */}
        <path
          d="M260,155 C240,125 270,105 290,125 C280,145 270,160 260,155 Z"
          fill="#dcfce7"
          stroke="#15803d"
          strokeWidth="1.2"
        />
        <path
          d="M265,153 C275,138 282,130 286,127"
          stroke="#16a34a"
          strokeWidth="0.8"
        />

        {/* Leaf Cluster 2 */}
        <path
          d="M510,75 C530,45 570,55 560,85 C540,90 520,90 510,75 Z"
          fill="#e0f2fe"
          stroke="#0284c7"
          strokeWidth="1.2"
        />
        <path
          d="M515,77 C535,65 545,63 555,75"
          stroke="#0ea5e9"
          strokeWidth="0.8"
        />

        {/* Leaf Cluster 3 */}
        <path
          d="M780,160 C800,130 840,145 820,175 C805,175 790,170 780,160 Z"
          fill="#ffedd5"
          stroke="#ea580c"
          strokeWidth="1.2"
        />
        <path
          d="M785,162 C800,150 810,152 816,166"
          stroke="#f97316"
          strokeWidth="0.8"
        />

        {/* Leaf Cluster 4 */}
        <path
          d="M980,240 C960,210 990,195 1010,215 C1000,230 990,245 980,240 Z"
          fill="#dcfce7"
          stroke="#15803d"
          strokeWidth="1.2"
        />

        {/* Glowing Circuit Node Junctions */}
        <circle cx="260" cy="155" r="4.5" fill="#15803d" />
        <circle cx="260" cy="155" r="9" stroke="#15803d" strokeWidth="1" opacity="0.4" />

        <circle cx="510" cy="75" r="4.5" fill="#0284c7" />
        <circle cx="510" cy="75" r="9" stroke="#0284c7" strokeWidth="1" opacity="0.4" />

        <circle cx="780" cy="160" r="4.5" fill="#ea580c" />
        <circle cx="780" cy="160" r="9" stroke="#ea580c" strokeWidth="1" opacity="0.4" />

        <circle cx="980" cy="240" r="4.5" fill="#15803d" />
        <circle cx="980" cy="240" r="9" stroke="#15803d" strokeWidth="1" opacity="0.4" />

        {/* Moving Digital Energy Packets Traveling Along the Branch */}
        <circle r="4" fill="#22c55e">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            path="M0,80 C260,180 480,20 780,160 C980,260 1100,120 1200,190"
          />
        </circle>
        <circle r="3" fill="#38bdf8">
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M0,130 C320,60 520,220 840,90 C1040,15 1140,170 1200,140"
          />
        </circle>
      </svg>
    </div>
  );
}

/**
 * Vertical Vine Stem that travels down the edge of the screen connecting sections.
 */
export function VerticalLivingSpine({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none fixed top-0 bottom-0 z-0 opacity-40 ${className}`}>
      <svg
        className="h-full w-24"
        viewBox="0 0 100 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M50,0 Q70,300 30,600 T70,1200"
          stroke="#15803d"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M50,0 Q30,300 70,600 T30,1200"
          stroke="#0284c7"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          opacity="0.3"
        />
        {/* Leaf Nodes */}
        <circle cx="50" cy="250" r="4" fill="#15803d" />
        <path d="M50,250 C65,240 70,255 60,265 Z" fill="#dcfce7" stroke="#15803d" strokeWidth="0.8" />

        <circle cx="45" cy="550" r="4" fill="#0284c7" />
        <path d="M45,550 C30,540 25,555 35,565 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="0.8" />

        <circle cx="55" cy="850" r="4" fill="#ea580c" />
        <path d="M55,850 C70,840 75,855 65,865 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

/**
 * The Interactive Bio-Digital Core (Living Sun + Nature Vines + Next-Gen Tech Nodes)
 * Combines a radiant solar disc, organic fractal branch vines, and interactive tech architecture nodes.
 */
export function BioDigitalSunCore({ onSelectProject }: { onSelectProject?: (id: string) => void }) {
  const nodes = [
    { id: "tandem-flow", title: "TandemFlow", subtitle: "246-Node Sync Mesh", x: 75, y: 75, color: "#15803d", bg: "#dcfce7" },
    { id: "boss-console", title: "BossConsole", subtitle: "100+ MCP JVM Harness", x: 405, y: 70, color: "#0284c7", bg: "#e0f2fe" },
    { id: "astraquote", title: "AstraQuote", subtitle: "Swiss VAT Quoting SaaS", x: 415, y: 285, color: "#ea580c", bg: "#ffedd5" },
    { id: "titan-rail", title: "TitanRail", subtitle: "DLQ Gateway & Bus", x: 240, y: 400, color: "#15803d", bg: "#dcfce7" },
    { id: "astra-mind", title: "AstraMind", subtitle: "Autonomous Collective", x: 65, y: 295, color: "#0284c7", bg: "#e0f2fe" },
  ];

  return (
    <div className="relative w-full max-w-[540px] aspect-square flex items-center justify-center mx-auto group">
      {/* Soft Calming Ambient Radiance Layers */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-200/40 via-sky-200/30 to-orange-200/40 blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute w-72 h-72 rounded-full bg-amber-200/35 blur-2xl pointer-events-none" />

      {/* SVG Circuit Vines, Solar Core, and Energy Transits */}
      <svg
        className="w-full h-full relative z-10"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.25" />
          </radialGradient>
          <radialGradient id="innerSun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#fffbeb" />
            <stop offset="100%" stopColor="#fef3c7" />
          </radialGradient>
        </defs>

        {/* Outer Orbital Zen Rings */}
        <circle cx="240" cy="240" r="215" stroke="#15803d" strokeWidth="1" strokeDasharray="6 8" opacity="0.25" />
        <circle cx="240" cy="240" r="165" stroke="#0284c7" strokeWidth="1.2" opacity="0.25" />
        <circle cx="240" cy="240" r="120" stroke="#ea580c" strokeWidth="1" strokeDasharray="4 6" opacity="0.3" />

        {/* Radiating Organic Vines & Circuit Conduits from the Sun to each Node */}
        {/* Sun -> TandemFlow */}
        <path
          id="pathSunToTandem"
          d="M240,240 C190,180 135,130 95,95"
          stroke="#15803d"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Sun -> BossConsole */}
        <path
          id="pathSunToBoss"
          d="M240,240 C295,160 345,110 385,85"
          stroke="#0284c7"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Sun -> AstraQuote */}
        <path
          id="pathSunToQuote"
          d="M240,240 C315,250 365,270 395,285"
          stroke="#ea580c"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Sun -> TitanRail */}
        <path
          id="pathSunToTitan"
          d="M240,240 C240,300 240,350 240,380"
          stroke="#15803d"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Sun -> AstraMind */}
        <path
          id="pathSunToMind"
          d="M240,240 C170,260 120,280 85,295"
          stroke="#0284c7"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Botanical Leaf Sprout Accents along the vines */}
        <path d="M165,185 C150,165 170,155 182,170 Z" fill="#dcfce7" stroke="#15803d" strokeWidth="1.2" />
        <path d="M315,180 C335,165 345,180 330,195 Z" fill="#e0f2fe" stroke="#0284c7" strokeWidth="1.2" />
        <path d="M315,270 C335,280 325,300 305,290 Z" fill="#ffedd5" stroke="#ea580c" strokeWidth="1.2" />
        <path d="M185,290 C170,305 180,320 195,310 Z" fill="#dcfce7" stroke="#15803d" strokeWidth="1.2" />

        {/* Pulsating Energy Packets moving from Sun to Nodes */}
        <circle r="3.5" fill="#15803d">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M240,240 C190,180 135,130 95,95" />
        </circle>
        <circle r="3.5" fill="#0284c7">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M240,240 C295,160 345,110 385,85" />
        </circle>
        <circle r="3.5" fill="#ea580c">
          <animateMotion dur="3s" repeatCount="indefinite" path="M240,240 C315,250 365,270 395,285" />
        </circle>
        <circle r="3.5" fill="#15803d">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M240,240 C240,300 240,350 240,380" />
        </circle>
        <circle r="3.5" fill="#0284c7">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M240,240 C170,260 120,280 85,295" />
        </circle>

        {/* Central Radiant Sun Core */}
        <circle cx="240" cy="240" r="58" fill="url(#sunGlow)" />
        <circle cx="240" cy="240" r="58" stroke="#ea580c" strokeWidth="2" opacity="0.7" />
        <circle cx="240" cy="240" r="44" fill="#fffbeb" />
        <circle cx="240" cy="240" r="34" fill="url(#innerSun)" />

        {/* Solar Flare Rays */}
        <g stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <line x1="240" y1="172" x2="240" y2="164" />
          <line x1="240" y1="308" x2="240" y2="316" />
          <line x1="172" y1="240" x2="164" y2="240" />
          <line x1="308" y1="240" x2="316" y2="240" />
          <line x1="192" y1="192" x2="186" y2="186" />
          <line x1="288" y1="288" x2="294" y2="294" />
          <line x1="192" y1="288" x2="186" y2="294" />
          <line x1="288" y1="192" x2="294" y2="186" />
        </g>

        {/* Sun Icon Center Dot */}
        <circle cx="240" cy="240" r="14" fill="#ea580c" />
      </svg>

      {/* Center Label Pill */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-10 z-20 pointer-events-none">
        <span className="rounded-full bg-white/95 border border-orange-300/80 px-3 py-0.5 text-[9px] font-cinzel font-bold text-orange-950 shadow-sm backdrop-blur-sm">
          BIO-DIGITAL CORE
        </span>
      </div>

      {/* Floating Interactive Architecture Nodes */}
      {nodes.map((node) => (
        <div
          key={node.id}
          style={{ left: `${(node.x / 480) * 100}%`, top: `${(node.y / 480) * 100}%` }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/node cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => {
            if (onSelectProject) {
              onSelectProject(node.id);
            } else {
              const el = document.getElementById("projects");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <div
            className="flex items-center gap-2 rounded-2xl border px-3 py-1.5 shadow-sm backdrop-blur-md transition-all hover:shadow-md hover:border-emerald-600/40"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", borderColor: `${node.color}50` }}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse"
              style={{ backgroundColor: node.color, boxShadow: `0 0 8px ${node.color}` }}
            />
            <div className="flex flex-col text-left">
              <span className="font-cinzel text-xs font-bold text-slate-900 leading-none">
                {node.title}
              </span>
              <span className="font-mono text-[9px] font-semibold mt-0.5" style={{ color: node.color }}>
                {node.subtitle}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NatureZenLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-5 h-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function NatureTopography({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 w-full h-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 900"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-100,200 C300,120 600,280 1000,190 C1250,130 1400,220 1600,180"
        stroke="#15803d"
        strokeWidth="1.2"
        strokeDasharray="4 6"
        opacity="0.25"
      />
      <path
        d="M-80,320 C250,260 580,410 950,310 C1220,240 1380,340 1580,300"
        stroke="#0284c7"
        strokeWidth="1"
        opacity="0.2"
      />
      <path
        d="M-120,460 C200,380 520,540 900,430 C1200,340 1350,470 1560,420"
        stroke="#15803d"
        strokeWidth="1.2"
        opacity="0.2"
      />
      <path
        d="M-60,590 C220,520 540,670 920,570 C1240,490 1420,610 1620,560"
        stroke="#ea580c"
        strokeWidth="0.8"
        strokeDasharray="6 8"
        opacity="0.2"
      />
    </svg>
  );
}
