import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropertyCard from "./Components/PropertyCard";
import MyComponent from "./Components/MyComponent"; // Your property detail page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PropertyCard />} />
        <Route path="/property/:id" element={<MyComponent />} /> {/* Dynamic Route */}
      </Routes>
    </Router>
  );
};

export default App;
