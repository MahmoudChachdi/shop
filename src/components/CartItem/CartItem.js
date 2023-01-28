import React from 'react';
import PropTypes from 'prop-types';
import './CartItem.css';
import close from './close.svg';
import add from './add.svg';
import remove from './remove.svg';

const CartItem = ({ item , onRemoveFromCart , onUpdateCartQty }) => {


  const handleUpdateCartQty = (lineItemId, quantity) => {
  onUpdateCartQty(lineItemId, quantity);
}
const handleRemoveFromCart = () => {
  onRemoveFromCart(item.id);
}
  return (
    <div className=" center ">
        <div className="card1">
        
        <div className="card-img" >
          <img className="image" src={item.image.url} alt={item.name} />
          </div>
          <div className="card-info">
            <h4 className="text-title">{item.name}</h4>
            <div className="total-price">{item.line_total.formatted_with_symbol}</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }} className="  card-footer">
               <div className='card-button'><img className="svg1 " src={remove} alt='close'  onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)} /></div>
                <p className=" quantity">{item.quantity}</p>
                <div className='card-button'><img className="svg1 " src={add} alt='close' onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)} /></div>
              <div className="card-button " >
                    <img    className="svg1  "
                            onClick={handleRemoveFromCart}src={close} alt='close' />
        </div>
            </div>
          


         
          
        </div>
        </div>
  );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;





