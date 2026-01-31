/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SimpleCTA from "../components/feature/SimpleCTA";
import FeatureDrawer from "../components/feature/FeatureDrawer";
import { crmFeaturesList } from "../data/features";
import { invoicingFeaturesList } from "../data/features";
import FeatureCard from "../components/feature/FeatureCard";
import LabelPill from "../components/common/LabelPill";
import FAQSection from "../components/feature/FAQSection";
import HeroBackground from "../components/HeroBackground";
import { invoiceFeatures } from "../data/invoiceFeatures";

export default function Features() {
  const [selectedTab, setSelectedTab] = useState("crm");

  const yahaKaCTA = "/assets/Home/UserDashboard.png";

  const dealskaSRC = "/assets/features/puzzle.png";

  return (
    <main className="flex justify-center flex-col items-center w-screen">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1 — Tagline + Title + Paragraph              */}
      {/* ---------------------------------------------------- */}
      <section className="w-full max-w-7xl mb-10 px-6 items-center text-center flex flex-col ">
        <LabelPill label="Platform Features" dotColor="bg-blue-500" />
        <h1 className="heading-1 font-semibold mt-8 mb-2 tracking-[-4px]">
          Everything You Need to Manage <br /> Customers and Money In One
          Platform{" "}
        </h1>

        <p className="text-gray-600 para-1 mt-3">
          DataCircles brings CRM and Invoicing together in one simple cloud tool
          built for Indian businesses.
          <br />
          No clutter. No extra software. Just the features you actually use
          every day
        </p>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2 — Image             */}
      {/* ---------------------------------------------------- */}
      <section className="w-full max-w-7xl h-[220px] sm:h-[350px] md:h-[650px] mb-20 bg-white rounded-4xl overflow-hidden mt-10 p-3 border border-gray-200">
        <img
          src="/assets/Home/ContactsKanban.png"
          className="w-fit h-fit rounded-2xl"
          alt="cta visual"
        />
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3 — CRM / Invoicing Toggle + Image + Content */}
      {/* ---------------------------------------------------- */}
      <section className="w-full mt-10 max-w-7xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-8 py-3 transition-all duration-300 font-medium text-sm leading-none ${selectedTab === "crm"
              ? "bg-[#007AFF] text-white rounded-[0.875rem] shadow-[0px_4px_12px_rgba(0,122,255,0.2)]"
              : "bg-transparent text-[#2D334A] border border-[#B0B0B0] rounded-2xl hover:bg-gray-50"
              }`}
            onClick={() => setSelectedTab("crm")}
          >
            CRM Features
          </button>

          <button
            className={`px-8 py-3 transition-all duration-300 font-medium text-sm leading-none ${selectedTab === "invoicing"
              ? "bg-[#007AFF] text-white rounded-[0.875rem] shadow-[0px_4px_12px_rgba(0,122,255,0.2)]"
              : "bg-transparent text-[#2D334A] border border-[#B0B0B0] rounded-2xl hover:bg-gray-50"
              }`}
            onClick={() => setSelectedTab("invoicing")}
          >
            Invoicing Features
          </button>
        </div>

        {/* Wrapper for Sections */}
        <div className="relative">
          {/* CRM Section */}
          {selectedTab === "crm" && (
            <div className="animate-in fade-in duration-500 ">
              <section className="mt-10 w-full rounded-4xl border-gray-200/50">
                <h2 className="heading-3 font-semibold text-[#2D334A] mb-5 px-2 tracking-tight">
                  CRM Features
                </h2>

                <div className="w-full">
                  <FeatureDrawer
                    features={crmFeaturesList}
                  />
                </div>
              </section>
            </div>
          )}

          {/* Invoicing Section */}
          {selectedTab === "invoicing" && (
            <div className="animate-in fade-in duration-500">
              <section className="mt-10 w-full rounded-[2.5rem] border-gray-200/50">
                <h2 className="heading-3 font-semibold text-[#2D334A] mb-5 px-2 tracking-tight">
                  Invoicing Features
                </h2>

                <div className="w-full">
                  <FeatureDrawer
                    features={invoicingFeaturesList}
                  />
                </div>
              </section>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4 —  Main Block before 2 grids (Image + Text)    */}
      {/* ---------------------------------------------------- */}
      <section className="w-full pb-30 pt-30 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        {/* Left text section - Fixed width */}
        <div className="w-full max-w-130 shrink-0">
          <h2 className="heading-3 tracking-[-0.125rem] font-semibold mb-50">
            Stop Managing Your <br /> Business in Pieces
          </h2>

          <h4 className="heading-4 tracking-[-0.125rem] mb-5 font-medium">
            CRM Alone Is Not Enough.<br />
            Invoicing Alone Is Not Enough.
          </h4>
          <p className="text-gray-600 mb-8 para-1">
            DataCircles connects sales and accounting in one clean flow <br />
            so nothing falls through the cracks
          </p>

          <button className="px-6 py-2 bg-[#007AFF] text-white rounded-lg hover:bg-blue-800 w-full sm:w-auto h-10 transition-colors">
            Book a Free Demo
          </button>
        </div>

        {/* Right block - Responsive gap and filling remaining space */}
        <div className="w-full mt-10 md:mt-0 md:ml-16 grow">
          {/* md:ml-16 provides exactly 4rem (16 * 0.25rem)
        mb-[1.875rem] adds the specific margin requested 
    */}
          <div className="relative w-full mb-7.5">
            <img
              src={dealskaSRC}
              alt="Feature page image"
              className="w-fit h-fit rounded-2xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100"
            />
            {/* Optional: Subtle ambient glow to make the shadow "elegant" */}
            <div className="absolute -inset-1 bg-linear-to-r from-transparent via-gray-100/20 to-transparent rounded-2xl blur-sm pointer-events-none" />
          </div>
        </div>
      </section>


      {/* ---------------------------------------------------- */}
      {/* SECTION 4 — CRM Features Grid (3×3)                        */}
      {/* ---------------------------------------------------- */}
      <section className="w-full pt-30 pb-30 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-7xl mx-auto items-center">
          {/* Left Side */}
          <div className="text-left">
            <p className="para-1 font-semibold text-blue-500 mb-5">
              Complete Accounting Suite
            </p>

            <h2 className="heading-3 tracking-[-0.125rem] font-semibold mb-5">
              Everything Your Business<br />
              Needs to Bill, Track, and Get Paid
            </h2>
          </div>

          {/* Right Side */}
          <div className="text-right flex justify-end">
            <p className="text-gray-400 leading-relaxed mt-25 para-2">
              From the first quote to the final payment, DataCircles handles<br />
              handles your full billing cycle in one place.No clutter.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {invoiceFeatures.map((item, idx) => (
            <FeatureCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 5 — Secondary Feature Block between 2 grids (Image + Text)    */}
      {/* ---------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto pb-30">
        <div className="bg-[#0d0d0f] rounded-xl w-full grid md:grid-cols-2 p-10 md:p-14 gap-10">
          {/* LEFT TEXT BLOCK */}
          <div className="space-y-4">
            {/* Small blue label */}
            <p className="text-blue-400 heading-5 font-medium mb-10">
              Built for Indian Workflows
            </p>

            {/* Heading */}
            <h2 className="heading-3 tracking-[-0.125rem] mb-8 font-semibold text-white leading-tight">
              Simple Enough for Daily Use. Powerful Enough for Growth
            </h2>

            {/* Description */}
            <p className="text-gray-400 para-1 w-full mb-5">
              No steep learning curve. No heavy setup. Just log in and start
              managing your business better from day one.
            </p>

            {/* CTA Button */}
            <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition">
              Start Free Trial
            </button>
          </div>

          {/* RIGHT EMPTY BLOCK (can replace with image) */}
          <div className="w-full h-60 md:h-auto rounded-xl bg-[#0d0d0f]"></div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6 — CRM Feature Grid (3×3)                        */}
      {/* ---------------------------------------------------- */}
      {/* <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-2xl  mb-10">CRM FEATURES:</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {Array(9)
            .fill("")
            .map((_, idx) => (
              <FeatureCard
                icon="🚀"
                title="Lorem Ipsum Dolor Self Amet"
                description="One-on-one sessions focused on your personal academic needs and growth"
                link="/features/your-feature"
              />
            ))}
        </div>
      </section> */}

      {/* ---------------------------------------------------- */}
      {/* FAQ section        */}
      {/* ---------------------------------------------------- */}
      <section className="pt-30 pb-30 max-w-7xl mx-auto">
        <FAQSection
          tag="Common Questions"
          title="Everything You Might Be Wondering About Our Features"
          subtitle="Clear answers before you get started."
          showButton={false}
          faqs={[
            {
              question: "What is DataCircles?",
              answer:
                "DataCircles is an all-in-one collaborative workspace for teams.",
            },
            {
              question: "Is real-time sync supported?",
              answer: "Yes. Everything updates across users instantly.",
            },
            {
              question: "Is there a free trial?",
              answer:
                "Yes! You can explore all premium features during the trial.",
            },
          ]}
          className="px-4 md:px-6 w-[70%] py-12 md:py-16"
        />
      </section>

      {/* ---------------------------------------------------- */}
      {/* CTA FOOTER (already built but included)              */}
      {/* ---------------------------------------------------- */}

      {/* <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-full bg-gray-200 h-64 rounded-xl mb-6" />

          <h2 className="text-3xl font-bold mb-4">
            Try DataCircles Free for 14 Days
          </h2>
          <p className="text-gray-600 mb-6">
            Start taking control of your business today with our modern tools.
          </p>

          <Button className="px-6 py-3 bg-blue-600 text-white">
            Start Free Trial
          </Button>
        </div>
      </section> */}
      <section className="w-full max-w-7xl items-center text-center flex flex-col pt-30">
        <LabelPill label="Get Started Today" dotColor="bg-blue-500" className="mb-10" />
        <SimpleCTA
          heading="Your Business Deserves a Smarter System"
          subheading="Join growing Indian businesses who switched from Excel, WhatsApp, and messy billing tools to one clean platform."
          buttons={[
            { label: " Book Free Demo", href: "/book-a-demo" },
            { label: "View Pricing", href: "/pricing" },
          ]}
          image={yahaKaCTA}
        />
      </section>
    </main>
  );
}
