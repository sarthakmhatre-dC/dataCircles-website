// import { useState } from "react";

// export default function PricingSection() {
//   const [billing, setBilling] = useState("annual");
//   const [selected, setSelected] = useState(null);

//   const plans = [
//     {
//       id: "starter",
//       name: "Starter",
//       subtitle: "Perfect for small teams",
//       monthly: 250,
//       annualPerUser: 200,
//       features: [
//         "Basic CRM",
//         "Invoice creation",
//         "Email support",
//         "Limited reports",
//       ],
//     },
//     {
//       id: "growth",
//       name: "Growth",
//       subtitle: "Best for growing businesses",
//       monthly: 450,
//       annualPerUser: 400,
//       features: [
//         "Everything in Starter",
//         "Advanced CRM",
//         "GST invoices",
//         "Priority support",
//         "Detailed reports",
//       ],
//     },
//     {
//       id: "business",
//       name: "Business",
//       subtitle: "For established businesses",
//       monthly: 650,
//       annualPerUser: 600,
//       features: [
//         "Everything in Growth",
//         "Team access",
//         "Role permissions",
//         "Advanced analytics",
//         "Dedicated support",
//       ],
//     },
//   ];

//   return (
//     <section className="w-full max-w-6xl mx-auto text-center">
//       {/* Heading */}
//       <p className="text-blue-500 text-sm mb-2">
//         Simple Plans. Honest Pricing.
//       </p>

//       <h2 className="text-3xl font-semibold mb-3">
//         Pay Only for What You Need
//       </h2>

//       <p className="text-gray-500 mb-10">
//         No heavy upfront cost. No complex contracts.
//         <br />
//         Just affordable plans made for Indian MSMEs.
//       </p>

//       {/* Billing Toggle */}
//       <div className="flex justify-center mb-14">
//         <div className="flex items-center bg-gray-100 border border-gray-200 rounded-full p-1">
//           <button
//             onClick={() => setBilling("monthly")}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition
//               ${
//                 billing === "monthly"
//                   ? "bg-white text-black shadow-sm"
//                   : "text-gray-500"
//               }`}
//           >
//             Monthly
//           </button>

//           <button
//             onClick={() => setBilling("annual")}
//             className={`px-6 py-2 rounded-full text-sm font-medium transition
//               ${
//                 billing === "annual"
//                   ? "bg-white text-black shadow-sm"
//                   : "text-gray-500"
//               }`}
//           >
//             Annual · Save More
//           </button>
//         </div>
//       </div>

//       {/* Pricing Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {plans.map((plan) => {
//           const isSelected = selected === plan.id;

//           return (
//             <div
//               key={plan.id}
//               onClick={() => setSelected(plan.id)}
//               className={`
//                 cursor-pointer bg-white rounded-2xl border p-6 text-left
//                 min-h-[620px] flex flex-col transition-all
//                 ${isSelected ? "border-blue-500 shadow-xl" : "border-gray-200"}
//                 hover:shadow-lg hover:border-blue-400
//               `}
//             >
//               {/* Title */}
//               <div>
//                 <h3 className="text-xl font-semibold">{plan.name}</h3>
//                 <p className="text-gray-500 text-sm mt-1">{plan.subtitle}</p>
//               </div>

//               {/* Pricing */}
//               <div className="mt-6">
//                 {billing === "monthly" ? (
//                   <>
//                     <p className="text-4xl font-semibold">₹{plan.monthly}</p>
//                     <p className="text-gray-400 text-sm">Per User / Month</p>
//                     <p className="text-gray-500 text-xs mt-1">
//                       Billed Monthly · Exclusive of GST{" "}
//                     </p>
//                   </>
//                 ) : (
//                   <>
//                     <p className="text-4xl font-semibold">
//                       ₹{plan.annualPerUser}
//                     </p>
//                     <p className="text-gray-400 text-sm">Per User / Month</p>
//                     <p className="text-gray-500 text-xs mt-1">
//                       billed annually
//                     </p>
//                   </>
//                 )}
//               </div>

//               {/* CTA + Features pushed down */}
//               <div className="mt-auto">
//                 <button
//                   className={`w-full py-2 rounded-md mb-6 transition
//                     ${
//                       isSelected
//                         ? "bg-gray-100 text-gray-700"
//                         : "bg-blue-600 text-white hover:bg-black"
//                     }`}
//                 >
//                   Get Started
//                 </button>

//                 <ul className="space-y-2 text-sm text-gray-700">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx}>✔ {feature}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import { Link } from "react-router-dom";

export default function PricingSection() {
  const [billing, setBilling] = useState("annual");
  const [selected, setSelected] = useState(null);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      subtitle: "Perfect for small teams",
      monthly: 250,
      annualPerUser: 200,
      features: [
        "Contact & Company Management",
        "10,000 Records limit",
        "3 Email Templates",
        "1 Sales Pipeline",
        "10 Custom Fields",
        "10 Record Tags",
        "+4 more features",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      subtitle: "Best for growing businesses",
      monthly: 450,
      annualPerUser: 400,
      popular: true,
      features: [
        "All Starter features",
        "25,000 Records limit",
        "5 Email Templates",
        "3 Sales Pipelines",
        "25 Custom Fields",
        "25 Record Tags",
        "+4 more features",
      ],
    },
    {
      id: "business",
      name: "Business",
      subtitle: "For established businesses",
      monthly: 650,
      annualPerUser: 600,
      features: [
        "All Growth features",
        "50,000 Records limit",
        "10 Email Templates",
        "5 Sales Pipelines",
        "50 Custom Fields",
        "50 Record Tags",
        "+4 more features",
      ],
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto text-center">
      {/* Heading */}
      <p className="para-1 text-blue-500 font-medium mb-8">
        Simple Plans. Honest Pricing.
      </p>

      <h2 className="heading-3 tracking-[-0.125rem] font-medium mb-5">
        Pay Only for What You Need
      </h2>

      <p className="text-gray-500 mb-8 para-1">
        <span className="tracking-[-0.05rem]">
        No heavy upfront cost. No complex contracts.
        </span>
        <br />
        Just affordable plans made for Indian MSMEs.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-14">
        <div className="flex items-center bg-gray-100 border border-gray-200 rounded-xl p-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-6 py-2 rounded-xl para-3 font-medium transition
              ${
                billing === "monthly"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500"
              }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setBilling("annual")}
            className={`px-6 py-2 rounded-xl para-3 font-medium transition
              ${
                billing === "annual"
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500"
              }`}
          >
            Annual · Save upto 20%
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const isSelected = selected === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`
                relative cursor-pointer bg-white rounded-2xl border p-6 text-left
                min-h-130 flex flex-col transition-all shadow-md
                ${isSelected ? "border-blue-500 shadow-xl" : "border-gray-200"}
                hover:shadow-lg hover:border-blue-400
              `}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black para-5 font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Title */}
              <div>
                <h3 className="heading-5 font-semibold">{plan.name}</h3>
                <p className="text-gray-500 para-4 mt-3">{plan.subtitle}</p>
              </div>

              {/* Pricing */}
              <div className="mt-6">
                {billing === "monthly" ? (
                  <>
                    <p className="heading-3 font-semibold">₹{plan.monthly}</p>
                    <p className="text-gray-400 para-3 mt-3">Per User / Month</p>
                    <p className="text-gray-500 para-5 mt-1">
                      Billed Monthly · Exclusive of GST
                    </p>
                  </>
                ) : (
                  <>
                    <p className="heading-3 font-semibold">
                      ₹{plan.annualPerUser}
                    </p>
                    <p className="text-gray-400 para-3 mt-3">Per User / Month</p>
                    <p className="text-gray-500 para-5 mt-1">
                      Billed Annually · Exclusive of GST
                    </p>
                  </>
                )}
              </div>

              {/* CTA + Features (reduced gap) */}
              <div className="mt-10">
                <Link to="/contact/#">
                  <button
                    className={`w-full py-2 rounded-md mb-5 transition
                    ${
                      isSelected
                        ? "bg-gray-100 text-gray-700"
                        : "bg-blue-600 text-white hover:bg-black"
                    }`}
                  >
                    Get Started
                  </button>
                </Link>

                <ul className="space-y-2 para-3 text-gray-700">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
