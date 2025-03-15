import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>Bienvenido a la Pokédex</h1>
            <p>Explora y descubre información sobre tus Pokémon favoritos.</p>
            <Link to="/pokedex" className="btn btn-primary">
                Ver Pokédex
            </Link>
        </div>
    );
};

export default Home;
