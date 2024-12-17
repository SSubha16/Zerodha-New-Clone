import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import HomePage from './landing_page/home/HomePage'
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/login/login";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route path="/" element={<HomePage/>} />
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/products" element={<ProductPage/>}/>
       <Route path="/pricing" element={<PricingPage/>}/>
       <Route path="/support" element={<SupportPage/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
     <Footer/>
  </BrowserRouter>
)