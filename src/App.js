// src/App.js
import "./App.css";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import { FormDataProvider } from "./Components/PropertyContext";
import Home from "./Components/Home";

function App() {
  return (
    <FormDataProvider>
      
        <Router>
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/Details2page" element={<Page2 />} />
            <Route path="/Add" element={<Page3 />} />
            <Route path="/Page4" element={<Page4 />} />
            <Route path="/Page5" element={<Page5 />} />
            <Route path="/page6" element={<Page6 />} />
          </Routes>
        </Router>
    </FormDataProvider>
  );
}

export default App;
