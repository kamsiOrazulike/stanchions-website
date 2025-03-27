"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import OverviewContent from "./tabs/Overview";
import ValuesContent from "./tabs/Values";
import LeadershipContent from "./tabs/Leadership";
import ServicesContent from "./tabs/Services";
import QHSEContent from "./tabs/QHSE";
import { gsap } from "gsap";

export default function About() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation for hero content fade-in
    gsap.fromTo(
      ".hero-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
    );
  }, []);

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
      {/* Hero Section with Background Image */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/work-image.jpg"
            alt="About Stanchions background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 hero-content mt-24">
          <Image
            src="/logo2.svg"
            alt="Stanchions Logo"
            width={180}
            height={100}
            priority
            draggable={false}
            className="mb-12"
          />
          <h1 className="text-4xl md:text-5xl max-w-6xl mx-auto mb-8 font-bold">
            About Stanchions
          </h1>
          <p className="text-md md:text-xl max-w-2xl mx-auto mb-4">
            Stanchions Nigeria is one of the fastest growing Constructions and
            Fabrications Company, focused on providing World Class Engineering &
            Support Services.
          </p>
        </div>
      </section>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-red-900 filter blur-3xl"></div>
      </div>

      {/* Content Section with Tab System */}
      <div
        ref={contentRef}
        className="w-full relative z-10 bg-[#2a2728] min-h-screen"
      >
        <TabSystem tabs={tabs} defaultActiveTab="overview" />
      </div>

      <div className="h-16 bg-transparent"></div>
      <ScrollButton />
    </main>
  );
}
