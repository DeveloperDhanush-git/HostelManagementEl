import service1 from "../assets/online1.jpg"; // Replace with actual images
import service2 from "../assets/attendance2.jpg";
import service3 from "../assets/food.jpg";
import service4 from "../assets/complaints.jpg";
import service5 from "../assets/visitors.jpg";

const services = [
  {
    id: 1,
    title: "Online Room Booking",
    description: "Apply for hostel rooms and track allocations easily.",
    image: service1,
  },
  {
    id: 2,
    title: "Digital Attendance System",
    description: "Biometric or QR-based attendance for security.",
    image: service2,
  },
  {
    id: 3,
    title: "Mess & Food Management",
    description: "View meal plans, menus, and timings.",
    image: service3,
  },
  {
    id: 4,
    title: "Complaint & Maintenance",
    description: "Report and track maintenance requests online.",
    image: service4,
  },
  {
    id: 5,
    title: "Visitor Management",
    description: "Digital visitor logs for enhanced security.",
    image: service5,
  },
  {
    id: 6,
    title: "Gym",
    description: "Fitness and wellness for better health",
    image: service2,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className=" mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 pl-10 pr-10">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 shadow-lg overflow-hidden">
              <div className="w-full h-50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
