"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ScrollButton from "@/components/ScrollButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ChevronDown,
  Calendar,
  MapPin,
  Tag,
  CheckCircle,
  Filter,
  ArrowRight,
} from "lucide-react";
import { projects, getProjectsByCategory } from "./projects.data";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const introRef = useRef(null);
  const featuredRef = useRef(null);
  const portfolioRef = useRef(null);
  const statsRef = useRef(null);

  const filteredProjects =
    filter === "all" ? projects : getProjectsByCategory(filter);

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

      gsap.fromTo(
        ".featured-project",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".filter-buttons button",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".project-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: portfolioRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [filter]);

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
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl mb-12">
            Delivering excellence across a diverse portfolio of engineering and
            technical projects
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
              Project <span className="text-red-600">Excellence</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-4xl mx-auto">
              At Stanchions, we pride ourselves on our track record of
              successful project delivery across the oil and gas sector. Our
              project portfolio showcases our expertise in pipeline
              construction, mechanical & electrical installations, location
              preparation, civil construction, procurement, and logistics
              services.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section ref={featuredRef} className="py-20 relative z-10 bg-[#373435]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">
            Featured <span className="text-red-600">Projects</span>
          </h2>

          <div className="space-y-20">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className={`featured-project grid grid-cols-1 ${
                    index % 2 === 0
                      ? "md:grid-cols-5"
                      : "md:grid-cols-5 md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div
                    className={`md:col-span-3 ${
                      index % 2 === 0 ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-4 px-6">
                        <h3 className="text-xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm">
                          Client: {project.client}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`md:col-span-2 ${
                      index % 2 === 0 ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="bg-[#2a2728] p-8 rounded-lg shadow-lg h-full">
                      <div className="flex items-start space-x-4 mb-4">
                        <Calendar className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white font-semibold">Year</h4>
                          <p className="text-gray-300">{project.date}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 mb-4">
                        <MapPin className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white font-semibold">Location</h4>
                          <p className="text-gray-300">{project.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4 mb-6">
                        <Tag className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-white font-semibold">Category</h4>
                          <p className="text-gray-300 capitalize">
                            {project.category} Services
                          </p>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6">
                        {project.description}
                      </p>

                      <h4 className="text-white font-semibold mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                            <span className="text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Project Portfolio */}
      <section ref={portfolioRef} className="py-20 relative z-10 bg-[#2a2728]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">
            Project <span className="text-red-600">Portfolio</span>
          </h2>

          {/* Filter buttons */}
          <div className="filter-buttons flex flex-wrap justify-center gap-3 mb-12">
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                filter === "all"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("all")}
            >
              <Filter className="w-4 h-4 mr-2" />
              All Projects
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "pipeline"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("pipeline")}
            >
              Pipeline
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "mechanical"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("mechanical")}
            >
              Mechanical & Electrical
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "location"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("location")}
            >
              Location Preparation
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "civil"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("civil")}
            >
              Civil Construction
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "procurement"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("procurement")}
            >
              Procurement
            </button>
            <button
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === "logistics"
                  ? "bg-red-600 text-white"
                  : "bg-[#373435] text-gray-300 hover:bg-[#444] hover:text-white"
              }`}
              onClick={() => setFilter("logistics")}
            >
              Logistics
            </button>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card bg-[#373435] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                    <div className="absolute bottom-0 left-0 w-full p-4">
                      <span className="text-xs font-medium text-white bg-red-600 px-2 py-1 rounded-full uppercase">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Client: {project.client}
                  </p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Calendar className="text-red-600 w-4 h-4 mr-2" />
                      <span className="text-gray-300 text-sm">
                        {project.date}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-red-600 w-4 h-4 mr-2" />
                      <span className="text-gray-300 text-sm">
                        {project.location}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={`/projects/${project.id}`}
                    className="text-red-600 text-sm font-medium flex items-center hover:text-red-500 transition-colors"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section ref={statsRef} className="py-20 relative z-10 bg-[#373435]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-16 text-center">
            Our <span className="text-red-600">Impact</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stat-item bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 text-5xl font-bold mb-4">150+</div>
              <div className="text-white font-medium mb-2">
                Projects Completed
              </div>
              <p className="text-gray-400 text-sm">
                Across Nigeria and West Africa
              </p>
            </div>

            <div className="stat-item bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 text-5xl font-bold mb-4">18+</div>
              <div className="text-white font-medium mb-2">
                Years of Experience
              </div>
              <p className="text-gray-400 text-sm">
                Leading the oil & gas industry
              </p>
            </div>

            <div className="stat-item bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 text-5xl font-bold mb-4">15+</div>
              <div className="text-white font-medium mb-2">Major Clients</div>
              <p className="text-gray-400 text-sm">
                Building lasting relationships
              </p>
            </div>

            <div className="stat-item bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 text-5xl font-bold mb-4">100%</div>
              <div className="text-white font-medium mb-2">
                Quality Commitment
              </div>
              <p className="text-gray-400 text-sm">
                Excellence in every project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-[#2a2728]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to <span className="text-red-600">Start Your Project?</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Contact us today to discuss how Stanchions can bring your project to
            life with our world-class engineering and technical expertise.
          </p>
          <a
            href="/contact"
            className="inline-block border border-red-600 text-white px-10 py-4 text-lg hover:bg-red-600 transition-all duration-300"
          >
            Contact Our Team
          </a>
        </div>
      </section>

      <ScrollButton />
    </main>
  );
}
