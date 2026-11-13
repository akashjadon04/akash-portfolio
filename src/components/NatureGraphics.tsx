export function NatureTopography({ className = "opacity-20" }: { className?: string }) {
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
        opacity="0.35"
      />
      <path
        d="M-80,320 C250,260 580,410 950,310 C1220,240 1380,340 1580,300"
        stroke="#0284c7"
        strokeWidth="1"
        opacity="0.25"
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
      <path
        d="M-100,720 C260,650 600,790 980,690 C1260,620 1400,730 1600,690"
        stroke="#0284c7"
        strokeWidth="1"
        opacity="0.2"
      />
    </svg>
  );
}

export function NatureZenLeaf({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-6 h-6 ${className}`}
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

export function NatureSunHorizon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer subtle glow circle */}
      <circle cx="200" cy="200" r="160" stroke="#15803d" strokeWidth="1" strokeDasharray="3 6" opacity="0.2" />
      {/* Middle sky circle */}
      <circle cx="200" cy="200" r="110" stroke="#0284c7" strokeWidth="1" opacity="0.25" />
      {/* Core warm sun disc */}
      <circle cx="200" cy="200" r="60" fill="url(#sunGlow)" opacity="0.8" />
      <defs>
        <radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#22c55e" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export function NatureOrganicBranch({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 120 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60,170 C58,120 64,80 58,15"
        stroke="#15803d"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      {/* Leaf 1 (Left) */}
      <path
        d="M60,130 C45,122 35,130 30,120 C35,115 48,118 60,125"
        fill="#dcfce7"
        stroke="#15803d"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Leaf 2 (Right) */}
      <path
        d="M60,105 C75,98 85,106 90,96 C85,91 72,94 60,101"
        fill="#e0f2fe"
        stroke="#0284c7"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Leaf 3 (Left) */}
      <path
        d="M59,75 C46,68 38,74 34,65 C39,61 50,63 59,71"
        fill="#ffedd5"
        stroke="#ea580c"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Leaf 4 (Right) */}
      <path
        d="M58,45 C70,40 78,46 82,38 C77,34 68,36 58,42"
        fill="#dcfce7"
        stroke="#15803d"
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Top Leaf Tip */}
      <path
        d="M58,15 C52,6 64,6 58,15"
        fill="#15803d"
        opacity="0.6"
      />
    </svg>
  );
}
