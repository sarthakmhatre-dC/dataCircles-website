import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";
import FeatureSectionOne from "../../../components/common/FeatureSectionOne";
import VaultBlockOne from "../../../components/common/BlockOne";

export default function PaymentIntegrationPage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="Payment Integration"
        description="Accept UPI, cards, wallets, and net banking."
        image="/assets/payments.png"
        mode="right-image"
      />

      <GridBlock
        title="Payment Features"
        subtitle="Seamless checkout experience"
        items={[
          { heading: "UPI Support", text: "Instant payments." },
          { heading: "Cards & Wallets", text: "Accept everything." },
          { heading: "GST Billing", text: "Auto tax handling." },
        ]}
      />
      <VaultBlockOne />
      <FeatureSectionOne />
      <FAQSection
        faqs={[
          {
            question: "Do you charge fees?",
            answer: "Only payment gateway fees.",
          },
          {
            question: "Do you charge fees?",
            answer: "Only payment gateway fees.",
          },
          {
            question: "Do you charge fees?",
            answer: "Only payment gateway fees.",
          },
        ]}
      />

      <SimpleCTA
        heading="Accept payments faster"
        subheading="Integrate payments in one click."
        image="/assets/dashboard1.png"
      />
    </main>
  );
}
