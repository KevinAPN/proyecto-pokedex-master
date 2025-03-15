import React from "react";
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
    const { theme } = useTheme();
    return (
        <footer className="py-3 mt-auto text-center" style={{ backgroundColor: theme === "dark" ? "var(--dark-secondary)" : "var(--secondary-color)", color: "white" }}>
            <div className="container text-center">
                <small>© 2025 Pokédex. Todos los derechos reservados.</small>
            </div>
        </footer>
    );
};

export default Footer;
