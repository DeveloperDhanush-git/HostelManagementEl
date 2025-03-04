import { useState, useEffect } from "react";
import logo from "../assets/logo-removebg-preview 1 (2).png"; // Adjust the path if needed

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling with an offset to show some content above the section
  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      const offset = 100; // Adjust this value to control how much of the previous section remains visible
      const targetPosition =
        targetSection.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-white to-gray-500"
          : "bg-gradient-to-r from-white to-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="MahaHostel Logo" className="h-15 w-70" />

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-[#69205D] font-semibold text-[18px]">
          {["Home", "About", "Services", "Amenities", "Booking"].map((item) => (
            <li key={item} className="relative group">
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavigation(e, item.toLowerCase())}
                className="hover:text-[#69205D] transition-colors cursor-pointer"
              >
                {item}
              </a>
              {/* Underline Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#69205D] mt-1 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="space-x-4">
          <button className="bg-[#69205D] text-white px-6 py-2 rounded-md">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
