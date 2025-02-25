import React from 'react';

const Button = ({ nextButton }) => {
  return (
    <div>
      <button className="bg-[#69205D] text-white py-2 mt-3 rounded-md w-full text-sm md:text-base">
        {nextButton}
      </button>
    </div>
  );
};

export default Button;