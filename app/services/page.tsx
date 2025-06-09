"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  Wrench,
  Map,
  Hammer,
  ShoppingCart,
  Truck,
  ChevronDown,
} from "lucide-react";

const PipelineIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 8h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3" />
    <path d="M3 12v4a2 2 0 0 1-2 2h10a2 2 0 0 1 2-2v-4" />
  </svg>
);

export default function Services() {
  const introRef = useRef(null);
  const pipelineRef = useRef(null);
  const mechanicalRef = useRef(null);
  const locationRef = useRef(null);
  const civilRef = useRef(null);
  const logisticsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".intro-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: introRef.current,
            start: "top 80%",
          },
        }
      );

      const serviceSections = [
        pipelineRef.current,
        mechanicalRef.current,
        locationRef.current,
        civilRef.current,
        logisticsRef.current,
      ];

      serviceSections.forEach((section) => {
        if (section) {
          const sectionElement = section as HTMLElement;
          gsap.fromTo(
            sectionElement.querySelector(".service-image"),
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
              },
            }
          );

          gsap.fromTo(
            (section as HTMLElement).querySelector(".service-content"),
            { opacity: 0, x: 50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              delay: 0.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 70%",
              },
            }
          );
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen bg-[#373435]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-red-900 filter blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/image_3.png"
            alt="Services background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 mt-24">
          <Image
            src="/logo2.svg"
            alt="Stanchions Logo"
            width={180}
            height={100}
            priority
            draggable={false}
            className="mb-12"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-sm md:text-lg mb-12">
            Premier indigenous engineering solutions delivering excellence across
            the oil and gas sector with unwavering commitment to quality,
            innovation, and operational excellence.
          </p>
          <button
            onClick={scrollToNextSection}
            className="animate-bounce mt-8 bg-transparent border-none text-white cursor-pointer"
            aria-label="Scroll to content"
          >
            <ChevronDown size={42} />
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section ref={introRef} className="py-20 relative z-10 bg-[#2a2728]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="intro-content text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Complete{" "}
              <span className="text-red-600">Engineering Solutions</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              Stanchions Nigeria Limited stands as your comprehensive engineering
              solutions partner, delivering integrated engineering, procurement,
              and construction services. Our world-class expertise encompasses
              total program management, seamlessly integrating innovative solutions
              and services while upholding the highest standards of ethical
              business practices and operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 flex justify-center mb-6">
                <PipelineIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Technical Expertise
              </h3>
              <p className="text-gray-300">
                Our world-class engineering team provides solutions for complex
                technical challenges across all aspects of oil & gas
                infrastructure.
              </p>
            </div>

            <div className="bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 flex justify-center mb-6">
                <ShoppingCart className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Quality Procurement
              </h3>
              <p className="text-gray-300">
                We ensure timely procurement and supply of equipment and parts
                at optimal price specifications for critical project
                requirements.
              </p>
            </div>

            <div className="bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 flex justify-center mb-6">
                <Truck className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Efficient Logistics
              </h3>
              <p className="text-gray-300">
                Our sophisticated logistics system ensures materials and
                equipment are delivered safely and efficiently to their
                destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline Construction */}
      <section
        ref={pipelineRef}
        id="pipeline"
        className="py-20 relative z-10 bg-[#373435]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="service-image">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/image_2.png"
                  alt="Pipeline Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="service-content">
              <div className="flex items-center mb-6">
                <div className="bg-red-600/10 p-3 rounded-full mr-4">
                  <PipelineIcon className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Pipeline Construction
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                At Stanchions, we have the ability to construct, repair and
                deliver pipelines that transport oil, natural gas, petroleum
                products, slurry, water, and industrial gases for government and
                private customers.
              </p>
              <p className="text-gray-300">
                Our Pipeline Engineering Group have the resources to provide
                engineering and consulting services with focus in designing,
                building and repairing all aspects of oil & gas pipelines, gas
                utilities, and storage and production facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanical & Electrical Installations */}
      <section
        ref={mechanicalRef}
        id="mechanical"
        className="py-20 relative z-10 bg-[#2a2728]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="service-content order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-red-600/10 p-3 rounded-full mr-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Mechanical & Electrical Installations
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                We provide electrical and mechanical solutions for industrial
                and commercial clients in and around the country.
              </p>
              <p className="text-gray-300">
                At Stanchions, we pride ourselves on our adaptable and
                innovative approach which allows us to offer a wide range of
                solutions with our experienced and multi-skilled team of
                engineers.
              </p>
            </div>
            <div className="service-image order-1 md:order-2">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/image_4.png"
                  alt="Mechanical & Electrical Installations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Preparation */}
      <section
        ref={locationRef}
        id="location"
        className="py-20 relative z-10 bg-[#373435]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="service-image">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/upth/mar24-2.jpg"
                  alt="Location Preparation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="service-content">
              <div className="flex items-center mb-6">
                <div className="bg-red-600/10 p-3 rounded-full mr-4">
                  <Map className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Location Preparation
                </h2>
              </div>
              <p className="text-gray-300 mb-4">
                <span className="text-sm opacity-80">
                  (Land & Swamp Location Preparation for Drilling)
                </span>
              </p>
              <p className="text-gray-300 mb-6">
                We prepare land and swamp sites for rig operations, ensuring
                that they are adequately ready to achieve the required results.
              </p>
              <p className="text-gray-300">
                At Stanchions, we comprehend that site preparation is key for a
                successful project execution that is why our dedicated team of
                engineers, environmentalists, archaeologists and other experts
                delivers nothing but the best ensuring that your expectations
                are exceeded.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Road & Civil Construction */}
      <section
        ref={civilRef}
        id="civil"
        className="py-20 relative z-10 bg-[#2a2728]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="service-content order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-red-600/10 p-3 rounded-full mr-4">
                  <Hammer className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Road & Civil Construction
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                With our industrial background and proven technical capacity, we
                contribute to the success of large-scale road project
                operations, making road projects simpler and more efficient.
              </p>
              <p className="text-gray-300">
                At Stanchions, we recognize that each road project is unique,
                that is why we keep innovating our approach with our world class
                team.
              </p>
            </div>
            <div className="service-image order-1 md:order-2">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/image_1.png"
                  alt="Road & Civil Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Management */}
      <section
        ref={logisticsRef}
        id="logistics"
        className="py-20 relative z-10 bg-[#373435]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="service-content order-2 md:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-red-600/10 p-3 rounded-full mr-4">
                  <Truck className="w-8 h-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold text-white">
                  Logistics & Management
                </h2>
              </div>
              <p className="text-gray-300 mb-6">
                We own and operate our own vehicles, forklifts, cranes and other
                equipment which enables us to run a sophisticated logistics
                system to ensure that supplies and materials are adequately
                handled and delivered to their respective destinations using
                fit-for-purpose transportation medium.
              </p>
              <p className="text-gray-300">
                We deploy our fleet of trucks and certified containers as well
                as adequate lifting equipment and colour-coded slings. Also
                available are small vehicles for lease.
              </p>
            </div>
            <div className="service-image order-1 md:order-2">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/media/warehouse2.png"
                  alt="Logistics & Management"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-[#373435]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to{" "}
            <span className="text-red-600">Work With Us?</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Contact our team to discuss your project requirements and discover
            how Stanchions can deliver world-class engineering solutions,
            innovative approaches, and exceptional value for your business.
          </p>
          <a
            href="/contact"
            className="inline-block border border-red-600 text-white px-10 py-4 text-lg hover:bg-red-600 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <ScrollButton />
    </main>
  );
}
