// SelectedRoomContext.js
import React, { createContext, useState } from 'react';

export const SelectedRoomContext = createContext();

export const SelectedRoomProvider = ({ children }) => {
  const [selectedRoom, setSelectedRoom] = useState({
    services: [],
    propertyFeatures: [],
    propertyFurnishings: [],
    propertyFurnishingsProperty: [],
    propertyPrimeFeatures: [],
    propertyHouseRules: [],
  });

  return (
    <SelectedRoomContext.Provider value={{ selectedRoom, setSelectedRoom }}>
      {children}
    </SelectedRoomContext.Provider>
  );
};
