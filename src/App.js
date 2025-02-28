import Allpages from './Pages/Allpages';
import {Routes, Route} from 'react-router'
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Allpages />}/>
      </Routes>
    </div>
  );
}

export default App;
