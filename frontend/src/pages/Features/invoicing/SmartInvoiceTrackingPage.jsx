import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";
import FeatureSectionOne from "../../../components/common/FeatureSectionOne";
import VaultBlockOne from "../../../components/common/BlockOne";

export default function SmartInvoiceTrackingPage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="Smart Invoice Tracking"
        description="Always know who paid, who hasn’t, and what’s next."
        image="/assets/invoice-track.png"
        mode="left-image"
      />

      <GridBlock
        title="Tracking Benefits"
        subtitle="Reduce delays and improve cashflow"
        items={[
          { heading: "Auto Reminders", text: "Send overdue alerts." },
          { heading: "Payment Timeline", text: "See every transaction." },
          {
            heading: "Status Sync",
            text: "Paid/Unpaid updates automatically.",
          },
        ]}
      />
      <VaultBlockOne />
      <FeatureSectionOne />

      <FAQSection
        faqs={[
          {
            question: "Will reminders be automatic?",
            answer: "Yes, fully automated.",
          },
        ]}
      />

      <SimpleCTA
        heading="Track payments effortlessly"
        subheading="Start managing invoices like a pro."
        image="/assets/dashboard1.png"
      />
    </main>
  );
}
