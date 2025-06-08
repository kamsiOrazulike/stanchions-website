/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Service {
  name: string;
  link?: string;
  description: string;
  imageSrc?: string;
  isNew?: boolean;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="rounded-xl overflow-hidden flex flex-col bg-[#373435] border border-white/20 transition-all duration-300 shadow-lg h-full">
    <div className="relative h-64 w-full bg-gray-800">
      <img
        src={service.imageSrc || "/static/stock_imgs/4.png"}
        alt={service.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      {service.isNew && (
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
          NEW
        </div>
      )}
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
        <p className="text-sm text-gray-300 leading-relaxed">
          {service.description}
        </p>
      </div>

      <div className="mt-auto">
        <a
          href={`/services/${
            service.link || service.name.toLowerCase().replace(/[&\s]+/g, "-")
          }`}
          className="inline-block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = services.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="w-full">
      <div className="relative mx-auto max-w-lg px-4 md:px-0">
        {/* Carousel container */}
        <div
          ref={carouselRef}
          className="overflow-hidden rounded-xl"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              height: isMobile ? "auto" : "550px",
            }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 px-0">
                <div className="h-full">
                  <ServiceCard service={service} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-red-600"
                  : "w-2 h-2 bg-gray-700 hover:bg-red-800"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
