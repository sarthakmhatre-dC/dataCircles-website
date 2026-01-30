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

  const yahaKaCTA = "/assets/dashboard1.png";

  const dealskaSRC = "/assets/Deals-KanbanVie4w.png";

  return (
    <main className=" text-gray-900">
      {/* ---------------------------------------------------- */}
      {/* SECTION 1 — Tagline + Title + Paragraph              */}
      {/* ---------------------------------------------------- */}
      <section className="px-6 py-16 text-center max-w-6xl mx-auto  ">
        <LabelPill label="Platform Features" dotColor="bg-blue-500" />
        <h1 className="h2 sm:text-2xl mt-2 leading-tight mb-4">
          Everything You Need to Manage <br /> Customers and Money In One
          Platform{" "}
        </h1>

        <p className="text-gray-600 mb-10 p1">
          DataCircles brings CRM and Invoicing together in one simple cloud tool
          built for Indian businesses.
          <br />
          No clutter. No extra software. Just the features you actually use
          every day
        </p>

        {/* Large hero image placeholder */}
        {/* <div className="w-full h-72 md:h-96 bg-gray-200 rounded-xl mx-auto" /> */}
        <img
          src={dealskaSRC}
          alt="Feature page image"
          className="w-full h-full object-cover md:h-96 bg-gray-200 rounded-xl mx-auto"
        />
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2 — CRM / Invoicing Toggle + Image + Content */}
      {/* ---------------------------------------------------- */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          <Button
            className={`px-6 hover:bg-blue-200 hover:text-blue-900 ${
              selectedTab === "crm"
                ? "bg-blue-600 text-white rounded-lg text-md"
                : "bg-gray-300 text-blue-900 rounded-lg text-md border-blue-900 shadow-xl"
            }`}
            onClick={() => setSelectedTab("crm")}
          >
            CRM
          </Button>

          <Button
            className={`px-6 hover:bg-blue-200 hover:text-blue-900 ${
              selectedTab === "invoicing"
                ? "bg-blue-600 text-white rounded-lg p2"
                : "bg-gray-300 text-blue-900 rounded-lg text-md border-blue-900 shadow-xl"
            }`}
            onClick={() => setSelectedTab("invoicing")}
          >
            Invoicing
          </Button>
        </div>

        {/* Wrapper so we can add animations / effects later */}
        <div className="relative">
          {/* CRM Section */}
          {selectedTab === "crm" && (
            <div className="space-y-8">
              {/* Large CRM image */}
              {/* <div className="w-full h-80 bg-gray-200 rounded-xl" /> */}

              {/* CRM description + grid */}
              {/* <section className="mt-10 "> */}
              <section className="mt-10 w-full h-full bg-gray-200 rounded-xl">
                <h2 className="h4 mb-2 p-2">CRM Features</h2>

                <div>
                  <FeatureDrawer
                    features={
                      selectedTab === "crm"
                        ? crmFeaturesList
                        : invoicingFeaturesList
                    }
                  />
                </div>

                {/* CRM Feature Grid (grey boxes) */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array(6)
                    .fill("")
                    .map((_, idx) => (
                      <div key={idx} className="h-40 bg-gray-200 rounded-xl" />
                    ))}
                </div> */}
              </section>
            </div>
          )}

          {/* Invoicing Section */}
          {selectedTab === "invoicing" && (
            <div className="space-y-6">
              {/* <div className="w-full h-80 bg-gray-200 rounded-xl" /> */}

              <section className="mt-10 w-full h-full bg-gray-200 rounded-xl">
                <h2 className="h4  mb-2 text-black p-2">Invoicing Features</h2>

                <div>
                  <FeatureDrawer features={invoicingFeaturesList} />
                </div>
                {/* Invoicing Feature Grid */}
                {/* {Array(6)
                    .fill("")
                    .map((_, idx) => (
                      <div key={idx} className="h-40 bg-gray-200 rounded-xl" />
                    )) 
                }
                     */}
              </section>
            </div>
          )}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 3 —  Main Block before 2 grids (Image + Text)    */}
      {/* ---------------------------------------------------- */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left text section */}
        <div>
          <h2 className="h3  mb-32">Stop Managing Your Business in Pieces</h2>
          <h4 className="text-2xl  mb-4">
            CRM Alone Is Not Enough. Invoicing Alone Is Not Enough.
          </h4>
          <p className="text-gray-600 mb-6 p2">
            DataCircles connects sales and accounting in one clean flow so
            nothing falls through the cracks
          </p>

          <Button className="bg-blue-600 text-white px-6">
            Book a Free Demo
          </Button>
        </div>

        {/* Right block */}
        {/* <div className="w-full h-56 bg-gray-200 rounded-xl" /> */}
        <img
          src={dealskaSRC}
          alt="Feature page image"
          className="w-full h-56 rounded-xl object-cover md:h-96   mx-auto"
        />
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 4 — CRM Features Grid (3×3)                        */}
      {/* ---------------------------------------------------- */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="w-full max-w-7xl mb-10">
          <p className="text-blue-300 p3 mb-2">Complete Accounting Suite</p>
          <h2 className="text-3xl font-medium mb-3">
            Everything Your Business Needs to Bill, Track, and Get Paid
          </h2>
          <p className="text-gray-400 p3 max-w-xl">
            From the first quote to the final payment, DataCircles handles your
            full billing cycle in one place.
          </p>
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
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="bg-[#0d0d0f] rounded-xl w-full grid md:grid-cols-2 p-10 md:p-14 gap-10">
          {/* LEFT TEXT BLOCK */}
          <div className="space-y-4">
            {/* Small blue label */}
            <p className="text-blue-400 text-sm font-medium">
              Built for Indian Workflows
            </p>

            {/* Heading */}
            <h2 className="h4 md:h4 font-semibold text-white leading-tight">
              Simple Enough for Daily Use. Powerful Enough for Growth
            </h2>

            {/* Description */}
            <p className="text-gray-400 p3 text-base max-w-md">
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
      <section className="px-6 py-20 max-w-6xl mx-auto">
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
      <section className=" mb-10 px-3 items-center text-center flex flex-col">
        <LabelPill label="Get Started Today" dotColor="bg-blue-500" />
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
