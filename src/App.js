// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import RecordPayment from "./Components/Recordpayment";
import SettingScreen from "./Components/SettingScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecordPayment />} />  {/* Home Page */}
        <Route path="/settings" element={<SettingScreen />} /> {/* Settings Page */}
      </Routes>
    </Router>
  );
}

export default App;
