import React from 'react';
import  { useEffect, useState } from 'react';
import { commerce } from './lib/Commerce';
import {BrowserRouter as Router,
        Routes,
        Route
      } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import Nav from './components/Nav/Nav.js';
import ProductList from './components/ProductList/ProductList.js';
import ProductPage from './components/ProductPage/ProductPage.js';
import NoPage from './components/Nopage/Nopage.js';






export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  

 useEffect(() => {
  fetchProducts();
  fetchCart();
 
}, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  const fetchCart = () => {
  commerce.cart.retrieve().then((cart) => {
    setCart(cart);
  }).catch((error) => {
    console.log('There was an error fetching the cart', error);
  });
}
const handleAddToCart = (productId, quantity) => {
  commerce.cart.add(productId, quantity).then((item) => {
    setCart(item.cart);
  }).catch((error) => {
    console.error('There was an error adding the item to the cart', error);
  });
}
  
console.log(products)
  
  return (
    
     <>
    
  <Router>
      <Routes>
        <Route path="/" element={<Nav  cart={cart}/> }>
        <Route index element={<ProductList  products={products} onAddToCart={handleAddToCart}  />} />
        <Route path="order"> 
          <Route index element={<ProductPage  />} />
         {/* <Route path="orderCompleted" element={<OrderCompleted />} />*/}
        </Route>
      
          
          {/*<Route path="art" element={<Art />} />*/}
         
          <Route path="*" element={<NoPage />}  />
         </Route>
      </Routes>
    </Router>
   
</>
    )
}

App.propTypes = {
  history: PropTypes.object,
};