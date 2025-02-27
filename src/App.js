import './App.css';
import { Routes, Route } from 'react-router-dom'
import BedInventory_1 from './Pages/BedInventory_1';
import BedInventory_2 from './Pages/BedInventory_2';
import BedInventory_3 from './Pages/BedInventory_3';
import BedInventory_4 from './Pages/BedInventory_4';
import { FormDataProvider } from './Components/PropertyContext';





function App() {
  return (
    <FormDataProvider>
  
     <Routes>
      <Route path='/' element={<BedInventory_1 />}/>
      <Route path='/step1' element={<BedInventory_2 />}/>
      <Route path='/step2' element={<BedInventory_3 /> }/>
      <Route path='/step3' element={<BedInventory_4 />}/>
      
    
    </Routes>

     
      
     
    
    </FormDataProvider>
  );
}

export default App;


