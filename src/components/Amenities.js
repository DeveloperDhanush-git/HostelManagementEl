import {
  FaBuilding,
  FaTree,
  FaCar,
  FaShieldAlt,
  FaBasketballBall,
  FaDumbbell,
  FaTableTennis,
  FaGlassCheers,
} from "react-icons/fa";
import bgimage from "../assets/hero1.jpg";

const amenitiesData = [
  { id: 1, title: "Multipurpose Hall", icon: <FaBuilding /> },
  { id: 2, title: "Garden", icon: <FaTree /> },
  { id: 3, title: "Car Parking", icon: <FaCar /> },
  { id: 4, title: "24/7 Security", icon: <FaShieldAlt /> },
  { id: 5, title: "Basket Ball Court", icon: <FaBasketballBall /> },
  { id: 6, title: "Gymnastic", icon: <FaDumbbell /> },
  { id: 7, title: "Badminton Court", icon: <FaTableTennis /> },
  { id: 8, title: "Club House", icon: <FaGlassCheers /> },
];

const Amenities = () => {
  return (
    <section
      className="relative text-white py-16"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Dark overlay for opacity effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust opacity (0.6 for 60% darkness)
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">AMENITIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 m-5">
          {amenitiesData.map((amenity) => (
            <div key={amenity.id} className="flex flex-col items-center">
              <div className="text-5xl mb-3">{amenity.icon}</div>
              <p className="text-lg font-bold">{amenity.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
