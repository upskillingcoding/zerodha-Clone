import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
// import products from './landing_page/products';
import Products from './landing_page/products'; 
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import Footer from './Footer';
import Navbar from './Navbar';
import NotFound from './landing_page/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //    <HomePage />
  //    <AboutPage/>
  //    <PricingPage />
  //     <Products /> 
  //     <SupportPage />
  //     <Signup />
  // </React.StrictMode>


  <BrowserRouter>
       <Navbar />
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/pricing' element={<PricingPage />} />
        <Route path='/products' element={<Products />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>

);

