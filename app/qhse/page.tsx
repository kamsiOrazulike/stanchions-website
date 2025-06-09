"use client";
import React from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import { Shield, Gauge, Heart, Leaf } from "lucide-react";

export default function QHSEPolicy() {
  const qhseValues = [
    {
      icon: Shield,
      title: "Quality",
      description:
        "We ensure acceptance and performance criteria are continuously met and exceeded.",
    },
    {
      icon: Gauge,
      title: "Safety",
      description:
        "Zero Loss Time Injury (LTI) philosophy guides our approach to workplace safety.",
    },
    {
      icon: Heart,
      title: "Health",
      description:
        "We continuously work to reduce risks and hazards to our employees' health.",
    },
    {
      icon: Leaf,
      title: "Environment",
      description:
        "Environmental preservation is integral to all our operations and business practices.",
    },
  ];

  return (
    <main className="min-h-screen relative bg-[#373435]">
      {/* Hero Section with Background Image */}
      <section className="relative h-[84vh] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/media/image_3.png"
            alt="QHSE Policy background"
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
          <h1 className="text-4xl md:text-5xl max-w-6xl mx-auto mb-8 font-bold">
            QHSE Policy
          </h1>
          <p className="text-md md:text-xl max-w-2xl mx-auto mb-4">
            Quality, Health, Safety, and Environmental excellence driving our commitment to operational integrity and sustainable development.
          </p>
        </div>
      </section>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-red-600 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-red-900 filter blur-3xl"></div>
      </div>

      {/* QHSE Content Section */}
      <div className="w-full relative z-10 bg-[#2a2728] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-red-600">QHSE Framework</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Quality Management Excellence
                  </h3>
                  <p className="text-gray-300">
                    Stanchions ensures that the functions of quality management exist throughout our organization to ensure that the acceptance and performance criteria of our services are continuously met. Our comprehensive quality assurance framework encompasses project planning, execution monitoring, and continuous improvement initiatives.
                  </p>
                </div>

                <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Zero Loss Time Injury Philosophy
                  </h3>
                  <p className="text-gray-300">
                    We adopt the Zero Loss Time Injury (LTI) philosophy with respect to health, safety, and environment. We continuously work to reduce risks and hazards to the environment and the employees&apos; health and safety through proactive risk assessment, comprehensive training programs, and rigorous safety protocols.
                  </p>
                </div>

                <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
                  <h3 className="text-xl font-bold text-white mb-3">
                    Safe Work Planning
                  </h3>
                  <p className="text-gray-300">
                    All our employees are required to use the time necessary to plan and perform tasks in a safe and efficient manner. Our commitment to thorough planning ensures optimal resource utilization, risk mitigation, and successful project delivery while maintaining the highest safety standards.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <Image
                  src="/static/stock_imgs/2.png"
                  alt="QHSE at Stanchions"
                  width={600}
                  height={400}
                  className="w-full rounded-lg shadow-xl object-cover h-64"
                />
              </div>
              
              <div className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Comprehensive QHSE Integration
                </h3>
                <p className="text-gray-300 mb-4">
                  Our QHSE management system represents a holistic approach to operational excellence, integrating quality assurance, health protection, safety protocols, and environmental stewardship into every aspect of our business operations.
                </p>
                <p className="text-gray-300">
                  Through continuous monitoring, regular audits, and stakeholder engagement, we ensure that our QHSE standards not only meet but exceed industry benchmarks and regulatory requirements, delivering exceptional value while protecting our people and the environment.
                </p>
              </div>
            </div>
          </div>

          {/* QHSE Values Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our <span className="text-red-600">QHSE Pillars</span>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Four fundamental pillars guide our approach to quality, health, safety, and environmental excellence across all operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qhseValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-red-600/10 p-4 rounded-full inline-block mb-4">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white">{value.title}</h4>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="bg-gradient-to-r from-red-900/30 to-red-800/30 p-12 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Certifications & Compliance
                </h3>
                <p className="text-gray-300">
                  Our QHSE management system is designed to comply with international standards and best practices. We continuously audit and improve our processes to ensure the highest level of quality, safety, and environmental responsibility in all our operations.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <Shield className="w-20 h-20 text-red-600/80" />
              </div>
            </div>
          </div>

          {/* Policy Commitment Section */}
          <div className="mt-16 text-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">
                Our <span className="text-red-600">Commitment</span>
              </h3>
              <div className="max-w-4xl mx-auto bg-[#373435] p-8 rounded-lg shadow-lg">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Stanchions Nigeria Limited is committed to maintaining the highest standards of Quality, Health, Safety, and Environmental performance. We recognize that our people are our most valuable asset, and we are dedicated to providing a safe, healthy, and sustainable work environment for all employees, contractors, and stakeholders. Through continuous improvement, innovation, and unwavering commitment to excellence, we strive to set new benchmarks in the industry while contributing to the sustainable development of Nigeria&apos;s energy sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-16 bg-transparent"></div>
      <ScrollButton />
    </main>
  );
}
