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
  howItWorks: string;
  howWeEngineeredIt: string;
  evolnexContribution: string;
  metrics: { label: string; value: string; detail?: string }[];
  invariants: string[];
  keyFeatures: string[];
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
    role: "Lead Automation Architect · Evolnex Digital",
    architectureSummary:
      "A sovereign distributed synchronization fabric resolving multi-cloud race conditions between enterprise CRMs and operational databases. Implements SHA-256 state delta diffing and distributed Redis mutex locking to eliminate recursive webhook feedback loops across 246 active execution nodes.",
    howItWorks:
      "TandemFlow acts as an autonomous synchronization mesh connecting disparate enterprise data layers (Salesforce, Close CRM, HubSpot, and PostgreSQL). When an entity mutates in any upstream system, TandemFlow captures the event via high-concurrency webhook listeners, canonicalizes all fields into a normalized schema, computes a SHA-256 state delta hash against the last known persistent state, and executes atomic differential updates only if true structural change occurred. This prevents cascade triggers and duplicate webhook invocations.",
    howWeEngineeredIt:
      "We engineered a distributed locking manager using Redis atomic mutexes with leasing timeouts (SETNX with dynamic TTL heartbeats). When a synchronization cycle commences for a specific entity ID, the worker acquires an exclusive mutex lock with a 30-second TTL. Concurrent worker attempts receive an immediate lock rejection or enter a prioritized FIFO retry queue, eliminating race conditions across 246 distributed execution nodes. If an external API returns HTTP 429 rate limits, the transaction payload is seamlessly routed to an encrypted Dead-Letter Queue (DLQ) with exponential jitter backoff.",
    evolnexContribution:
      "Evolnex Digital conceptualized and developed the core synchronization kernel, the cryptographic SHA-256 delta diffing pipeline, and the distributed Redis mutex cluster. Evolnex Digital engineered the high-concurrency failover architecture, enabling 246 nodes to operate continuously with zero state divergence and 99.99% idempotency.",
    metrics: [
      { label: "Active Nodes", value: "246", detail: "Synchronized distributed nodes" },
      { label: "Delta Diff Sync", value: "<180ms", detail: "End-to-end mutation latency" },
      { label: "Loop Echoes", value: "0.00%", detail: "Zero recursive webhook feedback" },
      { label: "Idempotency", value: "99.99%", detail: "Guaranteed exactly-once execution" },
    ],
    invariants: [
      "Distributed Redis Mutex lock manager with TTL heartbeat prevents concurrent write collisions.",
      "Cryptographic SHA-256 payload delta hashing eliminates infinite webhook echo loops.",
      "Three-tier exponential jitter backoff with automated dead-letter queue routing.",
      "Strict transactional idempotency guarantees exactly-once execution across multi-region clusters.",
    ],
    keyFeatures: [
      "246-Node Distributed Execution Cluster with automatic shard balancing",
      "Cryptographic SHA-256 Delta State Diffing for payload change detection",
      "Distributed Redis Mutex Locking (SETNX) with TTL leasing & dead-man switch",
      "Automated Dead-Letter Queue (DLQ) with one-click message replay & audit tracing",
      "Zero-dependency webhook normalization pipeline supporting 12+ enterprise CRMs",
    ],
    techStack: ["Make.com", "Redis Mutex", "TypeScript", "Node.js", "SHA-256 Delta Diff", "Webhooks", "PostgreSQL"],
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
    role: "Lead Backend Architect · Evolnex Digital",
    architectureSummary:
      "An enterprise logistics and order routing engine managing high-velocity order dispatch between Shopify, NetSuite ERP, and regional 3PL fulfillment centers. Fronted by a high-throughput FastAPI decision gateway with automated schema drift interception, audit logging, and poisonous message replay.",
    howItWorks:
      "TitanRail intercepts e-commerce orders, wholesale B2B purchases, and warehouse fulfillment notices in real time. Incoming orders are ingested through an asynchronous FastAPI decision gateway that verifies customer identity, runs inventory availability checks, and calculates optimal warehouse assignment based on postal geo-routing before handing off to Make.com execution pipelines and warehouse 3PL APIs.",
    howWeEngineeredIt:
      "We engineered the system around strict transactional boundaries. The FastAPI gateway utilizes Pydantic V2 for sub-millisecond payload validation and automated schema drift rejection. Orders are enqueued into Redis-backed Celery worker queues with strict FIFO ordering, guaranteeing that inventory reservations mirror physical stock exactly. Poisonous payloads or malformed addresses are quarantined into an isolated DLQ without stalling downstream fulfillment streams.",
    evolnexContribution:
      "Evolnex Digital spearheaded the systems design, the asynchronous Python FastAPI decision gateway, and the comprehensive DLQ quarantine architecture. Evolnex Digital successfully deployed TitanRail to handle 5,000+ orders per hour during Black Friday flash sales with zero dropped transactions.",
    metrics: [
      { label: "Throughput", value: "5,000+/hr", detail: "Peak orders processed without queuing" },
      { label: "Dropped Orders", value: "0", detail: "Zero lost transactions under burst load" },
      { label: "Decision Latency", value: "<45ms", detail: "Sub-50ms routing decisions" },
      { label: "DLQ Recovery", value: "100%", detail: "Automated quarantine & replay rate" },
    ],
    invariants: [
      "FastAPI asynchronous decision gateway validates payload schemas before Make.com ingestion.",
      "Automated Dead-Letter Queue (DLQ) with one-click replay and poison pill quarantine.",
      "Strict FIFO queue ordering guarantees warehouse inventory alignment during flash sales.",
      "Comprehensive telemetry with distributed trace headers across all third-party logistics APIs.",
    ],
    keyFeatures: [
      "High-throughput FastAPI gateway handling 5,000+ orders/hour concurrently",
      "Dynamic multi-warehouse 3PL routing based on inventory proximity & SLA",
      "Automated schema drift detection with immediate poison payload isolation",
      "Audit trail logging with OpenTelemetry distributed trace context propagation",
      "Native integrations with Shopify Plus, NetSuite ERP, ShipStation, and custom 3PL WMS",
    ],
    techStack: ["Make.com DLQ", "FastAPI", "Python 3.12", "Redis Queue", "Celery", "Shopify/NetSuite", "Docker"],
    image: "/images/projects/titan-rail.svg",
    githubUrl: "https://github.com/akashjadon04/titan-rail",
  },

  // 3. Enterprise Automation: SchemaForge
  {
    id: "schema-forge",
    title: "SchemaForge",
    category: "Enterprise Automation",
    tagline: "Zero-Dependency Offline AST Compiler, Scenario Linter & CI/CD Regression Test Runner for Make.com Blueprints",
    role: "Lead Compiler & DevTools Engineer · Evolnex Digital",
    architectureSummary:
      "A sovereign developer tool and AST compiler that statically analyzes Make.com blueprint scenarios offline. Detects circular dependencies, unhandled exception paths, unbound variables, and breaking schema changes in GitHub Actions CI/CD before scenarios ever hit production.",
    howItWorks:
      "SchemaForge parses the raw JSON serialization of complex Make.com scenarios and constructs a directed acyclic graph (DAG) representation in memory. It traverses the node tree using a recursive AST visitor pattern, evaluating variable bindings, data mapping references, and module execution conditions against 35+ architectural heuristics.",
    howWeEngineeredIt:
      "Built completely in pure TypeScript with zero external runtime dependencies. We implemented Tarjan's strongly connected components algorithm to detect recursive feedback loops at compile time. SchemaForge can be executed locally as a CLI or embedded directly into GitHub Actions workflows, failing pull requests if broken endpoints or orphaned data references are introduced.",
    evolnexContribution:
      "Evolnex Digital created the AST parser, graph cycle detection algorithms, and automated CI/CD integration rules, solving the industry-wide problem of undocumented and fragile enterprise low-code automations.",
    metrics: [
      { label: "AST Parse Time", value: "<12ms", detail: "Instant compilation of multi-hundred node DAGs" },
      { label: "Dependencies", value: "Zero (Pure TS)", detail: "Lightweight, zero-vulnerability runtime" },
      { label: "Linting Rules", value: "35+ Checks", detail: "Comprehensive schema & logic checks" },
      { label: "CI/CD Native", value: "GitHub Actions", detail: "Automated regression testing" },
    ],
    invariants: [
      "Offline recursive AST parser traverses nested scenario blueprints with zero external network calls.",
      "Static cycle detection algorithm identifies unbounded feedback loops at compile time.",
      "Detects orphaned data mappings and deprecated endpoint references across complex DAGs.",
      "Generates automated markdown change logs and visual architectural topology graphs.",
    ],
    keyFeatures: [
      "Zero-dependency pure TypeScript compiler and recursive AST walker",
      "Tarjan cycle detection identifying infinite recursion in multi-path scenarios",
      "Detects unbound variables and deprecated API contract breaks before deployment",
      "Native GitHub Actions CI/CD integration with automated PR comments & diff previews",
      "Automatic Mermaid.js architectural topology diagram generation",
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
    role: "Lead Automation Engineer · Evolnex Digital",
    architectureSummary:
      "A Manifest V3 browser orchestration runtime utilizing low-level Chrome DevTools Protocol (CDP) hooks. Executes high-volume data harvesting, dynamic UI workflows, and authenticated enterprise portal synchronization while maintaining complete invisibility to advanced bot mitigations.",
    howItWorks:
      "Metis operates within the browser runtime as a sovereign extension agent. Rather than using vulnerable high-level automation drivers, Metis communicates directly with the Chrome DevTools Protocol over isolated WebSocket pipes. It monitors DOM tree mutations through reactive observers and dispatches human-like interactions without triggering bot defenses.",
    howWeEngineeredIt:
      "We engineered dynamic evasion algorithms that intercept runtime fingerprint probes. Metis injects randomized micro-delays into keystrokes, calculates organic Bézier trajectory curves for mouse pointer movements, and sanitizes JavaScript execution context flags (such as window.navigator.webdriver). Sandboxed worker sessions guarantee zero cookie or session token leakage.",
    evolnexContribution:
      "Evolnex Digital developed the low-level CDP socket hook architecture, the anti-detection fingerprint shielding algorithms, and the asynchronous DOM mutation scheduler.",
    metrics: [
      { label: "Bot Mitigation", value: "100% Stealth", detail: "Bypasses Cloudflare, Datadome, Akamai" },
      { label: "Anti-Bot Bypasses", value: "40+ Vectors", detail: "Fingerprint & timing protection" },
      { label: "Architecture", value: "Chrome MV3", detail: "Future-proof modern extension engine" },
      { label: "Protocol", value: "Native CDP", detail: "Direct Chrome DevTools Protocol control" },
    ],
    invariants: [
      "Direct CDP socket injection bypasses standard window.navigator automation flags.",
      "Human-mimicking bezier mouse trajectories and randomized micro-keystroke latencies.",
      "Zero persistent cookies or fingerprint leakage across sandboxed worker sessions.",
      "Dynamic DOM mutation observers handle asynchronous hydration without brittle sleep timers.",
    ],
    keyFeatures: [
      "Manifest V3 Chrome architecture utilizing raw CDP WebSocket communication",
      "Humanized Bézier curve mouse trajectory generation with realistic acceleration physics",
      "Dynamic MutationObserver state machine eliminating brittle fixed-time sleep delays",
      "Zero session leakage between isolated execution sandboxes",
      "Automated extraction pipelines for authenticated enterprise single-page applications",
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
    role: "Lead Infrastructure Engineer · Evolnex Digital",
    architectureSummary:
      "A high-throughput email ingestion gateway and real-time webhook dispatch engine built in Go. Ingests raw RFC 5322 MIME streams, strips malicious payloads, validates DKIM/SPF signatures, and publishes clean structured JSON events to distributed message brokers with sub-30ms latency.",
    howItWorks:
      "Keryx functions as an ultra-fast headless mail transfer agent (MTA) listener. Incoming emails received over SMTP or IMAP are ingested directly into memory-mapped stream buffers. Keryx decrypts, unpacks multipart boundaries, validates DKIM/SPF/DMARC authentication, scans attachments in memory, and converts MIME headers into structured JSON payloads published to RabbitMQ or webhooks.",
    howWeEngineeredIt:
      "Implemented in Go 1.22 using Fiber and lightweight goroutine worker pools. Attachments are streamed directly to S3-compatible object stores without touching disk IO, minimizing memory overhead and achieving sub-30ms processing latency. Built with at-least-once delivery guarantees and persistent retry queues.",
    evolnexContribution:
      "Evolnex Digital architected the Go concurrency pool, the memory-mapped streaming MIME parser, and the guaranteed at-least-once webhook delivery broker, delivering enterprise infrastructure capable of handling 100k+ emails daily.",
    metrics: [
      { label: "Daily Volume", value: "100k+ Ingested", detail: "Scalable high-concurrency ingestion" },
      { label: "Stream Latency", value: "<30ms", detail: "Sub-30ms memory-mapped stream parsing" },
      { label: "Deliverability", value: "99.8%", detail: "Zero-drop webhook fanout" },
      { label: "Spec Compliance", value: "RFC 5322", detail: "Strict RFC standards compliance" },
    ],
    invariants: [
      "High-concurrency Go worker pool processes thousands of incoming SMTP/IMAP connections in parallel.",
      "Automated DKIM, SPF, and DMARC verification pipeline prevents header spoofing.",
      "Zero-disk memory stream parsing for ultra-fast attachment scanning and JSON transformation.",
      "Guaranteed at-least-once webhook delivery with exponential backoff and replay logs.",
    ],
    keyFeatures: [
      "High-concurrency Go goroutine worker pools handling thousands of parallel SMTP connections",
      "Full DKIM, SPF, and DMARC cryptographic signature verification and spoof detection",
      "Zero-disk memory streaming with direct S3 attachment offloading",
      "Clean JSON webhook serialization and RabbitMQ / Kafka event publishing",
      "Comprehensive telemetry with Prometheus metrics and Grafana dashboards",
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
    role: "Lead AI Runtime Architect · Evolnex Digital",
    architectureSummary:
      "An open-source, enterprise-grade runtime harness for autonomous AI agents built on Java 21 Virtual Threads. Implements full Model Context Protocol (MCP) clients with sandboxed process isolation, dynamic tool discovery, distributed memory synchronization, and hot-reloadable capability modules.",
    howItWorks:
      "BossConsole provides an execution environment where frontier LLMs (Claude 3.5 Sonnet, Gemini 2.5, DeepSeek) operate as sovereign agents with tool-use autonomy. It implements standard Model Context Protocol (MCP) clients across both stdio child processes and Server-Sent Events (SSE) network streams, allowing agents to dynamically query, select, and invoke 100+ system and developer tools safely.",
    howWeEngineeredIt:
      "Engineered on Java 21 using Project Loom Virtual Threads. Each agent reasoning loop executes on a lightweight virtual thread, enabling thousands of concurrent agent sessions without thread pool exhaustion. We implemented strict process isolation, sandboxing tool executions to prevent destructive operations. Real-time thought trajectories and tool outputs stream over Server-Sent Events with sub-10ms dispatch latency.",
    evolnexContribution:
      "Evolnex Digital led the JVM runtime architecture, the Model Context Protocol implementation, the sandboxed process supervisor, and the desktop terminal interface.",
    metrics: [
      { label: "Connected MCP Tools", value: "100+", detail: "Full protocol compatibility" },
      { label: "Concurrency", value: "Virtual Threads", detail: "Java 21 Project Loom lightweight threads" },
      { label: "Tool Dispatch", value: "<10ms", detail: "Sub-10ms tool call execution overhead" },
      { label: "Runtime", value: "Java 21 JVM", detail: "High-performance enterprise JVM" },
    ],
    invariants: [
      "Java 21 Project Loom virtual threads allow thousands of concurrent agent reasoning loops.",
      "Strict Model Context Protocol (MCP) client implementation with protocol-level safety guards.",
      "Process-level OS sandboxing prevents unauthorized agent system modifications.",
      "Real-time SSE event streaming delivers agent thought trajectories and tool outputs with zero jitter.",
    ],
    keyFeatures: [
      "Native Java 21 Virtual Threads harness running thousands of parallel reasoning loops",
      "Model Context Protocol (FastMCP) integration over stdio and Server-Sent Events (SSE)",
      "OS-level process sandboxing with granular capability restrictions and whitelist policies",
      "Streaming reasoning parser separating internal thought tokens from finalized tool arguments",
      "Dynamic MCP tool discovery and hot-reloadable plugin architecture",
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
    role: "Lead AI Architect · Evolnex Digital",
    architectureSummary:
      "A sovereign multi-model AI workspace unifying Claude 3.5 Sonnet, GPT-4o, and DeepSeek-V3 into a collaborative reasoning canvas. Features an in-browser WebContainer code sandbox with live hot-reloading, multimodal PDF/image parsing, and strict client-side session encryption with zero data retention.",
    howItWorks:
      "Astra AI operates as an intelligent workspace where users interact with multiple state-of-the-art models side-by-side. The workspace features an integrated Code Canvas that spins up an ephemeral WebContainer inside the user's browser, compiling and running full-stack React, Node.js, and Python code in real time without server-side infrastructure costs.",
    howWeEngineeredIt:
      "Built with Next.js 15 App Router and WebContainers. We engineered a 4,400+ LOC runtime kernel with per-provider Finite State Machine (FSM) circuit breakers. If an external model provider degrades or rate-limits, Astra AI dynamically fails over to an equivalent reasoning model within 40ms. Sessions are protected with client-side AES-256 encryption, ensuring zero enterprise prompt data retention.",
    evolnexContribution:
      "Evolnex Digital architected the multi-model intelligent routing kernel, the FSM circuit breakers, the client-side cryptographic keystore, and the WebContainer browser sandboxing layer.",
    metrics: [
      { label: "Model Engines", value: "3-Tier Router", detail: "Claude 3.5 Sonnet, GPT-4o, DeepSeek" },
      { label: "Sandbox", value: "WebContainers", detail: "In-browser virtual Node.js runtime" },
      { label: "Data Retention", value: "0% (Zero Log)", detail: "Strict client-side session encryption" },
      { label: "TTFT Latency", value: "<40ms", detail: "Time-to-first-token streaming optimization" },
    ],
    invariants: [
      "Dynamic query classification routing requests to the optimal reasoning model per task.",
      "Client-side WebContainer execution environment compiles and executes code without server overhead.",
      "Multimodal vision pipeline processes architectural blueprints and diagrams with high fidelity.",
      "Encrypted session storage guarantees complete enterprise confidentiality.",
    ],
    keyFeatures: [
      "Multi-model routing kernel dynamically selecting between Claude, GPT-4o, and DeepSeek",
      "Interactive in-browser WebContainer code sandbox with instant hot-reload & preview",
      "Per-provider Finite State Machine (FSM) circuit breakers preventing cascading API timeouts",
      "Multimodal PDF, diagram, and image parsing with deep architectural comprehension",
      "Zero-log ephemeral architecture with client-side AES-256 session encryption",
    ],
    techStack: ["Next.js 15", "WebContainers", "Claude 3.5 Sonnet", "GPT-4o", "DeepSeek", "TypeScript", "Tailwind CSS"],
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
    role: "Lead Agentic Systems Architect · Evolnex Digital",
    architectureSummary:
      "A heterogeneous multi-agent research collective coordinating autonomous specialized agents. Scout agents perform real-time web grounding, Fact-Checkers verify source validity against ground truth, Schema Architects synthesize validated Pydantic JSON schemas, and Dispatchers push intelligence briefs to multi-channel webhooks.",
    howItWorks:
      "AstraMind coordinates four distinct agent personas executing a cyclic research DAG. Upon receiving a research topic, the Supervisor Agent splits questions across Scout agents querying web APIs. Raw findings pass to Fact-Checker agents for hallucination filtering. Once cross-verified, Schema Architects transform findings into structured Pydantic models and generate formatted briefing docs.",
    howWeEngineeredIt:
      "Engineered in Python 3.12 using LangGraph state machines and Redis message brokers. We implemented automated reflection loops: if a Fact-Checker flags an ungrounded claim, the graph rejects the node and triggers a targeted query pass. Output schemas are strictly validated with Pydantic V2, guaranteeing 100% syntactically correct JSON delivery.",
    evolnexContribution:
      "Evolnex Digital created the LangGraph multi-agent orchestration topology, the automated hallucination reflection loop, and the multi-channel dispatch architecture.",
    metrics: [
      { label: "Agent Specialists", value: "4 Distinct Roles", detail: "Scout, Fact-Checker, Architect, Dispatcher" },
      { label: "Source Grounding", value: "100% Citations", detail: "Every claim backed by verified URLs" },
      { label: "Validation", value: "Pydantic V2", detail: "Guaranteed typed schema compliance" },
      { label: "Channels", value: "Slack / Telegram / REST", detail: "Multi-channel intelligence delivery" },
    ],
    invariants: [
      "Hierarchical supervisor architecture coordinates asynchronous sub-agent task delegations.",
      "Fact-checking reflection loop flags and rejects ungrounded hallucinations automatically.",
      "Strict Pydantic V2 output schemas guarantee zero malformed JSON delivered to downstream consumers.",
      "Persistent vector memory cache eliminates duplicate research overhead across related topics.",
    ],
    keyFeatures: [
      "LangGraph cyclic state machine coordinating specialized autonomous agent roles",
      "Automated reflection loops validating source grounding and pruning hallucinations",
      "Strict Pydantic V2 JSON output schemas guaranteed for downstream API consumption",
      "Persistent vector memory cache eliminating redundant search queries",
      "Multi-channel webhook dispatch supporting Slack, Telegram, and REST endpoints",
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
    role: "Lead Frontend Systems Engineer · Evolnex Digital",
    architectureSummary:
      "A visual node-based IDE for architecting, debugging, and executing complex multi-agent directed acyclic graphs (DAGs). Provides real-time execution flow visualization, cycle detection, breakpoint stepping, dynamic edge routing, and distributed state inspection at 60 FPS.",
    howItWorks:
      "Mitos empowers systems architects to visually design agent workflows, tool dependencies, and conditional branches. Users drag and drop LLM reasoning nodes, tool execution blocks, and conditional routers on an infinite canvas. When executed, Mitos animates the live token stream and state transitions across active nodes in real time.",
    howWeEngineeredIt:
      "Engineered with React Flow, TypeScript, and a high-performance Rust WebAssembly (Wasm) graph execution engine. We decoupled canvas rendering from the backend WebSocket stream, allowing 1,000+ interactive nodes to animate smoothly at 60 FPS. Included time-travel state debugging, enabling architects to step backward through agent decision paths.",
    evolnexContribution:
      "Evolnex Digital developed the Rust Wasm graph evaluation engine, the 60 FPS canvas rendering pipeline, and the time-travel state inspector.",
    metrics: [
      { label: "Frame Rate", value: "60 FPS Canvas", detail: "Hardware-accelerated infinite canvas" },
      { label: "DAG Engine", value: "Cycle Safe", detail: "Tarjan cycle detection in Rust Wasm" },
      { label: "State Sync", value: "WebSockets", detail: "Sub-15ms bi-directional state reflection" },
      { label: "Core Execution", value: "Wasm Accelerated", detail: "Near-native graph computation" },
    ],
    invariants: [
      "Hardware-accelerated infinite canvas supporting 1,000+ interactive nodes without performance drops.",
      "Real-time cycle detection algorithms prevent deadlocks in autonomous execution paths.",
      "Time-travel state debugging enables stepping backwards through agent decision branches.",
      "Bi-directional WebSocket streaming reflects distributed backend agent states in real time.",
    ],
    keyFeatures: [
      "Hardware-accelerated infinite canvas supporting 1,000+ nodes with zero frame drops",
      "Rust WebAssembly (Wasm) core evaluating graph topologies and cycle invariants",
      "Time-travel debugging enabling backwards state inspection across agent decision trees",
      "Bi-directional WebSocket streaming mirroring remote distributed agent runtimes",
      "Custom node library for MCP tool servers, model cascading, and human-in-the-loop gates",
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
    role: "Lead SaaS & Backend Architect · Evolnex Digital",
    architectureSummary:
      "A dual-engine enterprise quoting platform deployed for Swiss general contractors. Ingests raw voice notes and trade descriptions, invokes a 3-tier LLM cascade to parse construction line items, computes automated 8.1% Swiss VAT and 5-centime commercial rounding in <50ms, and generates branded PDF quotes backed by multi-tenant Stripe subscriptions.",
    howItWorks:
      "DevisBat / AstraQuote revolutionizes how Swiss contractors generate complex trade estimates. Technicians on construction job sites record short voice notes or upload messy photos. The platform normalizes audio into clean text, executes a 3-tier LLM cascade against a 16,800+ trade catalogue, maps exact unit rates (materials, labor, disposal), calculates statutory 8.1% Swiss VAT, and compiles a branded PDF quote with Swiss QR-bill integration in seconds.",
    howWeEngineeredIt:
      "Built on Next.js 15 and FastAPI backed by PostgreSQL with Row-Level Security (RLS). We implemented a deterministic commercial rounding algorithm enforcing Swiss 5-centime currency laws in sub-50ms execution times. Designed an autonomous lead intelligence pipeline using distributed Redis atomic locks (SETNX) across 50,000+ operations, eliminating 100% of webhook race conditions.",
    evolnexContribution:
      "Evolnex Digital architected the entire platform from zero to production—delivering the 3-tier LLM cascade, the sub-50ms Swiss VAT engine, the Redis lead concurrency pipeline, and the multi-tenant Stripe billing system.",
    metrics: [
      { label: "Quotes Processed", value: "CHF 2.4M+", detail: "Commercial quote volume generated" },
      { label: "Swiss VAT Engine", value: "8.1% + 5c Round", detail: "Statutory Swiss commercial tax compliance" },
      { label: "Margin Compute", value: "<50ms", detail: "Instantaneous sub-50ms line-item calculation" },
      { label: "Quote Accuracy", value: "99.9%", detail: "Trade catalog cross-referencing precision" },
    ],
    invariants: [
      "Three-tier LLM cascade cross-references trade terminology against local Swiss supplier price indices.",
      "Sub-50ms deterministic calculation engine enforces strict Swiss commercial VAT rounding rules.",
      "Automated WeasyPrint engine compiles dynamic HTML5 templates into pixel-perfect PDF quotes.",
      "Multi-tenant PostgreSQL architecture with Stripe customer billing webhooks and usage quotas.",
    ],
    keyFeatures: [
      "3-tier LLM cascade transforming unstructured voice notes into itemized quotes",
      "Statutory Swiss VAT calculation engine with 8.1% tax and 5-centime commercial rounding",
      "Autonomous lead engine with E.164 normalization & Redis SETNX concurrency locks",
      "Multi-tenant PostgreSQL architecture protected by granular Row-Level Security (RLS)",
      "Automated Swiss QR-bill invoice and pixel-perfect PDF generation via WeasyPrint",
    ],
    techStack: ["Next.js 15", "FastAPI", "PostgreSQL", "Stripe Billing", "LLM Cascade", "Swiss VAT Engine", "Redis"],
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
    role: "Lead Data & Distributed Systems Architect · Evolnex Digital",
    architectureSummary:
      "A high-concurrency event telemetry fabric written in C# and .NET 9. Ingests tens of thousands of event streams per second into high-performance memory-mapped ring buffers, flushing into columnar Parquet/ClickHouse storage for sub-second analytical aggregations without tracking cookies or third-party ad networks.",
    howItWorks:
      "Argus serves as a sovereign, self-hosted web analytics and event telemetry engine. Lightweight client beacons push cryptographically salted events to the ingestion gateway. Argus buffers incoming packets in lock-free memory ring buffers, strips personally identifiable information (PII), batches writes into columnar ClickHouse tables, and enables real-time OLAP aggregations across billions of rows.",
    howWeEngineeredIt:
      "Engineered in C# on .NET 9 utilizing high-performance Span<T> and Memory<T> abstractions to achieve zero-allocation ingestion. P99 ingestion latency stays below 15ms even under 50,000+ events per second. Columnar snappy compression reduces storage requirements by 82% compared to traditional relational analytics stores.",
    evolnexContribution:
      "Evolnex Digital created the zero-allocation .NET 9 ingestion pipeline, the columnar ClickHouse storage layout, and the privacy-preserving salt-hashing algorithms.",
    metrics: [
      { label: "Peak Ingestion", value: "50,000+ evt/s", detail: "High-concurrency packet processing" },
      { label: "P99 Ingestion Latency", value: "<15ms", detail: "Sub-15ms memory-mapped ring buffer" },
      { label: "Storage Engine", value: "ClickHouse / Parquet", detail: "Snappy columnar compression" },
      { label: "Privacy Standard", value: "GDPR / Zero Cookie", detail: "100% compliant zero-PII storage" },
    ],
    invariants: [
      "Lock-free ring buffers in .NET 9 deliver zero-allocation high-frequency packet ingestion.",
      "Automated schema evolution and snappy columnar compression reduce storage footprint by 82%.",
      "Sub-second aggregation queries over billions of telemetry rows via ClickHouse vector engines.",
      "Strict IP hashing and zero PII storage guarantee 100% GDPR and CCPA compliance.",
    ],
    keyFeatures: [
      "Zero-allocation event ingestion pipeline written in C# and .NET 9",
      "Lock-free memory-mapped ring buffers processing 50,000+ packets/sec",
      "Columnar ClickHouse and Apache Parquet storage with 82% compression ratio",
      "Cryptographic IP salting ensuring 100% GDPR, CCPA, and ePrivacy compliance",
      "Real-time OLAP aggregation API executing queries across billions of rows in <200ms",
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
    role: "Lead Backend Architect · Evolnex Digital",
    architectureSummary:
      "An extensible enterprise core written in Go and Fiber. Features dynamic runtime table schema migrations, granular row-level security (RLS), custom workflow triggers, and enterprise SSO integration, providing a self-hosted alternative to brittle commercial SaaS platforms.",
    howItWorks:
      "Archon allows enterprise teams to construct custom internal software, relational data tables, and automated workflow triggers without relying on proprietary no-code platforms. Administrators define dynamic schemas through a visual interface, which Archon maps directly to indexed PostgreSQL relational tables on the fly.",
    howWeEngineeredIt:
      "Engineered in Go 1.22 using the Fiber HTTP framework to ensure sub-5ms P95 API response times. Schema migrations run transactionally inside PostgreSQL without table locks or database downtime. We enforced granular Row-Level Security (RLS) directly at the database level, ensuring tenant data remains strictly segregated even during complex join queries.",
    evolnexContribution:
      "Evolnex Digital architected the dynamic schema migration core, the Go Fiber REST API, and the PostgreSQL RLS tenant isolation model.",
    metrics: [
      { label: "API Response P95", value: "<5ms", detail: "Sub-5ms response under heavy concurrency" },
      { label: "Isolation", value: "Multi-Tenant RLS", detail: "PostgreSQL transaction-level isolation" },
      { label: "Language", value: "Go 1.22 (Fiber)", detail: "Lightweight, zero-overhead binary" },
      { label: "Database", value: "PostgreSQL 16", detail: "Dynamic indexed relational schemas" },
    ],
    invariants: [
      "Dynamic schema builder creates fully indexed relational tables on the fly without database downtime.",
      "Granular row-level security (RLS) policies enforced directly inside PostgreSQL database transactions.",
      "Lightweight Go Fiber HTTP core provides sub-5ms API response times under heavy concurrent load.",
      "Integrated event bus allows custom webhooks and automation triggers on any table mutation.",
    ],
    keyFeatures: [
      "Dynamic schema builder generating indexed PostgreSQL tables with zero downtime",
      "Granular multi-tenant Row-Level Security (RLS) enforced at the database transaction layer",
      "Go 1.22 and Fiber HTTP core delivering sub-5ms API response latencies",
      "Native webhook event bus triggering external microservices on any table mutation",
      "Enterprise SSO integration supporting SAML 2.0 and OAuth2 / OIDC authentication",
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
    role: "Lead Full-Stack Architect · Evolnex Digital",
    architectureSummary:
      "A real-time omnichannel sales CRM unifying WhatsApp Business Cloud API, email streams, and webchat into a consolidated high-velocity inbox. Features AI-powered response suggestions, automated customer intent tagging, and sub-100ms message synchronization across multi-agent sales teams.",
    howItWorks:
      "Agora consolidates high-volume sales interactions from WhatsApp, emails, and SMS into a single collaborative inbox. When a prospect reaches out, Agora ingests the message via Meta Cloud webhooks, runs intent classification with an embedded language model, suggests customized responses, and routes the lead to available sales representatives.",
    howWeEngineeredIt:
      "Built with Node.js, Socket.io, Redis Pub/Sub, and PostgreSQL. We implemented an automated conversation lock mechanism: when an agent opens a conversation, a Redis lease lock is established, alerting other reps and preventing duplicate customer replies. Real-time WebSocket event dispatch pushes new messages to all browser sessions in under 100ms.",
    evolnexContribution:
      "Evolnex Digital developed the WhatsApp Cloud API webhook listener, the Redis Pub/Sub concurrency locking mechanism, and the real-time collaborative frontend interface.",
    metrics: [
      { label: "Active Conversations", value: "15,000+", detail: "High-volume customer interactions" },
      { label: "Webhook Sync", value: "<100ms", detail: "Sub-100ms real-time message dispatch" },
      { label: "Messaging Protocol", value: "WhatsApp Cloud API", detail: "Official Meta Business Cloud integration" },
      { label: "Event Architecture", value: "Redis Pub/Sub", detail: "Real-time horizontal scaling" },
    ],
    invariants: [
      "Real-time WebSocket event dispatch pushes new customer messages to all team agents instantly.",
      "Automated conversation lock prevents multiple sales reps from colliding on the same lead.",
      "Direct integration with Meta Cloud API handles heavy media payloads and interactive template messages.",
      "Full audit logs track message delivery, read receipts, and agent SLA response times.",
    ],
    keyFeatures: [
      "Native WhatsApp Business Cloud API integration supporting text, audio, and media",
      "Unified omnichannel inbox merging WhatsApp, email, and live website chat",
      "Automated conversation collision prevention via Redis atomic lease locks",
      "Real-time Socket.io and Redis Pub/Sub event dispatch delivering messages in <100ms",
      "Embedded AI intent classification generating draft responses for sales representatives",
    ],
    techStack: ["Node.js", "WhatsApp Cloud API", "Socket.io", "Redis Pub/Sub", "PostgreSQL", "React", "TypeScript"],
    image: "/images/projects/agora.svg",
    githubUrl: "https://github.com/akashjadon04/agora",
  },
];
