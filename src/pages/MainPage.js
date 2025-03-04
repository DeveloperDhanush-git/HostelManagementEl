import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services"; // Import the Services Component
import Amenities from "../components/Amenities";
import Testimonials from "../components/Testimonial";
import WhyMahaHostel from "../components/WhyMahaHostel";
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* About Us Section */}
      <section id="about" className="">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services" className="">
        <Services />
      </section>
      <section id="amenities" className="">
        <Amenities />
      </section>
      <Testimonials/>
      <WhyMahaHostel/>

      {/* Booking Section */}
      <section id="booking" className="h-screen bg-gray-300 flex items-center justify-center">
        <h2 className="text-4xl font-bold">Book Your Stay</h2>
      </section>
    </div>
  );
};

export default MainPage;
