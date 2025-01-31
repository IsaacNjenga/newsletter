import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contacts";
import Offers from "./pages/offers";
import About from "./pages/about";
import Products from "./pages/products";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import UpdateProduct from "./components/updateProduct";

//axios.defaults.baseURL = "http://localhost:3001/EasyDeal";
axios.defaults.baseURL =  "https://valuemart-furniture-server.vercel.app/EasyDeal";
axios.defaults.withCredentials = true;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
        </Routes>
        <Toaster position="top-right" toastOption={{ duration: 2200 }} />
      </BrowserRouter>
    </>
  );
}

export default App;
