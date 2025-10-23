import React, { useEffect, useState } from "react";
import ListCards from "../../components/ListCards/ListCards";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Products.css";

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/product") // proxy -> http://localhost:4002/product
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("Productos cargados:", data);
        setProductos(data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos");
      })
      .finally(() => setCargando(false));
  }, []);

  return (
    <div className="products-page-container">
      <Sidebar />
      <div className="products-main-content">
        <h2>Productos disponibles</h2>

        {cargando && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!cargando && !error && <ListCards productos={productos} />}
      </div>
    </div>
  );
}
