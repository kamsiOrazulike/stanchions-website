import React from "react";
import Image from "next/image";

const OverviewContent = () => {
  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-[#2a2728]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="about-text">
              <h2 className="text-5xl font-bold text-white mb-6">
                Who We <span className="text-red-600">Are</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Stanchions Nigeria Limited stands as a premier indigenous engineering solutions provider, delivering world-class Engineering, Procurement, and Construction (EPC) services across Nigeria&apos;s oil and gas sector since 2006.
              </p>
              <p className="text-gray-300 mb-12">
                With extensive expertise spanning pipeline construction, rehabilitation services, civil and mechanical engineering, we deliver comprehensive solutions that consistently exceed industry standards and client expectations through innovation, technical excellence, and unwavering commitment to quality.
              </p>
              <a
                href="/services"
                className="border border-red-600 text-white px-8 py-3 rounded-none hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 mt-4 text-base inline-block"
              >
                Explore Our Services
              </a>
            </div>
            <div className="about-image">
              <Image
                src="/media/work-image-2.jpg"
                alt="Stanchions Engineering"
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

      {/* Company Commitment Section */}
      <section className="relative py-20 bg-[#373435]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-red-600">Commitment</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Excellence */}
            <div className="bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Excellence</h3>
              <p className="text-gray-300">
                Delivering innovative engineering solutions with cutting-edge technology and proven methodologies that ensure optimal project outcomes and long-term value creation.
              </p>
            </div>

            {/* Quality Assurance */}
            <div className="bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Quality Assurance</h3>
              <p className="text-gray-300">
                Maintaining rigorous quality standards throughout every project phase, ensuring all deliverables meet or exceed specifications and industry best practices.
              </p>
            </div>

            {/* Customer Service */}
            <div className="bg-[#2a2728] p-8 rounded-lg shadow-lg text-center">
              <div className="text-red-600 mb-4 flex justify-center">
                <svg
                  className="w-16 h-16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Customer Excellence</h3>
              <p className="text-gray-300">
                Building lasting partnerships through exceptional customer service, ethical business practices, and a commitment to exceeding client expectations in every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Capacity Metrics */}
      <section className="relative py-20 bg-[#2a2728]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-white mb-16">
            Our <span className="text-red-600">Capacity</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Years of Experience */}
            <div className="flex flex-col items-center text-center">
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
              <div className="text-4xl font-bold text-white mb-2">18+</div>
              <div className="text-white">Years of Experience</div>
            </div>

            {/* Projects Completed */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-white">Projects Completed</div>
            </div>

            {/* Major Clients */}
            <div className="flex flex-col items-center text-center">
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
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-white">Major Clients</div>
            </div>

            {/* Team Members */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-600 mb-4">
                <svg
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="relative py-20 bg-[#373435]">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="about-image">
              <Image
                src="/media/work-image.jpg"
                alt="Innovation at Stanchions"
                width={800}
                height={500}
                className="w-full rounded-lg shadow-lg"
                quality={90}
              />
            </div>
            <div className="about-text">
              <h2 className="text-4xl font-bold text-white mb-6">
                Innovation & <span className="text-red-600">Technology</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Through continuous investment in research and development, we leverage cutting-edge engineering technologies and construction methodologies to deliver innovative solutions that exceed expectations.
              </p>
              <p className="text-gray-300 mb-8">
                Our focus on process innovation ensures clients receive the most cost-effective, value-driven solutions delivered safely, efficiently, and on schedule—every time.
              </p>
              <a
                href="/qhse"
                className="border border-red-600 text-white px-8 py-3 rounded-none hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 text-base inline-block"
              >
                Learn About Our QHSE Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OverviewContent;
