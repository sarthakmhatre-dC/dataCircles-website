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
import CustomProjectAccordion from "../components/CustomProjectAccordion";
import SocialProof from "../components/common/SocialProof";
import ServicesSection from "../components/common/ServicesSection";
import ProcessSection from "../components/common/GrowthFramework";
import GrowthFramework from "../components/common/GrowthFramework";
import LightLeak from "/assets/LightLeak.png";
import ProjectsSection from "../components/common/ProjectsSection";
const CustomProjects = () => {
    const yahaKaCTA = "/assets/dashboard1.png";
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
        },
        {
            title: "Sales Pipeline\nTracking",
            description: "See exactly who is new, in progress, or ready to close.",
        },
        {
            title: "Tasks &\nFollow-Ups",
            description: "Never forget a call, meeting, or reminder again.",
        },
        {
            title: "Team Access\n& Collaboration",
            description: "Let your team work together with full visibility.",
        },
        {
            title: "Reports &\nActivity Logs",
            description: "Track calls, emails, and performance in real time.",
        },
    ];

    return (
        <div className="flex justify-center flex-col items-center w-screen">
            <section className="w-full max-w-7xl mb-15 items-center text-center flex flex-col">
                <SocialProof
                    rating={4}
                    clientCount={25}
                    avatarUrls={[
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&h=64"
                    ]}
                />

                {/* 🔽 RESPONSIVE CHANGE: font sizes for mobile/tablet */}
                <h1 className="heading-1 font-semibold mt-8 mb-2 letter-s tracking-[-4px]">
                    Custom-Built Digital Products <br />
                    Engineered to Scale.
                </h1>

                {/* 🔽 RESPONSIVE CHANGE: text size & line breaks */}
                <p className="text-gray-600 para-1 mt-3">
                    We design and develop high-performance digital products tailored to <br />
                    your business logic no templates, no shortcuts.
                </p>

                {/* 🔽 RESPONSIVE CHANGE: stack buttons on mobile */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 text-sm">
                    <Link to="/book-a-demo">
                        <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800/95 w-full sm:w-auto h-10">
                            Start Your Project
                        </button>
                    </Link>
                    <Link to="https://datacircles.netlify.app/login">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 w-full sm:w-auto h-10">
                            Let's talk
                        </button>
                    </Link>
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 2: IMAGE          */}
            {/* -------------------------------------------------- */}

            <section className="w-full max-w-7xl h-[220px] sm:h-[350px] md:h-[650px] mb-20 bg-white rounded-4xl overflow-hidden">
                <img
                    src="/assets/Dashboardanalytics.png"
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

            <section className="flex flex-col justify-between items-center px-4 sm:px-0 mb-30">
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
            {/* SECTION 4: Question          */}
            {/* -------------------------------------------------- */}

            <section className="w-full max-w-7xl items-center text-center flex flex-col mt-30 mb-50">

                {/* 🔽 RESPONSIVE CHANGE: font sizes for mobile/tablet */}
                <h1 className="heading-2 font-normal mb-2 letter-s tracking-[-4px]">
                    Have a custom requirement ?
                </h1>

                {/* 🔽 RESPONSIVE CHANGE: text size & line breaks */}
                <p className="text-gray-600 para-1 mt-3">
                    If your product doesn’t fit inside a template, you’re
                    <br /> exactly who we work with.
                </p>

                {/* 🔽 RESPONSIVE CHANGE: stack buttons on mobile */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 text-sm">
                    <Link to="https://datacircles.netlify.app/login">
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-800 w-full sm:w-auto h-10">
                            Discuss Your Use Case
                        </button>
                    </Link>
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* SECTION 5: Services Card Layout */}
            {/* -------------------------------------------------- */}

            <div className="relative w-full bg-[#050505] min-h-screen overflow-hidden font-inter selection:bg-white/20">

                {/* 2. The Single Continuous Light Effect 
          Positioned exactly as it was in your ServicesSection for consistency. */}
                <img
                    src={LightLeak}
                    alt=""
                    className="absolute top-0 left-0 w-[2000rem] h-[2000rem] -translate-x-1/8 -translate-y-1/2 object-contain opacity-100 pointer-events-none mix-blend-screen z-100"
                />

                {/* 3. The Components (Stacked with transparent backgrounds) */}
                <div className="relative z-10">
                    <ServicesSection />
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
                    <ProjectsSection />
                </div>
            </div>

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
                <CustomProjectAccordion />
            </section>

            <section>
                <GrowthFramework />
            </section>

            {/* <PricingSection />
      <SalesCard image={yahaKaCTA}/> */}
            {/* -------------------------------------------------- */}
            {/* SECTION 6: FAQ SECTION (Your Demo Layout)         */}
            {/* -------------------------------------------------- */}
            <section className="w-full max-w-7xl mb-20 items-center text-center flex flex-col pt-30 pb-30">
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
            <section className="w-full max-w-7xl justify-center items-center text-center flex flex-col h-auto mt-30">
                <LabelPill label="Start Today" dotColor="bg-blue-500" className="mb-10" />
                <SimpleCTA
                    heading={
                        <>
                            Your Business Deserves a <br />
                            Better System
                        </>
                    }
                    subheading={
                        <>
                            Join hundreds of Indian businesses who stopped using <br />
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

export default CustomProjects;
