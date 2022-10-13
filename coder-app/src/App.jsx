import React from 'react'
import  './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartContext} from './components/Context/CartContext';
import Error404 from './components/Error404/Error404';

function App() {
  return (
  <CartContext>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element = {<ItemListContainer />} />
          <Route path="/detail/:detailId" element = {<ItemDetailContainer />} />
          <Route path="/category/:categoryId" element = {<ItemListContainer />} />
          <Route path="/cart" element = {<Cart />} />
          <Route path="/nosotros" element = {<ItemListContainer />} />
          <Route path="/contacto" element = {<ItemListContainer />} />
          <Route path="*" element = {<Error404 />} />
        </Routes>   
      </div>
    </BrowserRouter>
  </CartContext>

  );
}

export default App
