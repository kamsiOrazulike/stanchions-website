"use client";
import React, { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type TabSystemProps = {
  tabs: Tab[];
  defaultActiveTab?: string;
};

const TabSystem: React.FC<TabSystemProps> = ({
  tabs,
  defaultActiveTab = tabs[0]?.id,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < tabs.length - 1;

  return (
    <div>
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="overflow-x-auto scrollbar-hide max-w-full">
              <nav className="flex space-x-8 min-w-max" aria-label="Tabs">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-150 ${
                      activeTab === tab.id
                        ? "border-red-600 text-red-600"
                        : "border-transparent text-white/40 hover:text-white hover:border-gray-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
            {tab.content}
          </div>
        ))}

        {/* Tab Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            {/* Previous Tab */}
            {hasPrevious && (
              <button
                onClick={() => handleTabChange(tabs[currentIndex - 1].id)}
                className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2"
              >
                <span>←</span>
                Previous: {tabs[currentIndex - 1].label}
              </button>
            )}

            {/* Next Tab */}
            {hasNext && (
              <button
                onClick={() => handleTabChange(tabs[currentIndex + 1].id)}
                className="text-sm text-gray-500 hover:text-red-600 flex items-center gap-2 ml-auto"
              >
                Next: {tabs[currentIndex + 1].label}
                <span>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSystem;
