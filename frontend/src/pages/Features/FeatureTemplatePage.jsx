import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";

export default function FeatureTemplatePage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="TITLE"
        description="DESCRIPTION"
        image="/assets/example.png"
        mode="LAYOUT_MODE"
      />

      <GridBlock
        title="Section Title"
        subtitle="Section subtitle"
        items={[{ heading: "", text: "" }]}
      />

      <FAQSection faqs={[{ question: "", answer: "" }]} />

      <SimpleCTA
        heading="CTA Heading"
        subheading="CTA text"
        image="/assets/dashboard1.png"
      />
    </main>
  );
}
