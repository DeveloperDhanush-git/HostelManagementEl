// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import RecordPayment from "./Components/Recordpayment";
import SettingScreen from "./Components/SettingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecordPayment />} />  
        <Route path="/settings" element={<SettingScreen />} /> 
      </Routes>
    </Router>
  );
}

export default App;
