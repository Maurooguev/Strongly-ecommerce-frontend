import React, { useState } from 'react';
// Importa el CSS específico para este formulario (lo crearemos después)
import './Register.css'; 
// Importa íconos (si estás usando una librería como react-icons)
// Si no usas react-icons, puedes usar imágenes SVG o simplemente no poner los íconos por ahora.
// import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Ejemplo de react-icons

const Register = () => {
    // 1. Estados para almacenar los datos del formulario
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false); // Estado para alternar entre Registro y Login

    // 2. Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto de recarga
        
        if (isLogin) {
            console.log('Intento de Login:', { email, password });
            // Aquí iría la llamada a tu API para iniciar sesión
            alert('Lógica de Login simulada. Datos en consola.');
        } else {
            // Validación simple
            if (!name || !email || !password) {
                alert('Por favor, completa todos los campos.');
                return;
            }
            console.log('Intento de Registro:', { name, email, password });
            // Aquí iría la llamada a tu API para registrar el usuario
            alert('Lógica de Registro simulada. Datos en consola.');
        }

        // Después de un registro/login exitoso, redirigirías al usuario
        // Por ejemplo: history.push('/home');
    };

    return (
        // 3. Contenedor principal para el formulario (con los estilos oscuros)
        <div className="register-page-container">
            <form className="form-box" onSubmit={handleSubmit}>
                <h2>{isLogin ? 'Login' : 'Registro'}</h2>

                {/* 4. Campo de Nombre (Solo visible en la vista de Registro) */}
                {!isLogin && (
                    <div className="input-group">
                        {/* <FaUser className="icon" /> */}
                        <input
                            type="text"
                            placeholder="Nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required={!isLogin}
                        />
                    </div>
                )}

                {/* 5. Campo de Correo */}
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

                {/* 6. Campo de Contraseña */}
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

                {/* 7. Enlace de "Olvidaste tu Contraseña" */}
                <p className="forgot-password">
                    Olvidaste tu Contraseña? <a href="#">click aquí</a>
                </p>

                {/* 8. Botones de acción */}
                <div className="button-group">
                    {/* Botón de Registro (Visible en Registro y Login) */}
                    <button
                        type="submit"
                        className={`btn ${!isLogin ? 'btn-register-active' : 'btn-inactive'}`}
                        onClick={() => setIsLogin(false)}
                    >
                        Registro
                    </button>
                    
                    {/* Botón de Login (Visible en Registro y Login) */}
                    <button
                        type="submit"
                        className={`btn ${isLogin ? 'btn-login-active' : 'btn-inactive'}`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;