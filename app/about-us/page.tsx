"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import TabSystem from "@/components/TabSystem";
import OverviewContent from "./tabs/Overview";
import ValuesContent from "./tabs/Values";
import LeadershipContent from "./tabs/Leadership";
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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "vision-mission",
      label: "Vision & Mission",
      content: <ValuesContent />,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      id: "leadership",
      label: "Leadership",
      content: <LeadershipContent />,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
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
            Nigeria&apos;s premier indigenous engineering solutions provider, delivering world-class Engineering, Procurement, and Construction services with unwavering commitment to excellence and innovation.
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
        className="w-full relative z-10 bg-[#2a2728] min-h-screen pt-8"
      >
        <TabSystem tabs={tabs} defaultActiveTab="overview" />
      </div>

      <div className="h-16 bg-transparent"></div>
      <ScrollButton />
    </main>
  );
}
