import React from 'react';
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Products from './Products'
import Collection from './Collection'
import Cards from './Cards'
import About from './About'
import Cart from './Cart'


function Home() {
  return (
    <div >
      <div>
      
        
        <div>

          
      <Navbar />
      <Hero />
      <Category/>
      <Products />
      <Collection />
      <Cards/>
      <About/>
      <Cart/>
     
        </div>
      </div>
      
    </div>
  );
}

export default Home;
