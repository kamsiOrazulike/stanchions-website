/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const LeadershipContent = () => {
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-3 md:mb-4">
        Management Team
      </h2>
      <p className="text-white text-sm md:text-base text-center max-w-3xl mx-auto mb-8 md:mb-16">
        Our experienced management team brings decades of industry expertise and
        leadership to drive our company's success.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* CEO Profile */}
        <div className="flex flex-col">
          <div className="aspect-[4/3] bg-gray-100 mb-3 md:mb-4 relative rounded-lg overflow-hidden">
            <img
              src="/static/DR_NNAETO_ORAZULIKE.jpg"
              alt="DR. NNAETO ORAZULIKE"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            DR. NNAETO ORAZULIKE
          </h3>
          <p className="font-bold text-xs md:text-sm text-red-600 mb-2 md:mb-3">
            OON– FOUNDER & GROUP MANAGING DIRECTOR
          </p>
          <p className="text-white text-xs md:text-sm">
            Dr. Orazulike holds a B.Sc. in Accounting from the University of
            Nigeria and completed the Harvard Business School OPM program. He is
            a board member of FATE Foundation and formerly served on the board
            of Fidelity Bank PLC. In 2015, he received an honorary Doctor of
            Science degree from the University of Port Harcourt.
          </p>
        </div>

        {/* CFO Profile */}
        <div className="flex flex-col">
          <div className="aspect-[4/3] bg-gray-100 mb-3 md:mb-4 relative rounded-lg overflow-hidden">
            <img
              src="/static/UWOJEYA_DANIEL.jpg"
              alt="UWOJEYA DANIEL"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            UWOJEYA DANIEL
          </h3>
          <p className="font-bold text-xs md:text-sm text-red-600 mb-2 md:mb-3">
            CHIEF FINANCE OFFICER
          </p>
          <p className="text-white text-xs md:text-sm">
            Uwojeya Daniel is a seasoned financial expert with extensive
            experience in corporate finance, risk management, and regulatory
            compliance. A Fellow of ICAN and CITN, he provides strategic
            financial oversight, ensuring operational efficiency and sustainable
            growth at Stanchions. His expertise in financial planning, cost
            optimization, and investment strategy strengthens the company's
            financial position while driving profitability and long-term value
            creation.
          </p>
        </div>

        {/* Technical Advisor Profile */}
        <div className="flex flex-col">
          <div className="aspect-[4/3] bg-gray-100 mb-3 md:mb-4 relative rounded-lg overflow-hidden">
            <img
              src="/static/GABRIEL_ORAMASIONWU.jpg"
              alt="GABRIEL ORAMASIONWU"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-1">
            GABRIEL ORAMASIONWU
          </h3>
          <p className="font-bold text-xs md:text-sm text-red-600 mb-2 md:mb-3">
            CHIEF TECHNICAL ADVISOR
          </p>
          <p className="text-white text-xs md:text-sm">
            Gabriel Oramasionwu is a highly experienced professional in oil &
            gas, engineering, and business strategy. With a strong background in
            project management, process optimization, and technical innovation,
            he plays a pivotal role in enhancing Stanchions's operational efficiency
            and service delivery. His expertise in business development and risk
            management ensures the successful execution of complex projects,
            driving sustainable growth and industry leadership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadershipContent;
