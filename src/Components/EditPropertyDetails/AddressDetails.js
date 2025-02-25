import React from 'react';

const AddressDetails = () => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Address</h3>
      <input
        type="text"
        placeholder="Pincode"
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        placeholder="City"
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        placeholder="State"
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        placeholder="House/Flat/Block"
        className="w-full p-2 border rounded-xl mb-4"
      />
      <input
        type="text"
        placeholder="Locality"
        className="w-full p-2 border rounded-xl mb-12"
      />
    </div>
  );
};

export default AddressDetails;