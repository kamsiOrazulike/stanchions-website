import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Projects", href: "/projects" },
    // { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Pipeline Construction", href: "/services#pipeline" },
    { name: "Mechanical & Electrical", href: "/services#mechanical" },
    { name: "Location Preparation", href: "/services#location" },
    { name: "Road & Civil Construction", href: "/services#civil" },
    { name: "Procurement", href: "/services#procurement" },
    { name: "Logistics", href: "/services#logistics" },
  ];

  return (
    <footer className="bg-[#2a2728] text-xs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info & Logo */}
            <div>
              <div className="mb-6">
                <Image
                  src="/logo2.svg"
                  alt="Stanchions Logo"
                  width={150}
                  height={50}
                  className="mb-4"
                  draggable="false"
                />
                <p className="text-gray-300 text-sm">
                  Providing World Class Engineering & Support Services in the
                  Oil and Gas sector of Nigeria since 1997.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-red-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                OUR SERVICES
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-red-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">
                CONTACT US
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div className="text-gray-300">
                    <p>Plot 262, Sapara Williams Close,</p>
                    <p>Off Idowu Martins, Victoria Island,</p>
                    <p>Lagos | Nigeria</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  <a
                    href="tel:+2348183580925"
                    className="text-gray-300 hover:text-red-600 transition-colors"
                  >
                    +234 (0) 8183580925
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-red-600" />
                  <a
                    href="mailto:info@stanchionsng.com"
                    className="text-gray-300 hover:text-red-600 transition-colors"
                  >
                    info@stanchionsng.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="py-6">
          <p className="text-center font-light text-gray-400 text-xs">
            Copyright © {currentYear} Stanchions | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
