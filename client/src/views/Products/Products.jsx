import React, { useState } from 'react';
import ListCards from '../../components/ListCards/ListCards'; 
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Products.css'; 

// Data de ejemplo (DEBES REEMPLAZAR ESTO CON TU DATA REAL)
const initialProducts = [
    { nombre: 'Mancuernas 10kg', descripcion: 'Par de mancuernas de alta calidad', precio: 50, categoria: 'pesas' },
    { nombre: 'Banda Elástica', descripcion: 'Resistencia media', precio: 15, categoria: 'accesorios' },
    { nombre: 'Barra Dominadas', descripcion: 'Para puerta', precio: 75, categoria: 'maquinas' },
    
];

export default function Products() {
    // Aquí podrías tener lógica de filtros y estado, por ahora usamos toda la lista
    const [products, setProducts] = useState(initialProducts);

    return (
        <div className="products-page-container">
            <Sidebar /> 
            
            {/* 2. CONTENEDOR PRINCIPAL DE PRODUCTOS */}
            <div className="products-main-content">
                <h2>Explora Nuestros Productos</h2>
                <ListCards productos={products} />
            </div>
        </div>
    );
}