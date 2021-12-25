import React from 'react';
import Swiper from '../includes/swiper';
import Category from '../includes/category';
import Carousel from '../includes/carousel';
import Products from '../includes/products';
import Header1 from '../includes/header-1';
import Footer from '../includes/footer';

export default function Index(){
	return(
		<React.Fragment>
			<Header1/>
			<Swiper/>
			<Category/>
			<Carousel/>
			<Products/>
			<Footer/>
		</React.Fragment>
	)
}