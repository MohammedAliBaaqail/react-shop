import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route ,Link  } from 'react-router-dom';
import Error from './pages/error/error.componant';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <Link to='/error' >gg</Link>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <>
    
    <BrowserRouter>
   
      <Routes>
        
        <Route path="/" element={ <HomePage /> } />
        <Route path="/hats" element={ <HatsPage /> } />
        <Route path="*" element={ <Error /> } />
      </Routes>
  </BrowserRouter>
  </>
  );
}
export default App;
