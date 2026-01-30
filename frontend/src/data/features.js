// export const crmFeatures = [
//   {
//     id: "crm001",
//     slug: "lead-management",
//     category: "crm",
//     title: "Lead Management",
//     short: "Track and organize leads.",
//     description: "Manage, filter, and convert leads with ease.",
//     image: "/assets/crm/lead-management.png", // ⭐ ADD THIS
//   },
//   {
//     id: "crm002",
//     slug: "pipeline-overview",
//     category: "crm",
//     title: "Pipeline Overview",
//     short: "Visualize your sales pipeline.",
//     description: "See every stage clearly and keep deals moving smoothly.",
//     image: "/assets/crm/pipeline.png",
//   },
//   {
//     id: "crm003",
//     slug: "team-collaboration",
//     category: "crm",
//     title: "Team Collaboration",
//     short: "Work together seamlessly.",
//     description: "Assign tasks, share updates, and sync progress in real time.",
//     image: "/assets/crm/team-collab.png",
//   },
// ];

// export const invoicingFeatures = [
//   {
//     id: "inv001",
//     slug: "tracking",
//     category: "invoicing",
//     title: "Smart Invoice Tracking",
//     short: "Stay on top of due payments.",
//     description: "Track unpaid invoices and send reminders.",
//     image: "/assets/invoicing/tracking.png",
//   },
//   {
//     id: "inv002",
//     slug: "payment-integration",
//     category: "invoicing",
//     title: "Payment Integration",
//     short: "Accept multiple payment methods.",
//     description: "Collect payments via UPI, cards and net banking.",
//     image: "/assets/invoicing/payment-methods.png",
//   },
// ];

// export const allFeatures = [...crmFeatures, ...invoicingFeatures];

// src/data/features.js
const crmFeatures = [
  {
    id: "crm001",
    slug: "Lead & Client Management",
    title: "Lead & Client Management",
    short: "Store all leads and customers in one organized system",
    description: "MStore all leads and customers in one organized system",
    image: "/assets/feature-lead-management.png",
    category: "crm",
    link: "/features/lead-management",
  },
  {
    id: "crm002",
    slug: "Sales Pipeline",
    title: "Sales Pipeline",
    short: "Track every deal from first call to final closure",
    description: "Track every deal from first call to final closure",
    image: "/assets/feature-pipeline.png",
    category: "crm",
    link: "/features/pipeline-overview",
  },
  {
    id: "crm003",
    slug: "team-collaboration",
    title: "Team Collaboration",
    short: " Let your team work with shared visibility and clear roles",
    description: " Let your team work with shared visibility and clear roles",
    image: "/assets/feature-collab.png",
    category: "crm",
    link: "/features/team-collaboration",
  },
  {
    id: "crm004",
    slug: "Task & Follow-Ups",
    title: "Task & Follow-Ups",
    short: "Task & Follow-Ups",
    description: "Task & Follow-Ups",
    image: "/assets/feature-pipeline.png",
    category: "crm",
    link: "/features/pipeline-overview",
  },
  {
    id: "crm005",
    slug: "Reports & Activity Logs",
    title: "Reports & Activity Logs",
    short: "Track calls, emails, and performance in real time.",
    description: "Track calls, emails, and performance in real time.",
    image: "/assets/feature-pipeline.png",
    category: "crm",
    link: "/features/pipeline-overview",
  },
];

const invoicingFeatures = [
  {
    id: "inv001",
    slug: "GST-Ready Invoices",
    title: "GST-Ready Invoices",
    short:
      "Create clean, compliant invoices in seconds and share them instantly",
    description:
      "Create clean, compliant invoices in seconds and share them instantly.",
    image: "/assets/feature-invoice-tracking.png",
    category: "invoicing",
    link: "/features/smart-tracking",
  },
  {
    id: "inv002",
    slug: "Quotations & Proformas",
    title: "Quotations & Proformas",
    short:
      "Send professional quotes and convert them into invoices in one click.",
    description:
      "Send professional quotes and convert them into invoices in one click.",
    image: "/assets/feature-payments.png",
    category: "invoicing",
    link: "/features/payment-integration",
  },
  {
    id: "inv003",
    slug: "Expense Tracking",
    title: "Expense Tracking",
    short: " Log daily expenses and see your real profit clearly.",
    description: " Log daily expenses and see your real profit clearly.",
    image: "/assets/feature-reminders.png",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
  {
    id: "inv004",
    slug: "Payment Tracking",
    title: "Payment Tracking",
    short: "Know who has paid, who is pending, and what is overdue",
    description: "Know who has paid, who is pending, and what is overdue",
    image: "/assets/feature-reminders.png",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
  {
    id: "inv005",
    slug: "Vendor Management",
    title: "Vendor Management",
    short: "Manage suppliers, purchases, and vendor payments easily",
    description: "Manage suppliers, purchases, and vendor payments easily",
    image: "/assets/feature-reminders.png",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
];

export const crmFeaturesList = crmFeatures;
export const invoicingFeaturesList = invoicingFeatures;
export const allFeatures = [...crmFeatures, ...invoicingFeatures];
export default allFeatures;
