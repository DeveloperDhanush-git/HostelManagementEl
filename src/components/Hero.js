import { useState, useEffect } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import hero4 from "../assets/hero4.jpg";
const images = [hero1, hero2, hero3, hero4]; // Array of image sources

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          <img
            src={images[currentIndex]}
            alt="Hostel View"
            className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl font-bold">
              Welcome to MahaHostel – A Smart & Secure Hostel Management Solution!
            </h1>
            <p className="mt-4 text-lg">
              Experience a seamless, technology-driven hostel booking and management system.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded-md">
              Book a Room
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
