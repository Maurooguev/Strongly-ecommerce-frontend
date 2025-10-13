import ListCards from "../components/ListCards/ListCards";
import FeaturedCard from "../components/FCard/FCard";
import "../App.css"; // o podés mover el CSS específico a otro archivo
export default function Home() {
  const productos = [
    { nombre: "Balón medicinal 5kg", descripcion: "Ideal para ejercicios funcionales", precio: "$25" },
    { nombre: "Mancuernas 10kg", descripcion: "Par de mancuernas de alta calidad", precio: "$50" },
    { nombre: "Colchoneta yoga", descripcion: "Antideslizante y cómoda", precio: "$20" },
    { nombre: "Balón medicinal 5kg", descripcion: "Ideal para ejercicios funcionales", precio: "$25" },
    { nombre: "Cuerda para saltar", descripcion: "Ligera y resistente", precio: "$10" },
    { nombre: "Balón medicinal 5kg", descripcion: "Ideal para ejercicios funcionales", precio: "$25" },
    { nombre: "Kettlebell 8kg", descripcion: "Versátil para fuerza y cardio", precio: "$30" },
    { nombre: "Banda elástica", descripcion: "Ideal para estiramientos", precio: "$15" },
    { nombre: "Pesas tobillo", descripcion: "Perfectas para piernas y glúteos", precio: "$12" },
    { nombre: "Rueda abdominal", descripcion: "Para fortalecer el core", precio: "$18" },
    { nombre: "Balón medicinal 5kg", descripcion: "Ideal para ejercicios funcionales", precio: "$25" },
    { nombre: "Kettlebell 8kg", descripcion: "Versátil para fuerza y cardio", precio: "$30" }
  ];

  const productoPrincipal = {
    nombre: "Mancuernas 10kg",
    descripcion: "Par de mancuernas de alta calidad",
    precio: "$50"
  };

  return (
    <div className="home">
      <div className="content">
        <h2>Equipa tu entrenamiento</h2>
        <FeaturedCard
          nombre={productoPrincipal.nombre}
          descripcion={productoPrincipal.descripcion}
          precio={productoPrincipal.precio}
        />
      </div>

      <div className="content">
        <h2>Productos destacados</h2>
        <ListCards productos={productos} />
      </div>
    </div>
  );
}
