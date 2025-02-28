"use client";
import React from "react";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
}

interface ClientMarqueeProps {
  clients: Client[];
}

const ClientMarquee: React.FC<ClientMarqueeProps> = ({ clients }) => {
  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <div className="relative w-full overflow-hidden bg-transparent">
      {/* Main marquee container */}
      <div className="inline-flex w-full p-4 rounded-md">
        {/* First moving div */}
        <div
          className="animate-marquee inline-flex items-center"
          style={{
            animation: "marquee 40s linear infinite",
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="mx-4 flex items-center justify-center w-28 h-16 flex-shrink-0"
            >
              <div className="relative w-full h-16">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: "contain",
                  }}
                  draggable="false"
                  className="grayscale-[0] rounded-md opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>
    </div>
  );
};

export default ClientMarquee;
