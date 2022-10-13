import React from 'react';
import './Home.css';
import Card from '../Card/Card.js';
import espa from './espa.png';



export default function Home (){
return(
<>
<div className="center box">

	<Card 
		img={espa} 
		title="Vans"
		text="vans black and white"
		price="59.99$"
		link="order"
	/>
	<Card 
	img={espa} 
	title="nike"
	text="nike black and white"
	price="69.99$"
	link="order"
	/>
	<Card 
	img={espa} 
	title="adidas"
	text="adidas black and white"
	price="69.99$"
	link="order"
	/>
		<Card 
	img={espa} 
	title="adidas"
	text="adidas black and white"
	price="69.99$"
	link="order"
	/>
		<Card 
	img={espa} 
	title="adidas"
	text="adidas black and white"
	price="69.99$"
	link="order"
	/>
</div>
</>
	)
}