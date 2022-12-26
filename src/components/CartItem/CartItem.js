import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';

const CartItem = ({ item , onRemoveFromCart , onUpdateCartQty }) => {


  const handleUpdateCartQty = (lineItemId, quantity) => {
  onUpdateCartQty(lineItemId, quantity);
}
const handleRemoveFromCart = () => {
  onRemoveFromCart(item.id);
}
  return (
    <div className=" center">
        <div className="card">
        <div className="card-img" >
          <img className="br4" src={item.image.url} alt={item.name} />
          </div>
          <div className="card-info">
            <h4 className="text-title">{item.name}</h4>
            <div className="cart-item__details-qty">
                <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <p>{item.quantity}</p>
                <button type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
            </div>
            <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
          </div>
          <button
            type="button"
            className="cart-item__remove"
            onClick={handleRemoveFromCart}
          >
            Remove
          </button>
        </div>
        </div>
  );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;


