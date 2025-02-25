import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HostelDetails from './Components/HostelDetails/HostelDetails';
import EditPropertyDetails from './Components/EditPropertyDetails/EditPropertyDetails';
import PropertyCard from './Components/PropertyCard/PropertyCard';
import { SelectedRoomProvider } from './Components/SelectedRoomContext';

function App() {
  return (
    <SelectedRoomProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HostelDetails />} />
          <Route path="/property-card" element={<PropertyCard />} />
          <Route path="/edit-property" element={<EditPropertyDetails />} />
        </Routes>
      </Router>
    </SelectedRoomProvider>

  );
}

export default App;
