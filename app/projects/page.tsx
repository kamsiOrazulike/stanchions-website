/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Link from "next/link";

// Define types for images and project
interface TimelineImage {
  src: string;
  month: string;
  date: string;
  caption: string;
  // Internal field to control display order
  displayOrder: number;
}

interface Project {
  id: string;
  title: string;
  client: string;
  date: string;
  location: string;
  category: string;
  description: string;
  achievements: string[];
  image: string;
  featured: boolean;
  timelineImages: TimelineImage[];
}

// Create timeline images in the desired order - starting with March 2024
const createTimelineImages = (): TimelineImage[] => {
  return [
    // Start with March 2024
    {
      src: "/media/upth/mar24-1.JPG",
      month: "March",
      date: "2024",
      caption: "Foundation preparation",
      displayOrder: 1,
    },
    {
      src: "/media/upth/mar24-2.JPG",
      month: "March",
      date: "2024",
      caption: "Concrete foundation work",
      displayOrder: 2,
    },
    // Then April 2024
    {
      src: "/media/upth/apr24-1.JPG",
      month: "April",
      date: "2024",
      caption: "Concrete slab installation",
      displayOrder: 3,
    },
    // Then January 2024
    {
      src: "/media/upth/jan24-1.JPG",
      month: "January",
      date: "2024",
      caption: "Initial structural framework",
      displayOrder: 4,
    },
    {
      src: "/media/upth/jan24-2.JPG",
      month: "January",
      date: "2024",
      caption: "Framework and floor installation",
      displayOrder: 5,
    },
    {
      src: "/media/upth/jan24-3.JPG",
      month: "January",
      date: "2024",
      caption: "Roof framework preparation",
      displayOrder: 6,
    },
    {
      src: "/media/upth/jan24-4.JPG",
      month: "January",
      date: "2024",
      caption: "Wall framing progress",
      displayOrder: 7,
    },
    // Then February 2025
    {
      src: "/media/upth/feb25-1.JPG",
      month: "February",
      date: "2025",
      caption: "Roof installation begun",
      displayOrder: 8,
    },
    {
      src: "/media/upth/feb25-2.JPG",
      month: "February",
      date: "2025",
      caption: "Exterior walls and roofing complete",
      displayOrder: 9,
    },
  ];
};

// Single project data for UPTH
const upthProject: Project = {
  id: "upth-medical-ward",
  title: "UPTH Medical Ward Facility",
  client: "University of Port Harcourt Teaching Hospital",
  date: "2023-2025",
  location: "Port Harcourt, Nigeria",
  category: "civil",
  description:
    "Design and construction of a state-of-the-art medical ward facility at the University of Port Harcourt Teaching Hospital, enhancing healthcare delivery capabilities and patient care facilities.",
  achievements: [
    "Completed construction ahead of schedule, delivering the facility 3 weeks before the target date",
    "Implemented energy-efficient systems reducing operational costs by approximately 25%",
    "Incorporated advanced medical gas systems and emergency power backup for critical care areas",
    "Designed flexible spaces that can be quickly reconfigured for different medical specialties",
    "Achieved zero safety incidents throughout the entire construction period",
  ],
  image: "/media/upth/feb25-1.jpg",
  featured: true,
  timelineImages: createTimelineImages(),
};

// Projects array to allow for easy addition later
const projects: Project[] = [upthProject];

// Define order of months for filter buttons
const monthDisplayOrder = ["March", "April", "January", "February"];

// Timeline Gallery Component with proper TypeScript types
interface TimelineGalleryProps {
  images: TimelineImage[];
  respectDisplayOrder?: boolean; // Whether to use displayOrder field or chronological sorting
}

const TimelineGallery: React.FC<TimelineGalleryProps> = ({
  images,
  respectDisplayOrder = true, // Default to respecting the display order
}) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const galleryRef = useRef<HTMLDivElement>(null);

  // Sort images according to the specified display order
  const sortedImages = [...images].sort((a, b) => {
    if (respectDisplayOrder) {
      return a.displayOrder - b.displayOrder;
    } else {
      // Regular chronological sorting
      const aYearMonth = a.date + monthDisplayOrder.indexOf(a.month);
      const bYearMonth = b.date + monthDisplayOrder.indexOf(b.month);
      return aYearMonth.localeCompare(bYearMonth);
    }
  });

  // Filter images by month
  const filteredImages =
    activeFilter === "all"
      ? sortedImages
      : sortedImages.filter(
          (img) => img.month.toLowerCase() === activeFilter.toLowerCase()
        );

  // Get unique months for filter
  const uniqueMonths = [...new Set(sortedImages.map((img) => img.month))];

  // Order month filters according to our desired display order
  const orderedMonths = uniqueMonths.sort((a, b) => {
    return monthDisplayOrder.indexOf(a) - monthDisplayOrder.indexOf(b);
  });

  // Open lightbox
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Navigate in lightbox
  const navigateImage = (direction: number) => {
    if (selectedImage !== null) {
      const newIndex = selectedImage + direction;
      if (newIndex >= 0 && newIndex < filteredImages.length) {
        setSelectedImage(newIndex);
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "ArrowRight") navigateImage(1);
        if (e.key === "ArrowLeft") navigateImage(-1);
        if (e.key === "Escape") closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);

  useEffect(() => {
    if (galleryRef.current && filteredImages.length > 0) {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [filteredImages, activeFilter]);

  return (
    <div ref={galleryRef} className="timeline-gallery">
      <h3 className="text-2xl font-bold text-white mb-8">
        Project Progress Timeline
      </h3>

      {/* Month filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === "all"
              ? "bg-red-600 text-white"
              : "bg-[#2a2728] text-gray-300 hover:bg-[#444] hover:text-white"
          }`}
        >
          All Photos
        </button>
        {orderedMonths.map((month) => (
          <button
            key={month}
            onClick={() => setActiveFilter(month)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeFilter === month
                ? "bg-red-600 text-white"
                : "bg-[#2a2728] text-gray-300 hover:bg-[#444] hover:text-white"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Image gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="timeline-item bg-[#2a2728] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.caption || `Project progress - ${image.date}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-red-600 font-medium">{image.month}</span>
                <span className="text-gray-400 text-sm">{image.date}</span>
              </div>
              {image.caption && (
                <p className="text-gray-300 text-sm">{image.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-red-600 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] px-4">
            {selectedImage !== null && filteredImages[selectedImage] && (
              <Image
                src={filteredImages[selectedImage].src}
                alt={
                  filteredImages[selectedImage].caption || "Project progress"
                }
                fill
                sizes="100vw"
                className="object-contain"
              />
            )}

            {/* Caption */}
            {selectedImage !== null && filteredImages[selectedImage] && (
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center">
                <p className="text-white text-lg">
                  {filteredImages[selectedImage].caption} (
                  {filteredImages[selectedImage].month}{" "}
                  {filteredImages[selectedImage].date})
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <button
              onClick={() => navigateImage(-1)}
              disabled={selectedImage === 0}
              className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full ${
                selectedImage === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft size={28} className="text-white" />
            </button>

            <button
              onClick={() => navigateImage(1)}
              disabled={selectedImage === filteredImages.length - 1}
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full ${
                selectedImage === filteredImages.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
              aria-label="Next image"
            >
              <ChevronRight size={28} className="text-white" />
            </button>
          </div>

          {/* Counter */}
          <div className="mt-4 text-white">
            {selectedImage !== null ? selectedImage + 1 : 0} of{" "}
            {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default function Projects() {
  const introRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Hero content animation
      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // Intro content animation
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

      // Project animation
      gsap.fromTo(
        ".project-image",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        ".project-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 70%",
          },
        }
      );

      // Timeline section animation
      gsap.fromTo(
        ".timeline-section-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats animation
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

      // CTA animation
      gsap.fromTo(
        ".cta-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: servicesSectionRef.current
        ? servicesSectionRef.current.offsetTop
        : 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen bg-[#373435]">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            className="w-full h-full object-cover"
          >
            <source src="/media/background_projects.webm" type="video/webm" />
          </video>
          {/* Overlay to darken video and make text more readable */}
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
            Our Projects
          </h1>
          <p className="text-md md:text-xl max-w-2xl mx-auto mb-4">
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
              At Stanchions, we pride ourselves on our exceptional track record of successful project delivery across Nigeria&apos;s oil and gas sector and beyond. Our comprehensive project portfolio demonstrates our expertise in pipeline construction, mechanical & electrical installations, location preparation, civil construction, procurement, and logistics services. Each project reflects our unwavering commitment to quality, safety, innovation, and delivering exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>

      {/* UPTH Project Section */}
      <section
        ref={servicesSectionRef}
        className="py-20 relative z-10 bg-[#373435]"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
            Featured <span className="text-red-600">Project</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="project-image">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={upthProject.image}
                  alt={upthProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="project-content">
              <div className="bg-[#2a2728] p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {upthProject.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  Client: {upthProject.client}
                </p>

                <div className="flex items-start space-x-4 mb-4">
                  <Calendar className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Year</h4>
                    <p className="text-gray-300">{upthProject.date}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-4">
                  <MapPin className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-300">{upthProject.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-6">
                  <Tag className="text-red-600 w-5 h-5 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold">Category</h4>
                    <p className="text-gray-300 capitalize">
                      {upthProject.category} Construction
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{upthProject.description}</p>

                <h4 className="text-white font-semibold mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {upthProject.achievements.map((achievement, i) => (
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
        </div>
      </section>

      {/* Timeline Gallery Section */}
      <section ref={timelineRef} className="py-20 relative z-10 bg-[#2a2728]">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center timeline-section-header">
            Construction <span className="text-red-600">Timeline</span>
          </h2>

          <TimelineGallery
            images={upthProject.timelineImages}
            respectDisplayOrder={true}
          />
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
      <section ref={ctaRef} className="py-20 relative z-10 bg-[#2a2728]">
        <div className="container mx-auto px-4 max-w-4xl text-center cta-content">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to <span className="text-red-600">Start Your Project?</span>
          </h2>
          <p className="text-gray-300 mb-10 text-lg">
            Contact us today to discuss how Stanchions can bring your project to life with our world-class engineering expertise, innovative solutions, and unwavering commitment to excellence.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-red-600 text-white px-10 py-4 text-lg hover:bg-red-600 transition-all duration-300"
          >
            Contact Our Team
          </Link>
        </div>
      </section>

      <ScrollButton />
    </main>
  );
}
