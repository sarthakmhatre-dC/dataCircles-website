export default function LabelPill({
  label = "CTA Goes Here",
  dotColor = "bg-[#0085FF]",
  className = "",
  onClick = () => { },
}) {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        h-8 px-4
        rounded-full
        bg-[#0085FF0F]
        border border-[#0085FF4D]
        text-[#0085FF] text-sm font-medium
        leading-none
        transition-colors duration-200
        hover:bg-[#0085FF1A]
        ${className}
      `}
    >
      {/* Dot - applies dotColor */}
      <span
        className={`w-2 h-2 rounded-full ${dotColor ? dotColor : "bg-[#0085FF]"}`}
      />

      {/* Label */}
      <span className="whitespace-nowrap">
        {label}
      </span>
    </button>
  );
}
