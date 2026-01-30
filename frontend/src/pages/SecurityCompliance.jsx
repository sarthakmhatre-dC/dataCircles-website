import LabelPill from "@/components/common/LabelPill";

export default function SecurityCompliance() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 pt-10 pb-20">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <LabelPill label="Security & Compliance" dotColor="bg-blue-500" />
          <h1 className="heading-2 mt-10 mb-8heading-2 mb-5 font-semibold tracking-[-0.25rem]">Security & Compliance at DataCircles</h1>

          <p className="text-gray-600 para-1">
            We prioritize the 100% protection of your data and the continuous accessibility of your 
            <br/>
            products. Your data remains private, secure, and accessible at all times
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Text Block */}
          <div className="flex flex-col justify-start">
            <h2 className="heading-4 tracking-[-0.125rem] mb-5 font-semibold text-gray-600">Your Security, Our Highest Priority</h2>
            <p className="text-gray-600 para-1 mb-5">
              At DataCircles, your data security is paramount. We follow global
              security standards and implement strong policies and processes to
              ensure confidentiality, integrity, and availability of your data.
            </p>
          </div>

          {/* Right Text Block */}
          <div className="flex flex-col justify-start">
            <h2 className="heading-4 tracking-[-0.125rem] mb-5 font-semibold text-gray-600">Continuous Monitoring & Audits</h2>
            <p className="text-gray-600 para-1 mb-5">
              Our systems undergo continuous monitoring and periodic audits.
              Through rigorous internal testing, we proactively identify and
              resolve potential vulnerabilities before they become threats,
              keeping your data safe at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
