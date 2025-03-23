import React from "react";
import { Pokemon } from "../assets/types/types";
import { SPRITE_BASE_URL } from "../utils/constants";
import { formatHeight, formatWeight } from "../utils/formatData";

interface PokemonCardProps {
    pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    const imageUrl = `${SPRITE_BASE_URL}${pokemon.id}.png`;

    return (
        <div className="card m-2" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={pokemon.name} />
            <div className="card-body">
                <h5 className="card-title text-capitalize">{pokemon.name}</h5>
                <p className="card-text">Altura: {formatHeight(pokemon.height)}</p>
                <p className="card-text">Peso: {formatWeight(pokemon.weight)}</p>
                <a href={`/pokemon/${pokemon.id}`} className="btn btn-primary">
                    Ver detalles
                </a>
            </div>
        </div>
    );
};

export default PokemonCard;
