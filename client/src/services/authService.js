// src/services/authService.js

const API_URL = "/api/v1/auth"; // ✅ usa el proxy definido en vite.config.js

export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/authenticate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    localStorage.setItem("token", data.token); // guarda token JWT
    return data;
  } catch (err) {
    console.error("Error en login:", err);
    throw err;
  }
};

export const register = async (userData) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(`Error ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error en register:", err);
    throw err;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
