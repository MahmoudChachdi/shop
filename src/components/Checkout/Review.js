import React from 'react';


const Review = ({ checkoutToken }) => (
<>

  <h2>Order summary</h2>
    <div style={{width:'100%'}}>
    {checkoutToken.live.line_items.map((product) => (
      <><div style={{ display:'flex',justifyContent:'space-between', padding: ' 0' }} key={product.name}>
        <p style={{ fontWeight: 700 , margin:'5px'}}>{product.name}</p>
        <p style={{ fontWeight: 700 , margin:'5px'}}> {product.line_total.formatted_with_symbol}</p>
      </div>
      <div style={{display:'flex', justifyContent:'space-between' }}>
        <p style={{ fontWeight: 700 , margin:'5px'}}>Quantity</p>
        <p style={{ fontWeight: 700 , margin:'5px'}}> {product.quantity}</p>

      </div></>))}
      <div style={{ padding: '20px 0', display:'flex', justifyContent:'space-between' }}>
        <p style={{ fontWeight: 700 , margin:'5px' }}>Total</p>
        <p style={{ fontWeight: 700 , margin:'5px' }}> {checkoutToken.live.subtotal.formatted_with_symbol}</p>
      </div>
  </div>
</>
);

export default Review;
