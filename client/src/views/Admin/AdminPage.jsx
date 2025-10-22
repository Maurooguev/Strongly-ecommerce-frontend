import React from 'react';
import './AdminPage.css'; // Crea un CSS simple para esta vista

export default function AdminPage() {
    return (
        <div className="admin-dashboard">
            <h1>Panel de Administración de Productos</h1>
            <p>Bienvenido, Administrador. Desde aquí puedes gestionar el inventario.</p>
            
            <div className="admin-actions">
                <button className="btn-add">Agregar Nuevo Producto</button>
                <button className="btn-manage">Modificar / Eliminar Productos</button>
                
                {/* Aquí iría un componente para listar y editar productos */}
                {/* <ProductListForAdmin /> */}
            </div>
        </div>
    );
}