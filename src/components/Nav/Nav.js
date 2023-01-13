import React from 'react';

import { Outlet, Link , useLocation } from "react-router-dom";

import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LOGO from './LOGO.png';

import './Nav.css';
 
const Navbar = ({cart}) => {


 const location = useLocation();

  return(
<>
<nav className=" font background dt w-100 border-box  ph5-ns shadow-3">
  <div  style={{paddingTop: '0px'}} className='ma2 mt2  ph3 '>
         <Link to="/" > 
          <div className="Tilt r2 shadow-2 " options={{ max : 55 }} style={{ height: 50, width: 50 }} >
              <div className="Tilt-inner pa1" > 
                <img
                              src={LOGO}
                              style={{ width:'100%', height:'100%' }}
                              
                              alt='logo'/> 
              </div>
            </div>
            </Link>
          
  </div>
  {location.pathname === '/' && (
  <div className='dtc v-mid w-75 tr'>
   <Link to="cart" > 
      <button>
        <FontAwesomeIcon icon={faCartArrowDown} />
        <span className="">{cart}</span>
      </button>
    </Link>
    </div>
    )}
</nav>
<Outlet /> 
 </>   
)  
  
}
export default Navbar;



