import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services"; // Import the Services Component
import Amenities from "../components/Amenities";
import Testimonials from "../components/Testimonial";
import WhyMahaHostel from "../components/WhyMahaHostel";
import BookingSection from "../components/BookingSection";
import Footer from "../components/Footer"
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
      <BookingSection/>
      <Footer/>
    </div>
  );
};

export default MainPage;
