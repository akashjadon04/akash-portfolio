import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const layers = containerRef.current?.querySelector("[data-parallax-layers]");
      if (!layers) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: layers,
          start: "0% 0%",
          end: "100% 0%",
          scrub: 0,
        },
      });

      [
        { layer: "1", yPercent: 70 },
        { layer: "2", yPercent: 55 },
        { layer: "3", yPercent: 40 },
        { layer: "4", yPercent: 10 },
      ].forEach((config, idx) => {
        tl.to(
          layers.querySelectorAll(`[data-parallax-layer="${config.layer}"]`),
          { yPercent: config.yPercent, ease: "none", force3D: true },
          idx === 0 ? undefined : "<"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  return (
    <div className="parallax" ref={containerRef}>
      <section className="parallax__header">
        <div className="parallax__visuals">
          <div className="parallax__black-line-overflow" />

          <div data-parallax-layers className="parallax__layers">
            {/* Layer 1: Sky */}
            <img
              src="/images/parallax/layer-sky.webp"
              loading="eager"
              width="800"
              data-parallax-layer="1"
              alt=""
              className="parallax__layer-img"
            />

            {/* Layer 2: Background Mountain Ridge */}
            <img
              src="/images/parallax/layer-mountains.webp"
              loading="eager"
              width="800"
              data-parallax-layer="2"
              alt=""
              className="parallax__layer-img"
            />

            {/* Layer 3: White Capital AKASH Text (sandwiched behind foreground land) */}
            <div data-parallax-layer="3" className="parallax__layer-title">
              <h2 className="parallax__title">AKASH</h2>
            </div>

            {/* Layer 4: Foreground Cliffs & Land (occludes text on scroll) */}
            <img
              src="/images/parallax/layer-foreground.webp"
              loading="eager"
              width="800"
              data-parallax-layer="4"
              alt=""
              className="parallax__layer-img"
            />
          </div>

          <div className="parallax__fade" />
        </div>
      </section>
    </div>
  );
}
