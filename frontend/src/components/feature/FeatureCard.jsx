import { Link } from "react-router-dom";

export default function FeatureCard({
  icon = null,
  title = "",
  description = "",
  link = "#",
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
      {/* Icon / Placeholder */}
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg mb-4">
        {icon || <span>★</span>} {/* Replace icon later as needed */}
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold mb-1">{title}</h3>

      {/* Desc */}
      <p className="text-sm text-gray-600 mb-3">{description}</p>

      {/* Learn More Link */}
      <Link
        to={link}
        className="text-blue-600 text-sm font-medium hover:underline"
      >
        Learn More
      </Link>
    </div>
  );
}
