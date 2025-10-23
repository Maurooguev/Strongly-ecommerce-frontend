import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./ProductDetail.css";

const initialProducts = [
  { id: 1, nombre: "Mancuernas 10kg", descripcion: "Par de mancuernas de alta calidad", precio: 50, imagen: "/images/mancuernas.jpg" },
  { id: 2, nombre: "Banda Elástica", descripcion: "Resistencia media", precio: 15, imagen: "/images/banda.jpg" },
  { id: 3, nombre: "Barra Dominadas", descripcion: "Para puerta", precio: 75, imagen: "/images/barra.jpg" },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const found = initialProducts.find((p) => p.id === parseInt(id));
    setProduct(found);
  }, [id]);

  if (!product) return <p style={{ textAlign: "center" }}>Producto no encontrado 😕</p>;

  const handleComprar = () => {
    alert(`Compraste ${cantidad} unidad(es) de ${product.nombre} 🛒`);
  };

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.imagen || "/placeholder.jpg"} alt={product.nombre} />
      </div>

      <div className="product-info">
        <h2>{product.nombre}</h2>
        <p className="descripcion">{product.descripcion}</p>
        <p className="precio">${product.precio}</p>

        <div className="cantidad-container">
          <label htmlFor="cantidad">Cantidad:</label>
          <input
            id="cantidad"
            type="number"
            min="1"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>

        <button className="buy-button" onClick={handleComprar}>
          Comprar
        </button>
      </div>
    </div>
  );
}
