// import { Link } from "react-router-dom";

// export default function Footer() {
//   const backgroundImage = {
//     backgroundImage: "url('/assets/footerbg.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center bottom",
//     backgroundRepeat: "no-repeat",
//   };

//   return (
//     <footer
//       className="relative w-full bg-black h-[80vh]  overflow-hidden "
//       style={backgroundImage}
//     >
//       {/* MAIN CARD */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
//         <div className="bg-[#0d0e15] rounded-3xl px-10 py-12 flex flex-col lg:flex-row justify-between gap-12 shadow-2xl">
//           {/* LEFT SECTION */}
//           <div className="flex-1">
//             {/* Logo */}
//             <div className="flex items-center gap-3 mb-4">
//               <img
//                 src="/assets/DataCirclesBWLogo.jpg"
//                 alt="DataCircles"
//                 className="h-8 w-auto"
//               />
//             </div>

//             {/* Description */}
//             <p className="text-sm text-gray-400 max-w-sm mb-8 leading-relaxed">
//               Trusted by founders, agencies, and service teams to stay organized
//               and move faster every day.
//             </p>

//             {/* Newsletter */}
//             <h4 className="text-white font-medium mb-3">
//               Subscribe to Newsletter
//             </h4>

//             <div className="flex gap-3 max-w-md">
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 className="flex-1 px-4 py-2 rounded-lg bg-gray-100 text-sm outline-none"
//               />
//               <button className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 transition">
//                 Subscribe now
//               </button>
//             </div>
//           </div>

//           {/* RIGHT SECTION */}
//           <div className="flex gap-16">
//             {/* Socials */}
//             <div>
//               <h4 className="text-white font-medium mb-4">Socials</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>Instagram</li>
//                 <li>YouTube</li>
//                 <li>Facebook</li>
//                 <li>LinkedIn</li>
//                 <li>X (Twitter)</li>
//               </ul>
//             </div>

//             {/* Menu */}
//             <div>
//               <h4 className="text-white font-medium mb-4">Menu</h4>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 {/* <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                   <Link to="/features">Features</Link>
//                 </li>
//                 <li>
//                   <Link to="/pricing">Pricing</Link>
//                 </li> */}
//                 {/* <li>
//                   <Link to="/datavault">Data Vault</Link>
//                 </li> */}
//                 <li>
//                   <Link to="/contact">Contact</Link>
//                 </li>
//                 <li>
//                   <Link to="/support">Support</Link>
//                 </li>
//                 <li>
//                   <Link to="/privacy-policy">Privacy Policy</Link>
//                 </li>
//                 <li>
//                   <Link to="/terms-of-service">Terms of Service</Link>
//                 </li>
//                 <li>
//                   <Link to="/security">Security & Compliance</Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* BACKGROUND TEXT */}
//       <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none">
//         <h1 className="text-[16vw] font-bold text-white/10 leading-none">
//           DataCircles®
//         </h1>
//       </div>
//     </footer>
//   );
// }

import { Link } from "react-router-dom";

export default function Footer() {
  const backgroundImage = {
    backgroundImage: "url('/assets/FooterBackgroundImage.png')",
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
  };

  return (
    <footer
      className="
        relative w-full bg-black overflow-hidden

        // 🔽 RESPONSIVE CHANGE:
        min-h-screen md:h-[80vh]
      "
      style={backgroundImage}
    >
      {/* MAIN CARD */}
      <div className="relative z-10 px-6 mx-auto py-12 pb-5">
        <div className="bg-black rounded-3xl px-6 sm:px-10 pt-20 pb-10 flex flex-col lg:flex-row justify-between gap-12 shadow-2xl">
          {/* LEFT SECTION */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/DataCirclesBWLogo.jpg"
                alt="DataCircles"
                className="w-[209px] h-auto"
              />
            </div>

            <p className="para-1 text-gray-400 max-w-sm mb-8 leading-relaxed">
              Trusted by founders, agencies, and service teams to stay organized
              and move faster every day.
            </p>

            <div className ="pt-20">
            <h4 className="heading-4 text-white font-medium mb-3">
              Subscribe to Newsletter
            </h4>

            {/* 🔽 RESPONSIVE CHANGE: stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-125">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-100 text-sm outline-none"
              />
              <button className="px-8 py-3 rounded-2xl bg-blue-600 text-white para-2 hover:bg-blue-700 transition">
                Subscribe now
              </button>
            </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col sm:flex-row gap-12 lg:gap-16 text-right">
            <div className ="">
              <h4 className="heading-5 text-white font-medium mb-4">Socials</h4>
              <ul className="para-1 space-y-3 text-gray-400">
                <li>Instagram</li>
                <li>YouTube</li>
                <li>Facebook</li>
                <li>LinkedIn</li>
                <li>X (Twitter)</li>
              </ul>
            </div>

            <div>
              <h4 className="heading-5 text-white font-medium mb-4">Menu</h4>
              <ul className="para-1 space-y-3 text-gray-400">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/security">Security & Compliance</Link>
                </li>
                <li>
                  <Link to="/custom-projects">Custom Projects</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND TEXT */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none select-none">
        {/* <h1
          className="
            font-bold text-white/10 leading-none

            // 🔽 RESPONSIVE CHANGE:
            text-[28vw] sm:text-[20vw] lg:text-[16vw]
          "
        >
          DataCircles®
        </h1> */}
      </div>
    </footer>
  );
}
