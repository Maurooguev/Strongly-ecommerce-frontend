import Home from "./views/Home";
import MainLayout from "./views/Layout/MainLayout";
import Offers from "./views/Offers"; 
import Contact from "./views/Contact";
import Products from "./views/Products/Products.jsx";
import Register from "./views/Register/Register.jsx";
import AdminPage from "./views/Admin/AdminPage.jsx";
import AdminRoute from "./views/Admin/AdminRoute.jsx"; 
import Cart from "./views/Cart/Cart.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";


export default function App() {

  return (
    <Routes>
      
      {/* 1. RUTA PÚBLICA SIN LAYOUT (Register/Login) */}
      <Route path="/register" element={<Register />} /> 

      {/* 2. RUTA PADRE ÚNICA CON LAYOUT (MainLayout) */}
      {/* TODAS las rutas que deben tener Navbar y Footer deben ir aquí ADENTRO. */}
      <Route element={<MainLayout />}>
        
        {/* Rutas Estándar (Ahora son hijas del MainLayout) */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        
        {/* Ruta Protegida de Admin (También es hija del MainLayout) */}
        <Route 
            path="/admin" 
            element={<AdminRoute element={AdminPage} />} 
        />
      
      </Route> 
      
    </Routes>
  );
}