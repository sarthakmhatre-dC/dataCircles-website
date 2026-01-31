import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import LabelPill from "../components/common/LabelPill";
import FAQSection from "../components/feature/FAQSection";

export default function Support() {
  const faqs = [
    {
      q: "How do I reset my password?",
      a: "Click 'Forgot password' on the login page or update it from your account settings.",
    },
    {
      q: "Where can I view my billing?",
      a: "Go to Settings → Billing to view invoices, payment methods, and plans.",
    },
    {
      q: "How do I contact support?",
      a: "Email support@datacircles.ai or use the contact form on this page.",
    },
  ];

  return (
    <main className="text-dctext px-6">
      {/* HEADER */}
      <section className="max-w-7xl mx-auto text-center pb-30">
        <LabelPill
          label="DataCircle's Support System"
          dotColor="bg-blue-500"
        />
        <h1 className="heading-2 mt-10 mb-5 font-semibold tracking-[-0.125rem]">Support</h1>
        <p className="text-gray-500 para-1">
          We're here to help you get the most out of DataCircles.
        </p>
      </section>

      {/* CONTACT CARD */}
      <Card className="max-w-6xl mx-auto  border border-dcprimary-light shadow-sm">
        <CardHeader>
          <CardTitle className="heading-3 tracking-[-0.125rem]">Contact Us</CardTitle>
        </CardHeader>

        <CardContent className="text-gray-700 prara-1 space-y-5">
          <p className="text-gray-600 dark:text-blue-200">
            Support Email: <strong>support@datacircles.in</strong>
          </p>
          <p className="text-gray-600 dark:text-blue-200">
            Average response time: <strong>24 hours</strong>
          </p>

          <Button className="bg-dcprimary hover:bg-dcprimary-hover">
            Send a Message
          </Button>
        </CardContent>
      </Card>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto pb-30 pt-30">
        <FAQSection
          title="Start making your business easier with DataCircles"
          subtitle="Here are answers to some common questions about Support"
          showButton={false}
          faqs={[
            {
              question: "How do I reset my Password?",
              answer:
                "Click 'Forgot password' on the login page or update it from your account settings.",
            },
            {
              question: "Where can I view my Billings?",
              answer: "Go to Settings → Billing to view invoices, payment methods, and plans.",
            },
            {
              question: "How do I contact Support?",
              answer: "Email support@datacircles.ai or use the contact form on this page.",
            },
          ]}
        />
      </section>
    </main>
  );
}
