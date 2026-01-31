import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { FileText, Receipt, CreditCard, DollarSign, Users } from "lucide-react";
import LabelPill from "./common/LabelPill";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const icons = {
  invoices: Receipt,
  quotations: FileText,
  expenses: CreditCard,
  payments: DollarSign,
  vendors: Users,
};

const menuItems = [
  {
    id: "invoices",
    label: "Invoices",
    title: "Fast GST-Compliant Invoices",
    desc: "Create and share professional invoices in seconds.",
    image: "/assets/Home/UserDashboard.png",
  },
  {
    id: "quotations",
    label: "Quotations",
    title: "Send Quotes Instantly",
    desc: "Convert quotations into invoices with one click.",
    image: "/assets/Home/UserDashboard.png",
  },
  {
    id: "expenses",
    label: "Expenses",
    title: "Track Every Rupee",
    desc: "Log expenses and see real profit clearly.",
    image: "/assets/Home/UserDashboard.png",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Know Who Has Paid",
    desc: "Track pending and completed payments easily.",
    image: "/assets/Home/UserDashboard.png",
  },
  {
    id: "vendors",
    label: "Vendors",
    title: "Manage Suppliers & Purchases",
    desc: "Keep vendor records clean and organized.",
    image: "/assets/Home/UserDashboard.png",
  },
];

export default function ScrollAccordion() {
  const [active, setActive] = useState(menuItems[0].id);

  const pinSpacerRef = useRef(null);
  const rightColInnerRef = useRef(null);
  const rightColOuterRef = useRef(null);
  const sectionRefs = useRef({});
  const stRef = useRef(null);

  /* -------- GSAP SCROLLTRIGGER + ACTIVE TRACKING LOGIC -------- */
  useLayoutEffect(() => {
    const pinSpacer = pinSpacerRef.current;
    const outer = rightColOuterRef.current;
    const inner = rightColInnerRef.current;

    if (!pinSpacer || !outer || !inner) return;

    const ctx = gsap.context(() => {
      const getScrollDistance = () => inner.scrollHeight - outer.clientHeight;
      let currentActiveId = menuItems[0].id;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSpacer,
          // Reverted to "top top" to ensure the Top Padding locks exactly at the screen edge
          // consistently, rather than floating in the middle.
          start: "top top",
          end: () => `+=${getScrollDistance() + 150}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const scrollY = self.progress * getScrollDistance();
            const centerLine = outer.clientHeight / 2;

            for (const item of menuItems) {
              const section = sectionRefs.current[item.id];
              if (!section) continue;

              const visualTop = section.offsetTop - scrollY;
              const visualBottom = visualTop + section.offsetHeight;

              if (visualTop <= centerLine && visualBottom >= centerLine) {
                if (currentActiveId !== item.id) {
                  currentActiveId = item.id;
                  setActive(item.id);
                }
                break;
              }
            }
          },
        },
      });

      stRef.current = tl.scrollTrigger;

      tl.to(inner, {
        y: () => -getScrollDistance(),
        ease: "none",
      });

    }, pinSpacerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const section = sectionRefs.current[id];
    const trigger = stRef.current;
    if (!section || !trigger) return;

    const targetScroll = trigger.start + section.offsetTop;

    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    // WRAPPER: py-24 adds exactly 96px Padding to Top AND Bottom.
    // Because it's on the pinned element, it stays visible and consistent in all states.
    <div
      ref={pinSpacerRef}
      className="w-full relative bg-white py-30"
    >
      {/* LAYOUT: max-w-[1440px] and grid-cols-[1fr_685px] ensures the right column is exactly 685px */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_685px] gap-10">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-15 h-full justify-start pt-10">
          <div>
            <LabelPill
              className="h-6 mb-5 text-xs"
              label="Smart Accounting Without Complexity"
              dotColor="bg-blue-600"
            />
            <h2 className="heading-3 font-medium mt-4 tracking-[-0.125rem]">
              From Quotation to Payment
              <br /> Handled in One Flow
            </h2>
            <p className="text-gray-500 mt-5 para-2">
              Create, send, track, and manage all your
              financial documents <br /> without switching tools.
            </p>
          </div>

          <div className="relative space-y-1">
            {menuItems.map((item) => {
              const Icon = icons[item.id];
              const isActive = item.id === active;
              return (
                <div
                  key={item.id}
                  className={cn(
                    "relative flex items-center gap-3 py-2 pl-3 cursor-pointer",
                    isActive
                      ? "text-blue-600 bg-linear-to-r w-[30%] from-blue-300 to-white font-medium"
                      : "text-gray-600 hover:text-gray-800"
                  )}
                  onClick={() => scrollToSection(item.id)}
                >
                  {isActive && (
                    <span className="absolute left-0 top-0 h-full rounded-r bg-linear-to-r from-blue-900 via-blue-500 to-blue-100 w-1" />
                  )}
                  <Icon
                    size={18}
                    className={cn(
                      "transition-colors duration-300",
                      isActive ? "text-blue-600" : "text-gray-500"
                    )}
                  />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          ref={rightColOuterRef}
          // Height 700px provides comfortable space for the 470px card
          className="h-[700px] w-full overflow-hidden relative rounded-xl"
        >
          <div ref={rightColInnerRef} className="flex flex-col space-y-15 pb-10 pt-75">
            {menuItems.map((item) => (
              <section
                key={item.id}
                ref={(el) => (sectionRefs.current[item.id] = el)}
                data-id={item.id}
                className="min-h-[420px] flex flex-col justify-center space-y-4"
              >
                <h3 className="heading-5 tracking-[-0.075rem] font-semibold">{item.title}</h3>
                <p className="para-4 text-gray-500 max-w-xl">{item.desc}</p>

                {/* PREVIEW CARD: Exactly 470px Height */}
                <div className="w-full h-[470px] bg-white border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-xl overflow-hidden relative">

                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.label}
                      className="
                        h-fit w-fit object-cover p-3
                        mask-[linear-gradient(to_top,transparent_0%,black_20%,black_100%)]
                        [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_20%,black_100%)]
                      "
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-gray-400">
                      Preview Area for {item.label}
                    </div>
                  )}

                </div>

              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}