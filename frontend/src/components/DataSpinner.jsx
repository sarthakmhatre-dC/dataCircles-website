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

export default function DataSpinner() {
  const spinnerRef = useRef(null);
  const textRefs = useRef([]);
  const blockRefs = useRef([]);

  useEffect(() => {
    const blocks = blockRefs.current;
    const texts = textRefs.current;
    const spinner = spinnerRef.current;

    // Continuous base spinner rotation
    gsap.to(spinner, {
      rotate: 360,
      duration: 12,
      ease: "linear",
      repeat: -1,
    });

    // FEATURE PAIRS (2 blocks each)
    const pairs = [
      [0, 1],
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [10, 11],
    ];

    // SCROLL TRIGGERS FOR EACH FEATURE
    pairs.forEach((pair, i) => {
      const [b1, b2] = pair.map((index) => blocks[index]);
      const text = texts[i];

      gsap
        .timeline({
          scrollTrigger: {
            trigger: `#trigger-${i}`,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
        .to([b1, b2], {
          boxShadow: "0 0 25px rgba(255,255,255,1)",
          duration: 0.4,
        })
        .to(text, {
          opacity: 1,
          y: -10,
          filter: "blur(0px)",
          duration: 0.5,
        })
        .to(b2, {
          scaleY: 1.3,
          duration: 0.3,
        })
        .to([b1, b2], {
          rotate: i % 2 === 0 ? 45 : -45,
          duration: 0.4,
        });
    });

    // FINAL DISINTEGRATION
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#final-trigger",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      })
      .to(spinner, {
        rotate: 1800,
        scale: 1.6,
        opacity: 0.4,
      })
      .to(".spin-block", {
        opacity: 0,
        y: -200,
        stagger: 0.05,
        duration: 0.5,
      });
  }, []);

  return (
    <section className="relative w-full h-[700vh] bg-black text-white overflow-hidden">
      {/* Sticky Spinner Container */}
      <div className="sticky top-[50vh] flex justify-center items-center h-[400px] -translate-y-1/2">
        {/* SPINNER */}
        <div ref={spinnerRef} className="relative w-[220px] h-[220px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              ref={(el) => (blockRefs.current[i] = el)}
              className={`
                spin-block absolute w-[18px] h-[70px] rounded-full 
                ${
                  i % 2 === 0
                    ? "bg-white"
                    : "border border-white bg-transparent"
                }
              `}
              style={{
                top: "50%",
                left: "50%",
                transformOrigin: "center -40px",
                transform: `rotate(${i * 30}deg) translateY(-80px)`,
              }}
            />
          ))}
        </div>

        {/* FEATURE TEXTS */}
        <div className="absolute flex flex-col items-center gap-6 pointer-events-none">
          {FEATURES.map((text, i) => (
            <div
              key={i}
              ref={(el) => (textRefs.current[i] = el)}
              className="opacity-0 text-xl font-light tracking-wider blur-sm transition-all duration-300"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Triggers */}
      <div className="absolute top-0 left-0 w-full h-full">
        {FEATURES.map((_, i) => (
          <div key={i} id={`trigger-${i}`} className="h-[100vh]" />
        ))}
        <div id="final-trigger" className="h-[120vh]" />
      </div>
    </section>
  );
}
