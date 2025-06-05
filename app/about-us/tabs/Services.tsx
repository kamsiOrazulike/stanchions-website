import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WrenchIcon, MapIcon, ShoppingCartIcon, TruckIcon } from "lucide-react";

const PipelineIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 8h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3" />
    <path d="M21 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
  </svg>
);

const RoadIcon = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 4v16" />
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </svg>
);

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, imageSrc }) => {
  return (
    <div className="bg-[#373435] rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={imageSrc} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-red-600/10 p-2 rounded-full mr-3">
            <Icon className="w-6 h-6 text-red-600" />
          </div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ServicesContent = () => {
  const services = [
    {
      title: "Pipeline Construction",
      description:
        "Stanchions delivers comprehensive pipeline solutions for the transportation of oil, natural gas, petroleum products, water, and industrial gases serving both government and private sector clients. Our Pipeline Engineering Group provides specialized engineering and consulting services, focusing on the design, construction, and maintenance of all aspects of oil & gas pipeline infrastructure with uncompromising quality and safety standards.",
      icon: PipelineIcon,
      imageSrc: "/static/imgs/pipeline-construction.jpg",
    },
    {
      title: "Mechanical & Electrical Installations",
      description:
        "We provide comprehensive electrical and mechanical solutions for industrial and commercial clients nationwide. At Stanchions, we excel through our adaptable and innovative approach, delivering extensive engineering solutions through our experienced, multi-skilled team of certified engineers and technical specialists.",
      icon: WrenchIcon,
      imageSrc: "/static/imgs/mechanical-electrical.jpg",
    },
    {
      title: "Location Preparation",
      description:
        "We specialize in comprehensive site preparation for land and swamp locations, ensuring optimal readiness for rig operations and project success. At Stanchions, we understand that meticulous site preparation is fundamental to successful project execution. Our dedicated team of engineers, environmental specialists, archaeologists, and technical experts consistently delivers exceptional results that exceed industry standards.",
      icon: MapIcon,
      imageSrc: "/static/imgs/location-prep.jpg",
    },
    {
      title: "Road & Civil Construction",
      description:
        "Leveraging our extensive industrial experience and proven technical capabilities, we contribute to the success of large-scale road construction projects, making complex infrastructure development simpler and more efficient. At Stanchions, we recognize that each road project presents unique challenges, driving us to continuously innovate our methodologies with our world-class engineering team.",
      icon: RoadIcon,
      imageSrc: "/static/imgs/road-construction.jpg",
    },
    {
      title: "Procurement",
      description:
        "Our procurement strategy is built on extensive experience and strategic long-term partnerships, coupled with deep understanding of both local and international markets. Our established relationships with key suppliers enable us to source superior materials and services on time and within budget parameters. Stanchions' procurement expertise spans the entire global supply value chain, ensuring optimal outcomes for our clients.",
      icon: ShoppingCartIcon,
      imageSrc: "/static/imgs/procurement.jpg",
    },
    {
      title: "Logistics",
      description:
        "We own and operate a comprehensive fleet of vehicles, forklifts, cranes, and specialized equipment, enabling us to execute sophisticated logistics operations. This ensures that supplies and materials are professionally handled and delivered to their respective destinations using appropriate, fit-for-purpose transportation solutions that meet the highest industry standards.",
      icon: TruckIcon,
      imageSrc: "/static/imgs/logistics.jpg",
    },
  ];

  return (
    <div className="p-6 md:p-10 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">
          Our <span className="text-red-600">Services</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Stanchions Nigeria Limited is a comprehensive engineering solutions provider specializing in Engineering, Procurement and Construction (EPC) services. We leverage world-class expertise in total program management, seamlessly integrating innovative solutions and technical services to deliver exceptional project outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            imageSrc={service.imageSrc}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="inline-block border border-red-600 text-white px-8 py-3 hover:bg-red-600 hover:text-white transition-all duration-300 text-base"
        >
          Learn More About Our Services
        </Link>
      </div>
    </div>
  );
};

export default ServicesContent;
