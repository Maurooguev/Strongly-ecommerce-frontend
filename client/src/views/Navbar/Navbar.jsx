import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Nombre del sitio */}
        <h1 className="navbar-logo">STRONGLY</h1>

        {/* Menú */}
        <ul className="navbar-menu">
          <li><Link to="/home">Inicio</Link></li>
          <li><Link to="/products">Productos</Link></li>
          <li><Link to="/offers">Ofertas</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/register">Registro</Link></li>
        </ul>
      </div>
    </nav>
  );
}
