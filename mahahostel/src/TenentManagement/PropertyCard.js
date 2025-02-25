const PropertyCard = () => {

  return (
    <div className="flex justify-center items-center h-full"> 
      <div className="border-2 border-[#69205D] rounded-md p-2 flex items-center gap-4 shadow-md bg-white max-w-md flex-shrink-0 mt-4">
        {/* Left Section - Hostel Name & Logo */}
        <div className="flex flex-col items-center w-20">
          <h2 className="font-bold whitespace-nowrap mb-5 ml-11">Maha Hostel</h2>
          <img src="asst/building icon.png" alt="Hostel Icon" className="ml-4" />
        </div>

           {/* Right Section - Address */}
           <div className="bg-[#F7F7F7] p-2 rounded-md text-sm text-gray-600 w-60 mt-5 ml-9">
        No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,\n6xxxx6
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
