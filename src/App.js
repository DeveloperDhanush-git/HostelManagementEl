import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HostelDetails from './Components/HostelDetails/HostelDetails';
import EditPropertyDetails from './Components/EditPropertyDetails/EditPropertyDetails';
import PropertyCard from './Components/PropertyCard/PropertyCard';

function App() {
  return (
    <Router>
      <div className="p-4">
        {/* Navigation Menu */}
        <nav className="flex gap-4 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Hostel Details</Link>
          <Link to="/property-card" className="text-blue-600 hover:underline">Property Card</Link>
          <Link to="/edit-property" className="text-blue-600 hover:underline">Edit Property</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HostelDetails />} />
          <Route path="/property-card" element={<PropertyCard />} />
          <Route path="/edit-property" element={<EditPropertyDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
