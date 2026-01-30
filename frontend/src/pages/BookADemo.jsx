import LabelPill from "../components/common/LabelPill";
import SimpleCTA from "../components/feature/SimpleCTA";
import FAQSection from "../components/feature/FAQSection";

export default function BookADemo() {
  const yahaKaCTA = "/assets/dashboard1.png";
  return (
    <main className="bg-trasnparent text-dctext px-16 py-12">
      {/* HEADER */}
      <section className="w-full mx-auto mb-12 text-black">
        {/* Top row: Left = label + title, Right = description */}
        <div className="flex justify-between items-start mb-10">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-4">
            <LabelPill label="For Demo" dotColor="bg-blue-500" />

            <h1 className="text-4xl font-bold leading-tight">
              Lorem ipsum <br /> dolor self amet
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <p className="text-gray-600 max-w-md text-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* BIG CARD / IMAGE BELOW */}
        <div className="max-w-7xl bg-white/70 backdrop-blur-sm rounded-3xl mx-auto h-[450px] shadow-sm border border-gray-100" />
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 5: TEAM / FOUNDERS / VALUES CARDS        */}
      {/* -------------------------------------------------- */}
      <section className="w-full max-w-7xl mx-auto mb-24 px-6">
        {/* Section Label */}
        <p className="font-light text-blue-500 text-lg mb-2">What Drives Us</p>

        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-4">
          Lorem ipsum doloe self amet consectetyr alit
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          {/* CARD 1 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="text-lg font-semibold mb-2">Empower Indian MSMEs</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To give Indian micro, small, and mid-sized businesses access to
              simple, affordable.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="text-lg font-semibold mb-2">
              Built Only for Small Teams
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We build for founders with 2 to 20 people who need clarity, speed.
              Lorem, ipsum dolor.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="text-lg font-semibold mb-2">Data Safety First</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We focus on cloud security, access control. Lorem ipsum dolor sit
              amet.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="text-lg font-semibold mb-2">Empower Indian MSMEs</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To give Indian micro, small, and mid-sized businesses access to
              simple, affordable.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto mb-24 px-6">
        <FAQSection
          headTitle="Know Us Better"
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
          className="px-4 md:px-6 w-[70%] py-12 md:py-16"
        />
      </section>

      {/* -------------------------------------------------- */}
      {/* SECTION 7: PRODUCT PREVIEW (UI Screenshot)        */}
      {/* -------------------------------------------------- */}
      <section className=" flex justify-center w-full     ">
        <div className="max-w-5xl items-center justify-center h-[350px] md:h-[450px] bg-gray-200 rounded-xl mb-12" />
      </section>
      {/* Replace with actual product screenshot */}

      {/* Dynamic one */}
      <section className=" items-center text-center  w-full mx-auto   ">
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
                DataCircles Technologies is here to support <br /> your business
                with simple, trusted technology.
              </>
            }
            buttons={[
              { label: "Book a Free Demo", href: "/signup" },
              {
                label: "Talk to our team",
                href: "https://datacircles.netlify.app/login",
              },
            ]}
            image={yahaKaCTA}
            className="px-4 md:px-6 max-w-7xl py-12 md:py-16 items-center"
          />
        </div>
      </section>
    </main>
  );
}
