import React from 'react';
import BasicDetails from './BasicDetails';
import AddressDetails from './AddressDetails';
import Button from './Button';

const Form = ({ nextButton }) => {
  return (
    <div className="p-4 flex-grow">
      <BasicDetails />
      <AddressDetails />
      <Button nextButton={nextButton} />
    </div>
  );
};

export default Form;