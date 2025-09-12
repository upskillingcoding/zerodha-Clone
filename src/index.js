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
    <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/pricing' element={<PricingPage />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/support' element={<SupportPage />}></Route>
    </Routes>
  </BrowserRouter>

);

