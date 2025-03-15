import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "200px" }}>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
        </div>
    );
};

export default Loading;
