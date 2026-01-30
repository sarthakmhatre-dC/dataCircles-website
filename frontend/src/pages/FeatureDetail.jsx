// src/pages/FeatureDetail.jsx
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SimpleCTA from "@/components/feature/SimpleCTA"; // adjust path
import { allFeatures } from "@/data/features";
import FAQSection from "@/components/feature/FAQSection";
import GridBlock from "@/components/feature/GridBlock";
import FeatureBlock from "@/components/feature/FeatureBlock";

export default function FeatureDetail() {
  const { slug } = useParams();
  const feature = allFeatures.find((f) => f.slug === slug);

  if (!feature) {
    return (
      <div className="text-center py-20 text-red-600">
        <h1 className="text-2xl font-bold">Feature Not Found</h1>
      </div>
    );
  }

  // choose modes for variety — you can add a `preferredMode` property into data/features if desired
  const mode1 = "image-right";
  const mode2 = "image-top";
  const mode3 = "overlay";

  return (
    <main className="bg-white text-gray-900 px-6 py-14">
      <section className="max-w-7xl mx-auto mb-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-sm text-blue-600 font-medium mb-2">
            Feature Detail
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            {feature.title}
          </h1>
          <p className="text-gray-600 mb-6">{feature.short}</p>
          <Button className="px-6 bg-blue-600 text-white">Learn More</Button>
        </div>

        <div>
          <FeatureBlock
            mode={mode1}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            imageAlt={feature.title}
            className="p-0"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto mb-16">
        <FeatureBlock
          mode={mode2}
          title="Why teams love it"
          description="This feature reduces manual effort and keeps everyone aligned."
          image={feature.image}
        />
      </section>

      <GridBlock
        title="Powerful Capabilities"
        subtitle="Everything your team needs"
        items={[
          { heading: "Real-time updates", text: "Keep everyone in sync." },
          { heading: "Filters & Views", text: "Find what matters quickly." },
          { heading: "Custom fields", text: "Tailor to your workflow." },
        ]}
      />

      <section className="max-w-7xl mx-auto mb-10">
        <FAQSection
          title="Frequently Asked Questions"
          subtitle="Have questions? We're here to help."
          showButton={false}
          faqs={[
            {
              question: "Is there a trial?",
              answer: "Yes. 14-day free trial.",
            },
            { question: "Can I import data?", answer: "CSV import supported." },
            {
              question: "Does it sync?",
              answer: "Realtime sync across devices.",
            },
          ]}
          className="px-4 md:px-6 w-full py-12 md:py-16 bg-gray-50 rounded-lg"
        />
      </section>

      <SimpleCTA
        heading={`Grow faster with ${feature.title}`}
        subheading={feature.short}
        buttons={[
          { label: "Try Free", href: "https://datacircles.netlify.app/login" },
          { label: "See Pricing", href: "/pricing" },
        ]}
        image={feature.image}
      />
    </main>
  );
}
