import React, {useState} from 'react';
import './Checkout.css';
import { Link} from 'react-router-dom';
import { Divider} from '@mui/material';

import Review from './Review';

const Payment = ({checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout })=> {
const [creditCardNumber,setCreditCardNumber] = useState('');
  const [expiryMonth,setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [ccv, setCcv] = useState('');
const handleSubmit = async (event) => {
    event.preventDefault();


      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { name: 'International', street: shippingData.adress, town_city: shippingData.city, county_state: shippingData.shippingSubdivision, postal_zip_code: shippingData.zip, country: shippingData.shippingCountry },
        fulfillment: { shipping_method: shippingData.shippingOption },
        
            payment: {
                gateway: "test_gateway",
                card: {
                    number: creditCardNumber,
                    expiry_month: expiryMonth,
                    expiry_year: expiryYear,
                    cvc: ccv,
                    postal_zip_code: shippingData.zip,
                   
                }
            }
        }
      

      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  


return(

 <div className=" center" style={{ backgroundColor: '#e8e8e8'}}>
       
     
    <div className="container2  center" style={{ display:'flex', flexDirection: 'column' }}>
    <Review checkoutToken={checkoutToken} />
    
      <h4 className="title">Payment information</h4>
      <div className="content mt4">
        <form  onSubmit={(e) => handleSubmit(e)}>
        <div className="user-details">
          
            <div className="input-box">
                <span className="details" htmlFor="cardNum">Credit card number</span>
                <input className="checkout__input" type="text" name="cardNum" onChange={event => setCreditCardNumber(event.target.value)}value={creditCardNumber} placeholder="Enter your card number" />
                   </div>
                               <div className="input-box" >
                <span className="details" htmlFor="cardNum">Card holder</span>
                <input className="checkout__input" type="text" name="cardNum" onChange={event => setCreditCardNumber(event.target.value)}value={creditCardNumber} placeholder="Enter your card number" />
                   </div>
                    <div className="input-box" style={{ width:'100%' ,display:'flex', justifyContent:'space-around'}}>
                    <div className="input-box"  style={{paddingRight:'1%'}}>
                <span className="details" htmlFor="expMonth">Ex/month</span>
                <input className="checkout__input" type="text" name="expMonth" onChange={event => setExpiryMonth(event.target.value)} value={expiryMonth} placeholder="Card expiry month" />
                  </div>
                  <div className="input-box" style={{paddingRight:'1%'}}>
                <span className="details" htmlFor="expYear">Ex/year</span>
                <input className="checkout__input" type="text" name="expYear" onChange={event => setExpiryYear(event.target.value)} value={expiryYear} placeholder="Card expiry year" />
                  </div>
                  <div className="input-box">
                <span className="details" htmlFor="ccv">CCV</span>
                <input className="checkout__input" type="text" name="ccv" onChange={event => setCcv(event.target.value)} value={ccv} placeholder="CCV (3 digits)" />
                 </div>
                  </div>
                   </div>


            
            
            
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           
            <button className='cart__btn-empty1'  onClick={backStep} type="button" >
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Back 
              </span>
            </button>
            
             <button className='cart__btn-empty1' type="submit" >
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </span>
            </button>
            </div>
        

      </form>
    </div>
    </div>
    </div>

  

  )}

export default Payment;