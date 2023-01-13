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
import Cart from './components/Cart/Cart.js';
import ProductPage from './components/ProductPage/ProductPage.js';
import Checkout from './components/Checkout/Checkout.js';
import NoPage from './components/Nopage/Nopage.js';






export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  



  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };
  

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

 const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);
console.log(incomingOrder)
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

   useEffect(() => {
  fetchProducts();
  fetchCart();
 
}, []);

  
  return (
    
     <>
    
  <Router>
      <Routes>
        <Route path="/" element={<Nav  cart={cart.total_items}/> }>
        <Route index element={<ProductList  products={products} onAddToCart={handleAddToCart}  />} />
        <Route path="order"> 
          <Route index element={<ProductPage  />} />
         {/* <Route path="orderCompleted" element={<OrderCompleted />} />*/}
        </Route>
      
          <Route path="cart">
          {<Route index  element={<Cart cart={cart}
                                              onUpdateCartQty={handleUpdateCartQty}
                                             onRemoveFromCart={handleRemoveFromCart} 
                                             onEmptyCart={handleEmptyCart}/>} />}
          <Route path="checkout" element={<Checkout  cart={cart}
          order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />}  />
          </Route>
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