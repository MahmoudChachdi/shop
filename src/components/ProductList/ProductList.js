import React from 'react';
import './ProductList.css';
import Product from '../Product/Product.js';




const ProductList = ({products, onAddToCart})=>{

	if (!products.length) return <p>Loading...</p>;
return(
<>
<div className="center box">

{ products.map((product) => (
                <Product
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
	
</div>
</>
	)
}

export default ProductList;