import LabelPill from "./LabelPill";

export default function TwoByTwo({
  label = "Label",
  title = "Section Title",
  description = "Section description goes here...",
  items = [],
}) {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      {/* Label */}
      {label && <LabelPill label={label} dotColor="bg-blue-500" />}

      {/* Heading */}
      <h2
        className="text-3xl font-semibold mt-4 leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {/* Description */}
      <p className="text-gray-600 mt-4 mb-10 max-w-xl">{description}</p>

      {/* 2×2 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-8">
            {/* Image (dynamic / fallback gray) */}
            <div className="w-full h-52 bg-gray-200 rounded-lg mb-6 overflow-hidden">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Title */}
            <h3
              className="font-semibold text-lg leading-tight"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />

            {/* Description */}
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* TO USE IT DO THISSSSSSSSSSSSSSSSSSSSSSS */

{
  /* <TwoByTwo
  label="Lorem ipsum"
  title={`Lorem ipsum doloe <br/> self amet consectetyr alit`}
  description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
  items={[
    {
      image: "",
      title: "Lorem ipsum dolor <br/> self amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      image: "",
      title: "Lorem ipsum dolor <br/> self amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      image: "",
      title: "Lorem ipsum dolor <br/> self amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      image: "",
      title: "Lorem ipsum dolor <br/> self amet consectetur",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
  ]}
/> */
}
