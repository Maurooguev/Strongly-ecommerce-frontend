import "./Navbar.css";
import React, { useState } from 'react'; // Importa useState
import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch } from 'react-icons/fa'; // Importa el ícono de búsqueda

export default function Navbar() {
  // Estado para el texto que el usuario escribe en la barra de búsqueda
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Aquí iría la lógica real de búsqueda/filtrado:
    // 1. Redireccionar a la página de resultados: navigate(`/search?q=${searchTerm}`);
    // 2. Llamar a una función de contexto para filtrar productos.
    
    console.log("Buscando producto:", searchTerm);
    setSearchTerm(''); //Al buscar, queda el campo libre
    
  };
  
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Nombre del sitio / Logo */}
        <Link to="/home" className="navbar-logo-link">
          <h1 className="navbar-logo">STRONGLY</h1>
        </Link>
        
        {/* Barra de búsqueda */}
        <form className="search-bar" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                // Actualiza el estado con lo que el usuario escribe
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="search-button">
                <FaSearch />
            </button>
        </form>

        {/* Menú */}
        <ul className="navbar-menu">
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/offers">Ofertas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/register">Registro</Link></li>
          <li><Link to="/cart"><FaShoppingCart /></Link></li>
        </ul>
      </div>
    </nav>
  );
}