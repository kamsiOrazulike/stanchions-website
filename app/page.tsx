/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import Image from "next/image";
import ServiceCarousel from "./components/Carousel";
import ClientMarquee from "./components/Marquee";
import ScrollButton from "./components/ScrollButton";
import AnimatedCounter from "./components/AnimatedCount";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const metricsSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const clientsSectionRef = useRef<HTMLDivElement>(null);
  const visionMissionRef = useRef<HTMLDivElement>(null);
  const qhseSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".hero-content",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        ".about-text",
        { opacity: 0, x: -50 },
        {
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: 50 },
        {
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".vision-mission-item",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: visionMissionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".metric-item",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: metricsSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        }
      );

      gsap.fromTo(
        ".services-text",
        { opacity: 0, x: -40 },
        {
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".services-carousel",
        { opacity: 0, x: 40 },
        {
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".qhse-content",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: qhseSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".clients-header",
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: clientsSectionRef.current,
            start: "top 80%",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        }
      );
    }

    return () => {
      if (typeof window !== "undefined" && ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      }
    };
  }, []);

  const services = [
    {
      name: "Pipeline Construction",
      description:
        "We deliver comprehensive pipeline construction, rehabilitation, and maintenance services for oil, natural gas, petroleum products, and industrial applications. Our expertise ensures safe, efficient transportation infrastructure that meets international standards.",
      isNew: false,
      imageSrc: "/media/pipeline-construction.jpg",
    },
    {
      name: "Mechanical & Electrical Installations",
      description:
        "Our specialized engineering teams deliver comprehensive mechanical and electrical solutions for industrial and commercial applications, leveraging advanced technologies and proven methodologies to ensure optimal performance and reliability.",
      isNew: false,
      imageSrc: "/media/mechanical-electrical.jpg",
    },
    {
      name: "Location Preparation",
      description:
        "We provide comprehensive site preparation services for drilling operations across diverse terrain conditions, including swamp and land locations, ensuring optimal readiness for successful rig deployment and operations.",
      isNew: false,
      imageSrc: "/media/location-prep.jpg",
    },
    {
      name: "Road & Civil Construction",
      description:
        "Drawing on our extensive industrial experience and proven technical capabilities, we deliver large-scale road and civil infrastructure projects that support critical operations and community development across Nigeria.",
      isNew: false,
      imageSrc: "/media/road-construction.jpg",
    },
    {
      name: "Procurement",
      description:
        "Our strategic procurement approach leverages extensive market knowledge and established supplier relationships to deliver cost-effective sourcing solutions across local and international markets, ensuring quality and timely delivery.",
      isNew: false,
      imageSrc: "/media/procurement.jpg",
    },
    {
      name: "Logistics",
      description:
        "Our comprehensive logistics capabilities include our own fleet of specialized vehicles, forklifts, cranes, and material handling equipment, ensuring secure, efficient transportation and delivery of supplies and materials to project sites.",
      isNew: false,
      imageSrc: "/media/logistics.jpg",
    },
  ];

  const clients = [
    { name: "Shell", logo: "/static/clients/shell.png" },
    { name: "Total", logo: "/static/clients/total.png" },
    { name: "ExxonMobil", logo: "/static/clients/exxonmobil.png" },
    { name: "Texaco", logo: "/static/clients/texaco.svg" },
    { name: "Eni", logo: "/static/clients/eni.svg" },
    { name: "Nigeria LNG Limited", logo: "/static/clients/lng_ltd.webp" },
    { name: "NNPC", logo: "/static/clients/nnpc.png" },
    { name: "Elcrest", logo: "/static/clients/elcrest.webp" },
    { name: "Walter Smith", logo: "/static/clients/wsmith.jpg" },
    { name: "Amazon Energy", logo: "/static/clients/amazon-energy.png" },
  ];

  return (
    <main className="relative min-h-screen bg-[#373435]">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen w-full overflow-hidden">
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
            <source src="/media/background_video.webm" type="video/webm" />
            </video>
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
          <p className="text-md md:text-xl max-w-2xl mx-auto mb-4">
            Premier Indigenous Engineering Solutions Provider - Delivering Excellence in Oil & Gas Infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about-us"
              className="text-sm bg-red-600 text-white px-8 py-3 rounded-none hover:bg-red-700 transition-all duration-300"
            >
              Learn More
            </Link>
            <Link
              href="/contact"
              className="text-sm border border-white text-white px-8 py-3 rounded-none hover:bg-white hover:text-[#373435] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <button
            onClick={() => {
              window.scrollTo({
                top: aboutSectionRef.current
                  ? aboutSectionRef.current.offsetTop
                  : 0,
                behavior: "smooth",
              });
            }}
            className="animate-bounce mt-8 bg-transparent border-none text-white cursor-pointer"
            aria-label="Scroll to content"
          >
            <ChevronDown size={42} />
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={aboutSectionRef}
        className="relative py-20 bg-[#373435] px-8 overflow-hidden"
      >
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="about-text">
              <h2 className="text-5xl font-bold text-white mb-6">
                About <span className="text-red-600">Us</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Stanchions Nigeria Limited stands as a premier indigenous engineering solutions provider, delivering world-class construction and fabrication support services to Nigeria's Oil and Gas sector with unwavering commitment to excellence.
              </p>
              <p className="text-gray-300 mb-12">
                Since 2006, we have cultivated an exceptional reputation through our comprehensive capabilities in pipeline construction and rehabilitation, civil and mechanical engineering services, and strategic procurement solutions. Our proven track record encompasses successful project delivery across diverse operational environments, positioning us as a trusted partner for industry leaders seeking reliable, innovative, and cost-effective engineering solutions.
              </p>
              <Link
                href="/about-us"
                className="border border-red-600 text-white px-8 py-3 rounded-none hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 mt-4 text-base"
              >
                Learn More About Us
              </Link>
            </div>
            <div className="about-image">
              <Image
                src="/media/work-image.jpg"
                alt="Stanchions Facilities"
                width={800}
                height={500}
                className="w-full rounded-lg shadow-lg"
                quality={90}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Values Section */}
      <section ref={visionMissionRef} className="relative py-20 bg-[#2a2728]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Vision Mission <span className="text-red-600">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="vision-mission-item bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5C15.9 5 19 8.1 19 12C19 15.9 15.9 19 12 19C8.1 19 5 15.9 5 12C5 8.1 8.1 5 12 5ZM12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
              <p className="text-gray-300">
                To be the leading indigenous engineering solutions provider in Nigeria's oil and gas sector, recognized for our commitment to excellence, innovation through research and development, and continuous investment in our people.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-mission-item bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5H16.5C18.1569 4.5 19.5 5.84315 19.5 7.5V16.5C19.5 18.1569 18.1569 19.5 16.5 19.5H7.5C5.84315 19.5 4.5 18.1569 4.5 16.5V7.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
              <p className="text-gray-300">
                To deliver exceptional engineering, procurement, and construction solutions that exceed client expectations while maintaining the highest standards of safety, quality, environmental stewardship, and operational excellence.
              </p>
            </div>

            {/* Values */}
            <div className="vision-mission-item bg-[#373435] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L12 22M12 12L3 7.5M12 12L21 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
              <p className="text-gray-300">
                Teamwork, Safety Excellence, Fairness, Innovation, and Stewardship - guiding our commitment to sustainable development and responsible resource management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={metricsSectionRef} className="relative py-20 bg-[#373435]">
        {/* Dot Matrix Background */}
        <div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
              backgroundSize: "10px 10px",
            }}
          />
          {/* Top Fade */}
          <div
            className="absolute top-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to bottom, #373435 0%, transparent 100%)",
            }}
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to top, #373435 0%, transparent 100%)",
            }}
          />
        </div>
        {/* Section Container */}
        <div className="w-full max-w-7xl mx-auto px-4">
          {/* Header */}
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-red-600">Capacity</span>
          </h2>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Metric 1 */}
            <div className="metric-item flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="currentColor"
                  />
                  <path
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter endValue={150} suffix="+" useCommas={true} />
              </div>
              <div className="text-gray-300">Projects Completed</div>
            </div>

            {/* Metric 2 */}
            <div className="metric-item flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 8V12L14 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter endValue={18} suffix="+" />
              </div>
              <div className="text-white">Years of Experience</div>
            </div>

            {/* Metric 3 */}
            <div className="metric-item flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 7L12 2L3 7V17L12 22L21 17V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12L12 22M12 12L3 7M12 12L21 7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter endValue={15} suffix="+" />
              </div>
              <div className="text-white">Major Clients</div>
            </div>

            {/* Metric 4 */}
            <div className="metric-item flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                <AnimatedCounter endValue={100} suffix="%" />
              </div>
              <div className="text-white">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesSectionRef}
        className="relative py-20 bg-[#2a2728] px-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Text Content */}
            <div className="services-text lg:w-1/3 mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="text-red-600">Services</span>
              </h2>
              <div className="prose prose-lg text-gray-300 mb-8 prose-invert">
                <p>
                  Stanchions Nigeria Limited stands as your comprehensive engineering solutions partner, delivering integrated engineering, procurement, and construction services with unwavering commitment to quality, innovation, and professional excellence.
                </p>
                <p className="mt-4">
                  We leverage world-class expertise in total program management, seamlessly integrating cutting-edge solutions and technical services while maintaining the highest standards of ethical business practices and operational excellence.
                </p>
              </div>
              <Link
                href="/services"
                className="border border-red-600 text-white px-8 py-3 rounded-none hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 inline-block text-base"
              >
                View All Services
              </Link>
            </div>

            {/* Carousel */}
            <div className="services-carousel lg:w-2/3">
              <ServiceCarousel services={services} />
            </div>
          </div>
        </div>
      </section>

      {/* QHSE Section */}
      <section
        ref={qhseSectionRef}
        className="relative py-20 bg-[#373435] px-8"
      >
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="qhse-content">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                <span className="text-red-600">QHSE</span> Policy
              </h2>
              <div className="prose prose-lg text-gray-300 prose-invert">
                <p>
                  Stanchions ensures that the functions of quality management
                  exists throughout our organization to ensure that the
                  acceptance and performance criteria of our services are
                  continuously met.
                </p>
                <p className="mt-4">
                  We adopt the zero Loss Time Injury (LTA) philosophy with
                  respect to health, safety, and environment. We continuously
                  work to reduce risks and hazards to the environment and the
                  employees' health and safety.
                </p>
                <p className="mt-4">
                  All our employees are required to use the time necessary to
                  plan and perform tasks in a safe and efficient manner.
                </p>
              </div>
            </div>
            <div className="qhse-image">
              <Image
                src="/media/qhse.jpg"
                alt="QHSE at Stanchions"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-lg"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section
        ref={clientsSectionRef}
        className="relative py-20 bg-[#2a2728] overflow-hidden"
      >
        {/* Background elements */}
        <div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
              backgroundSize: "10px 10px",
            }}
          />
          {/* Top Fade */}
          <div
            className="absolute top-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to bottom, #2a2728 0%, transparent 100%)",
            }}
          />
          {/* Bottom Fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 z-10"
            style={{
              background:
                "linear-gradient(to top, #2a2728 0%, transparent 100%)",
            }}
          />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
          <div className="clients-header text-center mb-12">
            <h2 className="text-5xl font-bold text-white">
              Our <span className="text-red-600">Clients</span>
            </h2>
            <p className="text-gray-300 mt-4">
              We&apos;ve had the privilege of working with leading companies in
              the oil and gas industry
            </p>
          </div>
          <ClientMarquee clients={clients} />
        </div>
      </section>

      <ScrollButton />
    </main>
  );
}
