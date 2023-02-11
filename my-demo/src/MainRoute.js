import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from './components/product';
import Category from './components/category';
import Layout from './layout';

const MainRoute=()=>{
    
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
             <Route index element={<Category />} />
            <Route path="product" element={<Product/>} />
            <Route path="category" element={<Category />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    )
}

export default MainRoute;