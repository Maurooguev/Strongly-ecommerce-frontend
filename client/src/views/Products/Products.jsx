import React, { useEffect, useState } from "react";
import ListCards from "../../components/ListCards/ListCards";
import Sidebar from "../Sidebar/Sidebar.jsx";
import "./Products.css";

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // 🔹 Cargar todos los productos al inicio
  useEffect(() => {
    cargarTodosLosProductos();
  }, []);

  const cargarTodosLosProductos = () => {
    setCargando(true);
    fetch("/api/product")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("No se pudieron cargar los productos");
      })
      .finally(() => setCargando(false));
  };

  // 🔹 Manejar selección/deselección de categorías
  const handleCategorySelect = async (categoryId, checked) => {
    setCargando(true);

    let updatedCategories = checked
      ? [...selectedCategories, categoryId]
      : selectedCategories.filter((id) => id !== categoryId);

    setSelectedCategories(updatedCategories);

    // Si no hay categorías seleccionadas → traer todos los productos
    if (updatedCategories.length === 0) {
      cargarTodosLosProductos();
      return;
    }

    try {
      // 🔹 Hacer varios fetch en paralelo (uno por categoría)
      const responses = await Promise.all(
        updatedCategories.map((id) =>
          fetch(`/api/product/category/${id}`).then((res) => res.json())
        )
      );

      // 🔹 Combinar todos los resultados y eliminar duplicados por id
      const allProducts = responses.flat();
      const uniqueProducts = allProducts.filter(
        (p, index, self) => index === self.findIndex((x) => x.id === p.id)
      );

      setProductos(uniqueProducts);
    } catch (err) {
      console.error("Error al filtrar productos:", err);
      setError("No se pudieron cargar los productos filtrados");
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="products-page-container">
      <Sidebar onCategorySelect={handleCategorySelect} />
      <div className="products-main-content">
        <h2>Productos disponibles</h2>

        {cargando && <p>Cargando...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {!cargando && !error && (
          <ListCards productos={productos} />
        )}
      </div>
    </div>
  );
}
