export interface Project {
  id: number;
  title: string;
  category:
    | "pipeline"
    | "mechanical"
    | "location"
    | "civil"
    | "procurement"
    | "logistics";
  location: string;
  date: string;
  image: string;
  client: string;
  description: string;
  achievements: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Offshore Pipeline Installation",
    category: "pipeline",
    location: "Offshore Niger Delta",
    date: "2023",
    image: "/static/projects/pipeline1.jpg",
    client: "Shell",
    description:
      "Installation of 32km subsea pipeline for oil & gas transportation with advanced corrosion protection systems.",
    achievements: [
      "Zero safety incidents throughout the project",
      "Completed 15 days ahead of schedule",
      "Implemented innovative welding techniques",
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Electrical Systems Upgrade",
    category: "mechanical",
    location: "Lagos Industrial Zone",
    date: "2022",
    image: "/static/projects/electrical1.jpg",
    client: "Total",
    description:
      "Complete overhaul and modernization of electrical systems for a major production facility.",
    achievements: [
      "Reduced power consumption by 22%",
      "Enhanced safety controls and monitoring",
      "Minimal disruption to operations during installation",
    ],
    featured: true,
  },
  {
    id: 3,
    title: "Drilling Site Preparation",
    category: "location",
    location: "Bayelsa State",
    date: "2023",
    image: "/static/projects/location1.jpg",
    client: "Chevron",
    description:
      "Comprehensive site preparation including land clearing, access road construction, and drainage systems for new drilling operations.",
    achievements: [
      "Environmental compliance certification achieved",
      "Community engagement program implemented",
      "Completed during challenging weather conditions",
    ],
    featured: true,
  },
  {
    id: 4,
    title: "Highway Infrastructure Development",
    category: "civil",
    location: "Port Harcourt",
    date: "2021",
    image: "/static/projects/road1.jpg",
    client: "Government Agency",
    description:
      "Construction of 45km of highway with bridges, drainage systems, and related infrastructure.",
    achievements: [
      "Used innovative materials for increased durability",
      "Employed local workforce throughout construction",
      "Implemented advanced erosion control measures",
    ],
    featured: false,
  },
  {
    id: 5,
    title: "Equipment Procurement Program",
    category: "procurement",
    location: "Multiple Sites",
    date: "2022",
    image: "/static/projects/procurement1.jpg",
    client: "Nigeria LNG",
    description:
      "Strategic procurement of specialized equipment for major LNG facility expansion.",
    achievements: [
      "Negotiated favorable terms saving 12% on budget",
      "All equipment delivered on schedule",
      "Established new vendor qualification process",
    ],
    featured: false,
  },
  {
    id: 6,
    title: "Oil Field Logistics Solution",
    category: "logistics",
    location: "Delta State",
    date: "2023",
    image: "/static/projects/logistics1.jpg",
    client: "ExxonMobil",
    description:
      "Comprehensive logistics solution for remote oil field operations including personnel, equipment, and materials.",
    achievements: [
      "Improved delivery times by 35%",
      "Enhanced tracking and inventory management",
      "Zero lost-time incidents during implementation",
    ],
    featured: false,
  },
  {
    id: 7,
    title: "Gas Distribution Network",
    category: "pipeline",
    location: "Abuja Region",
    date: "2021",
    image: "/static/projects/pipeline2.jpg",
    client: "Gas Authority",
    description:
      "Construction of urban gas distribution network with 85km of pipelines and related infrastructure.",
    achievements: [
      "Advanced leak detection systems installed",
      "Minimal disruption to urban activities",
      "Met all safety and regulatory requirements",
    ],
    featured: false,
  },
  {
    id: 8,
    title: "Industrial Facility Mechanical Systems",
    category: "mechanical",
    location: "Kano",
    date: "2022",
    image: "/static/projects/mechanical2.jpg",
    client: "Manufacturing Company",
    description:
      "Design and installation of comprehensive mechanical systems for a new manufacturing facility.",
    achievements: [
      "Energy-efficient design reduced operational costs",
      "Integrated digital monitoring and control systems",
      "Successfully completed pressure and performance testing",
    ],
    featured: false,
  },
  {
    id: 9,
    title: "Swamp Drilling Location Preparation",
    category: "location",
    location: "Niger Delta",
    date: "2022",
    image: "/static/projects/location2.jpg",
    client: "Indigenous Oil Company",
    description:
      "Specialized swamp location preparation for drilling operations in environmentally sensitive area.",
    achievements: [
      "Implemented innovative environmental protection measures",
      "Developed custom equipment for minimal impact",
      "Received environmental excellence recognition",
    ],
    featured: false,
  },
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
};

export const getProjectById = (id: number): Project | undefined => {
  return projects.find((project) => project.id === id);
};
