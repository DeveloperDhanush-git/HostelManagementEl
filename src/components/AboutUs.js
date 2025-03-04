import hero1 from "../assets/hero1.jpg";
import icon1 from "../assets/icon-1.svg";
import icon2 from "../assets/icon-2.svg";

const AboutUs = () => {
  return (
    <section className="flex flex-wrap justify-center items-center px-10 py-16 bg-white">
      {/* Image Section */}
      <div className="relative w-1/2 p-10">
        <img
          src={hero1}
          alt="Modern Hostel Building"
          className="relative z-10 w-full h-100"
        />
      </div>

      {/* Content Section */}
      <div className="w-1/2 px-8">
        <h2 className="text-4xl font-bold text-gray-900">About MahaHostel</h2>
        <p className="mt-4 text-gray-600">
          MahaHostel is a modern and technology-driven hostel management system designed to provide
          a comfortable, secure, and efficient living experience. Our goal is to make hostel stays
          seamless, hassle-free, and enjoyable for students and professionals.
        </p>

        <p className="mt-4 text-gray-600">
          We provide well-furnished rooms,high-speed internet, 24/7 security surveillance, and 
          smart booking systems to ensure convenience and safety for our residents. With a focus on 
          technology-driven management, we redefine hostel living.
        </p>

        {/* Statistics Section */}
        <div className="flex gap-10 mt-8">
          <div className="flex items-center space-x-2">
            <img src={icon1} alt="Project Area" className="w-10 h-10" />
            <div>
              <p className="text-2xl font-bold text-gray-900">46,000 sq. ft.</p>
              <p className="text-gray-600">Spacious Campus</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <img src={icon2} alt="Bed Rooms" className="w-10 h-10" />
            <div>
              <p className="text-2xl font-bold text-gray-900">2 or 3</p>
              <p className="text-gray-600">Bed Options Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
