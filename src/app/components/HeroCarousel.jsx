'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import Image from 'next/image';

const slides = [
  {
    id: 0,
    title: 'Go For Gold',
    subtitle: 'Powered By NST',
    description: "Unlocking India's Competitive Programming Potential",
    bgClass: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-white',
    image: '/gfg-hero.png',
    buttonText: 'Join Discord',
    buttonLink: 'https://discord.gg/WpTxuYXm7d',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 1,
    title: 'IOI Bootcamp',
    subtitle: 'School Student Program',
    description: "Cultivating India's Future Olympiad Champions",
    bgClass: 'bg-gradient-to-br from-blue-50 via-blue-100 to-white',
    image: '/image.png',
    buttonText: 'Learn More',
    buttonLink: '/ioi',
    buttonColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 2,
    title: 'GFG Camp',
    subtitle: 'College Student Program',
    description: "Building India's competitive programming elite",
    bgClass: 'bg-gradient-to-br from-yellow-50 via-yellow-100 to-white',
    image: '/gfg-carou.avif',
    buttonText: 'Explore',
    buttonLink: '/goforgold',
    buttonColor: 'bg-yellow-500 hover:bg-yellow-600',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideInterval = 5000;
  const intervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const lastProgressRef = useRef(0);

  const resetTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      clearTimeout(intervalRef.current);
      intervalRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  const startProgressBar = (initialValue = 0) => {
    setProgress(initialValue);
    const remainingTime = slideInterval * (1 - initialValue / 100);
    
    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (remainingTime / 50)); // Update every 50ms
        lastProgressRef.current = newProgress > 100 ? 100 : newProgress;
        return lastProgressRef.current;
      });
    }, 50);
  };

  const startSlideTimer = (initialProgress = 0) => {
    // Calculate remaining time for current slide
    const remainingTime = slideInterval * (1 - initialProgress / 100);
    
    intervalRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setProgress(0);
      lastProgressRef.current = 0; // Reset stored progress when slide changes automatically
      
      // Setup new timers for next slides
      resetTimers();
      if (isPlaying) {
        startProgressBar(0);
        
        // Start a regular interval for subsequent slides
        intervalRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
          setProgress(0);
          lastProgressRef.current = 0; // Reset stored progress
          
          // Reset and restart timers for the next slide
          resetTimers();
          if (isPlaying) {
            startProgressBar(0);
            startSlideTimer(0);
          }
        }, slideInterval);
      }
    }, remainingTime);
  };

  // Effect to manage the timers when play/pause state changes
  useEffect(() => {
    resetTimers(); // Clear any existing timers first
    
    if (isPlaying) {
      startProgressBar(lastProgressRef.current);
      startSlideTimer(lastProgressRef.current);
    } else {
      // When paused, store the current progress
      lastProgressRef.current = progress;
    }
    
    return () => resetTimers();
  }, [isPlaying]);

  // Effect to reset and restart timers when slide changes manually
  useEffect(() => {
    // This effect will handle cleanup and restart only for manual slide changes
    // It won't run on the initial render because we don't want to interrupt the normal flow
    return () => {
      // This only needs cleanup, as the manual navigation will set up new timers
    };
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
    lastProgressRef.current = 0; // Reset stored progress on manual navigation
    resetTimers();
    
    if (isPlaying) {
      startProgressBar(0);
      startSlideTimer(0);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={`relative w-full min-h-screen h-full overflow-hidden ${slides[currentSlide].bgClass} transition-colors duration-700`}>
      {/* Animated Background Elements - decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-0 md:left-20 w-40 md:w-96 h-40 md:h-96 rounded-full bg-yellow-400 blur-3xl"></div>
        <div className="absolute bottom-20 md:bottom-40 right-0 md:right-20 w-40 md:w-96 h-40 md:h-96 rounded-full bg-blue-400 blur-3xl"></div>
      </div>
      
      {/* Slides Container with Animation */}
      <div className="relative w-full min-h-screen flex items-center">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 py-16 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 -z-10'
            }`}
          >
            {/* Slide Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center md:text-left flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 w-full">
              <div className="w-full md:w-1/2 lg:w-5/12 space-y-4 md:space-y-6 lg:space-y-8 transform transition-transform duration-700 mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
                  {slide.title} <span className="text-yellow-500">Program</span>
                </h1>
                <h3 className="text-lg md:text-xl lg:text-2xl text-gray-700">{slide.subtitle}</h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">{slide.description}</p>
                <Link href={slide.buttonLink} passHref>
                  <button 
                    className={`px-5 sm:px-6 py-3 sm:py-4 text-white text-lg font-semibold rounded-full flex items-center gap-2 transition transform hover:scale-105 shadow-lg ${slide.buttonColor} mx-auto md:mx-0`}
                  >
                    {slide.buttonText} <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-1/2 lg:w-6/12 flex justify-center md:justify-end transform transition-transform duration-700">
                <div className="relative w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
                  <div className="absolute -inset-3 sm:-inset-4 md:-inset-6 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-xl sm:rounded-2xl blur-md opacity-30"></div>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={1000}
                    height={600}
                    className="rounded-xl sm:rounded-2xl shadow-xl object-cover relative z-10 transform transition-transform hover:scale-102 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Responsive with larger desktop size */}
      <button
        onClick={() => {
          goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
        }}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:bg-white transition backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gray-700" />
      </button>
      <button
        onClick={() => {
          goToSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
        }}
        className="absolute right-2 sm:right-4 md:right-6 lg:right-10 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 md:p-4 rounded-full shadow-md hover:bg-white transition backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 md:h-8 md:w-8 text-gray-700" />
      </button>

      {/* Play/Pause Button - Larger on desktop */}
      <button
        onClick={togglePlayPause}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-16 sm:bottom-20 md:bottom-24 bg-white/80 p-1.5 sm:p-2 md:p-3 rounded-full shadow-md hover:bg-white transition backdrop-blur-sm z-20"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
        ) : (
          <Play className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-700" />
        )}
      </button>

      {/* Progress Bar and Navigation Dots - Larger on desktop */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 w-48 sm:w-64 md:w-80 z-20">
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5 md:h-2 overflow-hidden shadow-inner">
          <div 
            className="bg-yellow-500 h-full transition-all duration-300 ease-linear shadow"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Navigation Dots */}
        <div className="flex gap-2 sm:gap-3 md:gap-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition transform ${
                currentSlide === index 
                  ? 'bg-yellow-500 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}