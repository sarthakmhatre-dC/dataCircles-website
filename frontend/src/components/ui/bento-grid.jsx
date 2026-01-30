
export function BentoGrid({ items = [], className = "", }) {
  const row1 = items.slice(0, 2);
  const row2 = items.slice(2, 5);

  return (
    <section className={`w-full bg-black ${className}`}>
      <div className="mx-auto max-w-7xl">
        {/* Row 1: 60/40 split */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_2fr] gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-4 lg:mb-5">
          {row1.map((item, index) => (
            <BentoCard key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>

        {/* Row 2: 3 equal columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {row2.map((item, index) => (
            <BentoCard key={index} title={item.title} description={item.description} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({ title, description, image }) {

  return (
    <div className="flex flex-col rounded-2xl bg-white overflow-hidden">
      {/* Content area placeholder */}
      <div className="flex-1 min-h-[300px] sm:min-h-40 lg:min-h-[300px] bg-gray-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : null}
      </div>

      {/* Text content */}
      <div className=" sm:p-5 lg:p-6">
        <h4 className="heading-5 font-semibold text-black mb-2">
          {title}
        </h4>
        <p className="text-gray-500 leading-relaxed para-4">
          {description}
        </p>
      </div>
    </div>
  );
}

export default BentoGrid;