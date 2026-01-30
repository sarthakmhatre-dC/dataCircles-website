import SimpleCTA from "../components/feature/SimpleCTA";
import LabelPill from "../components/common/LabelPill";
import FAQSection from "../components/feature/FAQSection";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// import modular data
import dataVault from "../data/dataVault";

export default function DataVault() {
  // ----------------------------------------------------
  // ACTIVE TAB
  // ----------------------------------------------------
  const tabList = Object.keys(dataVault);

  const [activeTab, setActiveTab] = useState(tabList[0]);
  // OPTION 2: If you want no default tab:
  // const [activeTab, setActiveTab] = useState(null);

  // ----------------------------------------------------
  // STATE
  // ----------------------------------------------------
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("asc");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // ----------------------------------------------------
  // GET TAB DATA
  // ----------------------------------------------------
  const currentTabData = activeTab ? dataVault[activeTab] : null;

  const categoryOptions = currentTabData ? currentTabData.categories : [];
  const items = currentTabData ? currentTabData.items : [];

  // ----------------------------------------------------
  // CATEGORY TOGGLE
  // ----------------------------------------------------
  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // ----------------------------------------------------
  // AUTO SLUG GENERATOR
  // ----------------------------------------------------
  const slugify = (text) =>
    text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

  // ----------------------------------------------------
  // FILTER + SORT LOGIC
  // ----------------------------------------------------
  const filteredItems = useMemo(() => {
    if (!items) return [];

    let data = [...items];

    // search
    if (search.trim() !== "") {
      data = data.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // category filter
    if (selectedCategories.length > 0) {
      data = data.filter((item) => selectedCategories.includes(item.category));
    }

    // sort
    data.sort((a, b) =>
      sortBy === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

    return data;
  }, [items, search, selectedCategories, sortBy]);

  const yahaKaCTA = "/assets/dashboard1.png";

  return (
    <main className="bg-transparent px-4 py-2">
      {/* PAGE HEADER */}
      <section className="py-10 text-center max-w-4xl mx-auto mt-2 mb-10">
        <LabelPill label="Resources" dotColor="bg-blue-500" />
        <h1 className="h2 mt-4 mb-4">
          Where Indian Businesses Learn, Grow, and Build Smarter Systems
        </h1>
        <p className="text-gray-500 p2 px-4">
          Welcome to the DataCircles Vault a growing library of guides,
          templates, playbooks, and tools designed to help business owners run
          operations, manage clients, and streamline invoicing more efficiently
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16">
        {/* ---------------------- TOP TABS ---------------------- */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCategories([]);
                setSearch("");
              }}
              className={`
                px-4 py-2 rounded-lg border text-sm transition
                ${
                  activeTab === tab
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ---------------------- SEARCH + CATEGORY + SORT ---------------------- */}
        {activeTab && (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Category + Sort */}
            <div className="flex gap-4 items-center">
              {/* CATEGORY DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="px-4 py-2 border rounded-lg flex items-center gap-2 bg-white shadow-sm"
                >
                  Category <ChevronDown size={18} />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute z-20 mt-2 w-64 bg-white border rounded-lg shadow-lg max-h-72 overflow-y-auto p-3">
                    {categoryOptions.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-2 py-1 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                        />
                        <span>{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* SORT BY */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border rounded-lg shadow-sm bg-white"
              >
                <option value="asc">Sort: A → Z</option>
                <option value="desc">Sort: Z → A</option>
              </select>
            </div>
          </div>
        )}

        {/* ---------------------- GRID SECTION ---------------------- */}
        {activeTab && (
          <>
            <h2 className="text-2xl font-semibold mb-6">{activeTab}</h2>

            {filteredItems.length === 0 ? (
              <p className="text-gray-500 text-center py-10">
                No results found.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, idx) => {
                  const slug = slugify(item.title);

                  return (
                    <Link
                      to={`/resources/${slug}`}
                      key={idx}
                      className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition block"
                    >
                      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>
                      <p className="text-xs text-blue-600 mt-2 font-medium">
                        Category: {item.category}
                      </p>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        )}
      </section>

      {/* TILLLLLLLL HEREEEEEEEEEEEEEEE */}
      <section className=" max-w-7xl mx-auto mb-24 px-6">
        {/* Section Label */}
        <p className="font-light text-blue-500 p4 mb-2">Free Resources</p>

        {/* Heading */}
        <h2 className="h3  mb-4">
          Everything You Need to Organize Your Business Better
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 p1 mb-10 leading-relaxed">
          Each resource is built from real workflows used by fast-growing Indian
          service businesses so you can <br /> stop guessing and start
          implementing.
        </p>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* CARD 1 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="h4 font-semibold mb-2">
              {" "}
              Business Operations Playbooks
            </h3>
            <p className="p4 text-gray-600 leading-relaxed">
              Step-by-step guides to organize clients, projects, invoices, and
              daily workflows with zero chaos
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="h4 font-semibold mb-2">
              Invoicing & Cashflow Templates
            </h3>
            <p className="p4 text-gray-600 leading-relaxed">
              Ready-to-use invoice formats, payment trackers, and cashflow tools
              built for Indian GST workflows
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 rounded-xl p-8 h-[280px] flex flex-col justify-end">
            <h3 className="h4 font-semibold mb-2">
              CRM Funnels & Sales Sheets
            </h3>
            <p className="p4 text-gray-600 leading-relaxed">
              Practical sales scripts, pipeline structures, and follow-up
              systems to convert more leads consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto mb-24 px-6">
        <FAQSection
          tag="Questions"
          /* title={
                  <>
                  Questions About <br /> DataCircles Technologies
                  </>
                  } */
          title="Everything You Should Know About the Vault"
          subtitle="Clear, simple answers that help you make the most of every resource."
          showButton={false}
          faqs={[
            {
              question: "Are these resources free to download?",
              answer:
                "Yes, every resource inside the DataCircles Vault is completely free",
            },
            {
              question: "Do I need a DataCircles account to access them?",
              answer:
                "No. Anyone can download the resources, but DataCircles users get exclusive templates.",
            },
            {
              question: "How often do you add new resources?",
              answer:
                "New templates and guides are added every month based on user problems and feedback",
            },
            {
              question: "Who are these resources built for?",
              answer:
                "They’re made for small businesses, freelancers, agencies, and service providers across India who want simpler systems.",
            },
          ]}
          className="px-4 md:px-6 w-[70%] py-12 md:py-16"
        />
      </section>
      {/* CONTENT CARD */}
      {/* Dynamic one */}
      <section className=" items-center text-center  w-full mx-auto   ">
        <LabelPill
          label="Get Started"
          dotColor="bg-blue-500"
          className="items-center"
        />
        <div className=" flex justify-center items-center  w-full mt-0">
          <SimpleCTA
            heading={<>Ready to Organize Your Business the Right Way?</>}
            subheading={
              <>
                Download the tools, implement the systems, and take your
                operations <br /> from scattered to structured with DataCircles
              </>
            }
            buttons={[
              {
                label: "Download Free Resources",
                href: "/datavault",
              },
              {
                label: "Try DataCircles Free",
                href: "https://datacircles.netlify.app/login",
              },
            ]}
            image={yahaKaCTA}
            className="px-4 md:px-6 max-w-7xl py-12 md:py-16 items-center"
          />
        </div>
      </section>
    </main>
  );
}
