const NewFooterSection = () => {
    return (
      <div className="bg-[#1b2a4e] text-white py-10 px-15 bg-gradient-to-r from-[#69205D]  to-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
            
          
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>
            <p className="mb-3">Comfortable and affordable accommodation for students and working professionals.</p>
            <p className="flex items-center mb-3">
              📍 Maha Hostel, Coimbatore, ,Tamilnadu, India
            </p>
            <p className="flex items-center mb-3">
              📞 +91 9876543210
            </p>
            <p className="flex items-center ">
              ✉ contact@mahahostel.com
            </p>
          </div>
  
          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
            {/* Quick Links */}
          <nav className="">
            <ul className="space-x-10 md:space-x-10  space-y-2 text-m">
              {["Home", "About", "Services", "Amenities", "Booking"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-gray-400 transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          </div>
  
          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-80 px-4 py-2 rounded-md text-black bg-white"
            />
            <button className="mt-3 w-50 bg-green-500 text-white py-2 rounded-md flex justify-center items-center gap-2 mt-4">
              SUBSCRIBE <span>➡</span>
            </button>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default NewFooterSection;
  