export default function FeatureSectionOne() {
  return (
    <section className="w-full max-w-7xl mx-auto mb-24 px-6">
      {/* Section Label */}
      <p className="font-light text-blue-500 text-lg mb-2">Lorem Ipsum</p>

      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 mb-10 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      {/* 4-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2">Lorem ipsum dolor</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2">Consectetur elit</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2">Amet dolor sit</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Ut enim ad minim veniam quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
          <h3 className="text-lg font-semibold mb-2">Eiusmod tempor</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
        </div>
      </div>
    </section>
  );
}
