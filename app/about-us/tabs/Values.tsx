/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Eye, Target, Shield, Users, RotateCcw } from "lucide-react";

const ValuesContent = () => {
  return (
    <div className="p-6 md:p-10 text-white">
      <div className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Vision Mission <span className="text-red-600">Values</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our vision, mission, and values guide everything we do at
            Stanchions, driving our commitment to excellence and shaping our
            approach to business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Vision */}
          <div className="bg-[#373435] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="bg-red-600/10 p-4 rounded-full mb-6">
              <Eye className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Vision</h3>
            <p className="text-gray-300">
              To achieve local content leadership position through flawless
              project execution, strategic research and staff development.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#373435] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="bg-red-600/10 p-4 rounded-full mb-6">
              <Target className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Mission</h3>
            <p className="text-gray-300">
              To provide unparalleled quality delivery of world class
              Engineering, Procurement and Constructions (EPC) projects and
              allied services, Efficiently, Timely, Safely and Cost Effectively.
            </p>
          </div>

          {/* Values */}
          <div className="bg-[#373435] p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
            <div className="bg-red-600/10 p-4 rounded-full mb-6">
              <Shield className="w-12 h-12 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Values</h3>
            <p className="text-gray-300">
              Team work, Safety, Fairness, Motivation and Preservation of Human,
              Material Resources, and the Environment.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Core <span className="text-red-600">Principles</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Teamwork */}
          <div className="flex items-start space-x-6">
            <div className="bg-red-600/10 p-3 rounded-full flex-shrink-0">
              <Users className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Teamwork & Collaboration
              </h3>
              <p className="text-gray-300">
                We believe in the power of collaboration and teamwork. Our
                skilled professionals work together to deliver exceptional
                results, leveraging diverse expertise to overcome challenges and
                innovate solutions.
              </p>
            </div>
          </div>

          {/* Safety */}
          <div className="flex items-start space-x-6">
            <div className="bg-red-600/10 p-3 rounded-full flex-shrink-0">
              <Shield className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Safety & Environmental Responsibility
              </h3>
              <p className="text-gray-300">
                We adopt the zero Loss Time Injury (LTI) philosophy with respect
                to health, safety, and environment. We continuously work to
                reduce risks and hazards to the environment and our employees'
                health and safety.
              </p>
            </div>
          </div>

          {/* Continuous Improvement */}
          <div className="flex items-start space-x-6">
            <div className="bg-red-600/10 p-3 rounded-full flex-shrink-0">
              <RotateCcw className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Continuous Improvement</h3>
              <p className="text-gray-300">
                Our focus on research and process improvements into the latest
                high-tech engineering and construction equipment allows us to
                ensure our clients receive the most cost-effective and
                value-added products and services.
              </p>
            </div>
          </div>

          {/* Customer Focus */}
          <div className="flex items-start space-x-6">
            <div className="bg-red-600/10 p-3 rounded-full flex-shrink-0">
              <Target className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-300">
                Our commitment to excellent customer service has led us to be
                regarded as a premier and well-respected indigenous contractor.
                We owe our clients services that not only meet statutory quality
                requirements but exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesContent;
