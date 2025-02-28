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
        "At Stanchions, we have the ability to construct, repair and deliver pipelines that transport oil, natural gas, petroleum products, slurry, water, and industrial gases for government and private customers. Our Pipeline Engineering Group have the resources to provide engineering and consulting services with focus in designing, building and repairing all aspects of oil & gas pipelines.",
      icon: PipelineIcon,
      imageSrc: "/static/imgs/pipeline-construction.jpg",
    },
    {
      title: "Mechanical & Electrical Installations",
      description:
        "We provide electrical and mechanical solutions for industrial and commercial clients in and around the country. At Stanchions, we pride ourselves on our adaptable and innovative approach which allows us to offer a wide range of solutions with our experienced and multi-skilled team of engineers.",
      icon: WrenchIcon,
      imageSrc: "/static/imgs/mechanical-electrical.jpg",
    },
    {
      title: "Location Preparation",
      description:
        "We prepare land and swamp sites for rig operations, ensuring that they are adequately ready to achieve the required results. At Stanchions, we comprehend that site preparation is key for a successful project execution that is why our dedicated team of engineers, environmentalists, archaeologists and other experts delivers nothing but the best.",
      icon: MapIcon,
      imageSrc: "/static/imgs/location-prep.jpg",
    },
    {
      title: "Road & Civil Construction",
      description:
        "With our industrial background and proven technical capacity, we contribute to the success of large-scale road project operations, making road projects simpler and more efficient. At Stanchions, we recognize that each road project is unique, that is why we keep innovating our approach with our world class team.",
      icon: RoadIcon,
      imageSrc: "/static/imgs/road-construction.jpg",
    },
    {
      title: "Procurement",
      description:
        "Our procurement strategy is based on experience and long-term relationships with in-depth understanding of both local and international markets. Our relationships with key suppliers allows us to provide the best materials and services on time and within budget limits. Stanchions procurement service expertise spans the entire global supply value chain.",
      icon: ShoppingCartIcon,
      imageSrc: "/static/imgs/procurement.jpg",
    },
    {
      title: "Logistics",
      description:
        "We own and operate our own vehicles, forklifts, cranes and other equipment which enables us to run a sophisticated logistics system to ensure that supplies and materials are adequately handled and delivered to their respective destinations using fit-for-purpose transportation medium.",
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
          Stanchions Nigeria Limited is a one-stop-shop engineering solutions
          provider for engineering, procurement and construction services. We
          command world class expertise in total program management, seamlessly
          integrating required solutions and services.
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
