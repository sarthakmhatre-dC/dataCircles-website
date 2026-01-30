// import React from "react";

// export default function GridBlock({
//   title,
//   subtitle,
//   columns = 3,
//   items = [],
//   wrapperClass = "",
// }) {
//   return (
//     <section className={`w-full py-16 ${wrapperClass}`}>
//       <div className="max-w-6xl mx-auto">
//         {/* Headings */}
//         <div className="text-center mb-10 space-y-3">
//           {subtitle && (
//             <p className="text-blue-600 font-medium uppercase tracking-wide">
//               {subtitle}
//             </p>
//           )}
//           {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
//         </div>

//         {/* Grid */}
//         <div
//           className={`
//             grid gap-6
//             grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}
//           `}
//         >
//           {items.map((item, idx) => (
//             <div
//               key={idx}
//               className="border p-6 rounded-xl shadow-sm bg-white hover:shadow-md transition"
//             >
//               <h3 className="font-semibold text-lg mb-2">{item.heading}</h3>
//               <p className="text-gray-600">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/feature/GridBlock.jsx
import React from "react";

/**
 * Props:
 *  - title, subtitle
 *  - items: [{ heading, text, icon }]
 *  - cols: number (default 3 on lg)
 */
export default function GridBlock({
  title,
  subtitle,
  items = [],
  cols = 3,
  className = "",
}) {
  const colClass =
    cols === 3
      ? "md:grid-cols-2"
      : cols === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-2";
  return (
    <section className={`py-8 max-w-7xl mx-auto ${className}`}>
      <div className="mb-6 flex justify-between items-center">
        <div>
          {title && <h3 className="text-2xl font-semibold">{title}</h3>}
          {subtitle && <p className="text-gray-600">{subtitle}</p>}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${colClass} gap-6`}>
        {items.map((it, i) => (
          <div key={i} className="p-4 rounded-xl border bg-white shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                {it.icon ? (
                  <img src={it.icon} alt={it.heading} className="w-6 h-6" />
                ) : null}
              </div>
              <div>
                <h4 className="font-semibold">{it.heading}</h4>
                <p className="text-sm text-gray-600 mt-1">{it.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
