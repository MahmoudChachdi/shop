import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';

const Review = ({ checkoutToken }) => (
  <>
    <Typography variant="h6" gutterBottom>Order summary</Typography>
    <List disablePadding style={{width:'100%'}}>
      {checkoutToken.live.line_items.map((product) => (
        <>
        <ListItem  style={{ padding: '10px 0' , width:'100%'}} key={product.name}>
          <ListItemText   style={{display:'flex', justifyContent:'space-between'}} primary={product.name}  />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>

        </ListItem>
        <ListItem style={{ padding: '10px 0' }}>
                          <ListItemText primary="Quantity"  style={{display:'flex', justifyContent:'space-between'}} />
          <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {product.quantity}
        </Typography>
        </ListItem>
        </>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Total"  style={{display:'flex', justifyContent:'space-between'}}/>
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>

      </ListItem>
    </List>
  </>
);

export default Review;
{/*<>

<h2>Order summary</h2>
<div>
{checkoutToken.live.line_items.map((product) => (
<div style={{ display:'flex',justifyContent:'space-between'}}>
<p>{product.name}</p>
<p> {product.line_total.formatted_with_symbol}</p>
</div>
<div>
<p>Quantity</p>
<p> `${product.quantity}`</p>))}
</div>
<div>
<p>Total</p>
<p> {checkoutToken.live.subtotal.formatted_with_symbol}</p>
</div>
</div>
</>


*/}