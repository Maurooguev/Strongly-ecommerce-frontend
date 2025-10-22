import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './AddProduct.css'; // Estilos para el formulario

// SIMULACIÓN: Lista de productos para la búsqueda al editar (DEBE coincidir con ManageProductsPage.jsx)
const initialProducts = [
    // Se ha agregado la propiedad 'stock'
    { id: 1, title: 'Mancuernas 10kg', description: 'Par de mancuernas de hierro fundido de alta calidad.', price: 50.00, stock: 15, imageUrl: 'url-mancuernas.jpg' }, 
    { id: 2, title: 'Banda Elástica', description: 'Banda de resistencia media, ideal para entrenamiento en casa.', price: 15.50, stock: 100, imageUrl: 'url-banda.jpg' },
    { id: 3, title: 'Barra Dominadas', description: 'Barra para puerta, fácil instalación y agarre cómodo.', price: 75.00, stock: 5, imageUrl: 'url-barra.jpg' },
];

const defaultFormData = {
    title: '',
    description: '',
    price: '',
    stock: '', // Nuevo campo para stock
    imageFile: null,
};


export default function AddProduct() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    const [formData, setFormData] = useState(defaultFormData);
    const [isEditing, setIsEditing] = useState(false);
    
    const productIdToEdit = searchParams.get('edit');

    // 1. EFECTO PARA CARGAR DATOS EN MODO EDICIÓN
    useEffect(() => {
        if (productIdToEdit) {
            // Convertir el ID de string a número
            const id = parseInt(productIdToEdit);
            // Buscar el producto en la data simulada
            const productToEdit = initialProducts.find(p => p.id === id);

            if (productToEdit) {
                // Si encontramos el producto, establecemos el modo edición y precargamos el formulario
                setIsEditing(true);
                setFormData({
                    title: productToEdit.title,
                    description: productToEdit.description,
                    // Convertir a string para el campo input[number]
                    price: productToEdit.price.toString(), 
                    stock: productToEdit.stock.toString(), // Cargar el stock
                    imageFile: null, 
                });
            } else {
                // Si el ID de edición no existe, redirigir al panel de administración
                console.error(`Producto con ID ${productIdToEdit} no encontrado.`);
                navigate('/admin');
            }
        } else {
            // Modo "Agregar nuevo producto"
            setIsEditing(false);
            setFormData(defaultFormData);
        }
    }, [productIdToEdit, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, imageFile: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const action = isEditing ? 'Editado' : 'Agregado';
        
        console.log(`Producto ${action}:`, formData);
        
        // Aquí iría la lógica para enviar los datos a la base de datos (Firestore)
        
        console.log(`Producto ${action} exitosamente (simulación).`);
        
        // Navegar de vuelta al panel de gestión
        navigate('/admin/manage'); 
    };

    return (
        <div className="add-product-container">
            {/* Título dinámico */}
            <h1>{isEditing ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h1>
            
            <form onSubmit={handleSubmit} className="product-form">
                
                {/* Título */}
                <div className="form-group">
                    <label htmlFor="title">Título del Producto:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* Descripción */}
                <div className="form-group">
                    <label htmlFor="description">Descripción:</label>
                    <textarea 
                        id="description" 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* Precio */}
                <div className="form-group">
                    <label htmlFor="price">Precio ($):</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price" 
                        value={formData.price} 
                        onChange={handleChange} 
                        min="0"
                        step="0.01"
                        required 
                    />
                </div>
                
                {/* Stock - CAMPO AGREGADO */}
                <div className="form-group">
                    <label htmlFor="stock">Cantidad en Stock:</label>
                    <input 
                        type="number" 
                        id="stock" 
                        name="stock" 
                        value={formData.stock} 
                        onChange={handleChange} 
                        min="0"
                        step="1"
                        required 
                    />
                </div>

                {/* Imagen */}
                <div className="form-group">
                    {/* El mensaje cambia en modo edición */}
                    <label htmlFor="imageFile">Imagen {isEditing && "(Opcional si no cambia)"}:</label>
                    <input 
                        type="file" 
                        id="imageFile" 
                        name="imageFile" 
                        accept="image/*"
                        onChange={handleFileChange} 
                        // Solo es requerido al AGREGAR
                        required={!isEditing}
                    />
                </div>
                
                <button type="submit" className="btn-submit">
                    {/* Texto del botón dinámico */}
                    {isEditing ? 'Guardar Cambios' : 'Guardar Producto'}
                </button>
            </form>
        </div>
    );
}