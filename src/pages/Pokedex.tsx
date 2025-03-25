import React, { useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Filter, { FilterCriteria } from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { useFilters } from "../hooks/useFilters";
import { usePagination } from "../hooks/usePagination";
import PokemonList from "../components/PokemonList";

const Pokedex: React.FC = () => {
    const { pokemons, loading, error } = useFetchPokemon();
    const [criteria, setCriteria] = useState<FilterCriteria>({});

    // Se aplica el filtrado: se pasa el arreglo original y los criterios
    const filteredPokemons = useFilters(pokemons, criteria);

    // Se aplica la paginación sobre la lista filtrada
    const { currentData, currentPage, totalPages, goToPage } = usePagination(filteredPokemons, 9); // 9 items por página

    const handleFilterChange = (filter: FilterCriteria) => {
        setCriteria(filter);
    };

    const handleSearch = (query: string) => {
        // Actualizamos el criterio "name" directamente; ya no usamos un estado separado para searchQuery.
        setCriteria((prev) => ({ ...prev, name: query }));
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-warning fw-bold text-shadow text-lowercase">Pokédex</h1>
            <SearchBar onSearch={handleSearch} />
            <Filter onFilterChange={handleFilterChange} />
            {filteredPokemons.length === 0 ? (
                <div className="alert alert-info mt-4">
                    No se encontraron Pokémon con los criterios aplicados.
                </div>
            ) : (
                <PokemonList pokemons={currentData} />
            )}
            {/* Controles de paginación */}
            <div className="d-flex justify-content-center my-4">
                <button
                    className="btn btn-secondary me-2"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Pokedex;
