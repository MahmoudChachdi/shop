import React from 'react';
import { Outlet, Link } from "react-router-dom";



const NoPage = () => {
	return(
	

<section className="vh-100 white baskerville">
  <header className="tc ph5 lh-copy">
      <h1 className="center ">404</h1>
      <h2 className="center">Sorry, we can't find the page you are looking for.</h2>
  </header>
  
  <ul className="list tc pl0 w-100 mt5" style={{paddingLeft:'0'}}>
<div className='center'  >
       <Link to="/" >
        <button type="button"  className='cart__btn-empty1' >
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front text"> BACK HOME</span>
        </button>
       </Link>
       </div>

  </ul>
  <Outlet/>
</section>
)}

export default NoPage;