import React from "react";
import PokemonCard from "./PokemonCard";
import { Pokemon } from "../assets/types/types";
import "../assets/styles/PokemonList.css";

interface PokemonListProps {
  pokemons: Pokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }) => {
  return (
    <div className="row">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="col-sm-12 col-md-6 col-lg-4 pokemon-card-col">
          <PokemonCard pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
