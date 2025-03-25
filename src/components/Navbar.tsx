import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "bg-dark" : "bg-warning"}`}>
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/2094/2094510.png" 
                        alt="Pokédex Logo" 
                        className="pokedex-icon"
                    />
                    <span className="ms-2">Pokédex</span>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pokedex">Pokédex</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Acerca de</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-outline-light d-flex align-items-center py-1 px-3" style={{ backgroundColor: theme === "dark" ? "var(--dark-primary)" : "var(--primary-color)", color: "black" }} onClick={toggleTheme}>
                                {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
