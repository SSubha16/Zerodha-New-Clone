import React, { useEffect } from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import NotFound from "./components/NotFound";





createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <Routes>
    <Route path="/*" element={<Home />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
  
)
