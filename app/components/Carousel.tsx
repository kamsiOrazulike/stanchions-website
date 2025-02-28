/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Service {
  name: string;
  link?: string;
  description: string;
  imageSrc?: string;
}

const ServiceCard = ({ service }: { service: Service }) => (
  <div className="rounded-xl overflow-hidden flex flex-col h-[500px] md:h-[550px] bg-white border border-black/10 transition-colors duration-300 hover:bg-red-600 group">
    <div className="relative h-64 md:h-72 w-full bg-gray-100">
      <img
        src={service.imageSrc || "/static/stock_imgs/4.png"}
        alt={service.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4 md:p-8 flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-md md:text-lg font-bold mb-2 md:mb-4 text-gray-900 group-hover:text-white">
          {service.name}
        </h3>
        <p className="text-sm md:text-md mb-4 md:mb-6 text-gray-600 group-hover:text-gray-100">
          {service.description}
        </p>
      </div>
      <a
        href={`/expertise/${service.link}`}
        className="text-red-600 border-red-600 group-hover:text-white group-hover:border-white border-b-2 pb-1 transition-all duration-300 inline-block w-fit text-sm md:text-md"
      >
        Learn More
      </a>
    </div>
  </div>
);

interface ServiceCarouselProps {
  services: Service[];
}

const ServiceCarousel = ({ services }: ServiceCarouselProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const cardsPerSlide = isMobile ? 1 : 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [cardsPerSlide]);

  useEffect(() => {
    if (!isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 7000);

      return () => clearInterval(timer);
    }
  }, [totalSlides, isDragging]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;

    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 5) {
      e.preventDefault();
    }

    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const diff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && currentIndex < totalSlides - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <div className="relative w-full pb-16">
      <div
        className="overflow-hidden"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex w-full flex-shrink-0">
              {services
                .slice(
                  slideIndex * cardsPerSlide,
                  (slideIndex + 1) * cardsPerSlide
                )
                .map((service) => (
                  <div
                    key={service.name}
                    className={`flex-shrink-0 px-4 md:px-6 ${
                      isMobile ? "w-full" : "w-1/2"
                    }`}
                  >
                    <ServiceCard service={service} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-8 h-2 bg-red-600"
                : "w-2 h-2 bg-gray-300 hover:bg-red-400"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
