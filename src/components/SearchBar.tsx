import React, { useState } from "react";

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    return (
        <form className="d-flex mb-4" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control me-2"
                placeholder="Buscar Pokémon..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
                Buscar
            </button>
        </form>
    );
};

export default SearchBar;
