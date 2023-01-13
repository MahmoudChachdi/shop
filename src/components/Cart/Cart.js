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
    <div className="center box">
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
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
    </>
  );



  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      { renderItems() }
     
      <div className="cart__footer">
        <button className="cart__btn-empty" onClick={handleEmptyCart} >Empty cart</button>
        <Link to='checkout'><button className="cart__btn-checkout" >Checkout</button></Link> 
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => {},
};

export default Cart;