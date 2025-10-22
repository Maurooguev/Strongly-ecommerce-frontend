import React, { useState } from 'react';
import './manage.css';
import { useNavigate } from 'react-router-dom'; // Para la navegación

// SIMULACIÓN: Lista de productos cargados (Normalmente vendría de Firestore)
const initialProducts = [
    { id: 1, nombre: 'Mancuernas 10kg', precio: 50.00, stock: 15, categoria: 'Pesas' },
    { id: 2, nombre: 'Banda Elástica', precio: 15.50, stock: 50, categoria: 'Accesorios' },
    { id: 3, nombre: 'Barra Dominadas', precio: 75.00, stock: 8, categoria: 'Máquinas' },
];

export default function manage() {
    const [products, setProducts] = useState(initialProducts);
    const navigate = useNavigate();

    // Función para simular la eliminación
    const handleDelete = (id) => {
        // En una aplicación real, aquí iría la llamada a Firestore para eliminar.
        if (window.confirm(`¿Estás seguro de que quieres eliminar el producto ID ${id}?`)) {
            setProducts(products.filter(p => p.id !== id));
            console.log(`Producto ID ${id} eliminado.`);
        }
    };

    // Función para simular la edición (redirecciona al formulario de edición)
    const handleEdit = (id) => {
        // Redirecciona al formulario de adición, pero con el ID del producto
        navigate(`/admin/add?edit=${id}`);
        console.log(`Redirigiendo para editar el producto ID ${id}.`);
    };

    return (
        <div className="manage-products-container">
            <h1>Gestión de Inventario</h1>
            <p className="inventory-info">Total de productos en el sistema: {products.length}</p>

            {products.length === 0 ? (
                <p className="no-products">No hay productos cargados.</p>
            ) : (
                <div className="product-list-wrapper">
                    {products.map((product) => (
                        <div key={product.id} className="manage-product-item">
                            
                            <div className="product-details">
                                <span className="product-name">{product.nombre}</span>
                                <span className="product-category">Categoría: {product.categoria}</span>
                                <span className="product-stock">Stock: {product.stock}</span>
                            </div>
                            
                            <div className="product-pricing">
                                <span className="product-price">${product.precio.toFixed(2)}</span>
                            </div>

                            <div className="product-actions">
                                <button 
                                    className="btn-edit"
                                    onClick={() => handleEdit(product.id)}
                                >
                                    Editar producto
                                </button>
                                <button 
                                    className="btn-delete"
                                    onClick={() => handleDelete(product.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}