
/* LAST HOPE */
/* GODS PLAN */


/* LAST TRY LETS GO  */

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { defaultValueTypes } from "framer-motion";

// gsap.registerPlugin(ScrollTrigger);

// const AnimationLogo = () => {
//   const scrollContainerRef = useRef(null);
//   const svgRef = useRef(null);
//   const textContainerRef = useRef(null);

//   const steps = [
//     { title: "Lightning Fast", desc: "Blazing Performance" },
//     { title: "Secure Safe", desc: "Bank Level" },
//     { title: "Smart Analytics", desc: "AI Powered" },
//     { title: "Seamless Sync", desc: "Cloud Ready" },
//     { title: "Easy Integration", desc: "Connect Instantly" },
//     { title: "24/7 Support", desc: "Always Available" },
//   ];

//   const count = 12; // Total capsules
//   const radius = 35;
//   const centerX = 50;
//   const centerY = 50;

//   useEffect(() => {
//     const svg = svgRef.current;

//     // Make all capsules visible immediately
//     gsap.set(".capsule", { opacity: 1 });

//     // Hide all text initially
//     gsap.set(".text-item", { autoAlpha: 0 });

//     // Create master timeline
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: scrollContainerRef.current,
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 0.5,
//         pin: ".sticky-wrapper",
//       },
//     });

//     // Get all SVG elements (both desktop and mobile)
//     const allSvgs = document.querySelectorAll(".loader-svg");

//     // Phase 1: Show features with glow (6 features, 2 capsules each)
//     steps.forEach((_, i) => {
//       const capsule1 = `.capsule-${i * 2}`;
//       const capsule2 = `.capsule-${i * 2 + 1}`;
//       const text = `#text-${i}`;
//       const textMobile = `#text-mobile-${i}`;

//       // Rotate ALL circles slightly
//       tl.to(
//         allSvgs,
//         {
//           rotation: `+=${60}`,
//           duration: 0.4,
//           ease: "power2.inOut",
//         },
//         i
//       );

//       // Glow effect on capsules - SUPER GLOWY
//       tl.to(
//         [capsule1, capsule2],
//         {
//           filter:
//             "drop-shadow(0 0 30px rgba(59, 130, 246, 1)) drop-shadow(0 0 60px rgba(96, 165, 250, 0.8)) drop-shadow(0 0 90px rgba(147, 197, 253, 0.6))",
//           duration: 0.5,
//           ease: "power2.out",
//         },
//         i + 0.2
//       );

//       // Show text AFTER rotation starts
//       tl.fromTo(
//         [text, textMobile],
//         { autoAlpha: 0, x: 50 },
//         { autoAlpha: 1, x: 0, duration: 0.5 },
//         i + 0.3
//       );

//       // Remove glow and hide text
//       if (i < steps.length - 1) {
//         tl.to(
//           [capsule1, capsule2],
//           {
//             filter: "drop-shadow(0 0 0px rgba(96, 165, 250, 0))",
//             duration: 0.4,
//             ease: "power2.in",
//           },
//           i + 0.8
//         );

//         tl.to(
//           [text, textMobile],
//           { autoAlpha: 0, x: 50, duration: 0.4 },
//           i + 0.75
//         );
//       }
//     });

//     // Phase 2: Spin the circle (starts at index 6)
//     tl.to(
//       allSvgs,
//       {
//         rotation: "+=720", // Two full rotations
//         duration: 2,
//         ease: "power1.inOut",
//       },
//       6
//     );

//     // Fade out last text during spin
//     tl.to(
//       [`#text-${steps.length - 1}`, `#text-mobile-${steps.length - 1}`],
//       {
//         autoAlpha: 0,
//         x: 50,
//         duration: 0.5,
//       },
//       6
//     );

//     // Phase 3: Exit (starts at index 8)
//     tl.to(
//       allSvgs,
//       {
//         scale: 0,
//         y: -300,
//         opacity: 0,
//         duration: 2,
//         ease: "power2.in",
//       },
//       8
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   const renderCapsules = () => {
//     const capsules = [];
//     for (let i = 0; i < count; i++) {
//       const angle = (i * 360) / count;
//       const w = 8;
//       const h = 35;

//       capsules.push(
//         <g key={i} transform={`rotate(${angle}, ${centerX}, ${centerY})`}>
//           <rect
//             className={`capsule capsule-${i * 2} ${
//               i % 2 === 0 ? "capsule-filled" : "capsule-hollow"
//             }`}
//             x={centerX - w / 2}
//             y={centerY - radius - h / 2}
//             width={w}
//             height={h}
//             rx={w / 2}
//           />
//         </g>
//       );
//     }
//     return capsules;
//   };

//   return (
//     <div
//       ref={scrollContainerRef}
//       className="relative w-full"
//       style={{ height: "800vh" }}
//     >
//       <div className="sticky-wrapper sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">
//         <div className="relative w-full max-w-7xl px-6 mx-auto">
//           {/* Desktop Layout: Circle Left, Content Right */}
//           <div className="hidden md:grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[2fr_1fr] md:gap-8 lg:gap-16 md:items-center max-w-6xl mx-auto">
//             {/* Left Side: Circle */}
//             <div className="flex items-center justify-center">
//               <svg
//                 ref={svgRef}
//                 viewBox="0 0 100 100"
//                 className="loader-svg w-full max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] h-auto overflow-visible"
//                 style={{
//                   transformBox: "fill-box",
//                   transformOrigin: "center center",
//                 }}
//               >
//                 <style>{`
//                   .capsule {
//                     opacity: 1;
//                     transition: filter 0.3s ease;
//                   }
//                   .capsule-filled {
//                     fill: #2a2a2a;
//                     stroke: none;
//                   }
//                   .capsule-hollow {
//                     fill: none;
//                     stroke: #2a2a2a;
//                     stroke-width: 3px;
//                   }
//                 `}</style>
//                 {renderCapsules()}
//               </svg>
//             </div>

//             {/* Right Side: Text Content */}
//             <div
//               ref={textContainerRef}
//               className="relative h-[250px] lg:h-[300px] flex items-center"
//             >
//               {steps.map((step, i) => (
//                 <div
//                   key={i}
//                   id={`text-${i}`}
//                   className="text-item absolute w-full"
//                 >
//                   <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-2 lg:mb-3 leading-tight font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
//                     {step.title}
//                   </h2>
//                   <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 font-semibold leading-tight">
//                     {step.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Layout: Content Above, Circle Below */}
//           <div className="md:hidden flex flex-col items-center gap-6 sm:gap-8">
//             {/* Text Content Above */}
//             <div className="relative h-[180px] sm:h-[220px] flex items-center justify-center w-full px-4">
//               {steps.map((step, i) => (
//                 <div
//                   key={i}
//                   id={`text-mobile-${i}`}
//                   className="text-item absolute w-full text-center"
//                 >
//                   <h2 className="text-2xl sm:text-3xl mb-2 leading-tight font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
//                     {step.title}
//                   </h2>
//                   <p className="text-lg sm:text-xl text-gray-700 font-semibold leading-tight">
//                     {step.desc}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             {/* Circle Below */}
//             <div className="flex items-center justify-center w-full">
//               <svg
//                 viewBox="0 0 100 100"
//                 className="loader-svg w-[70vw] sm:w-[60vw] max-w-[350px] h-auto overflow-visible"
//                 style={{
//                   transformBox: "fill-box",
//                   transformOrigin: "center center",
//                 }}
//               >
//                 <style>{`
//                   .capsule {
//                     opacity: 1;
//                     transition: filter 0.3s ease;
//                   }
//                   .capsule-filled {
//                     fill: #2a2a2a;
//                     stroke: none;
//                   }
//                   .capsule-hollow {
//                     fill: none;
//                     stroke: #2a2a2a;
//                     stroke-width: 3px;
//                   }
//                 `}</style>
//                 {renderCapsules()}
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnimationLogo;

/* NEW VERSIONNNNN */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationLogo = () => {
  const scrollContainerRef = useRef(null);
  const svgRef = useRef(null);
  const svgMobileRef = useRef(null);

  const steps = [
    { title: "CRM", desc: "Manage Leads and Customers" },
    { title: "Task Management", desc: "Create Tasks and Meetings" },
    { title: "Deal Pipeline", desc: "Close Deals Faster" },
    { title: "Vendor Management", desc: "Seamless Vendor Purchase " },
    { title: "Accounting", desc: "From Quotes to Invoices" },
    { title: "24/7 Support", desc: "Always Available" },
  ];

  const count = 12; // Total capsules
  const radius = 35;
  const centerX = 50;
  const centerY = 50;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide all capsules initially
      gsap.set(".capsule", {
        opacity: 0,
        scale: 0,
        transformOrigin: "center center",
      });

      // Hide all text initially
      gsap.set(".text-item", { autoAlpha: 0 });

      // Create master timeline with smoother scrub
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0, // Smoother scrub value
          pin: ".sticky-wrapper",
          anticipatePin: 1,
        },
      });

      // Phase 1: Build circle block by block (6 features, 2 blocks each)
      steps.forEach((_, i) => {
        const baseTime = i * 1.5; // More time per feature for smoothness
        const capsule1Class = `.capsule-${i * 2}`;
        const capsule2Class = `.capsule-${i * 2 + 1}`;
        const textDesktop = `#text-${i}`;
        const textMobile = `#text-mobile-${i}`;

        // Pop in first capsule with glow
        tl.to(
          capsule1Class,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          baseTime
        );

        tl.to(
          capsule1Class,
          {
            filter:
              "drop-shadow(0 0 25px rgba(59, 130, 246, 1)) drop-shadow(0 0 50px rgba(96, 165, 250, 0.7))",
            duration: 0.3,
            ease: "power2.out",
          },
          baseTime + 0.2
        );

        // Pop in second capsule with glow
        tl.to(
          capsule2Class,
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)",
          },
          baseTime + 0.3
        );

        tl.to(
          capsule2Class,
          {
            filter:
              "drop-shadow(0 0 25px rgba(59, 130, 246, 1)) drop-shadow(0 0 50px rgba(96, 165, 250, 0.7))",
            duration: 0.3,
            ease: "power2.out",
          },
          baseTime + 0.5
        );

        // Show text with smooth animation
        tl.fromTo(
          [textDesktop, textMobile],
          { autoAlpha: 0, x: 50, scale: 0.9 },
          { autoAlpha: 1, x: 0, scale: 1, duration: 0.5, ease: "power2.out" },
          baseTime + 0.6
        );

        // Hold the feature visible
        tl.to({}, { duration: 0.3 }, baseTime + 1.1);

        // Fade out glow from both capsules
        tl.to(
          [capsule1Class, capsule2Class],
          {
            filter: "drop-shadow(0 0 0px rgba(96, 165, 250, 0))",
            duration: 0.4,
            ease: "power2.in",
          },
          baseTime + 1.2
        );

        // Hide text (except last one)
        if (i < steps.length - 1) {
          tl.to(
            [textDesktop, textMobile],
            {
              autoAlpha: 0,
              x: 30,
              scale: 0.9,
              duration: 0.4,
              ease: "power2.in",
            },
            baseTime + 1.3
          );
        }
      });

      // Phase 2: Spin the complete circle
      const spinStart = steps.length * 1.5;

      // Fade out last text
      tl.to(
        [`#text-${steps.length - 1}`, `#text-mobile-${steps.length - 1}`],
        {
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.5,
        },
        spinStart
      );

      // Smooth 720° rotation
      tl.to(
        ".loader-svg",
        {
          //rotation: "+=180",
          duration: 1,
          ease: "power1.inOut",
        },
        spinStart + 0.3
      );

      // Phase 3: Exit animation
      tl.to(
        ".loader-svg",
        {
          scale: 0,
          rotation: "+=180",
          opacity: 0,
          duration: 1.5,
          ease: "power2.in",
        },
        spinStart + 2.5
      );
    });

    return () => ctx.revert();
  }, []);

  const renderCapsules = () => {
    const capsules = [];
    for (let i = 0; i < count; i++) {
      const angle = (i * 360) / count;
      const w = 8;
      const h = 35;

      capsules.push(
        <g key={i} transform={`rotate(${angle}, ${centerX}, ${centerY})`}>
          <rect
            className={`capsule capsule-${i} ${
              i % 2 === 0 ? "capsule-filled" : "capsule-hollow"
            }`}
            x={centerX - w / 2}
            y={centerY - radius - h / 2}
            width={w}
            height={h}
            rx={w / 2}
          />
        </g>
      );
    }
    return capsules;
  };

  return (
    <div
      ref={scrollContainerRef}
      className="relative w-full"
      style={{ height: "800vh" }}
    >
      <div className="sticky-wrapper sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4">
        <div className="relative w-full max-w-7xl px-6 mx-auto">
          {/* Desktop Layout: Circle Left, Content Right */}
          <div className="hidden md:grid md:grid-cols-[1.5fr_1fr] lg:grid-cols-[1.8fr_1.2fr] md:gap-12 lg:gap-20 md:items-center max-w-6xl mx-auto">
            {/* Left Side: Circle */}
            <div className="flex items-center justify-center">
              <svg
                ref={svgRef}
                viewBox="0 0 100 100"
                className="loader-svg w-full max-w-[450px] lg:max-w-[550px] xl:max-w-[650px] h-[480px] overflow-visible"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center center",
                }}
              >
                <style>{`
                  .capsule { 
                    opacity: 0;
                    transition: filter 0.3s ease;
                  }
                  .capsule-filled { 
                    fill: #2a2a2a; 
                    stroke: none; 
                  }
                  .capsule-hollow { 
                    fill: none; 
                    stroke: #2a2a2a; 
                    stroke-width: 3px; 
                  }
                `}</style>
                {renderCapsules()}
              </svg>
            </div>

            {/* Right Side: Text Content */}
            <div className="relative h-[280px] lg:h-[320px] flex items-center">
              {steps.map((step, i) => (
                <div
                  key={i}
                  id={`text-${i}`}
                  className="text-item absolute w-full"
                >
                  <h2 className="text-4xl lg:text-5xl xl:text-6xl mb-3 lg:mb-4 leading-tight font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {step.title}
                  </h2>
                  <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout: Content Above, Circle Below */}
          <div className="md:hidden flex flex-col items-center gap-8 sm:gap-10">
            {/* Text Content Above */}
            <div className="relative h-[200px] sm:h-[240px] flex items-center justify-center w-full px-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  id={`text-mobile-${i}`}
                  className="text-item absolute w-full text-center"
                >
                  <h2 className="text-3xl sm:text-4xl mb-3 leading-tight font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                    {step.title}
                  </h2>
                  <p className="text-xl sm:text-2xl text-gray-700 font-semibold leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Circle Below */}
            <div className="flex items-center justify-center w-full">
              <svg
                ref={svgMobileRef}
                viewBox="0 0 100 100"
                className="loader-svg w-[75vw] sm:w-[65vw] max-w-[380px] h-auto overflow-visible"
                style={{
                  transformBox: "fill-box",
                  transformOrigin: "center center",
                }}
              >
                <style>{`
                  .capsule { 
                    opacity: 0;
                    transition: filter 0.3s ease;
                  }
                  .capsule-filled { 
                    fill: #2a2a2a; 
                    stroke: none; 
                  }
                  .capsule-hollow { 
                    fill: none; 
                    stroke: #2a2a2a; 
                    stroke-width: 3px; 
                  }
                `}</style>
                {renderCapsules()}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationLogo;
