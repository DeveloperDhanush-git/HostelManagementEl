import './App.css';
import Singleroomchoosing from './Components/Singleroomchoosing'
import Showingprice from './Components/Showingprice';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addrooms from './Components/Addrooms';
import SingleRoomOption from './Components/SingleRoomoption';

function App() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto p-6 rounded-lg mt-1 font-[Montserrat]">
    {/* <Page1/> */}
  
    {/* <Page5/> */}
    {/* <Page6/> */}
    

    <Router>
      <Routes>
        <Route path="/" element={<Addrooms />} />
        <Route path="/SingleRoomchoosing" element={<Singleroomchoosing />} />
        <Route path="/single-room" element={<Showingprice  />} />
        <Route path="/options" element={<SingleRoomOption />} />
      

      </Routes>
    </Router>
    </div>
  );
}

export default App;
