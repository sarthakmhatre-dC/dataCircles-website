// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";
// import LeftFeatureItem from "./LeftFeatureItem";

// export default function FeatureDrawer({ features = [] }) {
//   // Initially show first feature
//   const [activeFeature, setActiveFeature] = useState(features?.[0] ?? null);
//   console.log("drawer features =>", features);
//   console.log("activeFeature =>", activeFeature);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       {/* -------------------------------------------------- */}
//       {/* LEFT SIDE — Feature List                          */}
//       {/* -------------------------------------------------- */}
//       <div className="flex flex-col gap-4">
//         {features.map((item, idx) => (
//           <LeftFeatureItem
//             key={idx}
//             active={activeFeature?.id === item.id}
//             title={item.title}
//             short={item.short}
//             onClick={() => setActiveFeature(item)}
//           />
//         ))}
//       </div>

//       {/* -------------------------------------------------- */}
//       {/* RIGHT SIDE — Feature Detail Drawer                */}
//       {/* -------------------------------------------------- */}
//       <div className="md:col-span-2 p-2 rounded-lg border border-gray-300 bg-gray-100  ">
//         {/* IMAGE */}
//         <div className="w-full h-64 bg-gray-300 rounded-lg mb-6" />

//         {/* DETAILS */}
//         {/*  <h2 className="text-xl font-semibold mb-2">{activeFeature?.title}</h2>

//         <p className="text-gray-700 mb-6">{activeFeature?.description}</p> */}

//         {/* CTA */}

//         <Link to={activeFeature ? `/features/${activeFeature.slug}` : "#"}>
//           <Button className="bg-blue-600 text-white">Read More</Button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import LeftFeatureItem from "./LeftFeatureItem";

export default function FeatureDrawer({ features = [] }) {
  const [activeFeature, setActiveFeature] = useState(features?.[0] ?? null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* LEFT LIST */}
      <div className="flex flex-col gap-4">
        {features.map((item) => (
          <LeftFeatureItem
            key={item.id}
            active={activeFeature?.id === item.id}
            title={item.title}
            short={item.short}
            onClick={() => setActiveFeature(item)}
            
          />
        ))}
      </div>

      {/* RIGHT PREVIEW */}
      <div className="md:col-span-2 p-4 rounded-lg border border-gray-300 bg-gray-100">
        {/* IMAGE */}
        <img
          src={activeFeature?.image || "/placeholder.png"}
          alt={activeFeature?.title}
          className="w-full h-64 object-cover rounded-lg mb-6 bg-gray-200"
        />

        {/* BUTTON */}

        {/* <Link to={activeFeature ? `/features/${activeFeature.slug}` : "#"}>
          <Button className="bg-blue-600 text-white">Read More</Button>
        </Link> */}
        <Link to={activeFeature ? `/features/${activeFeature.slug}` : "#"}>
          <Button className="bg-blue-600 text-white">View Feature →</Button>
        </Link>
      </div>
    </div>
  );
}
