import React from 'react';
import './Product.css';
import espa from './espa.png';



const Product = () => {
	return(
	<>
	<div className='product-box'>
		<div className='image-box'>
			<img className='br4' alt='robots' src={espa}/>
		</div>
		<div className='info-box'>
			
		</div>
	</div>
	</>
)
}


export default Product;