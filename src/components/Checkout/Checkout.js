import React, { useState, useEffect } from 'react';
import './Checkout.css';
import { Link, useNavigate} from 'react-router-dom';
import { commerce } from '../../lib/Commerce';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import Adress from './Adress';
import Payment from './Payment';


const steps = ['Shipping address', 'Payment details'];


export default function Checkout({cart, onCaptureCheckout, order, error}) {
const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
 const navigate = useNavigate();


 const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) navigate('/');
        }
      };

      generateToken();
    }
  }, [cart]);
    const test = (data) => {
    setShippingData(data);

    nextStep();
  };
 const timeout = ()=>{
  setTimeout(()=>{
    setIsFinished(true)
  },3000)
 }



    let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider />
        <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Link to='/'><Button variant="outlined" type="button" >Back to home</Button></Link>
    </>
  ) : isFinished ?
   ( <>
      <div>
        <Typography variant="h5">Thank you for your purchase!</Typography>
        <Divider />

      </div>
      <br />
      <Link to='/'><Button variant="outlined" type="button" >Back to home</Button></Link>
    </>
)  :  (
    <div >
      <CircularProgress />
    </div>
  ));

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Link to='/'><Button  variant="outlined" type="button" >Back to home</Button></Link>
      </>
    );
  }


  const Form = () => (activeStep === 0
    ? <Adress checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />
    : <Payment checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} timeout={timeout} />);

  return(
    <>
      <CssBaseline />
      <div />
      <main   className='stepper'>
        <Paper style={{ backgroundColor: '#e8e8e8', height:'100%' }} className='stepper'>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper style={{ display: 'none' }}   className='stepper ' activeStep={activeStep} >
            {steps.map((label) => (
              <Step  className='stepper' key={label}>
                <StepLabel  className='stepper' >{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};




 