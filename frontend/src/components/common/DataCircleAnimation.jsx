import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DataCircleAnimation() {
  const svgRef = useRef(null);
  const textContainerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
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
      {
        title: "Decrypt",
        desc: "Unlocking encrypted layers using 256-bit keys.",
      },
      { title: "Optimize", desc: "Compressing assets for maximum throughput." },
      { title: "Render", desc: "Building the visual DOM tree structure." },
      { title: "Verify", desc: "Running checksum validation on all files." },
      { title: "Sync", desc: "Aligning local database with cloud storage." },
      { title: "Load", desc: "Fetching high-resolution textures and media." },
      { title: "Build", desc: "Compiling JavaScript bundles for execution." },
      { title: "Launch", desc: "Preparing final view for user interaction." },
      {
        title: "Complete",
        desc: "All systems operational. Ready for rotation.",
      },
    ];

    const svg = svgRef.current;
    const textContainer = textContainerRef.current;

    const count = steps.length;
    const radius = 35;
    const centerX = 50;
    const centerY = 50;

    // -------- Generate Capsules + Text (React-safe DOM creation) --------
    steps.forEach((step, i) => {
      const angle = (i * 360) / count;

      // SVG group
      const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
      group.setAttribute(
        "transform",
        `rotate(${angle}, ${centerX}, ${centerY})`
      );

      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      const w = 8;
      const h = 35;

      rect.setAttribute("x", centerX - w / 2);
      rect.setAttribute("y", centerY - radius - h / 2);
      rect.setAttribute("width", w);
      rect.setAttribute("height", h);
      rect.setAttribute("rx", w / 2);
      rect.setAttribute("id", `capsule-${i}`);

      rect.setAttribute(
        "class",
        i % 2 === 0 ? "capsule capsule-filled" : "capsule capsule-hollow"
      );

      group.appendChild(rect);
      svg.appendChild(group);

      // TEXT element
      const div = document.createElement("div");
      div.id = `text-${i}`;
      div.className =
        "absolute top-1/2 -translate-y-1/2 opacity-0 transition-all";
      div.innerHTML = `
        <h2 class="text-5xl font-bold leading-tight mb-6">${step.title}</h2>
        <p class="text-xl text-gray-300 max-w-xl">${step.desc}</p>
      `;
      textContainer.appendChild(div);
    });

    // -------- Scroll Animation Logic --------
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    // Phase 1: Reveal capsules + change text
    steps.forEach((_, i) => {
      const capsule = `#capsule-${i}`;
      const text = `#text-${i}`;

      tl.to(capsule, { opacity: 1, duration: 1 }, i);

      tl.fromTo(
        text,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 1 },
        i
      );

      if (i < steps.length - 1) {
        tl.to(text, { autoAlpha: 0, y: -20, duration: 1 }, i + 0.9);
      }
    });

    // Phase 2: Spin after last step
    tl.to(
      svg,
      {
        rotation: 360,
        duration: 6,
        ease: "none",
      },
      steps.length
    );

    // Phase 3: Exit animation
    tl.to(
      svg,
      {
        scale: 0,
        y: -300,
        opacity: 0,
        duration: 4,
        ease: "power2.in",
      },
      steps.length + 6
    );
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="relative h-[1500vh] bg-[#050505] text-white overflow-hidden"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center justify-center px-10 overflow-hidden">
        <div className="grid grid-cols-2 w-[90%] max-w-[1400px] gap-16">
          {/* LEFT: SVG Spinner */}
          <div className="flex justify-center items-center">
            <svg
              ref={svgRef}
              viewBox="0 0 100 100"
              className="w-full max-w-[500px] transform origin-center"
            />
          </div>

          {/* RIGHT: Text Display */}
          <div ref={textContainerRef} className="relative h-[400px]"></div>
        </div>
      </div>
    </div>
  );
}
