import { FaCheckCircle } from "react-icons/fa";

const features = [
  "Smart & Automated System",
  "Secure & Reliable",
  "Hassle-Free Room Booking",
  "24/7 Support & Assistance",
  "Digitalized Complaint Management",
  "Biometric Entry System",
  "High-Speed WiFi Access",
  "Daily Cleaning Services",
  "Nutritious & Hygienic Food",
  "Peaceful Study Environment",
  "Recreational & Sports Facilities",
  "Online Payment & Billing",
];

// Keyframe styles (inline for no Tailwind config)
const scrollStyleLeft = {
  display: "flex",
  gap: "1.5rem",
  minWidth: "100%",
  animation: "scrollLeft 15s linear infinite",
};

const scrollStyleRight = {
  display: "flex",
  gap: "1.5rem",
  minWidth: "100%",
  animation: "scrollRight 15s linear infinite",
};

// Add CSS keyframes
const styles = `
  @keyframes scrollLeft {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(0%); }
  }
`;

const WhyMahaHostel = () => {
  return (
    <section className="w-full py-12 bg-white overflow-hidden">
      <style>{styles}</style> {/* Inject keyframes directly */}
      <div className=" mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Why MahaHostel?</h2>

        <div className="space-y-6">
          {/* Row 1 - Moves Right to Left */}
          <div className="w-full overflow-hidden">
            <div style={scrollStyleLeft}>
              {features.concat(features).map((feature, index) => (
                <div key={index} className="flex items-center bg-gray-100 rounded-lg p-4 shadow-md min-w-[280px]">
                  <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Moves Left to Right */}
          <div className="w-full overflow-hidden">
            <div style={scrollStyleRight}>
              {features.concat(features).map((feature, index) => (
                <div key={index} className="flex items-center bg-gray-100 rounded-lg p-4 shadow-md min-w-[280px]">
                  <FaCheckCircle className="text-green-500 text-2xl mr-3" />
                  <span className="text-lg text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyMahaHostel;
