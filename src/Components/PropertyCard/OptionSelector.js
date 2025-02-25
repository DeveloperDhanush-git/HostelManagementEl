import React from 'react';

const OptionSelector = ({ options, selectedItems, setItems, toggleItem }) => {
  return (
    <div className="space-y-2 mt-2">
      {options.map((label) => (
        <label key={label} className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <img src="/assest/logo.png" alt={label} className="w-6 h-6" />
            <span>{label}</span>
          </div>
          <div
            className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center cursor-pointer ${
              selectedItems.includes(label) ? "bg-[#69205D] border-[#69205D]" : "border-gray-400"
            }`}
            onClick={() => toggleItem(label, selectedItems, setItems)}
          >
            {selectedItems.includes(label) && (
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            )}
          </div>
        </label>
      ))}
    </div>
  );
};

export default OptionSelector;