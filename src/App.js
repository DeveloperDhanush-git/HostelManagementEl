import './App.css';
import { Routes, Route } from 'react-router-dom'
import BedInventory_1 from './Pages/BedInventory_1';
import BedInventory_2 from './Pages/BedInventory_2';
import BedInventory_3 from './Pages/BedInventory_3';
import BedInventory_4 from './Pages/BedInventory_4';
import BedInventory_5 from './Pages/BedInventory_5';
import BedInventory_6 from './Pages/BedInventory_6';



function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<BedInventory_1 />}/>
      <Route path='/step1' element={<BedInventory_2 />}/>
      <Route path='/step2' element={<BedInventory_3 /> }/>
      <Route path='/step3' element={<BedInventory_4 />}/>
      <Route path='/step4' element={<BedInventory_5 />}/>
      <Route path='/step5' element={<BedInventory_6 />}/>
    </Routes>

     {/* <>
    <BedInventory_1 />
    <BedInventory_2 />
    <BedInventory_3 />
    <BedInventory_4 />
    <BedInventory_5 />
    <BedInventory_6 />
    </>  */}
      
     
    </div>
  );
}

export default App;


