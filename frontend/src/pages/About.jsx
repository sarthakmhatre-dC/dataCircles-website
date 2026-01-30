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

        <section className="text-center max-w-7xl  mx-auto mb-30 ">
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
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-30 mt-20">
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
        <div className="max-w-6xl mb-0 bg-gray-200 rounded-xl overflow-hidden relative">
          <img
            src={nayaImage}
            alt="cta visual"
            className="w-full h-auto block"
            style={{
              /* - Black (solid) from the top (0%) down to 85%.
                 - Fades to Transparent from 85% to 100% (covering the bottom 15%).
              */
              maskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 65%, transparent 100%)'
            }}
          />
        </div>
        {/* Replace above with <img src="" /> anytime */}

        {/* -------------------------------------------------- */}
        {/* SECTION 4 new: TWO COLUMN COMPANY INTRODUCTION         */}
        {/* -------------------------------------------------- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-30 px-6 mt-30">
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
        {/* SECTION 4: SECOND TEXT SECTION (Matches layout)   */}
        {/* -------------------------------------------------- */}
        {/* <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto mb-20 px-6">
          <div>
            <h2 className="text-3xl  mb-3">Our Founder (1 or 2 lines more)</h2>
          </div>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              About the Founder: Yash Mishra, our visionary founder, started
              DataCircles Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Laudantium totam adipisci iusto eos similique laboriosam,
              quae ratione asperiores. Iure, reprehenderit!
            </p>
            <p>
              With real-time sync, flexible workspaces, and a clean UI, managing
              team operations becomes effortless.
            </p>
            <p>
              We're constantly improving with community-driven features to help
              modern teams stay ahead.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              quis quaerat molestias quibusdam quo voluptates, fugit iusto
              mollitia alias odit, animi labore consequuntur fuga recusandae
              distinctio sit exercitationem ad porro?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              quis quaerat molestias quibusdam quo voluptates, fugit iusto
              mollitia alias odit, animi labore consequuntur fuga recusandae
              distinctio sit exercitationem ad porro?
            </p>
          </div>
        </section> */}

        {/* -------------------------------------------------- */}
        {/* SECTION 5: TEAM / FOUNDERS / VALUES CARDS        */}
        {/* -------------------------------------------------- */}
        {/* <section className="w-full max-w-7xl mb-20 px-6">
          <p className="font-light text-blue-500 text-lg mb-6">
            {" "}
            What Drives us
          </p>
          <h2 className=" text-3xl  mb-7">Built With Purpose, Not Just Code</h2>
          <p className="font-light text-gray-600">
            Every product we build is guided by one goal help Indian <br />{" "}
            businesses run better every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40%] mt-4">
            <Card className="shadow-sm border ">
              <CardContent className="p-6 text-center ">
                <Avatar className="mx-auto mb-4 bg"></Avatar>
                <h3 className="mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Clear communication and no hidden complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6 text-center">
                <Avatar className="mx-auto mb-4">
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <h3 className=" mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600">
                  Build, discuss, and grow together smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6 text-center">
                <Avatar className="mx-auto mb-4">
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <h3 className=" mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Constantly improving to empower modern teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        <section className="w-full max-w-7xl mx-auto mb-10 mt-20 px-6">
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
            {/* CARD 1 */}
            <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
              <div className="mb-2">
                <img
                  src="/assets/about/EmpowerMSMEs.png" // update path if needed
                  alt="Empower Indian MSMEs"
                  className="w-200 mx-auto"
                />
              </div>
              <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">Empower Indian MSMEs</h3>
              <p className="para-5 text-gray-600">
                To give Indian micro, small, and mid-sized businesses access to
                simple, affordable, and powerful business tools that help them
                grow with confidence.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
              <div className="mb-2">
                <img
                  src="/assets/about/SmallTeams.png" // update path if needed
                  alt="Built Only for Small Teams"
                  className="w-200 mx-auto"
                />
              </div>
              <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">
                Built Only for Small Teams</h3>
              <p className="para-5 text-gray-600">
                We don’t build for enterprises with 100 <br />
                employees. We build for founders with 2–20 <br />
                people who need speed, clarity, and control <br />
                without complexity.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-gray-100 rounded-xl p-8 h-[380px] flex flex-col justify-end">
              <div className="mb-2">
                <img
                  src="/assets/about/DataSecurity.png" // update path if needed
                  alt="Data Safety"
                  className="w-200 mx-auto"
                />
              </div>
              <div>
                <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">Data Safety First</h3>
                <p className="para-5 text-gray-600">
                  We understand how sensitive business data is. That’s why we focus on cloud security, access control, and reliable systems that you can trust <br />
                  every day.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* -------------------------------------------------- */}
        {/* SECTION 5: TEAM / FOUNDERS / VALUES CARDS        */}
        {/* -------------------------------------------------- */}
        {/* <section className="w-full max-w-7xl mb-20 px-6">
          <p className="font-light text-blue-500 text-lg mb-6">
            {" "}
            What Drives us
          </p>
          <h2 className=" text-3xl  mb-7">Built With Purpose, Not Just Code</h2>
          <p className="font-light text-gray-600">
            Every product we build is guided by one goal help Indian <br />{" "}
            businesses run better every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[40%] mt-4">
            <Card className="shadow-sm border ">
              <CardContent className="p-6 text-center ">
                <Avatar className="mx-auto mb-4 bg"></Avatar>
                <h3 className="mb-2">Transparency</h3>
                <p className="text-sm text-gray-600">
                  Clear communication and no hidden complexity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6 text-center">
                <Avatar className="mx-auto mb-4">
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <h3 className=" mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600">
                  Build, discuss, and grow together smoothly.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border">
              <CardContent className="p-6 text-center">
                <Avatar className="mx-auto mb-4">
                  <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <h3 className=" mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">
                  Constantly improving to empower modern teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* -------------------------------------------------- */}
        {/* SECTION 6: FAQ SECTION (Your Demo Layout)         */}
        {/* -------------------------------------------------- */}
        {/* <section className="max-w-5xl w-full mb-24 px-6">
        <h2 className="text-2xl font-bold mb-6">Your questions answered</h2>
        
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
        <AccordionTrigger>What is DataCircles?</AccordionTrigger>
        <AccordionContent>
        DataCircles is an all-in-one collaborative workspace for teams.
        </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
        <AccordionTrigger>Is real-time sync supported?</AccordionTrigger>
        <AccordionContent>
        Yes. Everything updates across users instantly.
        </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
        <AccordionTrigger>Is there a free trial?</AccordionTrigger>
        <AccordionContent>
        Yes! You can explore all premium features during the trial.
        </AccordionContent>
        </AccordionItem>
        </Accordion>
        </section> */}

        {/* Dynamic FAQ Section */}

        <section className="w-full max-w-7xl mx-auto mb-20 px-6">
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

        {/* -------------------------------------------------- */}
        {/* SECTION 7: PRODUCT PREVIEW (UI Screenshot)        */}
        {/* -------------------------------------------------- */}
        {/* <div className="w-full max-w-5xl h-[350px] md:h-[450px] bg-gray-200 rounded-xl mb-12" /> */}
        {/* Replace with actual product screenshot */}

        {/* -------------------------------------------------- */}
        {/* SECTION 8: CALL TO ACTION                         */}
        {/* -------------------------------------------------- */}
        {/* <section className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-4">
        Try DataCircles Free for 14 Days
        </h2>
        <p className="text-gray-600 mb-6">
        Experience the future of teamwork — simple, connected, powerful.
        </p>
        <Button className="px-6 py-4 text-lg">Start Free Trial</Button>
        </section> */}

        {/* Dynamic one */}
        <section className=" items-center text-center w-full mx-auto   ">
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
