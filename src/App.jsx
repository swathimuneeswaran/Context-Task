import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartFirstPage from './components/CartFirstPage';
import VeryFirstPage from './components/VeryFirstPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePricePage from './components/SinglePricePage';
import ProductDetails from './components/ProductDetails'; 
import LastPage from './components/LastPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VeryFirstPage />} />
          <Route path="/items" element={<CartFirstPage />} />
          <Route path="/items/product/:id" element={<ProductDetails />} />
          <Route path="/items/product/last" element={<LastPage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;
