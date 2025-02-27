import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TransactionManagement from "./Components/TransactionManagement"; // ✅ Ensure correct import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TransactionManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
