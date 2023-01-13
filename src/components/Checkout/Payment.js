import React, {useState} from 'react';
import './Checkout.css';
import { Link} from 'react-router-dom';



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

  <div className="container  center">
    <div className="container2  center">
      <div className="title">Order</div>
      <div className="content mt4">
        <form  onSubmit={(e) => handleSubmit(e)}>
          <h4 className="checkout__subheading">Payment information</h4>

                <label className="checkout__label" htmlFor="cardNum">Credit card number</label>
                <input className="checkout__input" type="text" name="cardNum" onChange={event => setCreditCardNumber(event.target.value)}value={creditCardNumber} placeholder="Enter your card number" />

                <label className="checkout__label" htmlFor="expMonth">Expiry month</label>
                <input className="checkout__input" type="text" name="expMonth" onChange={event => setExpiryMonth(event.target.value)} value={expiryMonth} placeholder="Card expiry month" />

                <label className="checkout__label" htmlFor="expYear">Expiry year</label>
                <input className="checkout__input" type="text" name="expYear" onChange={event => setExpiryYear(event.target.value)} value={expiryYear} placeholder="Card expiry year" />

                <label className="checkout__label" htmlFor="ccv">CCV</label>
                <input className="checkout__input" type="text" name="ccv" onChange={event => setCcv(event.target.value)} value={ccv} placeholder="CCV (3 digits)" />


            
            
            
            
            <button className='mt3' type="button" component={Link}  to="/cart">
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Back 
              </span>
            </button>
             <button className='mt3' type="submit" component={Link}  to="/Payment">
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </span>
            </button>
        

      </form>
    </div>
    </div>
    </div>

  

  )}

export default Payment;