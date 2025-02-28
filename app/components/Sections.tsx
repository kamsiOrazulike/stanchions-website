import Image from "next/image";

const clients = [
  { name: "IMAT", logo: "/clients/imat.png" },
  { name: "Baker Hughes", logo: "/clients/baker-hughes.png" },
  { name: "Century Group", logo: "/clients/century-group.png" },
  { name: "Chevron", logo: "/clients/chevron.png" },
  { name: "Midwestern Oil & Gas", logo: "/clients/midwestern.png" },
  { name: "Nigeria LNG Limited", logo: "/clients/nlng.png" },
  { name: "Oando", logo: "/clients/oando.png" },
  { name: "Schlumberger", logo: "/clients/schlumberger.png" },
  { name: "Shelf Drilling", logo: "/clients/shelf-drilling.png" },
  { name: "Shell", logo: "/clients/shell.png" },
  { name: "Total", logo: "/clients/total.png" },
  { name: "Transocean", logo: "/clients/transocean.png" },
  { name: "Waltersm", logo: "/clients/waltersm.png" },
  { name: "WAV", logo: "/clients/wav.png" },
  { name: "Kreuz Subsea", logo: "/clients/kreuz.png" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">
            CLIENTS & PARTNERS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are proud to work with industry-leading companies in the oil and
            gas sector, providing exceptional services and maintaining long-term
            partnerships.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group relative bg-white p-4 rounded-lg border border-gray-100 
                hover:border-red-200 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="aspect-[4/3] relative flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
