import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  "Seamless Integration",
  "Real-Time Analytics",
  "Scalable Storage",
  "Advanced Security",
  "Intuitive Interface",
  "Collaborative Tools",
];

export default function ScrollRotateFeature() {
  const spinnerRef = useRef(null);
  const textRef = useRef(null);
  const barRefs = useRef([]);

  useEffect(() => {
    const spinner = spinnerRef.current;
    const bars = barRefs.current;
    const text = textRef.current;

    // SCROLL → ROTATION MAPPING
    gsap.to(spinner, {
      rotate: -360,
      ease: "none",
      scrollTrigger: {
        trigger: "#scroll-zone",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Feature change per scroll section
    FEATURES.forEach((feature, i) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#f-${i}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
        // Highlight active pair
        .to([bars[i * 2], bars[i * 2 + 1]], {
          filter: "drop-shadow(0 0 12px white)",
        })
        // Fade out → change → fade in text
        .to(
          text,
          {
            opacity: 0,
            y: 20,
            duration: 0.2,
          },
          "<"
        )
        .add(() => {
          text.innerText = feature;
        })
        .to(text, {
          opacity: 1,
          y: 0,
          duration: 0.3,
        });
    });
  }, []);

  return (
    <section id="scroll-zone" className="h-[650vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center px-10">
        {/* LEFT — SPINNER */}
        <div className="flex-1 flex justify-center">
          <div ref={spinnerRef} className="relative w-[260px] h-[260px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                ref={(el) => (barRefs.current[i] = el)}
                className={`
                  absolute w-[22px] h-[90px] rounded-full 
                  ${i % 2 === 0 ? "bg-white" : "border border-white"}
                `}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: "center -65px",
                  transform: `rotate(${i * 30}deg) translateY(-120px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT — FEATURE TEXT */}
        <div className="flex-1">
          <h1
            ref={textRef}
            className="text-4xl font-light tracking-wide opacity-100 transition-all"
          >
            {FEATURES[0]}
          </h1>
        </div>
      </div>

      {/* Scroll triggers */}
      {FEATURES.map((f, idx) => (
        <div key={idx} id={`f-${idx}`} className="h-[100vh]"></div>
      ))}
    </section>
  );
}
