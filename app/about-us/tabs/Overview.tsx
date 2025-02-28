import React from "react";
import Image from "next/image";

const OverviewContent = () => {
  return (
    <div className="p-6 md:p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Who We <span className="text-red-600">Are</span>
          </h2>

          <div className="prose prose-lg text-gray-300 prose-invert">
            <p>
              Stanchions Nigeria is one of the fastest Local Content Company,
              providing World Class Engineering & Support Services in the Oil
              and Gas sector of Nigeria.
            </p>

            <p>
              With a wide range of experience in pipeline construction and
              rehabilitation services, Civil & Mechanical Engineering Services
              as well as oversea procurement for the oil and gas industry.
              Specialized products and services for industrial and
              telecommunication industry also offered.
            </p>

            <p>
              Since 2006, we have built a reputation as a leading Civil &
              Mechanical Engineering, Procurement & Logistics Company with an
              enviable and admirable list of core capabilities and customer
              centric solutions.
            </p>

            <p>
              We currently maintain skilled, professional employees, some of
              whom have been with the company their entire career. As a
              recognized leader in the industry, much of our success and
              longevity can be attributed to the quality of work we provide to
              our clients, as well as the professional and stable leadership at
              all levels within the company.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Our Commitment
            </h3>
            <p className="text-gray-300">
              Our commitment to innovative thinking, technical expertise, and
              dedication to excellent customer service has led us to be regarded
              as a premier and well-respected indigenous contractor among
              clients and competitors alike.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              Technology & Innovation
            </h3>
            <p className="text-gray-300">
              Our focus on research and processes improvements into the latest
              high-tech engineering and construction equipment allow us to
              ensure our clients receive the most cost-effective and value added
              products, and services available in a safe and efficient manner
              and most importantly, on schedule.
            </p>
          </div>

          <div className="mt-8">
            <Image
              src="/static/imgs/about-image.jpg"
              alt="Stanchions Engineering"
              width={550}
              height={350}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our <span className="text-red-600">Capacity</span>
        </h2>

        <div className="bg-[#373435] p-8 rounded-lg shadow-lg">
          <p className="text-gray-300 mb-6">
            Stanchions Nigeria Limited is a one-stop-shop engineering solutions
            provider for engineering, procurement and construction services in
            quality, promptness and professionalism.
          </p>

          <p className="text-gray-300 mb-6">
            We command world class expertise in total program management, from
            its ability to understand projects quality regiments at all levels,
            seamlessly integrating required solutions and services.
          </p>

          <p className="text-gray-300 mb-6">
            We strongly support ethical business practices, while providing
            complete range of supply, service and expertise to complex project
            requirements. The quality customer service we present is
            reciprocated by the repeated orders from our major clients.
          </p>

          <p className="text-gray-300">
            The experienced personnel at Stanchions ensures procurement and
            supply of equipment and parts at the optimum price specification and
            delivery for important projects requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
