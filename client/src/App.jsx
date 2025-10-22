import Home from "./views/Home";
import MainLayout from "./views/Layout/MainLayout";
import Offers from "./views/Offers";  
import Contact from "./views/Contact";
import Products from "./views/Products";
import Register from "./views/Register";

import "./App.css";
import { Routes, Route  } from "react-router-dom";





export default function App() {

  return (
    <Routes>
      
      <Route path="/register" element={<Register />} /> 

      <Route element={<MainLayout />}>
      
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      
    </Routes>
  );
}
