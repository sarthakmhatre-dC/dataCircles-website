
// src/data/features.js
const crmFeatures = [
  {
    id: "crm001",
    slug: "Lead & Client Management",
    title: "Lead & Client Management",
    short: "Store all leads and customers in one organized system",
    description: "MStore all leads and customers in one organized system",
    icon: "/assets/features/icons/Lead&ClientManagement.png",
    image:"",
    category: "crm",
    link: "/features/lead-management",
  },
  {
    id: "crm002",
    slug: "Sales Pipeline",
    title: "Sales Pipeline",
    short: "Track every deal from first call to final closure",
    description: "Track every deal from first call to final closure",
    icon: "/assets/features/icons/SalesPipeline.png",
    image:"",
    category: "crm",
    link: "/features/pipeline-overview",
  },
  {
    id: "crm003",
    slug: "team-collaboration",
    title: "Team Collaboration",
    short: " Let your team work with shared visibility and clear roles",
    description: " Let your team work with shared visibility and clear roles",
    icon: "/assets/features/icons/TeamCollaboration.png",
    image:"",
    category: "crm",
    link: "/features/team-collaboration",
  },
  {
    id: "crm004",
    slug: "Task & Follow-Ups",
    title: "Task & Follow-Ups",
    short: "Task & Follow-Ups",
    description: "Task & Follow-Ups",
    icon: "/assets/features/icons/Task&FollowUps.png",
    image:"",
    category: "crm",
    link: "/features/pipeline-overview",
  },
  {
    id: "crm005",
    slug: "Reports & Activity Logs",
    title: "Reports & Activity Logs",
    short: "Track calls, emails, and performance in real time.",
    description: "Track calls, emails, and performance in real time.",
    icon: "/assets/features/icons/Reports&ActivityLogs.png",
    image:"",
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
    icon: "/assets/features/icons/GSTReadyInvoices.png",
    image:"",
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
    icon: "/assets/features/icons/Quotations&Proformas.png",
    image:"",
    category: "invoicing",
    link: "/features/payment-integration",
  },
  {
    id: "inv003",
    slug: "Expense Tracking",
    title: "Expense Tracking",
    short: " Log daily expenses and see your real profit clearly.",
    description: " Log daily expenses and see your real profit clearly.",
    icon: "/assets/features/icons/ExpenseTracking.png",
    image:"",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
  {
    id: "inv004",
    slug: "Payment Tracking",
    title: "Payment Tracking",
    short: "Know who has paid, who is pending, and what is overdue",
    description: "Know who has paid, who is pending, and what is overdue",
    icon: "/assets/features/icons/PaymentTracking.png",
    image:"",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
  {
    id: "inv005",
    slug: "Vendor Management",
    title: "Vendor Management",
    short: "Manage suppliers, purchases, and vendor payments easily",
    description: "Manage suppliers, purchases, and vendor payments easily",
    icon: "/assets/features/icons/VendorManagement.png",
    image:"",
    category: "invoicing",
    link: "/features/auto-reminders",
  },
];

export const crmFeaturesList = crmFeatures;
export const invoicingFeaturesList = invoicingFeatures;
export const allFeatures = [...crmFeatures, ...invoicingFeatures];
export default allFeatures;
