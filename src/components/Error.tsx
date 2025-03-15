import React from "react";

interface ErrorProps {
    message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
    return (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
    );
};

export default Error;
