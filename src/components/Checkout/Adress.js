import React, {useState, useEffect} from 'react';
import './Checkout.css';
import { commerce } from '../../lib/Commerce';
import { Link} from 'react-router-dom';
import { InputLabel, Select, MenuItem,  Grid } from  '@mui/material';



const Adress = ({checkoutToken, test})=> {
	const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [adress, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  
const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    console.log(countries)
    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    console.log(subdivisions)
    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry])
  ;

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);
 
if (!Object.keys(countries)[0]) return <p>Loading...</p>;
  return(
  <div className="container  center">
    <div className="container2  center">
      
      <div className="content mt4">
        <form action="#" >
          <div className="user-details">
              <div className="input-box">
                <span className="details">Firstame</span>
                <input type="text" placeholder="Enter your firstname"  value={firstName}
                   onChange={event => setFirstName(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Lastname</span>
                <input type="text" placeholder="Enter your lastname" value={lastName}
                    onChange={event => setLastName(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" 
                    placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" value={mobileNumber}
                    onChange={event => setMobileNumber(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">Adress</span>
                <input type="text" placeholder="Enter your adress" value={adress}
                    onChange={event => setAddress(event.target.value)} required/>
              </div>
              <div className="input-box">
                <span className="details">City</span>
                <input type="text" placeholder="Enter your city" value={city}
                    onChange={event => setCity(event.target.value)} required/>
              </div>
                            <div className="input-box">
                <span className="details">Zip code</span>
                <input type="text" placeholder="Enter your city" value={zip}
                    onChange={event => setZip(event.target.value)} required/>
              </div>
            

            <div  className="input-box">
              <span className="details">Shipping Country</span>
              <select 
              
              value={shippingCountry}
              onChange={event => setShippingCountry(event.target.value)}>
              	<option disabled>Country</option>
              	                 {
                        Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                            ))
                        
                    };
                
              </select>
            </div>


                        <div  className="input-box">
              <span className="details">Shipping Subdivision</span>
              <select 
              
              value={shippingSubdivision}
              onChange={event => setShippingSubdivision(event.target.value)}>
              	<option disabled>Country</option>
              	                 {
                        Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                            ))
                        
                    };
                
              </select>
            </div>
                                    <div  className="input-box">
              <span className="details">Shipping Option</span>
              <select 
              
              value={shippingOption}
              onChange={event => setShippingOption(event.target.value)}>
              	<option disabled>Country</option>
              	                 {
                        shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                            ))
                        
                    };
                
              </select>
            </div>



            
            
            
            </div>
            <Link to="/cart"><button className='mt3' type="button" >
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Back To Cart 
              </span>
            </button></Link>
             <button className='mt3' type="submit" onClick={()=>test({firstName, lastName, email, mobileNumber, adress, city, zip, shippingCountry, shippingSubdivision, shippingOption})} >
              <span class="shadow"></span>
              <span class="edge"></span>
              <span class="front text"> Next 
              </span>
            </button>
        

      </form>
    </div>
    </div>
  </div>
)
}

export default Adress;