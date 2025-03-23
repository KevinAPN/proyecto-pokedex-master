import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { formatHeight, formatWeight } from "../utils/formatData";
import { Pokemon } from "../assets/types/types";
import { SPRITE_BASE_URL } from "../utils/constants";
import "../assets/styles/PokemonDetails.css";

const PokemonDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { pokemons, loading, error } = useFetchPokemon();
    const navigate = useNavigate();

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    const pokemon = pokemons.find((p: Pokemon) => p.id === Number(id));

    if (!pokemon) {
        return (
            <div className="container mt-5">
                <h2>No se encontró el Pokémon.</h2>
                <button className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Volver
                </button>
            </div>
        );
    }

    return (
        <div className="container mt-5">
            <div className="pokemon-details-container">
                <h1 className="text-capitalize">{pokemon.name}</h1>
                <img
                    src={`${SPRITE_BASE_URL}${pokemon.id}.png`}
                    alt={pokemon.name}
                />
                <p><strong>Altura:</strong> {formatHeight(pokemon.height)}</p>
                <p><strong>Peso:</strong> {formatWeight(pokemon.weight)}</p>
                <h3>Tipos:</h3>
                <ul>
                    {pokemon.pokemon_v2_pokemontypes.map((t, index) => (
                        <li key={index}>{t.pokemon_v2_type.name}</li>
                    ))}
                </ul>
                <h3>Habilidades:</h3>
                <ul>
                    {pokemon.pokemon_v2_pokemonabilities.map((a, index) => (
                        <li key={index}>{a.pokemon_v2_ability.name}</li>
                    ))}
                </ul>
                <h3>Estadísticas de Combate:</h3>
                <ul>
                    {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
                        <li key={index}>
                            {stat.pokemon_v2_stat.name}: {stat.base_stat} (Esfuerzo: {stat.effort})
                        </li>
                    ))}
                </ul>
                <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
                    Volver a la Pokédex
                </button>
            </div>
        </div>
    );
};

export default PokemonDetails;
