import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../assets/types/types";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="col-md-4">
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
