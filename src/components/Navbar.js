import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold">MahaHostel</h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          <li>
            <a href="#home" className="hover:text-yellow-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-yellow-400">
              Services
            </a>
          </li>
          <li>
            <a href="#amenities" className="hover:text-yellow-400">
              Amenities
            </a>
          </li>
          <li>
            <a href="#booking" className="hover:text-yellow-400">
              Booking
            </a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Book a Room
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
