import { useState, useEffect } from "react";
import { FilterCriteria } from "../components/Filter";
import { Pokemon } from "../assets/types/types";

export const useFilters = (pokemons: Pokemon[], criteria: FilterCriteria) => {
    const [filtered, setFiltered] = useState<Pokemon[]>(pokemons);

    useEffect(() => {
        let result = pokemons;
        
        if (criteria.name) {
            result = result.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(criteria.name!.toLowerCase())
            );
        }
        
        if (criteria.type) {
            result = result.filter((pokemon) =>
                pokemon.pokemon_v2_pokemontypes.some(
                    (t) => t.pokemon_v2_type.name.toLowerCase() === criteria.type!.toLowerCase()
                )
            );
        }
        
        // Convertir peso: pokemon.weight está en hectogramos, dividir por 10 para obtener kg.
        if (criteria.minWeight !== undefined) {
            result = result.filter((pokemon) => (pokemon.weight / 10) >= criteria.minWeight!);
        }
        
        if (criteria.maxWeight !== undefined) {
            result = result.filter((pokemon) => (pokemon.weight / 10) <= criteria.maxWeight!);
        }
        
        // Convertir altura: pokemon.height está en decímetros, dividir por 10 para obtener metros.
        if (criteria.minHeight !== undefined) {
            result = result.filter((pokemon) => (pokemon.height / 10) >= criteria.minHeight!);
        }
        
        if (criteria.maxHeight !== undefined) {
            result = result.filter((pokemon) => (pokemon.height / 10) <= criteria.maxHeight!);
        }
        
        setFiltered(result);
    }, [pokemons, criteria]);

    // Si no se encuentran coincidencias, se devuelve un arreglo vacío o se podría manejar de otra forma.
    return filtered.length > 0 ? filtered : [];
};
