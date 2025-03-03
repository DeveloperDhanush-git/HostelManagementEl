import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import Login from "./pages/Login";
import Verifyno from "./pages/VerifyNo";
import EmailLogin from "./pages/Emaillogin";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <div style={{ fontFamily: "Montserrat" }}>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/email-login" element={<EmailLogin />} />
          <Route path="/verifyno" element={<Verifyno />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
