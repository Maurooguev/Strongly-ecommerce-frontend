import React, { useEffect, useState } from "react";
import "./Sidebar.css";

export default function Sidebar({ onCategorySelect }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Error al cargar categorías:", err));
  }, []);

  return (
    <aside className="sidebar">
      <h3>Filtrar por</h3>
      <p>Categorías</p>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <label>
              <input
                type="checkbox"
                onChange={(e) => onCategorySelect(cat.id, e.target.checked)}
              />
              {cat.name}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
