import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Hero = () => {

   const navigate = useNavigate()

  // Sample event images - replace with your actual images
  const images = [
    assets.image1,
    assets.image2,
    assets.image3,
    assets.image4,
    assets.image5,
    assets.image6,
    assets.image7,
    assets.image9,
    assets.image10,
    assets.image11
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);


  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    
     

    return () => clearInterval(interval);
  }, [images.length]);

  // Animation on mount
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>


      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20  bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform cursor-pointer" />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform cursor-pointer" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`text-center px-6 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-none">
              Seamless Event Booking,
            </span>
            <span className="block mt-2 ">Anytime.</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white text-opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Your trusted partner in unforgettable events.
          </p>
          
          {/*  Explore Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={()=> navigate('/concerts')} className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg min-w-48 cursor-pointer">
              Explore Events
            </button>
          </div>
        </div>
      </div>

      {/* Animated sparkles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `twinkle 3s infinite`
            }}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Hero;