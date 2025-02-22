import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import Components
import MyComponent from "./Components/MyComponent";
import MyProperties from "./Components/MyProperties";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyProperties />} /> {/* ✅ Default Page */}
          <Route path="/property/:id" element={<MyComponent />} /> {/* ✅ Dynamic Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
