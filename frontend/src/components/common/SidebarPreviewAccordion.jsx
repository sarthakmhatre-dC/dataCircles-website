import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { FileText, Receipt, CreditCard, DollarSign, Users } from "lucide-react";
import LabelPill from "../common/LabelPill";

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
    desc: "Create professional invoices instantly.",
  },
  {
    id: "quotations",
    label: "Quotations",
    title: "Instant Quotations",
    desc: "Generate accurate quotations in seconds.",
  },
  {
    id: "expenses",
    label: "Expenses",
    title: "Expense Tracking",
    desc: "Monitor expenses clearly.",
  },
  {
    id: "payments",
    label: "Payments",
    title: "Payments & Reconciliation",
    desc: "Track incoming and outgoing payments.",
  },
  {
    id: "vendors",
    label: "Vendors",
    title: "Vendor Management",
    desc: "Manage vendors from one place.",
  },
];

export default function ScrollAccordion() {
  const containerRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRefs = useRef({});
  const [active, setActive] = useState(menuItems[0].id);
  const [locked, setLocked] = useState(false);

  /* -----------------------------------------
     LOCK PAGE SCROLL ONLY WHEN NEEDED
  ------------------------------------------ */
  useEffect(() => {
    document.body.style.overflow = locked ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [locked]);

  /* -----------------------------------------
     OBSERVE WHEN ACCORDION ENTERS VIEW
  ------------------------------------------ */
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLocked(true);
        } else {
          setLocked(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  /* -----------------------------------------
     UNLOCK WHEN RIGHT PANEL REACHES BOTTOM
  ------------------------------------------ */
  useEffect(() => {
    const el = rightRef.current;
    if (!el) return;

    const onScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2;

      if (atBottom) setLocked(false);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  /* -----------------------------------------
     ACTIVE ITEM TRACKING
  ------------------------------------------ */
  useEffect(() => {
    if (!rightRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.id);
          }
        });
      },
      { root: rightRef.current, threshold: 0.6 }
    );

    Object.values(sectionRefs.current).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full"
    >
      {/* LEFT */}
      <div className="flex flex-col gap-10">
        <div>
          <LabelPill
            label="Smart Accounting Without Complexity"
            dotColor="bg-blue-600"
          />
          <h2 className="text-3xl font-semibold mt-4">
            From Quotation to Payment <br /> Handled in One Flow
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl">
            Create, send, track, and manage all financial documents without
            switching tools.
          </p>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = icons[item.id];
            return (
              <div
                key={item.id}
                className={cn(
                  "flex items-center gap-3 transition",
                  active === item.id
                    ? "text-blue-600 font-medium"
                    : "text-gray-500"
                )}
              >
                <Icon size={18} />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <div
        ref={rightRef}
        className="h-[600px] overflow-y-auto space-y-24 no-scrollbar"
      >
        {menuItems.map((item) => (
          <section
            key={item.id}
            ref={(el) => (sectionRefs.current[item.id] = el)}
            data-id={item.id}
            className="min-h-[420px] space-y-4"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <p className="text-gray-500 max-w-xl">{item.desc}</p>

            <div className="h-[260px] bg-gray-100 rounded-xl flex items-center justify-center">
              Preview Area
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
