import SimpleCTA from "../components/feature/SimpleCTA";
import LabelPill from "../components/common/LabelPill";
import FAQSection from "../components/feature/FAQSection";
import { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import SortByDown from "/assets/datavault/SortByDown.png";
import Sorting from "/assets/datavault/Sorting.png";
import Search from "/assets/datavault/Search.png";

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

  const yahaKaCTA = "/assets/Home/UserDashboard.png";

  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const sortOptions = [
    { label: 'Sort: A → Z', value: 'asc' },
    { label: 'Sort: Z → A', value: 'desc' }
  ];

  // Find the label for the currently selected value
  const currentSortLabel = sortOptions.find(opt => opt.value === sortBy)?.label || 'Sort By';

  return (
    <main className="bg-transparent px-4 py-2">
      {/* PAGE HEADER */}
      <section className="w-full text-center max-w-7xl mx-auto mb-10">
        <LabelPill label="Resources" dotColor="bg-blue-500" />
        <h1 className="heading-1 font-semibold mt-8 mb-2 tracking-[-4px]">
          DataCircles Vault
        </h1>
        <p className="text-gray-600 para-1 mt-3">
          Welcome to the DataCircles Vault a growing library of guides, templates, playbooks,<br />
          and tools designed to help business owners run operations, manage clients, <br />
          and streamline invoicing more efficiently
        </p>
      </section>

      {/* MAIN SECTION */}
      <section className="w-full max-w-7xl mx-auto px-6 pt-30 pb-30 grow">
        {/* ---------------------- TOP TABS ---------------------- */}
        {/* Change 'flex-wrap' to 'flex' and add 'w-full' to the container */}
        <div className="flex flex-wrap gap-3 mb-6">
          {tabList.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setSelectedCategories([]);
                setSearch("");
              }}
              className={`flex-1 px-4 py-2 rounded-lg border text-sm transition shadow-md text-nowrap
                ${activeTab === tab
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }
              `}>
              {tab}
            </button>
          ))}
        </div>

        {/* ---------------------- SEARCH + CATEGORY + SORT ---------------------- */}
        {activeTab && (
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8 w-full">
            {/* Search Bar Container */}
            <div className="relative flex-1 group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <img
                  src="/assets/datavault/Search.png"
                  alt="search"
                  className="w-5 h-5 object-contain opacity-50 group-focus-within:opacity-100 transition-opacity"
                />
              </div>
              <input
                type="text"
                placeholder="Search Resources..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-gray-200 rounded-xl shadow-sm 
                bg-linear-to-r from-white to-[#70A2FF]/15
                focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            {/* Filters Container */}
            <div className="flex gap-3 items-center">
              {/* CATEGORY DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="px-5 py-2.5 border border-gray-200 rounded-xl flex items-center gap-2.5 bg-white shadow-sm hover:bg-gray-50 transition-colors font-medium text-gray-700 whitespace-nowrap"
                >
                  <img src="/assets/datavault/SortByDown.png" alt="category" className="w-5 h-5 object-contain" />
                  Category
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showCategoryDropdown ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute right-0 z-30 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl max-h-72 overflow-y-auto p-3 animate-in fade-in zoom-in duration-200">
                    {categoryOptions.map((cat) => (
                      <label
                        key={cat}
                        className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={selectedCategories.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                        />
                        <span className="text-sm text-gray-700">{cat}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* SORT BY */}
              <div className="relative">
                {/* The Trigger Button - Styled exactly like Category */}
                <button
                  onClick={() => setShowSortDropdown(!showSortDropdown)}
                  className="px-5 py-2.5 border border-gray-200 rounded-xl flex items-center gap-2.5 bg-white shadow-sm hover:bg-gray-50 transition-colors font-medium text-gray-700 whitespace-nowrap"
                >
                  <img src="/assets/datavault/Sorting.png" alt="sort" className="w-5 h-5 object-contain" />

                  <span>{currentSortLabel}</span>

                  <ChevronDown
                    size={18}
                    className={`text-gray-400 transition-transform duration-200 ${showSortDropdown ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {/* The Dropdown Menu */}
                {showSortDropdown && (
                  <div className="absolute right-0 z-30 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl p-2 animate-in fade-in zoom-in duration-200">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSortBy(option.value);
                          setShowSortDropdown(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${sortBy === option.value
                            ? "bg-blue-50 text-blue-600 font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                          }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ---------------------- GRID SECTION ---------------------- */}
        {activeTab && (
          <>
            <h2 className="heading-3 font-medium mb-6">{activeTab}</h2>

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
                      // Added 'flex flex-col' to the container classes
                      className="p-4 border rounded-lg shadow-sm bg-white hover:shadow-lg transition flex flex-col h-full"
                    >
                      <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

                      <h3 className="font-semibold para-1 mb-2">{item.title}</h3>

                      <p className="para-4 text-gray-600 mt-1">
                        {item.description}
                      </p>

                      {/* Added 'mt-auto' to this element */}
                      <p className="para-5 text-blue-600 mt-auto pt-4 font-medium">
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
      <section className=" max-w-7xl mx-auto pb-30 px-6">
        {/* Section Label */}
        <p className="font-medium text-blue-500 para-1 mb-5">Free Resources</p>

        {/* Heading */}
        <h2 className="heading-3 tracking-[-0.125rem] font-medium mb-5">
          Everything You Need to <br />
          Organize Your Business Better
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 para-1 mb-10 leading-relaxed">
          Each resource is built from real workflows used by fast-growing Indian <br />
          service businesses so you can stop guessing and start implementing.
        </p>

        {/* 3-Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {/* CARD 1 */}
          <div className="bg-gray-100 rounded-xl p-6 h-[380px] flex flex-col justify-end">
            <div className="mb-2">
              <img
                src="/assets/about/EmpowerMSMEs.png" // update path if needed
                alt="Empower Indian MSMEs"
                className="w-fit h-fit mx-auto mb-5"
              />
            </div>
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">
              Business Operations Playbooks
            </h3>
            <p className="para-5 text-gray-600 tracking-tight">
              Step-by-step guides to organize clients, projects, invoices, and
              daily workflows with zero chaos
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-gray-100 rounded-xl p-6 h-[380px] flex flex-col justify-end">
            <div className="mb-2">
              <img
                src="/assets/about/EmpowerMSMEs.png" // update path if needed
                alt="Empower Indian MSMEs"
                className="w-fit h-fit mx-auto mb-5"
              />
            </div>
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">
              Invoicing & Cashflow Templates
            </h3>
            <p className="para-5 text-gray-600 tracking-tight">
              Ready-to-use invoice formats, payment trackers, and cashflow tools
              built for Indian GST workflows
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-gray-100 rounded-xl p-6 h-[380px] flex flex-col justify-end">
            <div className="mb-2">
              <img
                src="/assets/about/EmpowerMSMEs.png" // update path if needed
                alt="Empower Indian MSMEs"
                className="w-fit h-fit mx-auto mb-5"
              />
            </div>
            <h3 className="heading-5 tracking-[-0.125rem] font-medium mb-2">
              CRM Funnels & Sales Sheets
            </h3>
            <p className="para-5 text-gray-600 tracking-tight">
              Practical sales scripts, pipeline structures, and follow-up
              systems to convert more leads consistently.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto pt-30 pb-30 px-6">
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
      <section className=" items-center text-center w-full mx-auto pt-30">
        <LabelPill
          label="Get Started"
          dotColor="bg-blue-500"
          className="items-center"
        />
        <div className=" flex justify-center items-center  w-full mt-0">
          <SimpleCTA
            heading={<>Ready to Organize Your <br />
              Business the Right Way?</>}
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
            className="px-4 md:px-6 max-w-7xl pt-12 items-center"
          />
        </div>
      </section>
    </main>
  );
}
