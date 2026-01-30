export default function LeftFeatureItem({ active, title, short, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-lg border mb-3 ml-3 p-4 flex flex-col gap-2 transition
        ${active ? "border-blue-600 bg-blue-50" : "border-gray-300 bg-white"}
      `}
    >
      {/* Avatar + title */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-gray-200" />
        <h3 className="text-sm font-semibold">{title}</h3>
      </div>

      {/* Short description */}
      <p className="text-xs text-gray-600 leading-relaxed">{short}</p>
    </div>
  );
}
