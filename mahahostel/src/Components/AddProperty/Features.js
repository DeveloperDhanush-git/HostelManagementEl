// src/Features.js
import React from 'react';

function Features() {
  const features = ['Guard', 'Biometric Enabled Entry', 'CCTV Camera', 'Lift', 'Parking', 'Power Backup'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Property Features</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">Select all</button>
      </div>
      {features.map((feature, index) => (
        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full w-10 h-10 mr-3 flex items-center justify-center">
              {/* Placeholder for Feature Icon */}
            </div>
            <span className="text-gray-700">{feature}</span>
          </div>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
      ))}
    </div>
  );
}

export default Features;