export type ProjectCategory = 
  | "Enterprise Automation" 
  | "Agentic AI & Runtimes" 
  | "Sovereign SaaS & Platforms";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  role: string;
  architectureSummary: string;
  metrics: { label: string; value: string }[];
  invariants: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
};

export const sovereignProjects: Project[] = [
  // 1. Enterprise Automation Flagship: TandemFlow
  {
    id: "tandem-flow",
    title: "TandemFlow",
    category: "Enterprise Automation",
    tagline: "246-Node Bi-Directional State Synchronization Engine with Distributed Redis Mutex & Loop Elimination",
    role: "Lead Automation Architect · Evolvix Technology",
    architectureSummary:
      "A sovereign distributed synchronization fabric resolving multi-cloud race conditions between enterprise CRMs and operational databases. Implements SHA-256 state delta diffing and distributed Redis mutex locking to eliminate recursive webhook feedback loops across 246 active execution nodes.",
    metrics: [
      { label: "Active Nodes", value: "246" },
      { label: "Delta Diff Sync", value: "<180ms" },
      { label: "Loop Echoes", value: "0.00%" },
      { label: "Idempotency", value: "99.99%" },
    ],
    invariants: [
      "Distributed Redis Mutex lock manager with TTL heartbeat prevents concurrent write collisions.",
      "Cryptographic SHA-256 payload delta hashing eliminates infinite webhook echo loops.",
      "Three-tier exponential jitter backoff with automated dead-letter queue routing.",
      "Strict transactional idempotency guarantees exactly-once execution across multi-region clusters.",
    ],
    techStack: ["Make.com", "Redis Mutex", "TypeScript", "Node.js", "SHA-256 Delta Diff", "Webhooks"],
    image: "/images/projects/tandem-flow.svg",
    githubUrl: "https://github.com/akashjadon04/tandem-flow",
    featured: true,
  },

  // 2. Enterprise Automation: TitanRail
  {
    id: "titan-rail",
    title: "TitanRail",
    category: "Enterprise Automation",
    tagline: "Resilient ERP-to-3PL Logistics Engine with Make.com Dead-Letter Queues & FastAPI Decision Gateway",
    role: "Lead Backend Architect · Evolvix Technology",
    architectureSummary:
      "An enterprise logistics and order routing engine managing high-velocity order dispatch between Shopify, NetSuite ERP, and regional 3PL fulfillment centers. Fronted by a high-throughput FastAPI decision gateway with automated schema drift interception, audit logging, and poisonous message replay.",
    metrics: [
      { label: "Throughput", value: "5,000+/hr" },
      { label: "Dropped Orders", value: "0" },
      { label: "Decision Latency", value: "<45ms" },
      { label: "DLQ Recovery", value: "100%" },
    ],
    invariants: [
      "FastAPI asynchronous decision gateway validates payload schemas before Make.com ingestion.",
      "Automated Dead-Letter Queue (DLQ) with one-click replay and poison pill quarantine.",
      "Strict FIFO queue ordering guarantees warehouse inventory alignment during flash sales.",
      "Comprehensive telemetry with distributed trace headers across all third-party logistics APIs.",
    ],
    techStack: ["Make.com DLQ", "FastAPI", "Python 3.12", "Redis Queue", "Celery", "Shopify/NetSuite"],
    image: "/images/projects/titan-rail.svg",
    githubUrl: "https://github.com/akashjadon04/titan-rail",
  },

  // 3. Enterprise Automation: SchemaForge
  {
    id: "schema-forge",
    title: "SchemaForge",
    category: "Enterprise Automation",
    tagline: "Zero-Dependency Offline AST Compiler, Scenario Linter & CI/CD Regression Test Runner for Make.com Blueprints",
    role: "Lead Compiler & DevTools Engineer · Evolvix Technology",
    architectureSummary:
      "A sovereign developer tool and AST compiler that statically analyzes Make.com blueprint scenarios offline. Detects circular dependencies, unhandled exception paths, unbound variables, and breaking schema changes in GitHub Actions CI/CD before scenarios ever hit production.",
    metrics: [
      { label: "AST Parse Time", value: "<12ms" },
      { label: "Dependencies", value: "Zero (Pure TS)" },
      { label: "Linting Rules", value: "35+ Checks" },
      { label: "CI/CD Native", value: "GitHub Actions" },
    ],
    invariants: [
      "Offline recursive AST parser traverses nested scenario blueprints with zero external network calls.",
      "Static cycle detection algorithm identifies unbounded feedback loops at compile time.",
      "Detects orphaned data mappings and deprecated endpoint references across complex DAGs.",
      "Generates automated markdown change logs and visual architectural topology graphs.",
    ],
    techStack: ["TypeScript", "AST Parsing", "Lexical Analysis", "CI/CD", "Make.com API", "Node.js"],
    image: "/images/projects/schema-forge.svg",
    githubUrl: "https://github.com/akashjadon04/schema-forge",
  },

  // 4. Enterprise Automation: Metis
  {
    id: "metis",
    title: "Metis",
    category: "Enterprise Automation",
    tagline: "Stealth Browser-Native DOM Orchestrator & Task Automation Engine",
    role: "Lead Automation Engineer · Evolvix Technology",
    architectureSummary:
      "A Manifest V3 browser orchestration runtime utilizing low-level Chrome DevTools Protocol (CDP) hooks. Executes high-volume data harvesting, dynamic UI workflows, and authenticated enterprise portal synchronization while maintaining complete invisibility to advanced bot mitigations.",
    metrics: [
      { label: "Bot Mitigation", value: "100% Stealth" },
      { label: "Anti-Bot Bypasses", value: "40+ Vectors" },
      { label: "Architecture", value: "Chrome MV3" },
      { label: "Protocol", value: "Native CDP" },
    ],
    invariants: [
      "Direct CDP socket injection bypasses standard window.navigator automation flags.",
      "Human-mimicking bezier mouse trajectories and randomized micro-keystroke latencies.",
      "Zero persistent cookies or fingerprint leakage across sandboxed worker sessions.",
      "Dynamic DOM mutation observers handle asynchronous hydration without brittle sleep timers.",
    ],
    techStack: ["Chrome MV3", "TypeScript", "CDP Protocol", "DOM Injection", "Reactive State", "Wasm"],
    image: "/images/projects/metis.svg",
    githubUrl: "https://github.com/akashjadon04/metis",
  },

  // 5. Enterprise Automation: Keryx
  {
    id: "keryx",
    title: "Keryx",
    category: "Enterprise Automation",
    tagline: "Sovereign Headless Email Gateway & Protocol Synchronization Engine",
    role: "Lead Infrastructure Engineer · Evolvix Technology",
    architectureSummary:
      "A high-throughput email ingestion gateway and real-time webhook dispatch engine built in Go. Ingests raw RFC 5322 MIME streams, strips malicious payloads, validates DKIM/SPF signatures, and publishes clean structured JSON events to distributed message brokers with sub-30ms latency.",
    metrics: [
      { label: "Daily Volume", value: "100k+ Ingested" },
      { label: "Stream Latency", value: "<30ms" },
      { label: "Deliverability", value: "99.8%" },
      { label: "Spec Compliance", value: "RFC 5322" },
    ],
    invariants: [
      "High-concurrency Go worker pool processes thousands of incoming SMTP/IMAP connections in parallel.",
      "Automated DKIM, SPF, and DMARC verification pipeline prevents header spoofing.",
      "Zero-disk memory stream parsing for ultra-fast attachment scanning and JSON transformation.",
      "Guaranteed at-least-once webhook delivery with exponential backoff and replay logs.",
    ],
    techStack: ["Go (Golang)", "Go Fiber", "RabbitMQ", "PostgreSQL", "Docker", "MIME Parser"],
    image: "/images/projects/keryx.svg",
    githubUrl: "https://github.com/akashjadon04/keryx",
  },

  // 6. Agentic AI Flagship: BossConsole
  {
    id: "bossconsole",
    title: "BossConsole",
    category: "Agentic AI & Runtimes",
    tagline: "Multi-Threaded JVM Agent Harness & 100+ MCP Tool Execution Runtime",
    role: "Lead AI Runtime Architect · Evolvix Technology",
    architectureSummary:
      "An open-source, enterprise-grade runtime harness for autonomous AI agents built on Java 21 Virtual Threads. Implements full Model Context Protocol (MCP) clients with sandboxed process isolation, dynamic tool discovery, distributed memory synchronization, and hot-reloadable capability modules.",
    metrics: [
      { label: "Connected MCP Tools", value: "100+" },
      { label: "Concurrency", value: "Virtual Threads" },
      { label: "Tool Dispatch", value: "<10ms" },
      { label: "Runtime", value: "Java 21 JVM" },
    ],
    invariants: [
      "Java 21 Project Loom virtual threads allow thousands of concurrent agent reasoning loops.",
      "Strict Model Context Protocol (MCP) client implementation with protocol-level safety guards.",
      "Process-level OS sandboxing prevents unauthorized agent system modifications.",
      "Real-time SSE event streaming delivers agent thought trajectories and tool outputs with zero jitter.",
    ],
    techStack: ["Java 21", "Spring Boot 3", "Model Context Protocol (MCP)", "Virtual Threads", "Docker", "SSE"],
    image: "/images/projects/bossconsole.png",
    githubUrl: "https://github.com/akashjadon04/BossConsole",
    featured: true,
  },

  // 7. Agentic AI: Astra AI Core
  {
    id: "astra-ai",
    title: "Astra AI Core",
    category: "Agentic AI & Runtimes",
    tagline: "Unrestricted Multimodal AI Workspace & Dynamic Code Canvas Sandbox",
    role: "Lead AI Architect · Evolvix Technology",
    architectureSummary:
      "A sovereign multi-model AI workspace unifying Claude 3.5 Sonnet, GPT-4o, and DeepSeek-V3 into a collaborative reasoning canvas. Features an in-browser WebContainer code sandbox with live hot-reloading, multimodal PDF/image parsing, and strict client-side session encryption with zero data retention.",
    metrics: [
      { label: "Model Engines", value: "3-Tier Router" },
      { label: "Sandbox", value: "WebContainers" },
      { label: "Data Retention", value: "0% (Zero Log)" },
      { label: "TTFT Latency", value: "<40ms" },
    ],
    invariants: [
      "Dynamic query classification routing requests to the optimal reasoning model per task.",
      "Client-side WebContainer execution environment compiles and executes code without server overhead.",
      "Multimodal vision pipeline processes architectural blueprints and diagrams with high fidelity.",
      "Encrypted session storage guarantees complete enterprise confidentiality.",
    ],
    techStack: ["Next.js 15", "WebContainers", "Claude 3.5 Sonnet", "GPT-4o", "DeepSeek", "TypeScript"],
    image: "/images/projects/astra-ai-full.png",
    githubUrl: "https://github.com/akashjadon04/astra-ai",
    liveUrl: "https://astra-frontend-backup.vercel.app/",
  },

  // 8. Agentic AI: AstraMind
  {
    id: "astra-mind",
    title: "AstraMind",
    category: "Agentic AI & Runtimes",
    tagline: "Heterogeneous Multi-Agent AI Research & Structured Synthesis Collective",
    role: "Lead Agentic Systems Architect · Evolvix Technology",
    architectureSummary:
      "A heterogeneous multi-agent research collective coordinating autonomous specialized agents. Scout agents perform real-time web grounding, Fact-Checkers verify source validity against ground truth, Schema Architects synthesize validated Pydantic JSON schemas, and Dispatchers push intelligence briefs to multi-channel webhooks.",
    metrics: [
      { label: "Agent Specialists", value: "4 Distinct Roles" },
      { label: "Source Grounding", value: "100% Citations" },
      { label: "Validation", value: "Pydantic V2" },
      { label: "Channels", value: "Slack / Telegram / REST" },
    ],
    invariants: [
      "Hierarchical supervisor architecture coordinates asynchronous sub-agent task delegations.",
      "Fact-checking reflection loop flags and rejects ungrounded hallucinations automatically.",
      "Strict Pydantic V2 output schemas guarantee zero malformed JSON delivered to downstream consumers.",
      "Persistent vector memory cache eliminates duplicate research overhead across related topics.",
    ],
    techStack: ["Python 3.12", "LangGraph", "Tavily Web Search", "Pydantic V2", "Redis Queue", "Docker"],
    image: "/images/projects/astra-mind.svg",
    githubUrl: "https://github.com/akashjadon04/astra-mind",
  },

  // 9. Agentic AI: Mitos
  {
    id: "mitos",
    title: "Mitos",
    category: "Agentic AI & Runtimes",
    tagline: "Visual AI DAG Graph Execution IDE & Multi-Agent Orchestrator Studio",
    role: "Lead Frontend Systems Engineer · Evolvix Technology",
    architectureSummary:
      "A visual node-based IDE for architecting, debugging, and executing complex multi-agent directed acyclic graphs (DAGs). Provides real-time execution flow visualization, cycle detection, breakpoint stepping, dynamic edge routing, and distributed state inspection at 60 FPS.",
    metrics: [
      { label: "Frame Rate", value: "60 FPS Canvas" },
      { label: "DAG Engine", value: "Cycle Safe" },
      { label: "State Sync", value: "WebSockets" },
      { label: "Core Execution", value: "Wasm Accelerated" },
    ],
    invariants: [
      "Hardware-accelerated infinite canvas supporting 1,000+ interactive nodes without performance drops.",
      "Real-time cycle detection algorithms prevent deadlocks in autonomous execution paths.",
      "Time-travel state debugging enables stepping backwards through agent decision branches.",
      "Bi-directional WebSocket streaming reflects distributed backend agent states in real time.",
    ],
    techStack: ["React Flow", "TypeScript", "Rust Wasm Core", "WebSockets", "Zustand", "Tailwind CSS"],
    image: "/images/projects/mitos.svg",
    githubUrl: "https://github.com/akashjadon04/mitos",
  },

  // 10. Sovereign SaaS Flagship: AstraQuote / DevisBat
  {
    id: "astraquote",
    title: "AstraQuote / DevisBat",
    category: "Sovereign SaaS & Platforms",
    tagline: "Intelligent Quoting & Swiss VAT SaaS with 3-Tier LLM Cascade for General Contractors",
    role: "Lead SaaS & Backend Architect · Evolvix Technology",
    architectureSummary:
      "A dual-engine enterprise quoting platform deployed for Swiss general contractors. Ingests raw voice notes and trade descriptions, invokes a 3-tier LLM cascade to parse construction line items, computes automated 8.1% Swiss VAT and 5-centime commercial rounding in <50ms, and generates branded PDF quotes backed by multi-tenant Stripe subscriptions.",
    metrics: [
      { label: "Quotes Processed", value: "CHF 2.4M+" },
      { label: "Swiss VAT Engine", value: "8.1% + 5c Round" },
      { label: "Margin Compute", value: "<50ms" },
      { label: "Quote Accuracy", value: "99.9%" },
    ],
    invariants: [
      "Three-tier LLM cascade cross-references trade terminology against local Swiss supplier price indices.",
      "Sub-50ms deterministic calculation engine enforces strict Swiss commercial VAT rounding rules.",
      "Automated WeasyPrint engine compiles dynamic HTML5 templates into pixel-perfect PDF quotes.",
      "Multi-tenant PostgreSQL architecture with Stripe customer billing webhooks and usage quotas.",
    ],
    techStack: ["Next.js 15", "FastAPI", "PostgreSQL", "Stripe Billing", "LLM Cascade", "Swiss VAT Engine"],
    image: "/images/projects/astraquote.png",
    githubUrl: "https://github.com/akashjadon04/AstraQuote-site",
    liveUrl: "https://astraquote-site.vercel.app/",
    featured: true,
  },

  // 11. Sovereign SaaS: Argus
  {
    id: "argus",
    title: "Argus",
    category: "Sovereign SaaS & Platforms",
    tagline: "High-Throughput Privacy-First Event Telemetry & Columnar Real-Time Analytics Engine",
    role: "Lead Data & Distributed Systems Architect · Evolvix Technology",
    architectureSummary:
      "A high-concurrency event telemetry fabric written in C# and .NET 9. Ingests tens of thousands of event streams per second into high-performance memory-mapped ring buffers, flushing into columnar Parquet/ClickHouse storage for sub-second analytical aggregations without tracking cookies or third-party ad networks.",
    metrics: [
      { label: "Peak Ingestion", value: "50,000+ evt/s" },
      { label: "P99 Ingestion Latency", value: "<15ms" },
      { label: "Storage Engine", value: "ClickHouse / Parquet" },
      { label: "Privacy Standard", value: "GDPR / Zero Cookie" },
    ],
    invariants: [
      "Lock-free ring buffers in .NET 9 deliver zero-allocation high-frequency packet ingestion.",
      "Automated schema evolution and snappy columnar compression reduce storage footprint by 82%.",
      "Sub-second aggregation queries over billions of telemetry rows via ClickHouse vector engines.",
      "Strict IP hashing and zero PII storage guarantee 100% GDPR and CCPA compliance.",
    ],
    techStack: ["C# / .NET 9", "ClickHouse", "Kafka", "Docker", "Columnar Parquet", "High-Throughput IO"],
    image: "/images/projects/argus.svg",
    githubUrl: "https://github.com/akashjadon04/argus",
  },

  // 12. Sovereign SaaS: Archon
  {
    id: "archon",
    title: "Archon",
    category: "Sovereign SaaS & Platforms",
    tagline: "Sovereign Enterprise Low-Code Application Fabric & Extensible CRM Platform",
    role: "Lead Backend Architect · Evolvix Technology",
    architectureSummary:
      "An extensible enterprise core written in Go and Fiber. Features dynamic runtime table schema migrations, granular row-level security (RLS), custom workflow triggers, and enterprise SSO integration, providing a self-hosted alternative to brittle commercial SaaS platforms.",
    metrics: [
      { label: "API Response P95", value: "<5ms" },
      { label: "Isolation", value: "Multi-Tenant RLS" },
      { label: "Language", value: "Go 1.22 (Fiber)" },
      { label: "Database", value: "PostgreSQL 16" },
    ],
    invariants: [
      "Dynamic schema builder creates fully indexed relational tables on the fly without database downtime.",
      "Granular row-level security (RLS) policies enforced directly inside PostgreSQL database transactions.",
      "Lightweight Go Fiber HTTP core provides sub-5ms API response times under heavy concurrent load.",
      "Integrated event bus allows custom webhooks and automation triggers on any table mutation.",
    ],
    techStack: ["Go 1.22", "Fiber", "PostgreSQL 16 RLS", "Redis", "Docker", "Tailwind CSS"],
    image: "/images/projects/archon.svg",
    githubUrl: "https://github.com/akashjadon04/archon",
  },

  // 13. Sovereign SaaS: Agora
  {
    id: "agora",
    title: "Agora",
    category: "Sovereign SaaS & Platforms",
    tagline: "High-Velocity Conversational Sales CRM with Native WhatsApp & Unified Email Streams",
    role: "Lead Full-Stack Architect · Evolvix Technology",
    architectureSummary:
      "A real-time omnichannel sales CRM unifying WhatsApp Business Cloud API, email streams, and webchat into a consolidated high-velocity inbox. Features AI-powered response suggestions, automated customer intent tagging, and sub-100ms message synchronization across multi-agent sales teams.",
    metrics: [
      { label: "Active Conversations", value: "15,000+" },
      { label: "Webhook Sync", value: "<100ms" },
      { label: "Messaging Protocol", value: "WhatsApp Cloud API" },
      { label: "Event Architecture", value: "Redis Pub/Sub" },
    ],
    invariants: [
      "Real-time WebSocket event dispatch pushes new customer messages to all team agents instantly.",
      "Automated conversation lock prevents multiple sales reps from colliding on the same lead.",
      "Direct integration with Meta Cloud API handles heavy media payloads and interactive template messages.",
      "Full audit logs track message delivery, read receipts, and agent SLA response times.",
    ],
    techStack: ["Node.js", "WhatsApp Cloud API", "Socket.io", "Redis Pub/Sub", "PostgreSQL", "React"],
    image: "/images/projects/agora.svg",
    githubUrl: "https://github.com/akashjadon04/agora",
  },
];
