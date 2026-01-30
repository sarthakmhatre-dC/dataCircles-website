import LabelPill from "./LabelPill";

export default function VaultBlockOne() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Blue Label */}
      <LabelPill label="Lorem ipsum" dotColor="bg-blue-500" />

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-4 leading-tight">
        Lorem ipsum doloe <br /> self amet consecteteyr alit
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mt-4 mb-10 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* GRID — 2×2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="w-full h-52 bg-gray-200 rounded-lg mb-6"></div>

          <h3 className="font-semibold text-lg leading-tight">
            Lorem ipsum dolor <br /> self amet consectetur
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="w-full h-52 bg-gray-200 rounded-lg mb-6"></div>

          <h3 className="font-semibold text-lg leading-tight">
            Lorem ipsum dolor <br /> self amet consectetur
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="w-full h-52 bg-gray-200 rounded-lg mb-6"></div>

          <h3 className="font-semibold text-lg leading-tight">
            Lorem ipsum dolor <br /> self amet consectetur
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="w-full h-52 bg-gray-200 rounded-lg mb-6"></div>

          <h3 className="font-semibold text-lg leading-tight">
            Lorem ipsum dolor <br /> self amet consectetur
          </h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
