import React, { useContext } from 'react'
import Categories1Modal from './Categories/Categories1Modal';
import Categories2Modal from './Categories/Categories2Modal';
import Categories3Modal from './Categories/Categories3Modal';
import Categories4Modal from './Categories/Categories4Modal';
import HeadingCategories from './Categories/HeadingCategories';
import Container1 from './Container1/Container1';
import Footer from './Footer/Footer';
import Navbar1 from './Navbar/Navbar1';
import Navbar2 from './Navbar/Navbar2';
import ProductItem from './Product/ProductItem';
import Profile from './Profile/Profile';

const Home = () => {
  
  return (
    <>
  
      
      <Navbar2/>
      <Container1/>
      <HeadingCategories/>
      <Categories1Modal/>
     <Categories2Modal/>
     <Categories3Modal/>
      <Categories4Modal/>
      <ProductItem/>
      <Footer/>
      <Profile/>
      
    </>
  )
}

export default Home
