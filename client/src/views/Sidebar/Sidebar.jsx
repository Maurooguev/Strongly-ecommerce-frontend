import React from 'react';
import './Sidebar.css'; 

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h3>Filtrar por</h3>

            {/* FILTRO 1: CATEGORÍAS */}
            <div className="filter-group">
                <h4>Categorías</h4>
                <label><input type="checkbox" name="category" value="pesas" /> Pesas</label>
                <label><input type="checkbox" name="category" value="accesorios" /> Accesorios</label>
                <label><input type="checkbox" name="category" value="maquinas" /> Máquinas</label>
            </div>

            <hr />

            {/* FILTRO 2: PRECIO */}
            <div className="filter-group">
                <h4>Precio</h4>
                <div className="price-inputs">
                    <input type="number" placeholder="Mín." className="price-input-min" />
                    
                    <input type="number" placeholder="Máx." className="price-input-max" />
                </div>
            </div>
            
            {/* ... otros filtros ... */}
        </aside>
    );
}