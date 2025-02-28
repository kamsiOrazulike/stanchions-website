/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Shield, Gauge, Heart, Leaf } from "lucide-react";

const QHSEContent = () => {
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
    <div className="p-6 md:p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-red-600">QHSE</span> Policy
          </h2>

          <div className="prose prose-lg text-gray-300 prose-invert">
            <p>
              Stanchions ensures that the functions of quality management exists
              throughout our organization to the degree necessary to ensure that
              the acceptance and performance criteria of our services are
              continuously met. We owe our clients services that not only meet
              statutory quality requirement, but exceeds their expectations.
            </p>

            <p>
              Stanchions adopts the zero Loss Time Injury (LTA) philosophy with
              respect to health, safety, and environment. We continuously work
              to reduce risks and hazards to the environment and the employees'
              health and safety.
            </p>

            <p>
              All our employees are required to use the time necessary to plan
              and perform tasks in a safe and efficient manner.
            </p>

            <p>
              The above policy statement is supported by a system for continuous
              improvement, which sweeps across every facet of the company
              business and our employees understands and appreciate, as well as
              conform to our continuing commitment to quality, health, safety,
              and environment.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <Image
            src="/static/imgs/qhse.jpg"
            alt="QHSE at Stanchions"
            width={550}
            height={400}
            className="rounded-lg shadow-xl mb-8"
          />

          <div className="bg-[#373435] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">
              Our Commitment to Excellence
            </h3>
            <p className="text-gray-300">
              At Stanchions, we believe that maintaining the highest standards
              of Quality, Health, Safety, and Environment is not just a
              regulatory requirement but a core value that defines who we are as
              an organization. Our commitment to QHSE excellence is embedded in
              every aspect of our operations.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-10 text-center">
          Our QHSE <span className="text-red-600">Principles</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qhseValues.map((value, index) => (
            <div
              key={index}
              className="bg-[#373435] p-6 rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-600/10 rounded-full">
                  <value.icon className="w-8 h-8 text-red-600" />
                </div>
              </div>
              <h4 className="text-xl font-bold mb-3">{value.title}</h4>
              <p className="text-gray-300 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-red-900/30 to-red-800/30 p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">
              Certifications & Compliance
            </h3>
            <p className="text-gray-300">
              Our QHSE management system is designed to comply with
              international standards and best practices. We continuously audit
              and improve our processes to ensure the highest level of quality,
              safety, and environmental responsibility in all our operations.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Shield className="w-20 h-20 text-red-600/80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QHSEContent;
