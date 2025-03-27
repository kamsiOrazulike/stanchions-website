/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true);
      });

      return () => {
        videoElement.removeEventListener("loadeddata", () => {
          setIsVideoLoaded(true);
        });
      };
    }
  }, []);

  const dotPatternStyle = {
    backgroundImage: `
      radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px),
      radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px, 30px 30px",
    backgroundPosition: "0 0, 10px 10px",
  };

  return (
    <div className="relative h-[88vh] md:h-[96vh] w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/video-poster.jpg" // Optional: Add a poster image
        >
          <source src="/media/background_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />

        {/* Optional dot pattern overlay */}
        <div className="absolute inset-0 z-10" style={dotPatternStyle} />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20">
        <div className="container mx-auto h-full flex items-end pb-32">
          <div className="w-full px-8 md:w-1/2 text-left pr-8 md:pr-16 flex flex-col items-start">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 text-white tracking-wide">
              Pipeline Construction
            </h1>
            <p className="text-sm md:text-md lg:text-lg text-white/90 mb-8">
              Expertise in construction, repair, and delivery of pipelines for
              oil, gas, and industrial applications.
            </p>
            <Link
              href="/services"
              className="inline-block border border-red-600 text-white px-8 py-3 hover:bg-red-600 hover:text-white transition-all duration-300 text-base"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
