import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FeatureDrawer({ features = [] }) {
  // Initialize state with the first feature of the passed array
  const [activeFeature, setActiveFeature] = useState(features?.[0] ?? null);

  // CRITICAL: Update the active feature when the 'features' prop changes 
  // (e.g., when switching from CRM to Invoicing tabs)
  useEffect(() => {
    if (features.length > 0) {
      setActiveFeature(features[0]);
    }
  }, [features]);

  return (
    <div className="w-full max-w-7xl mx-auto border rounded-xl overflow-hidden bg-white shadow-sm flex flex-col md:flex-row min-h-[31.25rem]">
      
      {/* LEFT LIST - Navigation */}
      <div className="w-full md:w-[35%] flex flex-col border-r border-gray-100">
        {features.map((item) => {
          const isActive = activeFeature?.id === item.id;
          
          return (
            <div
              key={item.id}
              onClick={() => setActiveFeature(item)}
              className={cn(
                "group cursor-pointer p-6 transition-all duration-200 border-b border-gray-100 last:border-b-0",
                isActive ? "bg-white relative" : "bg-gray-50/30 hover:bg-gray-50"
              )}
            >
              {/* Active Indicator Line */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
              )}

              <div className="flex gap-4">
                {/* ICON BOX - Using your custom icon paths */}
                <div className={cn(
                  "p-2 rounded-lg h-10 w-10 flex items-center justify-center flex-shrink-0",
                  isActive ? "bg-blue-50" : "bg-gray-100"
                )}>
                  <img 
                    src={item.icon} 
                    alt="" 
                    className={cn(
                      "w-6 h-6 object-contain",
                      isActive ? "brightness-100" : "grayscale opacity-70"
                    )} 
                  />
                </div>
                
                <div className="flex flex-col gap-1">
                  <h3 className={cn(
                    "font-semibold para-2 transition-colors",
                    isActive ? "text-blue-600" : "text-gray-900"
                  )}>
                    {item.title}
                  </h3>
                  <p className="para-3 text-gray-500 line-clamp-2">
                    {item.short}
                  </p>
                  <span className="text-blue-500 para-4 font-medium mt-1 flex items-center gap-1 hover:underline">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT PREVIEW - Content */}
      <div className="flex-1 p-8 bg-white flex flex-col">
        {activeFeature ? (
          <div key={activeFeature.id} className="flex flex-col h-full animate-in fade-in slide-in-from-right-2 duration-300">
            {/* IMAGE AREA */}
            <div className="relative flex-1 min-h-[300px] mb-8 group bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-inner">
              <img
                // Fallback to a placeholder if item.image is empty string
                src={activeFeature.image || "/assets/Home/ContactsKanban.png"}
                alt={activeFeature.title}
                className="w-full h-full object-contain p-4"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent pointer-events-none" />
            </div>

            {/* CONTENT AREA */}
            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
              <div className="space-y-1">
                <h2 className="heading-4 font-bold text-gray-900">{activeFeature.title}</h2>
                <p className="para-2 text-gray-500">
                    {activeFeature.description}
                </p>
              </div>
              
              <Link to={activeFeature.link || "#"}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-5 rounded-full shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5">
                  View Feature <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 italic">
            Select a feature to view details
          </div>
        )}
      </div>
    </div>
  );
}