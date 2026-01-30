import LabelPill from "./LabelPill";

export default function HorizontalBox({
  label = "Label",
  title = "Section Title",
  description = "Description goes here...",
  items = [],
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Label */}
      {label && <LabelPill label={label} dotColor="bg-blue-500" />}

      {/* Heading */}
      <h2 className="text-3xl font-semibold mt-4 leading-tight">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 mt-4 mb-10 max-w-xl">{description}</p>

      {/* 4-BOX GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// /* TO USE IT DO THISSSSSSSSSSSSSSSSSSSSSSS */

// <HorizontalBox
//   label="Lorem Ipsum"
//   title="Built With Purpose, Not Just Code"
//   description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//   items={[
//     {
//       title: "Lorem Ipsum Dolor",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "Consectetur Adipiscing",
//       description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
//     },
//     {
//       title: "Eiusmod Tempor",
//       description: "Ut enim ad minim veniam quis nostrud exercitation.",
//     },
//     {
//       title: "Dolor Sit Amet",
//       description: "Duis aute irure dolor in reprehenderit voluptate.",
//     },
//   ]}
// />
