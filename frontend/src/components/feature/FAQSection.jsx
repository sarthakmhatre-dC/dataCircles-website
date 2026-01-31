// // Reusable FAQ Section
// // -----------------------------------------------------------
// // Props:
// // - title: string
// // - subtitle: string
// // - showButton: boolean
// // - buttonText: string
// // - buttonLink: string
// // - faqs: [{ question, answer }]
// // - sectionClass, leftClass, rightClass: optional styling overrides

// import { useState } from "react";
// import { Minus, Plus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// export default function FAQSection({
//   tag = "Questions? We’ve Got You.",
//   headTitle = "",
//   title = "Your questions, answered",
//   subtitle = "Need more details? Here are some common questions.",
//   showButton = true,
//   buttonText = "Contact support",
//   buttonLink = "/contact",
//   faqs = [],
//   sectionClass = "",
//   leftClass = "",
//   rightClass = "",
// }) {
//   const [openIndex, setOpenIndex] = useState(faqs[0] ? 0 : null);

//   const toggleFAQ = (i) => {
//     setOpenIndex(openIndex === i ? null : i);
//   };

//   return (
//     <section
//       className={`w-full flex justify-center mt-10  md: py-12 md:py-16 mb-16 ${sectionClass}`}
//     >
//       {/* CENTERED CONTAINER */}
//       <div className=" w-full mx-auto flex flex-col gap-20 md:flex-row">
//         {/* LEFT SIDE */}
//         <div
//           className={`md:w-1/2 space-y-3 text-center md:text-left ${leftClass}`}
//         >
//           <p className="text-blue-600  mb-2 p3">{tag}</p>
//           <p className="h3 text-blue-500 ">{headTitle}</p>
//           <h3 className="text-3xl md:text-4xl h4">{title}</h3>

//           <p className="p2 text-gray-600 p3">{subtitle}</p>

//           {showButton && (
//             <Link to={buttonLink}>
//               <Button className="mt-2 bg-dcprimary hover:bg-blue-100 hover:text-sm">
//                 {buttonText}
//               </Button>
//             </Link>
//           )}
//         </div>

//         {/* RIGHT SIDE — FAQ LIST */}
//         <div className={`md:w-1/2 space-y-4 ${rightClass}`}>
//           {faqs.map((item, i) => {
//             const isOpen = openIndex === i;

//             return (
//               <div
//                 key={i}
//                 className=" p-2 cursor-pointer transition bg-transparent hover:touch-pan-up focus:outline-2 focus:outline-offset-2 rounded-lg"
//                 onClick={() => toggleFAQ(i)}
//               >
//                 {/* QUESTION */}
//                 <div className="flex justify-between ">
//                   <p className="text-md font-medium">{item.question}</p>

//                   {isOpen ? (
//                     <Minus className="w-5 h-5 text-dcprimary" />
//                   ) : (
//                     <Plus className="w-5 h-5 text-gray-500" />
//                   )}
//                 </div>

//                 {/* ANSWER */}
//                 <div
//                   className={`overflow-hidden transition-[max-height] duration-300 ${
//                     isOpen ? "max-h-40 mt-2" : "max-h-0"
//                   }`}
//                 >
//                   <p className="p3 items-start  text-gray-600  ">
//                     {item.answer}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// Reusable FAQ Section
// -----------------------------------------------------------
// Props:
// - tag: string
// - headTitle: string
// - title: string
// - subtitle: string
// - showButton: boolean
// - buttonText: string
// - buttonLink: string
// - faqs: [{ question, answer }]
// - sectionClass, leftClass, rightClass: optional styling overrides

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FAQSection({
  tag = "Questions? We’ve Got You.",
  headTitle = "",
  title = "Your questions, answered",
  subtitle = "Need more details? Here are some common questions.",
  showButton = true,
  buttonText = "Contact support",
  buttonLink = "/contact",
  faqs = [],
  sectionClass = "",
  leftClass = "",
  rightClass = "",
}) {
  // First FAQ open by default (if exists)
  const [openIndex, setOpenIndex] = useState(faqs.length ? 0 : null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className={`w-full flex justify-center ${sectionClass}`}
    >
      {/* CENTER CONTAINER */}
      <div className="w-full mx-auto flex flex-col gap-20 md:flex-row">
        {/* LEFT SIDE */}
        <div
          className={`md:w-1/2 space-y-3 text-center md:text-left ${leftClass}`}
        >
          <p className="text-blue-600 para-1 font-medium mb-8">{tag}</p>

          {headTitle && <p className="h3 text-blue-500">{headTitle}</p>}

          <h3 className="heading-3 tracking-[-0.125rem] font-semibold mb-5">{title}</h3>

          <p className="para-1 text-gray-600 font-normal text-gray-300">{subtitle}</p>

          {showButton && (
            <Link to={buttonLink}>
              <Button className="mt-4 bg-dcprimary hover:bg-blue-100 hover:text-dcprimary">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>

        {/* RIGHT SIDE — FAQ LIST */}
        <div className={`md:w-1/2 space-y-4 ${rightClass}`}>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="p-3 rounded-lg cursor-pointer transition hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <p className="para-2 font-medium">{item.question}</p>

                  {isOpen ? (
                    <Minus className="w-5 h-5 text-dcprimary" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-500" />
                  )}
                </div>

                {/* ANSWER — FIXED ACCORDION */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="para-3 text-gray-600 text-left">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
