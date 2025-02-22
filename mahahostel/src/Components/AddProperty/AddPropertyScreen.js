// src/AddPropertyScreen.js
import React from 'react';
import Header from './Header';
import HostelInfo from './HostelInfo';
import Services from './Services';
import Features from './Features';

function AddPropertyScreen() {
  return (
    <div className="p-4 max-w-4xl mx-auto p-6 font-[Montserrat] bg-white rounded-lg mt-1">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-screen-md w-full mx-4">
        <Header />
        <HostelInfo />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Services />
          <Features />
        </div>
      </div>
    </div>
  );
}

export default AddPropertyScreen;