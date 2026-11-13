import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Bot, Network, FileText, ArrowRight, Mail } from "lucide-react";

export default function CinematicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Dynamic mouse sheen and 3D tilt on card hover only (zero global overhead)
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !phoneRef.current) return;
    if (window.innerWidth < 768) return;

    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
    cardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

    const tiltX = (mouseX / rect.width - 0.5) * 2;
    const tiltY = (mouseY / rect.height - 0.5) * 2;

    gsap.to(phoneRef.current, {
      rotationY: tiltX * 10,
      rotationX: -tiltY * 10,
      ease: "power2.out",
      duration: 0.6,
      overwrite: "auto",
    });
  };

  const handleCardMouseLeave = () => {
    if (phoneRef.current) {
      gsap.to(phoneRef.current, {
        rotationY: 0,
        rotationX: 0,
        ease: "power2.out",
        duration: 0.8,
        overwrite: "auto",
      });
    }
  };

  // GSAP ScrollTrigger pinned timeline
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const isMobile = window.innerWidth < 768;
    const container = sectionRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Set initial states (Hardware accelerated)
      gsap.set(".cinematic-text-track", {
        autoAlpha: 0,
        y: 40,
        scale: 0.9,
        rotationX: -15,
        force3D: true,
      });

      gsap.set(".cinematic-text-days", {
        autoAlpha: 1,
        clipPath: "inset(0 100% 0 0)",
        force3D: true,
      });

      gsap.set(".cinematic-main-card", {
        y: window.innerHeight + 120,
        autoAlpha: 1,
        force3D: true,
      });

      gsap.set(
        [
          ".cinematic-card-left",
          ".cinematic-card-right",
          ".cinematic-mockup-wrapper",
          ".cinematic-badge",
          ".cinematic-phone-widget",
        ],
        { autoAlpha: 0, force3D: true }
      );

      gsap.set(".cinematic-cta-wrapper", {
        autoAlpha: 0,
        scale: 0.85,
        force3D: true,
      });

      // Entrance text reveal
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
        .to(".cinematic-text-track", {
          duration: 1.4,
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          ease: "expo.out",
          force3D: true,
        })
        .to(
          ".cinematic-text-days",
          {
            duration: 1.2,
            clipPath: "inset(0 0% 0 0)",
            ease: "power4.inOut",
            force3D: true,
          },
          "-=0.8"
        );

      // Pinned Scroll Timeline: Smooth entrance & phone reveal, then FAST exit after phone renders
      gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: isMobile ? "+=3000" : "+=4200",
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        })
        // Phase 1: Smooth, steady entrance of card & text
        .to(
          [".cinematic-hero-text", ".bg-grid-theme"],
          {
            scale: 1.1,
            opacity: 0.1,
            ease: "power2.inOut",
            duration: 2.0,
            force3D: true,
          },
          0
        )
        .to(
          ".cinematic-main-card",
          {
            y: 0,
            ease: "power3.inOut",
            duration: 2.0,
            force3D: true,
          },
          0
        )
        .to(".cinematic-main-card", {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5,
          force3D: true,
        })
        // Phase 2: iPhone mockup & live telemetry widgets smoothly appear
        .fromTo(
          ".cinematic-mockup-wrapper",
          { y: 180, z: -300, rotationX: 30, rotationY: -18, autoAlpha: 0, scale: 0.8 },
          {
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            autoAlpha: 1,
            scale: 1,
            ease: "expo.out",
            duration: 2.2,
            force3D: true,
          },
          "-=0.8"
        )
        .fromTo(
          ".cinematic-phone-widget",
          { y: 20, autoAlpha: 0, scale: 0.95 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            stagger: 0.1,
            ease: "back.out(1.2)",
            duration: 1.5,
            force3D: true,
          },
          "-=1.5"
        )
        .to(
          ".progress-ring",
          { strokeDashoffset: 50, duration: 1.8, ease: "power3.inOut" },
          "-=1.2"
        )
        .to(
          ".counter-val",
          {
            innerHTML: 13,
            snap: { innerHTML: 1 },
            duration: 1.8,
            ease: "expo.out",
          },
          "-=1.8"
        )
        .fromTo(
          ".cinematic-badge",
          { y: 50, autoAlpha: 0, scale: 0.8, rotationZ: -6 },
          {
            y: 0,
            autoAlpha: 1,
            scale: 1,
            rotationZ: 0,
            ease: "back.out(1.4)",
            duration: 1.5,
            stagger: 0.15,
            force3D: true,
          },
          "-=1.8"
        )
        .fromTo(
          ".cinematic-card-left",
          { x: -35, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5, force3D: true },
          "-=1.5"
        )
        .fromTo(
          ".cinematic-card-right",
          { x: 35, autoAlpha: 0, scale: 0.9 },
          { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5, force3D: true },
          "<"
        )
        // Phase 3: FAST transition right after mockup and data is shown!
        .to({}, { duration: 0.4 })
        .set(".cinematic-hero-text", { autoAlpha: 0 })
        .set(".cinematic-cta-wrapper", { autoAlpha: 1 })
        .to(
          [
            ".cinematic-mockup-wrapper",
            ".cinematic-badge",
            ".cinematic-card-left",
            ".cinematic-card-right",
          ],
          {
            scale: 0.94,
            y: -25,
            z: -120,
            autoAlpha: 0,
            ease: "power2.in",
            duration: 0.6,
            stagger: 0.03,
            force3D: true,
          }
        )
        .to(
          ".cinematic-main-card",
          {
            width: isMobile ? "94vw" : "86vw",
            height: isMobile ? "92vh" : "86vh",
            borderRadius: isMobile ? "28px" : "38px",
            ease: "expo.inOut",
            duration: 0.8,
            force3D: true,
          },
          "pullback"
        )
        .to(
          ".cinematic-cta-wrapper",
          { scale: 1, force3D: true, ease: "expo.inOut", duration: 0.8 },
          "pullback"
        )
        .to(".cinematic-main-card", {
          y: -window.innerHeight - 150,
          ease: "power2.in",
          duration: 0.6,
          force3D: true,
        });

    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="systems"
      ref={sectionRef}
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center bg-fable-midnight text-white font-sans antialiased"
      style={{ perspective: "1500px" }}
    >
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden="true" />

      {/* Stage 1: Entrance Headline */}
      <div className="cinematic-hero-text absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform">
        <h2 className="cinematic-text-track gsap-reveal text-3d-matte font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-2">
          SYSTEMS ARCHITECT
        </h2>
        <h2 className="cinematic-text-days gsap-reveal text-silver-matte font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter">
          AUTOMATION & AI
        </h2>
      </div>

      {/* Stage 2: Pinned 3D Depth Card Viewport */}
      <div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        style={{ perspective: "1500px" }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          className="cinematic-main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[94vw] md:w-[86vw] h-[92vh] md:h-[86vh] rounded-[28px] md:rounded-[38px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          <div className="relative w-full h-full max-w-7xl mx-auto px-4 lg:px-12 flex flex-col justify-evenly lg:grid lg:grid-cols-3 items-center lg:gap-8 z-10 py-6 lg:py-0">
            {/* Right Headline / Brand Display */}
            <div className="cinematic-card-right gsap-reveal order-1 lg:order-3 flex justify-center lg:justify-end z-20 w-full">
              <h2 className="font-cinzel text-5xl md:text-[5rem] lg:text-[6.5rem] font-black uppercase tracking-tighter text-card-silver-matte text-center lg:text-right">
                CRAFTSMAN
              </h2>
            </div>

            {/* Center 3D Hardware iPhone Showcase */}
            <div
              className="cinematic-mockup-wrapper order-2 lg:order-2 relative w-full h-[360px] lg:h-[580px] flex items-center justify-center z-10"
              style={{ perspective: "1000px" }}
            >
              <div className="relative w-full h-full flex items-center justify-center transform scale-[0.68] md:scale-85 lg:scale-100">
                <div
                  ref={phoneRef}
                  className="relative w-[280px] h-[570px] rounded-[3rem] iphone-bezel flex flex-col will-change-transform"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Hardware Buttons */}
                  <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                  <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                  {/* Phone Screen Canvas */}
                  <div className="absolute inset-[7px] bg-[#070314] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,1)] text-white z-10">
                    <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                    {/* Dynamic Island Notch */}
                    <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[26px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.9)] animate-pulse" />
                    </div>

                    <div className="relative w-full h-full pt-11 px-4 pb-6 flex flex-col">
                      {/* Top Header */}
                      <div className="cinematic-phone-widget flex justify-between items-center mb-5">
                        <div className="flex flex-col">
                          <span className="text-[9px] text-amber-400/90 uppercase tracking-widest font-bold">
                            ENGINE TELEMETRY
                          </span>
                          <span className="text-base font-bold font-cinzel tracking-tight text-white">
                            Akash Systems
                          </span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-amber-400/10 text-amber-300 flex items-center justify-center font-bold text-xs border border-amber-400/30">
                          AJ
                        </div>
                      </div>

                      {/* Circular Gauge */}
                      <div className="cinematic-phone-widget relative w-36 h-36 mx-auto flex items-center justify-center mb-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                        <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                          <circle cx="72" cy="72" r="52" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="9" />
                          <circle
                            className="progress-ring"
                            cx="72"
                            cy="72"
                            r="52"
                            fill="none"
                            stroke="#fbbf24"
                            strokeWidth="9"
                          />
                        </svg>
                        <div className="text-center z-10 flex flex-col items-center">
                          <span className="counter-val text-2xl font-extrabold tracking-tighter text-white font-cinzel">
                            0
                          </span>
                          <span className="text-[7.5px] text-amber-200/70 uppercase tracking-[0.15em] font-bold mt-0.5">
                            Shipped Systems
                          </span>
                        </div>
                      </div>

                      {/* Live System Widgets */}
                      <div className="space-y-2">
                        <div className="cinematic-phone-widget widget-depth rounded-xl p-2 flex items-center border border-cyan-400/20">
                          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-2 border border-cyan-400/30">
                            <Bot className="w-3.5 h-3.5 text-cyan-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-bold text-white tracking-tight truncate">Astra AI Workspace</div>
                            <div className="text-[9px] text-cyan-300/70 truncate">astra.ai · Multimodal Router</div>
                          </div>
                        </div>

                        <div className="cinematic-phone-widget widget-depth rounded-xl p-2 flex items-center border border-amber-400/20">
                          <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center mr-2 border border-amber-400/30">
                            <Network className="w-3.5 h-3.5 text-amber-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-bold text-white tracking-tight truncate">TandemFlow Sync Mesh</div>
                            <div className="text-[9px] text-amber-300/70 truncate">sync.evolnex.digital · 246 Synced Nodes</div>
                          </div>
                        </div>

                        <div className="cinematic-phone-widget widget-depth rounded-xl p-2 flex items-center border border-purple-400/20">
                          <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center mr-2 border border-purple-400/30">
                            <FileText className="w-3.5 h-3.5 text-purple-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-[11px] font-bold text-white tracking-tight truncate">AstraQuote Quoting SaaS</div>
                            <div className="text-[9px] text-purple-300/70 truncate">astraquote.com · Swiss VAT</div>
                          </div>
                        </div>
                      </div>

                      {/* Home Bar */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90px] h-[3.5px] bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badges */}
                <div className="cinematic-badge absolute flex top-6 lg:top-10 left-[-10px] lg:left-[-70px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-cyan-500/20 to-cyan-900/10 flex items-center justify-center border border-cyan-400/40">
                    <Sparkles className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">BossConsole</p>
                    <p className="text-cyan-200/60 text-[10px] lg:text-xs font-medium">100+ MCP Tools JVM</p>
                  </div>
                </div>

                <div className="cinematic-badge absolute flex bottom-12 lg:bottom-16 right-[-10px] lg:right-[-70px] floating-ui-badge rounded-xl lg:rounded-2xl p-3 lg:p-4 items-center gap-3 z-30">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gradient-to-b from-amber-500/20 to-amber-900/10 flex items-center justify-center border border-amber-400/40">
                    <Network className="w-4 h-4 lg:w-5 lg:h-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-white text-xs lg:text-sm font-bold tracking-tight">TandemFlow</p>
                    <p className="text-amber-200/60 text-[10px] lg:text-xs font-medium">246-Node Redis Mutex</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Narrative / Overview */}
            <div className="cinematic-card-left gsap-reveal order-3 lg:order-1 flex flex-col justify-center text-center lg:text-left z-20 w-full px-4 lg:px-0">
              <h3 className="text-white font-cinzel text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4 tracking-tight">
                High-throughput digital machines.
              </h3>
              <p className="text-stone-300 text-sm md:text-base lg:text-lg font-normal leading-relaxed mx-auto lg:mx-0 max-w-md lg:max-w-none">
                Engineering autonomous AI pipelines, high-converting platforms, and scalable CRMs. From multi-model LLM routing at <span className="text-amber-300 font-semibold">astra.ai</span> to restaurant POS automation at <span className="text-amber-300 font-semibold">royal-bar-restaurant.com</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stage 3: Pullback CTA Stage */}
      <div className="cinematic-cta-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 gsap-reveal pointer-events-auto will-change-transform">
        <h2 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight text-silver-matte">
          Ready to automate your vision?
        </h2>
        <p className="text-stone-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Explore client builds, custom language model architectures, and production systems below.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="btn-modern-light flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-cinzel font-bold text-sm text-fable-midnight shadow-xl"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#closing"
            className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-cinzel font-semibold text-sm text-white shadow-xl border border-white/20"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>Work With Me</span>
          </a>
        </div>
      </div>
    </div>
  );
}
