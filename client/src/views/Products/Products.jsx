import React, { useState } from 'react';
import ListCards from '../../components/ListCards/ListCards'; 
import Sidebar from '../Sidebar/Sidebar.jsx';
import './Products.css'; 

// Data de ejemplo (DEBES REEMPLAZAR ESTO CON TU DATA REAL)
const initialProducts = [
    { id: 1, nombre: 'Mancuernas 10kg', descripcion: 'Par de mancuernas de alta calidad', precio: 50, categoria: 'pesas', imagen: '/images/mancuernas.jpg' },
    { id: 2, nombre: 'Banda Elástica', descripcion: 'Resistencia media', precio: 15, categoria: 'accesorios', imagen: '/images/banda.jpg' },
    { id: 3, nombre: 'Barra Dominadas', descripcion: 'Para puerta', precio: 75, categoria: 'maquinas', imagen: '/images/barra.jpg' },
];

export default function Products() {
    const [products, setProducts] = useState(initialProducts);

    return (
        <div className="products-page-container">
            <Sidebar /> 
            
            <div className="products-main-content">
                {/* Pasamos los productos al componente ListCards */}
                <ListCards productos={products} />
            </div>
        </div>
    );
}
