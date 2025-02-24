import logo from './logo.svg';
import './App.css';
import EditPropertyDetails from './Components/EditPropertyDetails';
import React from 'react';
import HostelDetails from './Components/HostelDetails/HostelDetails';
import PropertyCard from './Components/PropertyCard';

function App() {
  return (
    <div className="App">
      <HostelDetails />
      <PropertyCard />
      <EditPropertyDetails/>
    </div>
  );
}

export default App;
