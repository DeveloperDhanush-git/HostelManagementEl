import React from 'react';
import Header from './Header';
import Form from './Form'; // Corrected import path

const EditPropertyDetails = ({ buttonName = "Edit Property", nextButton = "Update Properties" }) => {
  return (
    <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg mt-1 font-[Montserrat]" style={{ fontFamily: 'Montserrat' }}>
      <Header buttonName={buttonName} />
      <Form nextButton={nextButton} />
    </div>
  );
};

export default EditPropertyDetails;

