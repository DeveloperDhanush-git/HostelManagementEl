// src/HostelInfo.js
import React from 'react';

function HostelInfo() {
  return (
    <div className="bg-purple-50 rounded-lg p-6 mb-6">
      <div className="flex items-start mb-4">
        <div className="bg-purple-200 rounded-full w-12 h-12 mr-4 flex items-center justify-center">
          {/* Placeholder for Hostel Icon */}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Maha Hostel</h2>
          <p className="text-sm text-gray-600">No. 03, ABC Road</p>
          <p className="text-sm text-gray-600">ABC Street, ABC Colony</p>
          <p className="text-sm text-gray-600">ABC City, ABC State, 6xxxxx</p>
        </div>
      </div>
      <p className="text-gray-700">Select those options which apply or are allowed.</p>
    </div>
  );
}

export default HostelInfo;