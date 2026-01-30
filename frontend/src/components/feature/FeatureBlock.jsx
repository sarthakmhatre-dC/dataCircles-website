// import React from "react";

// export default function FeatureBlock({
//   mode = 1, // layout mode
//   title,
//   subtitle,
//   description,
//   image,
//   imgAlt = "Feature Image",
//   wrapperClass = "",
//   contentClass = "",
//   imageClass = "",
//   textAlign = "left", // left, center
// }) {
//   // Mode-Based Layouts
//   const modeClasses = {
//     1: "md:flex-row", // Image Left, Text Right
//     2: "md:flex-row-reverse", // Image Right, Text Left
//     3: "flex-col text-left", // Text Top, Image Bottom (Left-align)
//     4: "flex-col text-center", // Text Top, Image Bottom (Centered)
//     5: "flex-col-reverse text-left", // Image Top, Text Bottom
//     6: "", // Fully custom, let parent handle
//   };

//   return (
//     <section className={`w-full py-12 md:py-20 ${wrapperClass}`}>
//       <div
//         className={`
//           max-w-6xl mx-auto flex flex-col gap-10 items-center
//           ${modeClasses[mode]}
//         `}
//       >
//         {/* TEXT BLOCK */}
//         <div className={`flex-1 space-y-4 ${contentClass} text-${textAlign}`}>
//           {subtitle && (
//             <p className="text-blue-600 font-semibold uppercase text-sm tracking-wide">
//               {subtitle}
//             </p>
//           )}

//           {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}

//           {description && (
//             <p className="text-gray-600 text-lg leading-relaxed">
//               {description}
//             </p>
//           )}
//         </div>

//         {/* IMAGE BLOCK */}
//         {image && (
//           <div className={`flex-1 ${imageClass}`}>
//             <img
//               src={image}
//               alt={imgAlt}
//               className="w-full rounded-xl object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// src/components/feature/FeatureBlock.jsx
import React from "react";

/**
 * Props:
 *  - title, subtitle, description, image
 *  - mode: 'image-left' | 'image-right' | 'image-top' | 'image-bottom' | 'meta-left' | 'overlay'
 *  - reverse: boolean (alias for image-right)
 *  - className: additional classes
 *  - imageAlt: alt text
 */
export default function FeatureBlock({
  title,
  subtitle,
  description,
  image,
  imageAlt = "",
  mode = "image-left",
  className = "",
  meta, // optional object {icon, smallText} used by meta-left
}) {
  // normalize reverse
  if (mode === "reverse") mode = "image-right";

  const containerCommon = "max-w-7xl mx-auto flex gap-8 items-center";

  const renderImage = () =>
    image ? (
      <div className="flex-1">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>
    ) : null;

  const renderText = () => (
    <div className="flex-1">
      {subtitle && (
        <p className="text-sm text-blue-600 font-medium mb-2">{subtitle}</p>
      )}
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
      )}
      {description && (
        <p className="text-gray-700 leading-relaxed">{description}</p>
      )}
    </div>
  );

  // modes
  if (mode === "image-left") {
    return (
      <section className={`py-8 ${className}`}>
        <div className={`${containerCommon} md:flex-row`}>
          {renderImage()}
          {renderText()}
        </div>
      </section>
    );
  }

  if (mode === "image-right") {
    return (
      <section className={`py-8 ${className}`}>
        <div className={`${containerCommon} md:flex-row`}>
          {renderText()}
          {renderImage()}
        </div>
      </section>
    );
  }

  if (mode === "image-top") {
    return (
      <section className={`py-8 text-center ${className}`}>
        <div className="max-w-3xl mx-auto">
          {renderImage()}
          <div className="mt-6">{renderText()}</div>
        </div>
      </section>
    );
  }

  if (mode === "image-bottom") {
    return (
      <section className={`py-8 text-center ${className}`}>
        <div className="max-w-3xl mx-auto">
          <div>{renderText()}</div>
          <div className="mt-6">{renderImage()}</div>
        </div>
      </section>
    );
  }

  if (mode === "meta-left") {
    return (
      <section className={`py-6 ${className}`}>
        <div className="max-w-4xl mx-auto flex items-start gap-6">
          <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center">
            {meta?.icon ? (
              <img src={meta.icon} alt="meta" className="w-10 h-10" />
            ) : null}
          </div>
          <div>
            {title && <h3 className="text-lg font-semibold mb-1">{title}</h3>}
            {description && (
              <p className="text-sm text-gray-600">{description}</p>
            )}
          </div>
        </div>
      </section>
    );
  }

  // overlay mode
  if (mode === "overlay") {
    return (
      <section className={`py-12 ${className}`}>
        <div
          className="max-w-7xl mx-auto rounded-xl overflow-hidden relative"
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black/40 p-8 md:p-16">
            <div className="text-white max-w-3xl">
              {subtitle && (
                <p className="text-sm font-medium mb-2">{subtitle}</p>
              )}
              {title && <h2 className="text-3xl font-bold mb-3">{title}</h2>}
              {description && <p className="leading-relaxed">{description}</p>}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // default fallback
  return (
    <section className={`py-8 ${className}`}>
      <div className={`${containerCommon}`}>{renderText()}</div>
    </section>
  );
}
