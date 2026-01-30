import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Initiate",
    desc: "System boot sequence started. Verifying core modules.",
  },
  {
    title: "Connect",
    desc: "Establishing secure handshake with remote server.",
  },
  {
    title: "Analyze",
    desc: "Parsing incoming data packets for structural integrity.",
  },
  { title: "Decrypt", desc: "Unlocking encrypted layers using 256-bit keys." },
  { title: "Optimize", desc: "Compressing assets for maximum throughput." },
  { title: "Render", desc: "Building the visual DOM tree structure." },
  { title: "Verify", desc: "Running checksum validation on all files." },
  { title: "Sync", desc: "Aligning local database with cloud storage." },
  { title: "Load", desc: "Fetching high-resolution textures and media." },
  { title: "Build", desc: "Compiling JavaScript bundles for execution." },
  { title: "Launch", desc: "Preparing final view for user interaction." },
  { title: "Complete", desc: "All systems operational. Ready for rotation." },
];

export default function AnimatedLoaderSection() {
  const svgRef = useRef(null);
  const stepRefs = useRef([]);
  const capsuleRefs = useRef([]);
  const wrapperRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: true,
        },
      });

      // Phase 1 — Appear step by step
      steps.forEach((step, i) => {
        tl.to(capsuleRefs.current[i], { opacity: 1, duration: 1 }, i);

        tl.fromTo(
          stepRefs.current[i],
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 1 },
          i
        );

        if (i < steps.length - 1) {
          tl.to(
            stepRefs.current[i],
            { autoAlpha: 0, y: -20, duration: 1 },
            i + 0.9
          );
        }
      });

      // Phase 2 – Rotate twice
      tl.to(
        svgRef.current,
        {
          rotation: 720, // 2 full spins
          duration: 8,
          ease: "none",
        },
        steps.length
      );

      // Phase 3 – Exit
      tl.to(
        svgRef.current,
        {
          opacity: 0,
          y: -200,
          scale: 0.5,
          duration: 3,
          ease: "power2.inOut",
        },
        steps.length + 8
      );
    });

    return () => ctx.revert();
  }, []);

  // --- RENDER SVG CAPSULES ---
  const capsuleElements = steps.map((_, i) => {
    const angle = (i * 360) / steps.length;
    return (
      <g key={i} transform={`rotate(${angle}, 50, 50)`}>
        <rect
          ref={(el) => (capsuleRefs.current[i] = el)}
          x={50 - 4}
          y={15}
          width={8}
          height={35}
          rx={4}
          className={i % 2 === 0 ? "capsule-fill" : "capsule-hollow"}
          style={{ opacity: 0 }}
        />
      </g>
    );
  });

  return (
    <section
      ref={wrapperRef}
      style={{
        height: "1500vh",
        background: "#050505",
        color: "white",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "80%",
            maxWidth: "1300px",
            gap: "50px",
          }}
        >
          {/* LEFT — SVG */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg ref={svgRef} viewBox="0 0 100 100" style={{ width: "450px" }}>
              {capsuleElements}
            </svg>
          </div>

          {/* RIGHT — TEXT */}
          <div style={{ position: "relative", height: "350px" }}>
            {steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  opacity: 0,
                }}
              >
                <h2 style={{ fontSize: "3rem", marginBottom: "10px" }}>
                  {s.title}
                </h2>
                <p style={{ color: "#bbb", fontSize: "1.3rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
