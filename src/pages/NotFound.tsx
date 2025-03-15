import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="container mt-5 text-center">
            <h1>Error 404</h1>
            <p>La página que buscas no se encontró.</p>
            <Link to="/" className="btn btn-primary">
                Volver al Inicio
            </Link>
        </div>
    );
};

export default NotFound;
