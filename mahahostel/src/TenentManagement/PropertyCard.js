const PropertyCard = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-[#69205D] rounded-lg p-3 flex items-center gap-4 bg-white max-w-2xl">
        
        {/* Left Section - Hostel Name & Icon */}
        <div className="flex flex-col items-center w-32 mb-5">
          <h2 className="font-bold text-lg self-start mt-2 mb-1 ">Maha Hostel</h2>
          <div><img src="asst/building icon.png" alt="Hostel Icon" className="w-18 h-16 mr-6 mt-2" /></div>
        </div>
        
        
        {/* Right Section - Address */}
        <div className="bg-gray-100 p-3 rounded-md text-sm text-gray-700 w-64 mt-2 ">
          No. 03, ABC Road <br />
          ABC Street, <br />
          ABC Colony, <br />
          ABC City, ABC State, <br />
          6xxxx6
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;