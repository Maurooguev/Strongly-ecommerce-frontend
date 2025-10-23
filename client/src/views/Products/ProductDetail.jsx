import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api/product/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><b>Precio:</b> ${product.price}</p>
      <p><b>Stock disponible:</b> {product.stock}</p>
    </div>
  );
}
