import React from "react";
import {
  Users,
  Clock,
  TrendingUp,
  HardHat,
  Lightbulb,
  Globe,
  DollarSign,
} from "lucide-react";

const CoreValues = () => {
  const leftValues = [
    {
      title: "Dedication & Teamwork",
      icon: <Users className="w-8 h-8" />,
      color: "text-amber-600",
    },
    {
      title: "Trust, Commitment & Passion",
      icon: <Clock className="w-8 h-8" />,
      color: "text-red-600",
    },
    {
      title: "Commitment to Nigerian Capacity Development",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "text-amber-600",
    },
  ];

  const rightValues = [
    {
      title: "Personal & Professional Development",
      icon: <HardHat className="w-8 h-8" />,
      color: "text-red-600",
    },
    {
      title: "Innovation",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-amber-600",
    },
    {
      title: "Trust & Respect for all",
      icon: <Globe className="w-8 h-8" />,
      color: "text-red-600",
    },
    {
      title: "Value for Money",
      icon: <DollarSign className="w-8 h-8" />,
      color: "text-amber-600",
    },
  ];

  return (
    <div className="py-12">
      <h3 className="text-2xl font-bold text-center text-gray-800 mb-16">
        OUR CORE VALUES
      </h3>

      {/* Values Layout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative">
        {/* Left Values */}
        <div className="w-full md:w-5/12 space-y-12">
          {leftValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`mb-4 ${value.color}`}>{value.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Center Circle */}
        <div className="w-48 h-48 bg-white shadow-lg rounded-full flex flex-col items-center justify-center text-center p-4 border-2 border-gray-200">
          <h4 className="font-bold text-gray-800 mb-2">Integrity</h4>
          <p className="text-sm text-gray-600">
            Care, Courtesy, Responsiveness
          </p>
        </div>

        {/* Right Values */}
        <div className="w-full md:w-5/12 space-y-12">
          {rightValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`mb-4 ${value.color}`}>{value.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {value.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
