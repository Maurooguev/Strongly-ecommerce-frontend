import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Íconos (opcional)

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // La función sabe qué acción ejecutar basándose en el argumento
    const handleSubmit = (e, isLoginAction) => {
        e.preventDefault(); 
        
        if (isLoginAction) {
            // Lógica de LOGIN
            console.log('Intento de Login:', { email, password });
            
            // Simulación de autenticación (Ej: Si es 'admin@strongly.com', es ADMIN)
            if (email === 'admin@strongly.com' && password === 'admin123') {
                console.log("LOGIN EXITOSO como ADMIN. Redirigiendo a /admin");
                navigate('/admin');
            } else if (email && password) {
                console.log("LOGIN EXITOSO como USUARIO. Redirigiendo a /home");
                navigate('/home');
            } else {
                console.log("Login Fallido. Datos incompletos.");
            }

        } else {
            // Lógica de REGISTRO
            if (!name || !email || !password) {
                console.log('Error: Por favor, completa todos los campos de registro.');
                return;
            }
            console.log('Intento de Registro:', { name, email, password });
            console.log('Registro simulado. Redirigiendo a /home');
            navigate('/home'); 
        }
    };

    return (
        // Contenedor de la página: centrará el wrapper de los dos formularios
        <div className="register-page-container">
            
            {/* Wrapper de los dos formularios (para display: flex) */}
            <div className="forms-wrapper">
                
                {/* 1. FORMULARIO DE REGISTRO (Izquierda) */}
                <div className="form-box register-form-box">
                    <h2>Registro</h2>
                    <form onSubmit={(e) => handleSubmit(e, false)}> {/* isLoginAction = false */}
                        
                        {/* Campo de Nombre */}
                        <div className="input-group">
                            {/* <FaUser className="icon" /> */}
                            <input
                                type="text"
                                placeholder="Nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo de Correo */}
                        <div className="input-group">
                            {/* <FaEnvelope className="icon" /> */}
                            <input
                                type="email"
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo de Contraseña */}
                        <div className="input-group">
                            {/* <FaLock className="icon" /> */}
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Botón de ACEPTAR para Registro */}
                        <button type="submit" className="btn btn-register-action">
                            Aceptar
                        </button>
                    </form>
                </div>
                
                {/* 2. FORMULARIO DE LOGIN (Derecha) */}
                <div className="form-box login-form-box">
                    <h2>Login</h2>
                    <form onSubmit={(e) => handleSubmit(e, true)}> {/* isLoginAction = true */}
                        
                        {/* Campo de Correo */}
                        <div className="input-group">
                            {/* <FaEnvelope className="icon" /> */}
                            <input
                                type="email"
                                placeholder="Correo"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Campo de Contraseña */}
                        <div className="input-group">
                            {/* <FaLock className="icon" /> */}
                            <input
                                type="password"
                                placeholder="Contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        
                        {/* Enlace de "Olvidaste tu Contraseña" */}
                        <p className="forgot-password">
                            Olvidaste tu Contraseña? <a href="#">click aquí</a>
                        </p>

                        {/* Botón de ACEPTAR para Login */}
                        <button type="submit" className="btn btn-login-action">
                            Aceptar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
