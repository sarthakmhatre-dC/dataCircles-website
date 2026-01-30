
import heroBg from "/assets/Data-Circles-Hero-Bg.png";
import gradientRays from "/assets/BG_Gradient_Rays.png";
import Mybg from "/assets/Mybg.png";
import { useLocation } from "react-router-dom";

export default function HeroBackground() {
  const location = useLocation();
  const isLanding = location.pathname === "/";
  const isCustomProjects = location.pathname === "/custom-projects"

  return (
    <div
      className={`
        absolute top-0 left-0 w-full -z-10 overflow-hidden bg-white
        transition-all duration-700 ease-out
        ${isLanding || isCustomProjects ? "h-[120vh]" : "h-[55vh]"}
      `}
    >
      {/* LAYER 1: BASE BACKGROUND 
        - saturate-150: Pumps up the blue colors to match the target image.
        - bg-cover: Ensures the blue edges extend to the sides.
        - bg-top: Anchors the curve to the top.
      */}
      <div
        className="
          z-10
          max-w-[88.4375rem]
          mx-auto
          absolute top-0 left-1/2 -translate-x-1/2
          w-full
          sm:h-screen
          bg-cover bg-top bg-no-repeat
          rounded-4xl
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />


      {/* LAYER 2: GOD RAYS / VERTICAL LINES
        - mix-blend-overlay: Allows the white rays to interact with the blue base, 
          creating that "shining" effect without turning everything pure white.
        - opacity-80: Adjust this if the rays are too strong or too weak.
      */}
      <div
        className="
          absolute top-0 left-0 w-full
          h-[120vh] sm:h-screen
          bg-cover bg-top bg-no-repeat
          opacity-100
        "
        style={{
          backgroundImage: `url(${gradientRays})`,
        }}
      />

      {/* LAYER 3: BOTTOM FADE 
        - Adjusted gradient to smooth the transition into the next section
      */}
      {!isLanding && (
        <div className="
          absolute bottom-0 left-0 w-full h-2/5
          bg-gradient-to-b from-transparent via-white/60 to-white
          pointer-events-none z-20
        " />
      )}

    </div>
  );
}