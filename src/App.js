import React, {Component} from 'react';
import {BrowserRouter as Router,
        Routes,
        Route
      } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home.js';
import Nav from './components/Nav/Nav.js';

import NoPage from './components/Nopage/Nopage.js';
import Product from './components/Product/Product.js';

const initialState= {
   
    user: {
      id: '',
      firstname: '',
      lastname: '',
      email:'',
      mobilenumber:'',
      adress:'',
      city: '',
      size:'',
      quantity: '',
      joined:''
    }


  }


class App extends Component {
 constructor(){
  super();
  this.state= initialState;
}
   

    loadUser = (data) => {
  this.setState( {user:
      {       
        id: data.id,
      firstname: data.firstname,
      lastname:data.lastname ,
      email:data.email,
      mobilenumber:data.mobilenumber,
      adress:data.adress,
      city: data.city,
      size:data.size,
      quantity: data.quantity,
      joined:data.joined
        }})
}


render() {
  return (
    
     <>
  <Router>
      <Routes>
        <Route path="/" element={<Nav /> }>
        <Route index element={<Home />} />
        <Route path="order"> 
          <Route index element={<Product  loadUser={this.loadUser}/>} />
         {/* <Route path="orderCompleted" element={<OrderCompleted />} />*/}
        </Route>
      
         {/* <Route path="collab" element={<Collab />} />
          <Route path="art" element={<Art />} />*/}
         
          <Route path="*" element={<NoPage />}  />
         </Route>
      </Routes>
    </Router>

</>
    );
}
}
export default App;
