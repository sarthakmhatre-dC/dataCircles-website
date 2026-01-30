import { Link } from "react-router-dom";

export default function SimpleCTA({
  heading = "Take Control of Your Business Today",
  subheading = "Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  buttons = [
    { label: "Get Start Now", href: "/start", className: "" },
    { label: "Book Demo", href: "/demo", className: "" },
  ],
  image = null, // optional URL
  className = "",
}) {
  return (
    <section
      className={`text-center bg-transparent text-dctext w-full  ${className} `}
    >
      {/* Heading */}
      <h2 className="heading-2 w-full tracking-[-0.25rem] mb-10 font-medium">{heading}</h2>

      {/* Subheading */}
      <p className="text-gray-600 p2 w-full mx-auto mb-8 px-20 para-1 tracking-[-0.05rem]">{subheading}</p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {buttons.map((btn, idx) => (
          <Link
            key={idx}
            to={btn.href}
            className={`
        px-5 py-3 para-3 rounded-xl text-white transition
        ${idx === 1
                ? "bg-black hover:bg-gray-900"
                : "bg-blue-500 hover:bg-blue-600"
              }
        ${btn.className || ""}
      `}
          >
            {btn.label}
          </Link>
        ))}
      </div>

      {/* Optional Image */}
      {image && (
        <div className="w-full relative">
          <img
            src={image}
            alt="cta visual"
            className="rounded-xl border border-gray-200 shadow-sm w-full object-cover h-100 md:h-200"
          />
          {/* Fade overlay - bottom 20% */}
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-white via-white/90 to-transparent rounded-xl" />
        </div>
      )}
    </section>
  );
}
