import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';
import Page1 from './Components/page1'
import Page5 from './Components/Page5'
import Header from './Components/Header';
import Page6 from './Components/Page6';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page7 from './Components/Page7';

function App() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1 font-[Montserrat]">
    {/* <Page1/> */}
  
    {/* <Page5/> */}
    {/* <Page6/> */}
    

    <Router>
      <Routes>
        <Route path="/" element={<Page5 />} />
        <Route path="/single-room" element={<Page6 />} />
        <Route path="/multi" element={<Page7 />} />
      

      </Routes>
    </Router>
    </div>
  );
}

export default App;
