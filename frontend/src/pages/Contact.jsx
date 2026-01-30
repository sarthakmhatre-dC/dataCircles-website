import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import FAQSection from "../components/feature/FAQSection";
import SimpleCTA from "../components/feature/SimpleCTA";
import LabelPill from "../components/common/LabelPill";
import { InlineWidget } from "react-calendly";

export default function Contact() {
  const yahaKaCTA = "/assets/dashboard1.png";

  // We can use Formspree or another service later for handling form submissions
  return (
    <main className="bg-transparent text-dctext">
      {/* HERO */}

      {/* ---------------------------------------------------- */}
      {/* SECTION 1 — Tagline + Title + Paragraph              */}
      {/* ---------------------------------------------------- */}
      <section className="px-6 py-6 text-center max-w-7xl mx-auto  ">
        <LabelPill label="Contact Us" dotColor="bg-blue-500" />
        <h1 className="heading-2 mt-10 mb-5 font-semibold tracking-[-0.125rem]">
          We’re Here to Help Your <br/>
           Business Run Smoother
        </h1>

        <p className="text-gray-600 mb-5 para-1">
          Whether you have a question, need support, or want to <br/>
          understand how DataCircles can fit into your workflow <br /> 
          our team is just a message away
        </p>

        {/* 🔽 RESPONSIVE CHANGE: stack buttons on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 text-sm">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-800 w-full sm:w-auto h-10">
              See how it works
            </button>
        </div>

        {/* Large hero image placeholder */}
        {/* <div className="w-full h-72 md:h-96 bg-gray-200 rounded-xl mx-auto" /> */}
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 2 — Caledly                                  */}
      {/* ---------------------------------------------------- */}

      <section className="py-16 text-center max-w-7xl mx-auto  ">
        <InlineWidget
          url="https://calendly.com/yash-mishra-datacircles/datacircles-demo?month=2025-12 "
          styles={{ height: "700px" }}
        />
      </section>
      {/* ---------------------------------------------------- */}
      {/* SECTION 3 — GRID                                     */}
      {/* ---------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto mb-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2"> Email Support</h3>
            <p className="para-5 text-gray-600">
              Have a detailed query? Drop us an email and our team will get back
              within 24 hours. 
              [support@datacircles.in] .
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">Call Us</h3>
            <p className="para-5 text-gray-600">
              Prefer speaking with a real person? Call us during business hours
              for quick help and clear answers. 
              [+91 9892297764]
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">Office Address</h3>
            <p className="para-5 text-gray-600">
              You can also reach us via our registered office for documentation
              or business communication. 
              [contact@datacircles.in]
            </p>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------- */}
      {/* SECTION 4 — FAQ DYNAMIC                              */}
      {/* ---------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto mb-24 px-6">
        <FAQSection
          tag="Questions"
          /* title={
                  <>
                  Questions About <br /> DataCircles Technologies
                  </>
                  } */
          title="Get Answers to Common Questions"
          subtitle="Here are some quick answers to help you find what you need faster."
          showButton={false}
          faqs={[
            {
              question: "What’s the fastest way to get support?",
              answer:
                "Booking a call or sending a WhatsApp message gets you the quickest response",
            },
            {
              question: "How soon will I hear back after emailing?",
              answer: "Within 24 hours on working days",
            },
            {
              question: "Do you offer onboarding assistance for new users?",
              answer:
                "Yes. Our team helps you set up your CRM and invoicing system end-to-end",
            },
            {
              question: "Can I request a product demo?",
              answer:
                "Absolutely. Use the “Book a Free Call” button above to schedule a demo.",
            },
          ]}
          className="px-4 md:px-6 w-[70%] py-12 md:py-16"
        />
      </section>

      <section className=" items-center text-center  w-full mx-auto   ">
        <LabelPill
          label="Get Started"
          dotColor="bg-blue-500"
          className="items-center"
        />
        <div className=" flex justify-center items-center  w-full">
          <SimpleCTA
            heading={<>Let’s Make Your Business Systems Simpler</>}
            subheading={
              <>
                Whether you're exploring DataCircles or need help with something
                specific, our team is always ready to support you.
                <br /> Let’s connect and get your business running on reliable
                systems.
              </>
            }
            buttons={[
              { label: "Schedule a Demo", href: "/book-a-demo" },
              { label: "Talk to Support", href: "/book-a-demo" },
            ]}
            image={yahaKaCTA}
            className="px-4 md:px-6 max-w-7xl py-12 md:py-16 items-center"
          />
        </div>
      </section>
    </main>
  );
}
