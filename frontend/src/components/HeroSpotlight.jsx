export default function HeroSpotlight() {
  return (
    <div
      className="
        absolute top-0 left-0 w-full
        h-[700px]
        -z-10 
        pointer-events-none
      "
      style={{
        background:
          "radial-gradient(circle at center, white 0%, white 25%, rgba(160,200,255,0.55) 60%, rgba(160,200,255,0.25) 85%, transparent 100%)",
      }}
    />
  );
}
