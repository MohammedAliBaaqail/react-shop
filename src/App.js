import React from 'react';
import './App.css';
import { BrowserRouter , Routes, Route ,Link  } from 'react-router-dom';
import Error from './pages/error/error.componant';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';


  


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/shop" element={ <ShopPage /> } />
                <Route path="*" element={ <Error /> } />
          </Routes>
      </BrowserRouter>
   </>
  );
}
export default App;
