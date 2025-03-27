import React from "react";
import Image from "next/image";

const OverviewContent = () => {
  return (
    <div className="p-6 md:p-10 text-white">
      {/* Hero Section with Large Title */}
      <div className="text-center mb-12 border-b border-red-600/20 pb-8">
        <h2 className="text-4xl font-bold mb-4">
          Who We <span className="text-red-600">Are</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Stanchions Nigeria is one of the fastest Local Content Company,
          providing World Class Engineering & Support Services in the Oil and
          Gas sector of Nigeria since 2006.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Left Column - Main Text */}
        <div className="space-y-6">
          <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <p className="text-gray-300">
              With a wide range of experience in pipeline construction and
              rehabilitation services, Civil & Mechanical Engineering Services
              as well as oversea procurement for the oil and gas industry.
              Specialized products and services for industrial and
              telecommunication industry also offered.
            </p>
          </div>

          <div className="bg-[#373435] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              Since 2006, we have built a reputation as a leading Civil &
              Mechanical Engineering, Procurement & Logistics Company with an
              enviable and admirable list of core capabilities and customer
              centric solutions.
            </p>
          </div>

          <div className="bg-[#373435] p-6 rounded-lg shadow-lg">
            <p className="text-gray-300">
              We currently maintain skilled, professional employees, some of
              whom have been with the company their entire career. As a
              recognized leader in the industry, much of our success and
              longevity can be attributed to the quality of work we provide to
              our clients, as well as the professional and stable leadership at
              all levels within the company.
            </p>
          </div>
        </div>

        {/* Right Column - Image and Key Points */}
        <div>
          <div className="mb-8">
            <Image
              src="/media/work-image-2.jpg"
              alt="Stanchions Engineering"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full object-cover h-64"
            />
          </div>

          {/* Key Points */}
          <div className="space-y-6">
            <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3 text-red-600">
                Our Commitment
              </h3>
              <p className="text-gray-300">
                Our commitment to innovative thinking, technical expertise, and
                dedication to excellent customer service has led us to be
                regarded as a premier and well-respected indigenous contractor
                among clients and competitors alike.
              </p>
            </div>

            <div className="bg-[#373435] p-6 rounded-lg shadow-lg border-l-4 border-red-600">
              <h3 className="text-2xl font-bold mb-3 text-red-600">
                Technology & Innovation
              </h3>
              <p className="text-gray-300">
                Our focus on research and processes improvements into the latest
                high-tech engineering and construction equipment allow us to
                ensure our clients receive the most cost-effective and value
                added products, and services available in a safe and efficient
                manner and most importantly, on schedule.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Capacity Section */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold inline-block border-b-2 border-red-600 pb-2">
            Our <span className="text-red-600">Capacity</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                Engineering Solutions
              </h3>
            </div>
            <p className="text-gray-300">
              Stanchions Nigeria Limited is a one-stop-shop engineering
              solutions provider for engineering, procurement and construction
              services in quality, promptness and professionalism.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                World Class Expertise
              </h3>
            </div>
            <p className="text-gray-300">
              We command world class expertise in total program management, from
              its ability to understand projects quality regiments at all
              levels, seamlessly integrating required solutions and services.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                Ethical Business Practices
              </h3>
            </div>
            <p className="text-gray-300">
              We strongly support ethical business practices, while providing
              complete range of supply, service and expertise to complex project
              requirements. The quality customer service we present is
              reciprocated by the repeated orders from our major clients.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#373435] to-[#2a2728] p-8 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 p-2 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">
                Procurement Excellence
              </h3>
            </div>
            <p className="text-gray-300">
              The experienced personnel at Stanchions ensures procurement and
              supply of equipment and parts at the optimum price specification
              and delivery for important projects requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
