/*
import { usePokemon } from "../context/PokemonContext";

export const useFetchPokemon = () => {
    return usePokemon();
};
*/

import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { AllPokemon } from "../assets/types/types";

// Definición del tipo para las variables de consulta
interface QueryVariables {
    limit: number;
    offset: number;
    where?: object;
}

// Hook que recibe variables y retorna el resultado de useQuery
export const useFetchPokemon = (variables: QueryVariables) => {
    return useQuery<AllPokemon>(GET_POKEMONS, { variables });
};


