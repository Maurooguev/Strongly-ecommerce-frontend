import Home from "./views/Home";
import Navbar from "./views/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Offers from "./views/Offers";  
import Contact from "./views/Contact";
import "./App.css";
import { Routes, Route  } from "react-router-dom";


export default function App() {

  return (
    <>
      <Navbar />  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Contact />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}
