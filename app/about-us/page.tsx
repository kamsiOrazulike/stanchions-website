"use client";
import React from "react";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import OverviewContent from "./tabs/Overview";
import ValuesContent from "./tabs/Values";
import LeadershipContent from "./tabs/Leadership";
import ServicesContent from "./tabs/Services";
import QHSEContent from "./tabs/QHSE";

export default function About() {
  const tabs = [
    {
      id: "overview",
      label: "Company Overview",
      content: <OverviewContent />,
    },
    {
      id: "vision-mission",
      label: "Vision & Mission",
      content: <ValuesContent />,
    },
    {
      id: "services",
      label: "Our Services",
      content: <ServicesContent />,
    },
    {
      id: "qhse",
      label: "QHSE Policy",
      content: <QHSEContent />,
    },
    {
      id: "leadership",
      label: "Leadership",
      content: <LeadershipContent />,
    },
  ];

  return (
    <main className="min-h-screen relative bg-[#373435]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-red-900 filter blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Vision Section */}
        <div className="relative">
          <div className="relative h-[48vh] bg-transparent w-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Stanchions
              </h1>
              <p className="text-md md:text-lg">
                Stanchions Nigeria is one of the fastest Local Content Company,
                providing World Class Engineering & Support Services in the Oil
                and Gas sector of Nigeria since 1997.
              </p>
            </div>
          </div>
        </div>

        {/* Content Section with Tab System */}
        <div className="bg-[#2a2728] min-h-screen md:mx-20">
          <TabSystem tabs={tabs} defaultActiveTab="overview" />
        </div>
      </div>
      <div className="h-16 bg-transparent"></div>
      <ScrollButton />
    </main>
  );
}
