import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HostelDetails from './Components/HostelDetails/HostelDetails';
import EditPropertyDetails from './Components/EditPropertyDetails';
import PropertyCard from './Components/PropertyCard/PropertyCard';
import { SelectedRoomProvider } from './Components/SelectedRoomContext';
import PropertyyCard from "./Components/PropertyyCard";
import MyComponent from "./Components/MyComponent"; // Your property detail page
import { useNavigate } from "react-router-dom";



function App() {
  return (
    
    <SelectedRoomProvider>
      {/* <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}></div> */}
      {/* <div className=" bg-white min-h-screen rounded-lg  flex flex-col"></div> */}
      <Router>
        <Routes>
        <Route path="/" element={<PropertyyCard />} />

        <Route path="/property/:id" element={<MyComponent />} /> {/* Dynamic Route */}
        <Route path="/hostel-details" element={<HostelDetails />} />          <Route path="/property-card" element={<PropertyCard />} />
          <Route path="/edit-property" element={<EditPropertyDetails />} />
        </Routes>
      </Router>
    </SelectedRoomProvider>

  );
}

export default App;
