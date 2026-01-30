// components/pricing/SalesCard.jsx

export default function SalesCard({ image }) {
  return (
    <section className="w-full max-w-7xl mx-auto py-2 h-auto">
      <div className="bg-[radial-gradient(circle,#E7EFFF_0%,#E9EDF7_100%)] h-102 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Section */}
        <div>
          <h3 className="heading-3 mb-5 tracking-[-0.25rem] mt-10 ml-10">Custom Plans for Large Teams</h3>
          <p className="text-gray-600 para-1 mb-10 ml-10">
            Need advanced controls, integrations, or large user access? Our
            enterprise plan is built on-demand.
          </p>

          <button className="px-6 py-2 border bg-white border-gray-400 rounded-xl hover:bg-gray-200 ml-10">
            Talk to Sales
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full h-[440px] p-5">
          <img
            src={image}
            alt="Product UI screenshot"
            className="rounded-lg shadow-sm w-fit h-fit"
          />
        </div>
      </div>
    </section>
  );
}
