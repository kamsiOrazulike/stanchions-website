"use client";
import React, { useState } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
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
      top: 200,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Floating Pill-shaped Navbar */}
      <div className="sticky top-24 z-50 mb-8">
        <div className="flex justify-center px-4 max-w-3xl mx-auto w-full">
          <div className="bg-black/80 backdrop-blur-md rounded-full px-2 py-2 shadow-lg border border-white/10">
            <nav className="flex items-center" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out ${
                    activeTab === tab.id
                      ? "bg-red-600 text-white shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {/* Mobile: Show icon */}
                  <span className="md:hidden flex items-center justify-center">
                    {tab.icon}
                  </span>
                  
                  {/* Desktop: Show label */}
                  <span className="hidden md:inline">
                    {tab.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-7xl mx-auto px-4">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "" : "hidden"}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSystem;
