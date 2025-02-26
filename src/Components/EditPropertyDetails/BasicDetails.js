import React from 'react';

const BasicDetails = () => {
  return (
    <div className="mb-4 ml-7">
      <h3 className="text-lg font-semibold mb-2">Basic Details</h3>
      <input
        type="text"
        placeholder="Property Name"
        className="w-full p-2 border rounded-xl mb-3"
      />
    </div>
  );
};

export default BasicDetails;