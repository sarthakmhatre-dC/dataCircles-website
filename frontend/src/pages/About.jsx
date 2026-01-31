import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
// import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import SimpleCTA from "../components/feature/SimpleCTA";
import FAQSection from "../components/feature/FAQSection";
import LabelPill from "../components/common/LabelPill";
import HeroBackground from "../components/HeroBackground";

export default function About() {
  const yahaKaCTA = "/assets/Home/ContactsSales.png";
  const nayaImage = "/assets/Home/UserDashboard.png";
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center text-black ">
        {/* -------------------------------------------------- */}
        {/* SECTION 1: HERO TITLE (Matches your reference UI) */}
        {/* -------------------------------------------------- */}

        <section className="text-center max-w-7xl mx-auto mb-30">
          <LabelPill
            label="About DataCircles Technologies"
            dotColor="bg-blue-500"
          />
          <h1 className="heading-2 mt-10 mb-5 font-semibold tracking-[-0.125rem]">
            Building Simple Technology for <br />
            Growing Indian Businesses
          </h1>
          <p className="text-gray-500 para-1">
            DataCircles Technologies is a SaaS company focused on solving real <br />
            business problems for Indian MSMEs.
            {/* We build practical tools that help <br/>
            founders manage customers, money, and growth without complexity. */}
          </p>
        </section>

        {/* -------------------------------------------------- */}
        {/* SECTION 2: TWO COLUMN COMPANY INTRODUCTION         */}
        {/* -------------------------------------------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-30 mt-15">
          {/* LEFT — Short Info */}
          <div>
            <p className="text-blue-500 heading-5 mb-8 font-medium">Who We Are</p>
            <h2 className="heading-3 tracking-[-0.125rem] font-medium mb-5">
              A Technology Company Built From <br /> a Real Business Problem
            </h2>

            <p className="text-gray-500 para-1 mr-4">
              DataCircles was not created in a boardroom. <br />
              It was born on the shop floor from the daily struggles <br />
              of running a growing business.
            </p>
          </div>

          {/* RIGHT — Explanation */}
          <div className="space-y-4 px-5 text-gray-500 leading-relaxed pt-10 para-1 font-light mr-10 tracking-[-0.05em]">
            <p>
              DataCircles Technologies started when a group of business owners
              faced the same problem managing customers in one place and
              handling invoices in another.
            </p>
            <p>
              Sales was messy. <br />
              Follow-ups were missed. <br />
              Accounting was slow.
              <br />
              Nothing talked to each other.
            </p>
            <p>We asked a simple question:</p>
            <p>
              Why should a small business use 3–4 different tools to do one job?
            </p>
            <p>
              That question led to the creation of DataCircles Technologies.
            </p>

            <p>
              Today, we are building a full ecosystem of business tools where
              customer data, sales activity, and financial records come together
              in one clean, connected system.
            </p>
            <p>
              Our goal is simple make powerful technology easy and affordable
              for every Indian business.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* SECTION 3: BIG MOCKUP / IMAGE PLACEHOLDER         */}
        {/* -------------------------------------------------- */}
        <div className="max-w-7xl rounded-xl overflow-hidden relative mb-30 bg-gray-200">
          <img
            src={nayaImage}
            alt="cta visual"
            className="w-full h-auto relative"
          />
          <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-white via-white/90 to-transparent rounded-xl" />
        </div>
        {/* Replace above with <img src="" /> anytime */}


        {/* -------------------------------------------------- */}
        {/* SECTION 4 new: TWO COLUMN COMPANY INTRODUCTION         */}
        {/* -------------------------------------------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-30 px-6">
          {/* LEFT — Short Info */}
          <div>
            <h2 className="heading-3 tracking-[-0.125rem] font-medium mb-5 pt-5">
              Where Your Data Comes <br /> Full Circle
            </h2>

            <p className="text-gray-500 para-1 mr-4">
              Our Vision for Indian Businesses
            </p>
          </div>

          {/* RIGHT — Explanation */}
          <div className="space-y-4 px-5 text-gray-500 leading-relaxed para-1 font-light pt-10 mr-10 tracking-[-0.05em]">
            <p className="font-light text-gray-500">
              Yash Mishra is the Founder and CEO of DataCircles. He holds a Bachelor’s degree in Business Administration in Business Analytics from CHRIST University and a Master’s degree from the Indian Institute of Management Indore.
            </p>

            <p className="font-light text-gray-500">
              He has previously worked in the technology sector, where he led product demonstrations for clients across more than 83 countries, gaining strong experience in SaaS sales and marketing. Alongside this, Yash is a fourth-generation entrepreneur in the textile industry through his family business, Cottson Clothing.
            </p>

            <p className="font-light text-gray-500">
              Driven by a strong passion for technology and a belief that MSMEs are the backbone of India’s growth, Yash founded DataCircles to provide Indian businesses with a unified CRM and invoicing platform that enables efficient and scalable operations.
            </p>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* SECTION 4 new: THREE CARDS SECTIONS                */}
        {/* -------------------------------------------------- */}
        <section className="w-full max-w-7xl mx-auto pb-30 mt-15 px-6">
          {/* Section Label */}
          <p className=" text-blue-500 heading-5 mb-8 font-medium">
            What Drives Us
          </p>

          {/* Heading */}
          <h2 className="heading-3 tracking-[-0.125rem] font-medium mb-5">Built With Purpose, Not Just Code</h2>

          {/* Subtext */}
          <p className="text-gray-600 mb-20 para-1 mr-4">
            Every product we build is guided by one goal help Indian <br />
            businesses run better every day.
          </p>

          {/* 3-Column Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/assets/about/EmpowerMSMEs.png",
                title: "Empower Indian MSMEs",
                desc: "To give Indian micro, small, and mid-sized businesses access to simple, affordable, and powerful business tools that help them grow with confidence.",
              },
              {
                img: "/assets/about/SmallTeams.png",
                title: "Built Only for Small Teams",
                desc: "We don’t build for enterprises with 100 employees. We build for founders with 2–20 people who need speed, clarity, and control without complexity.",
              },
              {
                img: "/assets/about/DataSecurity.png",
                title: "Data Safety First",
                desc: "We understand how sensitive business data is. That’s why we focus on cloud security, access control, and reliable systems that you can trust every day.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-gray-100 rounded-xl p-8 h-[400px] flex flex-col items-center text-center"
              >
                {/* Image Container: Flex-1 ensures this area takes up all available space, 
          pushing the text to the bottom while keeping the images centered */}
                <div className="flex-1 flex items-center justify-center w-full mb-6">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                  />
                </div>

                {/* Text Content: Starts at the same level in every card because of the flex-1 above */}
                <div className="w-full">
                  <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">
                    {card.title}
                  </h3>
                  <p className="para-5 text-gray-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Dynamic FAQ Section */}
        <section className="w-full max-w-7xl mx-auto pt-30 pb-30 px-6">
          <FAQSection
            tag="Know Us Better"
            /* title={
            <>
            Questions About <br /> DataCircles Technologies
            </>
            } */
            title="Questions About  DataCircles Technologies"
            subtitle="Clear answers about who we are and how we work."
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
              {
                question: "Is real-time sync supported?",
                answer: "Yes. Everything updates across users instantly.",
              },
              {
                question: "Is real-time sync supported?",
                answer: "Yes. Everything updates across users instantly.",
              },
            ]}
            className="px-4 md:px-6 w-[70%] py-12 md:py-8"
          />
        </section>

        {/* Dynamic one */}
        <section className=" items-center text-center w-full mx-auto pt-30">
          <LabelPill
            label="Lets work together"
            dotColor="bg-blue-500"
            className="items-center"
          />
          <div className=" flex justify-center items-center  w-full">
            <SimpleCTA
              heading={
                <>
                  Join the Growing Circle of <br />
                  Indian Businesses
                </>
              }
              subheading={
                <>
                  Whether you are a founder, an agency owner, or a growing team
                  DataCircles Technologies is here to support <br /> your
                  business with simple, trusted technology.
                </>
              }
              buttons={[
                { label: "Book a Free Demo", href: "/book-a-demo" },
                {
                  label: "Talk to our team",
                  href: "https://datacircles.netlify.apphttps://datacircles.netlify.app/login",
                },
              ]}
              image={yahaKaCTA}
              className="px-4 md:px-6 max-w-7xl pt-12 items-center"
            />
          </div>
        </section>
      </div>
    </>
  );
}
