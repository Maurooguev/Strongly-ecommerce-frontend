import React, { useState } from 'react';
import './AddProduct.css';

export default function AddProduct() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        imageFile: null,
        imageUrl: '' // Opcional, para mostrar la vista previa
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, imageFile: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Enviando nuevo producto:', formData);
        
        // Aquí iría la lógica para enviar los datos a la base de datos (Firestore)
        // y subir la imagen.
        alert('Producto agregado (simulación). Revisa la consola.');
        
        // Volver al panel de admin después del envío si es exitoso
        // navigate('/admin'); 
    };

    return (
        <div className="add-product-container">
            <h1>Agregar Nuevo Producto</h1>
            
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

                {/* Imagen */}
                <div className="form-group">
                    <label htmlFor="imageFile">Imagen:</label>
                    <input 
                        type="file" 
                        id="imageFile" 
                        name="imageFile" 
                        accept="image/*"
                        onChange={handleFileChange} 
                    />
                </div>
                
                <button type="submit" className="btn-submit">Guardar Producto</button>
            </form>
        </div>
    );
}