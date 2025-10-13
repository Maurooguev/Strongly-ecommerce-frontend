import "./ListCards.css";
import Card from "../Card/Card";

export default function ListCards({ productos }) {
  return (
    <div className="list-cards">
      {productos.map((prod, index) => (
        <Card
          key={index}
          nombre={prod.nombre}
          descripcion={prod.descripcion}
          precio={prod.precio}
        />
      ))}
    </div>
  );
}
