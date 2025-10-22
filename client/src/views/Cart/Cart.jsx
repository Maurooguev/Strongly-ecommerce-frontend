import React, { useState } from 'react'; // Importar useState
import './Cart.css';
// Asegúrate de que tienes instalada la librería react-icons
import { FaTrashAlt, FaMinus, FaPlus } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


// DATOS INICIALES (Ahora se usarán para inicializar el estado)
const initialCartItems = [
    { id: 1, nombre: "Mancuernas 10kg", precio: 50, cantidad: 2, imagen: "..." },
    { id: 2, nombre: "Banda Elástica", precio: 15, cantidad: 1, imagen: "..." },
];


export default function Cart() {
    // 1. Convertir los datos estáticos en estado
    const [cartItems, setCartItems] = useState(initialCartItems);

    // 2. Funciones de cálculo (se ejecutan en cada renderizado)
    const totalItems = cartItems.reduce((acc, item) => acc + item.cantidad, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    
    // Función que maneja el cambio de cantidad (Añadir/Restar)
    const handleQuantityChange = (id, newQty) => {
         // No permitir cantidades menores a 1
         if (newQty < 1) return; 

         const updatedItems = cartItems.map(item => 
             item.id === id ? { ...item, cantidad: newQty } : item
         );
         
         setCartItems(updatedItems); // Actualiza el estado y dispara el re-renderizado
    };

    // Función que maneja la eliminación de un producto
    const handleRemove = (id) => {
        const updatedItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedItems); // Actualiza el estado
        console.log(`Producto con ID ${id} eliminado.`);
    };


    return (
        <div className="cart-page-container">
            <h1>Tu Carrito ({totalItems} Productos)</h1>
            
            <div className="cart-content-wrapper">
                
                {/* 1. COLUMNA PRINCIPAL: LISTA DE PRODUCTOS */}
                <div className="cart-items-list">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <div className="item-details">
                                {/* Simulación de imagen: */}
                                <div className="item-image-placeholder"></div>
                                
                                <div>
                                    <p className="item-name">{item.nombre}</p>
                                    <p className="item-price-unit">${item.precio.toFixed(2)} c/u</p>
                                    
                                    <div className="item-controls">
                                        
                                        {/* CONTROL DE CANTIDAD (+/-) */}
                                        <div className="quantity-control">
                                            <button 
                                                // Llama a la función de cambio con cantidad - 1
                                                onClick={() => handleQuantityChange(item.id, item.cantidad - 1)}
                                                disabled={item.cantidad <= 1} // Desactivar si es 1
                                                className="qty-btn minus-btn"
                                            >
                                                <FaMinus size={10} />
                                            </button>
                                            
                                            <input 
                                                type="number" 
                                                min="1" 
                                                value={item.cantidad} 
                                                readOnly 
                                                className="qty-input"
                                            />
                                            
                                            <button 
                                                // Llama a la función de cambio con cantidad + 1
                                                onClick={() => handleQuantityChange(item.id, item.cantidad + 1)}
                                                className="qty-btn plus-btn"
                                            >
                                                <FaPlus size={10} />
                                            </button>
                                        </div>
                                        {/* FIN DE CONTROL DE CANTIDAD */}

                                        <button 
                                            className="remove-btn" 
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Precio total por línea (se recalcula automáticamente) */}
                            <p className="item-subtotal-price">${(item.precio * item.cantidad).toFixed(2)}</p>
                        </div>
                    ))}
                    
                    {/* Mostrar mensaje si el carrito está vacío */}
                    {cartItems.length === 0 && (
                        <p className="empty-cart-message">Tu carrito está vacío. ¡Añade algunos productos!</p>
                    )}

                    {/* Enlace para seguir comprando */}
                    <Link to="/products" className="continue-shopping-link">
                        &#8592; Seguir Comprando
                    </Link>
                </div>
                
                
                {/* 2. COLUMNA LATERAL: RESUMEN DEL PEDIDO */}
                <div className="cart-summary">
                    <h2>Resumen de Compra</h2>
                    
                    <div className="summary-line">
                        <span>Productos ({totalItems}):</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {/* Se ELIMINA la línea de Costo de Envío */}
                    
                    <hr />
                    
                    <div className="summary-line total-line">
                        <span>Total:</span>
                        {/* El total ahora es el subtotal */}
                        <span>${subtotal.toFixed(2)}</span> 
                    </div>
                    
                    <button className="checkout-btn" disabled={cartItems.length === 0}>
                        Finalizar Compra
                    </button>
                </div>
            </div>
        </div>
    );
}
