import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Login from "./pages/Login";
import Verifyno from "./pages/VerifyNo";
import HostelForm from "./pages/HostelForm";
import AddCity from "./pages/AddCity";
import AddProperties from "./pages/AddProperties";
const App = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verifyno" element={<Verifyno />} />
        <Route path="/hostel-form" element={<HostelForm />} />
        <Route path="/addcity" element={<AddCity />} />
        <Route path="/addproperty" element={<AddProperties />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
