import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
// import products from './landing_page/products';
import Products from './landing_page/products'; 
import SupportPage from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div> */}
     <HomePage />
     <AboutPage/>
     <PricingPage />
     {/* <products /> */}
      <Products /> 
      <SupportPage />
      <Signup />
    {/* </div> */}
  </React.StrictMode>
);

