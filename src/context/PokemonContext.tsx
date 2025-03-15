import { createContext, useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { AllPokemon } from "../assets/types/types";

interface PokemonContextProps {
    pokemons: AllPokemon["pokemon_v2_pokemon"];
    loading: boolean;
    error?: Error;
}

// Creamos el contexto con valores por defecto
const PokemonContext = createContext<PokemonContextProps | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data, loading, error } = useQuery<AllPokemon>(GET_POKEMONS);

    return (
        <PokemonContext.Provider value={{ pokemons: data?.pokemon_v2_pokemon ?? [], loading, error }}>
            {children}
        </PokemonContext.Provider>
    );
};

// Hook para consumir el contexto
export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) throw new Error("usePokemon debe usarse dentro de un PokemonProvider");
    return context;
};
