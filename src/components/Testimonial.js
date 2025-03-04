import { useState } from "react";
import { FaQuoteRight, FaUserCircle } from "react-icons/fa";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    position: "Student, Room No. 105",
    text: "Maha Hostel provides a clean and peaceful environment. The staff is very helpful, and the facilities are well-maintained. Highly recommended!",
  },
  {
    id: 2,
    name: "Priya Patel",
    position: "Student, Room No. 208",
    text: "I love the spacious rooms and the quality of food provided. Security is top-notch, and the management is always responsive to our needs.",
  },
  {
    id: 3,
    name: "Amit Verma",
    position: "Student, Room No. 310",
    text: "The hostel has a great atmosphere for students. The WiFi speed is good, and the study rooms are quiet and well-lit.",
  },
  {
    id: 4,
    name: "Sanya Roy",
    position: "Student, Room No. 402",
    text: "The canteen food is hygienic, and the hostel warden is very cooperative. Overall, it’s a great place to stay for students.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0); // Track the start index of visible testimonials
  const totalTestimonials = testimonials.length;
  const visibleTestimonials = 2; // Show only 2 at a time

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials);
  };

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-18">TESTIMONIALS</h2>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials
            .slice(index, index + visibleTestimonials) // Show only the selected testimonials
            .concat(testimonials.slice(0, Math.max(0, index + visibleTestimonials - totalTestimonials))) // Handle wrap-around
            .map((testimonial) => (
              <div key={testimonial.id} className="relative bg-white p-6 shadow-lg rounded-lg max-w-md">
                {/* User Avatar */}
                <div className="absolute -top-10 left-6 text-gray-500">
                  <FaUserCircle className="w-16 h-16 rounded-full border-4 border-white shadow-lg" />
                </div>

                {/* Testimonial Content */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.position}</p>
                  <p className="text-gray-600 mt-3">{testimonial.text}</p>

                  {/* Quote Icon */}
                  <FaQuoteRight className="text-3xl text-orange-400 absolute bottom-4 right-6" />
                </div>
              </div>
            ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-6 mt-6">
          <button className="text-orange-400 text-[40px]" onClick={prevTestimonial}>
            <IoArrowBackOutline />
          </button>
          <button className="text-orange-400 text-[40px]" onClick={nextTestimonial}>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
