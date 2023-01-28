import React from 'react';
import CartItem from '../CartItem/CartItem.js';

import {Link} from 'react-router-dom';
import './Cart.css';
import PropTypes from 'prop-types';
const Cart = ({ cart , onUpdateCartQty , onRemoveFromCart , onEmptyCart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }
console.log(cart)
  const renderItems = () => (
    <>
    <div className="center box ">
    {cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        className="cart__inner"
        onUpdateCartQty={onUpdateCartQty}
        onRemoveFromCart={onRemoveFromCart}
      />
    ))}
    </div>
    <div className="cart__footer">
      <h4 className="cart__total-title">Subtotal:</h4>
      <h4 className="cart__total-price">{cart.subtotal.formatted_with_symbol}</h4>
    </div>
    </>
  );



  return (
    <div className="cart1">
      <h2 className="center title ">Your Shopping Cart</h2>
      { renderEmptyMessage() }
      { renderItems() }
     
      <div style={{ display: 'flex', justifyContent: 'space-between' }} className="cart__footer">
        <button className="cart__btn-empty1" onClick={handleEmptyCart} >Empty cart</button>
        <Link to='checkout'><button className="cart__btn-empty1" >Checkout</button></Link> 
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart;