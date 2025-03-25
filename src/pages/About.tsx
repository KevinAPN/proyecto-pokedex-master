import React from "react";
import { Link } from "react-router-dom";

const About: React.FC = () => {


    // const styles = {
    //     backgroundColor: "blue",
    //     color: "white",
    //     padding: "20px",
    //     textAlign: "center"
    //   };


    return (
        <div className="container mt-5 bg-light text-center py-4" >
            
            <h1 className="fw-bold text-primary">🔍 Acerca de la Pokédex </h1>
            <p className="text-secondary fs-5">
                Se desarrolló para consultar y visualizar información de Pokémon usando  
                <span className="fw-bold text-dark"> GraphQL, React y Bootstrap.</span>  
            </p>
            <img 
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png" 
                alt="Pikachu" 
                className="img-fluid my-3" 
                style={{ maxWidth: "150px" }}
            />
            <p className="text-muted">Conviertete un verdadero Maestro Pokémon. ⚡</p>
            <Link to="/pokedex" className="btn btn-danger px-4 py-2">
                🔙 Entrar
            </Link>
        </div>
    );
};

export default About;
