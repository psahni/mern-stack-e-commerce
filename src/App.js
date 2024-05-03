import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingleProduct from 'pages/Product';
import Cart from 'pages/Cart';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path='/products/:id' element={<SingleProduct />}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  );
}

export default App;
