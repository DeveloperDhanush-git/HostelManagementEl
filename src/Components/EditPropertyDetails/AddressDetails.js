import React, { useState } from "react";

const AddressDetails = () => {
  const [address, setAddress] = useState({
    pincode: "CRIB005679",
    city: "Coimbatore",
    state: "Tamil Nadu",
    house: "Maha Hostel",
    locality: "Gandhipuram",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Address</h3>
      <input
        type="text"
        name="pincode"
        value={address.pincode}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4 "
      />
      <input
        type="text"
        name="city"
        value={address.city}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        name="state"
        value={address.state}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        name="house"
        placeholder="House/Flat/Block"
        value={address.house}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        name="locality"
        placeholder="Locality"
        value={address.locality}
        onChange={handleChange}
        className="w-full p-2 border rounded-xl mb-12"
      />
    </div>
  );
};

export default AddressDetails;
