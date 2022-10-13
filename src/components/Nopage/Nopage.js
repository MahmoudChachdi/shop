import React from 'react';
import { Outlet, Link } from "react-router-dom";



const NoPage = () => {
	return(
	

<section class="vh-100 white baskerville">
  <header class="tc ph5 lh-copy">
      <h1 class="f1 f-headline-l code mb3 fw9 dib tracked-tight ">404</h1>
      <h2 class="tc  f1-l fw1">Sorry, we can't find the page you are looking for.</h2>
  </header>
  
  <ul class="list tc pl0 w-100 mt5">
<div className='center' >
       <Link to="/" >
        <button type="button" >
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> BACK HOME</span>
        </button>
       </Link>
       </div>

  </ul>
  <Outlet/>
</section>
)}

export default NoPage;