import "./ListCards.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

export default function ListCards({ productos }) {
  return (
    <div className="list-cards">
      {productos.map((prod, index) => (
        <Link
          key={index}
          to={`/product/${prod.id}`}
          className="card-link"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Card
            nombre={prod.nombre}
            descripcion={prod.descripcion}
            precio={prod.precio}
          />
        </Link>
      ))}
    </div>
  );
}
