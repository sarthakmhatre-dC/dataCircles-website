// adjust path if needed
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import SimpleCTA from "../components/feature/SimpleCTA";
import FAQSection from "../components/feature/FAQSection";
import PricingSection from "../components/common/PricingSection";
import LabelPill from "../components/common/LabelPill";

// ---------- Comparison Table Data (ONLY for table) ----------

const FEATURE_ROWS = [
  {
    label: "Records Limit",
    values: {
      starter: "10,000",
      growth: "25,000",
      business: "50,000",
    },
  },
  {
    label: "Email Templates",
    values: {
      starter: "3",
      growth: "5",
      business: "10",
    },
  },
  {
    label: "Sales Pipelines",
    values: {
      starter: "1",
      growth: "3",
      business: "5",
    },
  },
  {
    label: "Custom Fields",
    values: {
      starter: "10",
      growth: "25",
      business: "50",
    },
  },
  {
    label: "Support",
    values: {
      starter: "Email",
      growth: "Priority Email",
      business: "Dedicated Support",
    },
  },
];

const PLANS_FOR_TABLE = [
  { id: "starter", name: "Starter" },
  { id: "growth", name: "Growth" },
  { id: "business", name: "Business" },
];

const yahaKaCTA = "/assets/Home/ContactsKanban.png";

export default function Pricing() {
  return (
    <main className="w-full min-h-screen text-black">
      {/* ================= HERO / INTRO ================= */}
      <section className="text-center pb-30">
        <LabelPill
          label="DataCircle's Pricing"
          dotColor="bg-blue-500"
        />
        <h1 className="heading-2 mt-10 mb-5 font-semibold tracking-[-0.125rem]">Simple & Transparent pricing</h1>
        <p className="text-gray-500 para-1">
          Choose a plan that fits your business today.
          <br />
          Upgrade or downgrade anytime.
        </p>
      </section>

      {/* ================= PRICING SECTION ================= */}
      {/* 🔥 THIS IS YOUR FINAL PricingSection.jsx */}
      <PricingSection />

      {/* ================= COMPARISON TABLE ================= */}
      <section className="pt-30 pb-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Compare Plans
          </h2>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Features</TableHead>
                    {PLANS_FOR_TABLE.map((plan) => (
                      <TableHead key={plan.id} className="text-center">
                        {plan.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {FEATURE_ROWS.map((row) => (
                    <TableRow key={row.label}>
                      <TableCell className="font-medium">{row.label}</TableCell>
                      {PLANS_FOR_TABLE.map((plan) => (
                        <TableCell
                          key={plan.id}
                          className="text-center text-sm text-gray-700"
                        >
                          {row.values[plan.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-7xl mx-auto pb-30 pt-30">
        <FAQSection
          title="Start making your business easier with DataCircles"
          subtitle="Here are answers to some common questions about pricing and billing."
          showButton={false}
          faqs={[
            {
              question: "Can I change my plan later?",
              answer:
                "Yes. You can upgrade or downgrade your plan at any time from your billing settings.",
            },
            {
              question: "Is GST applicable?",
              answer: "Yes, GST is applicable as per Indian regulations.",
            },
            {
              question: "Do you offer a free trial?",
              answer: "Yes. All paid plans come with a 7-day free trial.",
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major debit and credit cards.",
            },
          ]}
        />
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="pt-30 ">
        <SimpleCTA
          heading="Get started with DataCircles"
          subheading="Start your 7-day free trial today."
          buttons={[
            { label: "Try Free", href: "/login" },
            { label: "Book a Demo", href: "/book-a-demo" },
          ]}
          image={yahaKaCTA}
          className="max-w-7xl mx-auto"
        />
      </section>
    </main>
  );
}
