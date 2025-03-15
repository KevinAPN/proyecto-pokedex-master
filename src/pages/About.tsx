import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <div className="container mt-5">
            <h1>Acerca de la Pokédex</h1>
            <p>
                Esta aplicación fue desarrollada para consultar y visualizar información de Pokémon usando GraphQL, React y Bootstrap.
            </p>
            <Link to="/" className="btn btn-primary">
                Volver al Inicio
            </Link>
        </div>
    );
};

export default About;

