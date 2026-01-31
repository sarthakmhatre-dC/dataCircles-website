import { Link } from "react-router-dom";

export default function FeatureCard({
  icon = "",
  title = "",
  description = "",
  link = "#",
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-md transition-all duration-300 group flex flex-col h-full">
      {/* Icon Container */}
      <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-700 transition-colors duration-300 p-2">
        {icon ? (
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
            onError={(e) => { e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/1828/1828884.png"; }}
          />
        ) : (
          <span className="text-white text-xl">★</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <h3 className="para-1 font-bold text-[#2D334A] mb-1 group-hover:text-blue-600 transition-colors tracking-[-0.05rem]">
          {title}
        </h3>

        <p className="para-3 text-gray-500 leading-relaxed mb-2 flex-1 tracking-[-0.05rem]">
          {description}
        </p>

        {/* Learn More Link */}
        <Link
          to={link}
          className="text-[#007AFF] text-sm font-semibold flex items-center gap-1 hover:underline mt-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}