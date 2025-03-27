/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    // { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#373435]/90 backdrop-blur-md border-b border-gray-800 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo2.svg"
                alt="Stanchions Logo"
                width={190}
                height={120}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-xs font-light tracking-wide transition-colors duration-300 
                  ${
                    scrolled
                      ? "text-gray-300 hover:text-red-500"
                      : "text-white hover:text-red-500 hover:border-b-red-500"
                  }
                  ${
                    pathname === item.href
                      ? scrolled
                        ? "text-red-500 font-bold border-b border-b-red-500"
                        : "text-red-500 font-bold border-b border-b-red-500"
                      : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className={`ml-4 px-4 py-2 text-xs font-light transition-all duration-300 border ${
                scrolled
                  ? "bg-transparent text-white hover:text-white hover:bg-red-600 border-red-600 hover:border-red-600"
                  : "bg-transparent text-white hover:text-white hover:bg-red-600 border-white hover:border-red-600"
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 z-50 ${
                isOpen
                  ? "text-white"
                  : scrolled
                  ? "text-white hover:text-red-500"
                  : "text-white hover:text-red-400"
              }`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-[#2a2728] z-40 flex flex-col">
          {/* Navigation Links Container */}
          <div className="flex-1 flex flex-col justify-center px-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-white text-2xl font-light py-4 transition-colors duration-300
                  ${
                    pathname === item.href
                      ? "text-red-500 font-normal pl-4 border-l-4 border-red-500"
                      : "hover:text-red-500 hover:pl-4"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-white text-2xl font-light py-4 transition-colors duration-300 hover:text-red-500 hover:pl-4"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>

          {/* Footer with Logo Divider */}
          <div className="relative mt-auto pb-8">
            <div className="absolute -top-16 left-0 w-full flex items-center justify-center">
              <div className="w-full border-t border-gray-700"></div>
              <div className="absolute bg-[#2a2728] px-4">
                <img
                  src="/logo2.svg"
                  alt="Stanchions Logo"
                  className="w-16 h-16 opacity-40"
                />
              </div>
            </div>
            <div className="text-center max-w-3xl mx-auto px-4 pt-8">
              <p className="text-gray-400 text-sm">
                Genesis Technical Company Limited
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
