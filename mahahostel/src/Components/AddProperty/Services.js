// src/Services.js
import React from 'react';

function Services() {
  const services = ['WIFI', 'Laundry', 'Housekeeping', 'Food', 'Electricity'];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Services includes in rent</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700">Select all</button>
      </div>
      {services.map((service, index) => (
        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full w-10 h-10 mr-3 flex items-center justify-center">
              {/* Placeholder for Service Icon */}
            </div>
            <span className="text-gray-700">{service}</span>
          </div>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>
      ))}
    </div>
  );
}

export default Services;