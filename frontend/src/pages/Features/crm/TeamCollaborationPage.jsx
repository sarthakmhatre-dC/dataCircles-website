import FeatureBlock from "@/components/feature/FeatureBlock";
import GridBlock from "@/components/feature/GridBlock";
import FAQSection from "@/components/feature/FAQSection";
import SimpleCTA from "@/components/feature/SimpleCTA";

import FeatureSectionOne from "../../../components/common/FeatureSectionOne";
import VaultBlockOne from "../../../components/common/BlockOne";

export default function TeamCollaborationPage() {
  return (
    <main className="px-6 py-16">
      <FeatureBlock
        title="Team Collaboration"
        description="Assign tasks, share notes, and track progress in real time."
        image="/assets/collaboration.png"
        mode="image-bottom"
      />

      <GridBlock
        title="Team Tools"
        subtitle="Work together efficiently"
        items={[
          { heading: "Task Assignments", text: "Assign & track tasks." },
          { heading: "Shared Notes", text: "Collaborate instantly." },
          { heading: "Mentions & Alerts", text: "Keep everyone updated." },
        ]}
      />

      <FeatureSectionOne />
      <VaultBlockOne />
      <FAQSection
        faqs={[
          { question: "Is chat real-time?", answer: "Yes — instant updates." },
          { question: "Can teams be grouped?", answer: "Yes, via workspaces." },
        ]}
      />

      <SimpleCTA
        heading="Improve team productivity"
        subheading="Collaborate smarter with DataCircles."
        image="/assets/dashboard1.png"
      />
    </main>
  );
}
