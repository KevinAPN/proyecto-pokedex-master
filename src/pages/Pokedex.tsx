import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import Loading from "../components/Loading";
import Error from "../components/Error";
import SearchBar from "../components/SearchBar";
import Filter, { FilterCriteria } from "../components/Filter";
import PokemonList from "../components/PokemonList";
import { AllPokemon, Pokemon } from "../assets/types/types";
import { usePagination } from "../hooks/usePagination";
import { useFilters } from "../hooks/useFilters";
import "../assets/styles/PokemonList.css";

const MAX_ITEMS = 100;       // Máximo de Pokémon a consultar
const ITEMS_PER_PAGE = 20;   // Elementos por página

const Pokedex: React.FC = () => {
    // Estado para guardar los filtros ingresados por el usuario
    const [criteria, setCriteria] = useState<FilterCriteria>({});
    // Estado para la página actual de paginación local
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Consulta para traer hasta MAX_ITEMS Pokémon sin filtros (se filtra localmente)
    const { data, loading, error } = useQuery<AllPokemon>(GET_POKEMONS, {
        variables: { limit: MAX_ITEMS, offset: 0 },
        fetchPolicy: "cache-first",
    });

    const allPokemons: Pokemon[] = data ? data.pokemon_v2_pokemon : [];
    // Se aplica el filtrado local sobre los 100 Pokémon obtenidos
    const filteredPokemons = useFilters(allPokemons, criteria);
    // Paginación local sobre el arreglo filtrado
    const { currentData, totalPages } = usePagination<Pokemon>(filteredPokemons, ITEMS_PER_PAGE, currentPage);

    // Callback para actualizar filtros y reiniciar la página
    const handleFilterChange = (filter: FilterCriteria) => {
        setCriteria(filter);
        setCurrentPage(1);
    };

    // Callback para búsqueda rápida por nombre
    const handleSearch = (query: string) => {
        const newCriteria = { ...criteria, name: query };
        setCriteria(newCriteria);
        setCurrentPage(1);
    };

    // Actualiza la página de paginación local
    const updatePage = (newPage: number) => {
        setCurrentPage(newPage);
    };

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    return (
        <div className="container mt-5 pokedex-container">
            <h1 className="mb-4 pokedex-title">Pokédex</h1>
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
                    onClick={() => updatePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
                <span>
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    className="btn btn-secondary ms-2"
                    onClick={() => updatePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default Pokedex;
