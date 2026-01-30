import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";
import FeatureSectionOne from "../../../components/common/FeatureSectionOne";
import VaultBlockOne from "../../../components/common/BlockOne";

export default function PipelineOverviewPage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="Pipeline Overview"
        description="Visualize every stage of your pipeline with clarity."
        image="/assets/dashboard1.png"
        mode="right-image"
      />

      <GridBlock
        title="Pipeline Tools"
        subtitle="Stay ahead with real-time visibility"
        items={[
          { heading: "Stage Tracking", text: "Monitor progress instantly." },
          { heading: "Stage Tracking", text: "Monitor progress instantly." },
          { heading: "Stage Tracking", text: "Monitor progress instantly." },
          { heading: "Stage Tracking", text: "Monitor progress instantly." },
          { heading: "Stage Tracking", text: "Monitor progress instantly." },
          { heading: "Deal Forecasting", text: "Predict revenue accurately." },
          { heading: "Kanban View", text: "Drag & drop deals easily." },
        ]}
      />
      <VaultBlockOne />
      <FeatureSectionOne />
      <FAQSection
        title="Pipeline FAQ"
        faqs={[
          {
            question: "Can I customize stages?",
            answer: "Yes, unlimited stages.",
          },
          {
            question: "Is forecasting automatic?",
            answer: "Yes, based on past data.",
          },
          {
            question: "Is forecasting automatic?",
            answer: "Yes, based on past data.",
          },
          {
            question: "Is forecasting automatic?",
            answer: "Yes, based on past data.",
          },
        ]}
      />

      <SimpleCTA
        heading="Streamline your pipeline"
        subheading="Manage every deal with precision."
        image="/assets/dashboard1.png"
      />
    </main>
  );
}
