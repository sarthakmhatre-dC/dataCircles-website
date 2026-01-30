import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Circle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/datavault", label: "Data Vault" },
    { to: "/features", label: "Features" },
    { to: "/pricing", label: "Pricing" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 2.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const spacing = isScrolled
    ? "clamp(0.625rem, 1.5vw, 1rem)"
    : "clamp(0.75rem, 2vw, 1.5rem)";

  return (
    <>
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out"
        style={{
          width: isScrolled
            ? "clamp(12.5rem, 85vw, 50rem)"
            : "clamp(13.75rem, 90vw, 56.25rem)",

        }}
      >
        <div
          className="flex items-center justify-between rounded-full bg-black/95 backdrop-blur-2xl border border-gray-800/70 shadow-2xl shadow-black/50 transition-all duration-300"
          style={{
            padding: isScrolled
              ? "clamp(0.25rem, 0.8vw, 0.5rem) clamp(0.625rem, 1.5vw, 0.625rem)"
              : "clamp(0.25rem, 0.8vw, 0.5rem) clamp(0.75rem, 2vw, 0.75rem)",
            gap: spacing,
          }}
        >
          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center shrink-0"
            style={{ gap: "clamp(0.375rem, 1vw, 0.625rem)" }}
          >
            <img src="/assets/DataCirclesBWLogo.jpg" alt="DataCircles" className="h-8 w-auto object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden lg:flex items-center flex-1 justify-center transition-all duration-300 "
            style={{ gap: spacing }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `font-medium transition-colors whitespace-nowrap ${isActive ? "text-white" : "text-gray-400 hover:text-white"
                  }`
                }
                style={{
                  fontSize: isScrolled
                    ? "clamp(0.6875rem, 1.2vw, 0.875rem)"
                    : "clamp(0.75rem, 1.4vw, 0.9375rem)",

                }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div
            className="hidden lg:flex items-center shrink-0 transition-all duration-300 gap-3"
          // style={{ gap: spacing }}
          >
            <Link
              to="https://datacircles.netlify.app/login"
              className="rounded-full border border-blue-400/80 text-blue-300 hover:bg-blue-500/10 transition-all whitespace-nowrap font-medium shrink-0"
              style={{
                padding: isScrolled
                  ? "clamp(0.25rem, 0.6vw, 0.5rem) clamp(0.625rem, 1vw, 1rem)"
                  : "clamp(0.25rem, 0.6vw, 0.5rem) clamp(0.75rem, 1.5vw, 1.25rem)",
                fontSize: isScrolled
                  ? "clamp(0.6875rem, 1.2vw, 0.875rem)"
                  : "clamp(0.75rem, 1.4vw, 0.9375rem)",
              }}
            >
              Login
            </Link>

            <Link
              to="https://datacircles.netlify.app/signup"
              className="rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all whitespace-nowrap shrink-0"
              style={{
                padding: isScrolled
                  ? "clamp(0.25rem, 0.6vw, 0.5rem) clamp(0.625rem, 1vw, 0.75rem)"
                  : "clamp(0.25rem, 0.6vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)",
                fontSize: isScrolled
                  ? "clamp(0.6875rem, 1.2vw, 0.875rem)"
                  : "clamp(0.75rem, 1.4vw, 0.9375rem)",
              }}
            >
              Signup
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-white shrink-0 p-0.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? (
              <X
                style={{
                  width: "clamp(1.125rem, 4vw, 1.5rem)",
                  height: "clamp(1.125rem, 4vw, 1.5rem)",
                }}
              />
            ) : (
              <Menu
                style={{
                  width: "clamp(1.125rem, 4vw, 1.5rem)",
                  height: "clamp(1.125rem, 4vw, 1.5rem)",
                }}
              />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl bg-black/95 backdrop-blur-xl border border-gray-800/60 shadow-2xl shadow-black/50 transition-all duration-300 ${isScrolled
            ? "top-17 sm:top-18"
            : "top-19 sm:top-20"
          } ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col gap-4 px-5 py-5 sm:px-6 sm:py-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-base transition-colors ${isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="flex flex-col gap-3 pt-3 border-t border-gray-800">
            <Link
              to="https://datacircles.netlify.app/login"
              onClick={closeMenu}
              className="px-5 py-2.5 rounded-full border border-blue-400 text-blue-300 text-center hover:bg-blue-500/10 transition-colors font-medium"
            >
              Login
            </Link>

            <Link
              to="/signup"
              onClick={closeMenu}
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-center font-medium hover:bg-blue-700 transition-colors"
            >
              Signup
            </Link>
          </div>
        </nav>
      </div>

    </>
  );
}

// import { Link, NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   const navItems = [
//     { to: "/", label: "Home" },
//     { to: "/about", label: "About Us" },
//     { to: "/datavault", label: "Data Vault" },
//     { to: "/features", label: "Features" },
//     { to: "/pricing", label: "Pricing" },
//   ];

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const closeMenu = () => setOpen(false);

//   return (
//     <>
//       {/* HEADER */}
//       <header
//         className={`
//           fixed top-4 left-1/2 -translate-x-1/2 z-50
//           transition-all duration-300

//           // 🔽 RESPONSIVE CHANGE:
//           // Mobile full width, desktop original widths preserved
//           w-[92%] md:${isScrolled ? "w-[56%]" : "w-[64%]"}
//         `}
//       >
//         <div
//           className="
//             flex items-center justify-between
//             rounded-full
//             bg-black backdrop-blur-2xl
//             border border-[#1f2028]/70
//             shadow-xl

//             // 🔽 RESPONSIVE CHANGE:
//             px-4 md:px-6 py-3
//           "
//         >
//           {/* LOGO */}
//           <Link to="/" onClick={closeMenu} className="flex items-center">
//             <img
//               src="/assets/DataCirclesBWLogo.jpg"
//               alt="DataCircles"
//               className="h-8 w-auto object-contain"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navItems.map((item) => (
//               <NavLink
//                 key={item.to}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `text-sm font-medium transition ${
//                     isActive ? "text-white" : "text-gray-400 hover:text-white"
//                   }`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* DESKTOP CTA */}
//           <div className="hidden md:flex items-center gap-3">
//             <Link
//               to="https://datacircles.netlify.app/login"
//               className="px-5 py-1.5 text-sm rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500/10 transition"
//             >
//               Login
//             </Link>

//             <Link
//               to="/signup"
//               className="px-5 py-1.5 text-sm rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
//             >
//               Signup
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             className="md:hidden text-white"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>
//       </header>

//       {/* MOBILE MENU */}
//       <div
//         className={`
//           md:hidden fixed

//           // 🔽 RESPONSIVE CHANGE:
//           top-[72px] sm:top-[88px]

//           left-1/2 -translate-x-1/2 z-40
//           w-[92%] sm:w-[90%]
//           rounded-2xl
//           bg-black backdrop-blur-xl
//           border border-[#1f2028]/60
//           shadow-xl
//           transition-all duration-300
//           ${
//             open
//               ? "opacity-100 translate-y-0"
//               : "opacity-0 -translate-y-4 pointer-events-none"
//           }
//         `}
//       >
//         <nav className="flex flex-col gap-5 px-6 py-6">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.to}
//               to={item.to}
//               onClick={closeMenu}
//               className={({ isActive }) =>
//                 `text-base transition ${
//                   isActive ? "text-white" : "text-gray-300 hover:text-white"
//                 }`
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}

//           <div className="flex flex-col gap-3 pt-3">
//             <Link
//               to="https://datacircles.netlify.app/login"
//               onClick={closeMenu}
//               className="px-5 py-2 rounded-full border border-blue-400 text-blue-300 text-center hover:bg-blue-500/10 transition"
//             >
//               Login
//             </Link>

//             <Link
//               to="https://datacircles.netlify.app/login"
//               onClick={closeMenu}
//               className="px-5 py-2 rounded-full bg-blue-400 text-white text-center font-medium hover:bg-blue-700 transition"
//             >
//               Signup
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// }
