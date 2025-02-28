import React from "react";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import RecordPayment from "./Components/Recordpayment";
import SettingScreen from "./Components/SettingScreen";

function App() {
  return (
    <BrowserRouter>
      <RecordPayment />
      <SettingScreen /> 
    </BrowserRouter>
  );
}

export default App;
