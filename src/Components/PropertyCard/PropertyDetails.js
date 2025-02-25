import React from 'react';

const PropertyDetails = () => {
  return (
    <div className="flex justify-center items-center h-full my-6">
      <div className="border-2 border-[#69205D] rounded-md p-4 flex items-center gap-4 shadow-md bg-white max-w-md flex-shrink-0">
        <div className="flex flex-col items-center w-20">
          <h2 className="font-bold text-md text-center whitespace-nowrap">Maha Hostel</h2>
          <img src="/assest/building.png" alt="Hostel Icon" className="w-14 h-14" />
        </div>
        <div className="bg-[#F7F7F7] p-2 rounded-md text-sm text-gray-600 w-60">
          No. 03, ABC Road, ABC Street, ABC Colony, ABC City, ABC State,
          <br />6xxxx6
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;