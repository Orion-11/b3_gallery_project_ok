import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Arbol1 } from './components/Arbol1';
import { Arbol2 } from './components/Arbol2';
import { Arbol3 } from './components/Arbol3';
import { Arbol4 } from './components/Arbol4';
import { Arbol5 } from './components/Arbol5';
import { Arbol6 } from './components/Arbol6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className='text-center my-3'>Gallery Project</h1>
        </div>
        <div className='container d-flex justify-content-center'>
          <Routes>
            <Route path='/arbol1' element={<Arbol1 className='main-img-container'/>}/>
            <Route path='/arbol2' element={<Arbol2 className='main-img-container'/>} />
            <Route path='/arbol3' element={<Arbol3 className='main-img-container'/>} />
            <Route path='/arbol4' element={<Arbol4 className='main-img-container'/>} />
            <Route path='/arbol5' element={<Arbol5 className='main-img-container'/>} />
            <Route path='/arbol6' element={<Arbol6 className='main-img-container'/>} />
          </Routes>
        </div>
        <div className='container'>
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
