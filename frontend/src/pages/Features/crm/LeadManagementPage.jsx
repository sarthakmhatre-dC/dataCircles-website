import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";
import FeatureSectionOne from "../../../components/common/FeatureSectionOne";
import VaultBlockOne from "../../../components/common/BlockOne";

export default function LeadManagementPage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="Lead Management"
        description="Capture, track, and convert leads efficiently."
        image="/assets/leads.png"
        mode="left-image" // 1 of your 6 modes
      />

      <GridBlock
        title="Lead Management Capabilities"
        subtitle="Everything you need to convert more leads"
        items={[
          {
            heading: "Auto Lead Capture",
            text: "Capture from forms & emails.",
          },
          { heading: "Lead Scoring", text: "Identify high-value leads." },
          { heading: "Email Tracking", text: "Track interactions easily." },
        ]}
      />

      <FeatureSectionOne />
      <VaultBlockOne />
      <FAQSection
        title="Lead Management FAQ"
        subtitle="Common questions answered"
        faqs={[
          {
            question: "How does auto capture work?",
            answer: "We sync your inbox.",
          },
          { question: "Can I import leads?", answer: "Yes, via CSV upload." },
        ]}
        className="my-12 align-center"
      />

      <SimpleCTA
        heading="Boost conversions with Lead Management"
        subheading="Start organizing your leads better today."
        image="/assets/dashboard1.png"
        buttons={[
          { label: "Try Free", href: "https://datacircles.netlify.app/login" },
          { label: "See Pricing", href: "/pricing" },
        ]}
      />
    </main>
  );
}
