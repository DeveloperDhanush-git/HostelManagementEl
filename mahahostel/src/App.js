import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyCard from "./Components/PropertyCard";
import MyComponent from "./Components/MyComponent"; // Your property detail page

const App = () => {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1" style={{ fontFamily: "Montserrat" }}>
    <Router>
      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/property/:id" element={<MyComponent />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
