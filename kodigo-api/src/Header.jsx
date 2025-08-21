// src/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./useAuth";
import { logoutUser } from "./auth";
import "./App.css";

export default function Header() {
  const { user } = useAuth();
  const location = useLocation();

  // No mostrar header en la página de login
  if (location.pathname === "/login") return null;

  return (
    <header className="header">
      <div className="logo">Kodigo</div>
      {user && (
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/register">Registro</Link>
          <button className="logout-btn" onClick={logoutUser}>
            Cerrar sesión
          </button>
        </nav>
      )}
    </header>
  );
}
