import React from "react";
import { Link } from "react-router-dom";
import LabelPill from "../components/common/LabelPill";
import SimpleCTA from "../components/feature/SimpleCTA";
import FAQSection from "../components/feature/FAQSection";
import HeroBackground from "../components/HeroBackground";
import PricingSection from "../components/common/PricingSection";
import SalesCard from "../components/common/SalesCard";
import { BentoGrid } from "../components/ui/bento-grid";
import VideoTestimonialSection from "../components/common/VideoTestimonialSection";
import VerticalFeatureSection from "../components/common/SidebarPreviewAccordion";
import { InfiniteMovingTitles } from "../components/InfiniteMovingTitles";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import AccordionFeatureSection from "../components/common/SidebarPreviewAccordion";
import SidebarPreviewAccordion from "../components/common/SidebarPreviewAccordion";
import AnimationLogo from "../components/common/Animation";
import ScrollAccordion from "../components/ScrollAccordion";
const Landing = () => {
  const yahaKaCTA = "/assets/Home/ContactsSales.png";
  const salesImage = "/assets/Home/ContactsKanban.png";
  const abhishek = "/assets/Testimonials/AbhishekPatankar-NittyGrittyMedia.mp4";
  const puru =
    "/assets/Testimonials/PuruBindal-ShreeMaheshTimberTradingCompany.mp4";
  const companyLogos = [
    {
      href: "assets/logos/AsteriskLogoBlack.png",
      name: "Asterisks.Inc",
    },
    {
      href: "assets/logos/cottson.jpg",
      name: "Cottson Clothing",
    },
    {
      href: "assets/logos/bacoola.jpg",
      name: "Bacoola",
    },
  ];

  const bentoItems = [
    {
      title: "Lead & Client\nManagement",
      description: "Store and manage all customers in one clean dashboard.",
      image: "/assets/Home/LeadsAndManagement.png",
    },
    {
      title: "Sales Pipeline\nTracking",
      description: "See exactly who is new, in progress, or ready to close.",
      image: "/assets/Home/SalesPipeline.png",
    },
    {
      title: "Tasks &\nFollow-Ups",
      description: "Never forget a call, meeting, or reminder again.",
      image: "/assets/Home/TasksAndFollowUps.png",
    },
    {
      title: "Team Access\n& Collaboration",
      description: "Let your team work together with full visibility.",
      image: "/assets/Home/TeamAccess.png",
    },
    {
      title: "Reports &\nActivity Logs",
      description: "Track calls, emails, and performance in real time.",
      image: "/assets/Home/ReportsAndActivity.png",
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center w-screen">
      {/* -------------------------------------------------- */}
      {/* SECTION 1: HERO TITLE (Your Demo Layout)          */}
      {/* -------------------------------------------------- */}
      {/* <section className="w-full max-w-7xl mb-20 px-6 items-center text-center flex flex-col ">
        <LabelPill
          label="CRM + Invoicing for Indian Businesses"
          dotColor="bg-blue-800"
        />
        <h1 className=" text-6xl font-medium mt-3 mb-2">
          Run Your Sales and Accounts <br />
          in One Simple Tool
        </h1>
        <p className="text-gray-600 p1 font-regular mt-2">
          Track leads, follow up faster, and create GST-ready invoices from{" "}
          <br /> one simple cloud dashboard built for Indian MSMEs.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Link to="/book-a-demo">
            <button className="px-6 py-2 bg-black text-white rounded-2xl hover:bg-gray-800/95 ">
              Book Demo
            </button>
          </Link>
          <Link to="https://datacircles.netlify.app/login">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-2xl hover:bg-blue-800 ">
              Start free trial
            </button>
          </Link>
        </div>
      </section> */}
      <section className="w-full max-w-7xl mb-15 px-6 items-center text-center flex flex-col ">
        <LabelPill
          label="CRM + Invoicing for Indian Businesses"
          dotColor="bg-[#0085FF]"
        />

        {/* 🔽 RESPONSIVE CHANGE: font sizes for mobile/tablet */}
        <h1 className="heading-1 font-semibold mt-8 mb-2 letter-s tracking-[-4px]">
          Run Your Sales and Accounts <br />
          in One Simple Tool
        </h1>

        {/* 🔽 RESPONSIVE CHANGE: text size & line breaks */}
        <p className="text-gray-600 para-1 mt-3">
          DataCircles helps Indian MSMEs manage customers, track leads, and create invoices <br>
          </br>
          all in one cloud-based software that’s easy, affordable, and built for daily business work.
        </p>

        {/* 🔽 RESPONSIVE CHANGE: stack buttons on mobile */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 text-sm">
          <Link to="/book-a-demo">
            <button className="px-6 py-2 bg-black text-white rounded-3xl hover:bg-gray-800/95 w-full sm:w-auto h-10">
              Book Demo
            </button>
          </Link>
          <Link to="https://datacircles.netlify.app/login">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-800 w-full sm:w-auto h-10">
              Start Free trial
            </button>
          </Link>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 2: IMAGE          */}
      {/* -------------------------------------------------- */}

      <section className="w-full max-w-7xl h-[220px] sm:h-[350px] md:h-[650px] mb-20 bg-white rounded-4xl overflow-hidden">
        <img
          src="/assets/Home/UserDashboard.png"
          className="w-full h-fit rounded-2xl"
          alt="cta visual"
        />
        
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 3: p and Logos          */}
      {/* -------------------------------------------------- */}
      {/* <section className="flex flex-col justify-between items-center ">
        <p className="mb-4 p3 text-gray-500">
          Trusted by Growing Indian Businesses
        </p>
        <p className="mb-4 p1 text-gray-500  text-center ">
          Agencies, service firms, and MSMEs across India use DataCircles to
          manage <br /> their daily operations with confidence.
        </p>
        <InfiniteMovingCards items={companyLogos} speed="fast" />
      </section> */}

      <section className="flex flex-col justify-between items-center px-4 sm:px-0">
        <p className="mb-4 para-2 text-gray-500">
          Trusted by Growing Indian Businesses
        </p>

        {/* 🔽 RESPONSIVE CHANGE: remove forced <br> on mobile */}
        <p className="mb-4 text-gray-500 text-center para-2">
          Agencies, service firms, and MSMEs across India use DataCircles to
          manage
          <span className="hidden sm:inline">
            <br />
          </span>
          their daily operations with confidence.
        </p>

        <InfiniteMovingCards items={companyLogos} speed="fast" />
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 4: Animation TM          */}
      {/* -------------------------------------------------- */}
      <section className="w-full flex items-center justify-center">
        <AnimationLogo />
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 5: VIDEO       */}
      {/* -------------------------------------------------- */}

      {/* Replace above with <img src="" /> anytime */}
      {/* Section for testimonials */}
      <section className="w-full  bg-black">
        <VideoTestimonialSection
          videos={[
            {
              video: abhishek,
              name: "Abhishek Patankar",
              role: "NittyGrittyMedia",
              description:
                "DataCircles helped our team stay aligned and remove chaos.",
            },
            {
              video: puru,
              name: "Puru Bindal",
              role: "ShreeMaheshTimberTradingCompany",
              description:
                "We replaced spreadsheets and WhatsApp groups. Game changer.",
            },
            {
              video: "/videos/testimonial2.mp4",
              name: "Mikasa Ackerman",
              role: "COO — Scout Agency",

              description:
                "We replaced spreadsheets and WhatsApp groups. Game changer.",
            },
          ]}
        />

        {/* Section for BentoGrid */}
        {/* ---- Top Two-Column Layout ---- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-7xl mx-auto items-center pt-20">
          {/* Left Side */}
          <div className="text-left">
            <p className="para-1 text-blue-500 mb-8">
              Built for Daily Sales Work
            </p>

            <h2 className="heading-3 text-white font-medium leading-snug">
              Everything You Need to <br /> Close More Deals
            </h2>
          </div>

          {/* Right Side */}
          <div className="text-right flex justify-end">
            <p className="text-gray-400 max-w-md leading-relaxed p3 mt-25 para-5">
              No clutter. No confusion. Just the right tools to track every
              lead, every follow-up, and every customer.
            </p>
          </div>
        </div>

        {/* ---- Bento Grid Section ---- */}
        <BentoGrid items={bentoItems} className="py-6 mb-30" />
      </section>

      {/* Accordation */}
      {/* Accordation */}
      {/* Accordation */}
      {/* <section className=" w-full mt-20 mb-20 ml-45 mr-12  md:px-10 lg:px-20"> */}
      {/* ---------------- TOP HEADING BLOCK ---------------- */}

      {/* <div className=" max-w-6xl text-left mb-12">
          <LabelPill
            label="Smart Accounting Without Complexity"
            dotColor="bg-blue-600"
            className="p3"
          />

          <h1 className="h3 font-semibold mt-4">
            From Quotation to Payment
            <br /> Handled in One Flow
          </h1>

          <p className="text-gray-500 mt-3 p2 max-w-xl">
            Create, send, track, and manage all your financial documents <br />{" "}
            without switching tools.
          </p>
        </div> */}

      {/* ---------------- TWO COLUMN SECTION ---------------- */}
      {/* <AccordionFeatureSection menuItems={[]} /> */}
      {/* <SidebarPreviewAccordion />
      </section> */}

      <section className="w-full mb-30">
        {/* No margins, no max-width here. The component handles it self-contained. */}
        <ScrollAccordion />
      </section>

      <PricingSection />
      <SalesCard image={yahaKaCTA}/>
      {/* -------------------------------------------------- */}
      {/* SECTION 6: FAQ SECTION (Your Demo Layout)         */}
      {/* -------------------------------------------------- */}
      <section className="w-full max-w-7xl mb-20 mt-30 items-center text-center flex flex-col">
        <FAQSection
          title={
            <>
              Everything You Want to Know <br /> Before You Start
            </>
          }
          subtitle="Clear answers to common doubts—no hidden terms.."
          showButton={false}
          faqs={[
            {
              question: "Is DataCircles hard to use?",
              answer:
                "Not at all. It’s built for non-tech founders. If you can use WhatsApp, you can use DataCircles",
            },
            {
              question: "Is my business data safe?",
              answer:
                "Yes. Your data is encrypted, backed up, and fully secure on the AWS cloud.",
            },
            {
              question: "Can I use only CRM or only Invoicing?",
              answer:
                "Yes. You can start with what you need and expand anytime",
            },
          ]}
          className="px-4 md:px-6 w-[70%] py-12 md:py-16"
        />
      </section>
      {/* -------------------------------------------------- */}
      {/* SECTION 7: SIMPLE CTA SECTION (Your Demo Layout)  */}
      {/* -------------------------------------------------- */}
      <section className="w-full max-w-7xl items-center text-center flex flex-col">
        <LabelPill label="Start Today" dotColor="bg-blue-500" className="mb-10"/>
        <SimpleCTA
          heading={
            <>
              Your Business Deserves a <br />
              Better System
            </>
          }
          subheading={
            <>
              Join hundreds of Indian businesses who stopped using <br/>
              scattered tools and moved to one clean system.
            </>
          }
          buttons={[
            {
              label: "Book Free Demo",
              href: "/book-a-demo",
            },
            { label: "Start Free Trial", href: "/pricing" },
          ]}
          image={salesImage}
        />
      </section>
    </div>
  );
};

export default Landing;
