'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 0,
      title: "Go For Gold",
      subtitle: "Powered By NST",
      description: "Unlocking India's Competitive Programming Potential",
      bgClass: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-white",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      secondButtonText: "Discord",
      secondButtonLink: "https://discord.gg/WpTxuYXm7d"
    },
    {
      id: 1,
      title: "IOI Bootcamp",
      subtitle: "School Student Program",
      description: "Cultivating India's Future Olympiad Champions",
      bgClass: "bg-gradient-to-br from-blue-50 via-blue-100 to-white",
      image: "/youth.png",
      buttonText: "Learn More",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
      path: "/ioi",
      duration: "May 24-June 5th"
    },
    {
      id: 2,
      title: "GFG Camp",
      subtitle: "College Student Program",
      description: "Building India's competitive programming elite",
      bgClass: "bg-gradient-to-br from-yellow-50 via-yellow-100 to-white",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      buttonText: "Explore",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      path: "/goforgold",
      duration: "Oct 2025"
    }
  ];

  // Auto-rotate slides every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  // Manual navigation functions
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div id="home" className={`pt-16 ${currentSlideData.bgClass} min-h-screen flex items-center transition-colors duration-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        {/* Slide content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6 flex flex-row gap-4">
              {currentSlideData.title} {currentSlide === 0 && <span className="text-yellow-500">Program</span>}
            </h1>
            <h4 className='ml-2 text-zinc-900/50 text-xl mt-[-17px] mb-4'>{currentSlideData.subtitle}</h4>
            <h3 className='text-3xl mb-3 font-medium'>{currentSlideData.description}</h3>

            <p className="text-lg text-gray-600 mb-8">
              {currentSlide === 0 ? (
                <>
                  India has some of the brightest minds in the world, yet our country is still
                  striving to reach the top in competitive programming at the ICPC (International
                  Collegiate Programming Contest).
                  <span className='text-lg text-gray-600 mb-8'>
                    This program aims to build a competitive ecosystem of top programmers from college and industry.
                  </span>
                </>
              ) : currentSlide === 1 ? (
                "The IOI Bootcamp Camp is an initiative to expand competitive programming training to talented school students across India, increasing the pool of IOI-ready students."
              ) : (
                "Join our collegiate training program designed to foster a culture of competitive programming excellence among college students, preparing Indian teams for ICPC."
              )}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {currentSlide === 0 ? (
                <button onClick={() => window.open(currentSlideData.secondButtonLink, '_blank')} className="group bg-blue-500 text-white px-8 py-4 border border-blue-700 rounded-full text-lg font-semibold hover:bg-blue-600 transition flex items-center">
                  {currentSlideData.secondButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <Link href={currentSlideData.path} passHref>
                  <button className={`group ${currentSlideData.buttonColor || "bg-yellow-500 hover:bg-yellow-600"} text-white px-8 py-4 rounded-full text-lg font-semibold transition flex items-center`}>
                    {currentSlideData.buttonText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              )}
            </div>
          </div>
          
          <div className="relative">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="rounded-2xl shadow-2xl h-[400px] w-full object-cover"
            />
            {(currentSlide === 1 || currentSlide === 2) && currentSlideData.duration && (
              <div className="absolute -bottom-8 -right-8 bg-white p-6 lg:block hidden rounded-xl shadow-lg">
                <p className={`text-2xl font-bold ${currentSlide === 1 ? "text-blue-500" : "text-yellow-500"}`}>
                  {currentSlideData.duration}
                </p>
                <p className="text-gray-600">2025</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`mx-2 w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-yellow-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Arrow navigation */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg hover:bg-white transition hidden lg:block"
          aria-label="Previous slide"
        >
          <ArrowRight className="h-6 w-6 rotate-180" />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-lg hover:bg-white transition hidden lg:block"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
} 