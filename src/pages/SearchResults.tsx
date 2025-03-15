import React, { useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";
import Error from "../components/Error";
import SearchBar from "../components/SearchBar";
import { useFilters } from "../hooks/useFilters";
import { Link } from "react-router-dom";

const SearchResults: React.FC = () => {
    const { pokemons, loading, error } = useFetchPokemon();
    const [criteria, setCriteria] = useState<{ name?: string }>({});

    const filteredPokemons = useFilters(pokemons, criteria);

    const handleSearch = (query: string) => {
        setCriteria({ name: query });
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="container mt-5">
            <h1>Resultados de la búsqueda</h1>
            <SearchBar onSearch={handleSearch} />
            <PokemonList pokemons={filteredPokemons} />
            <Link to="/pokedex" className="btn btn-secondary mt-3">
                Volver a la Pokédex
            </Link>
        </div>
    );
};

export default SearchResults;
