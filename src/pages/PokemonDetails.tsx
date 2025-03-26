import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { formatHeight, formatWeight } from "../utils/formatData";
import { Pokemon } from "../assets/types/types";
import { SPRITE_BASE_URL } from "../utils/constants";
import { FaArrowLeft } from "react-icons/fa";
import "../assets/styles/PokemonDetails.css";
import { GET_POKEMON_DETAIL } from "../graphql/queries";

const PokemonDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const pokemonId = Number(id);

    
    const { data, loading, error } = useQuery<{ pokemon_v2_pokemon: Pokemon[] }>(GET_POKEMON_DETAIL, {
        variables: { id: pokemonId },
    });

    if (loading) return <Loading />;
    if (error) return <Error message={error.message} />;

    
    const pokemon = data?.pokemon_v2_pokemon[0];

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
        <div className="pokemon-details-page">
            <div className="container mt-5">
                <div className="pokemon-details-container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="pokemon-info p-3">
                                <h1 className="pokemon-title">{pokemon.name.toUpperCase()}</h1>
                                <img className="img-fluid" src={`${SPRITE_BASE_URL}${pokemon.id}.png`} alt={pokemon.name} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="pokemon-stats p-3">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="stat-box">
                                            <p><strong>Altura:</strong> {formatHeight(pokemon.height)}</p>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="stat-box">
                                            <p><strong>Peso:</strong> {formatWeight(pokemon.weight)}</p>
                                        </div>
                                    </div>
                                </div>
                                <h3>Tipos:</h3>
                                <ul className="list-tipos">
                                    {pokemon.pokemon_v2_pokemontypes.map((t, index) => (
                                        <li key={index}>{t.pokemon_v2_type.name}</li>
                                    ))}
                                </ul>
                                <h3>Habilidades:</h3>
                                <ul className="list-habilidades">
                                    {pokemon.pokemon_v2_pokemonabilities.map((a, index) => (
                                        <li key={index}>{a.pokemon_v2_ability.name}</li>
                                    ))}
                                </ul>
                                <h3>Estadísticas de Combate:</h3>
                                <ul className="list-estadisticas">
                                    {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
                                        <li key={index}>
                                            {stat.pokemon_v2_stat.name}: {stat.base_stat} (Esfuerzo: {stat.effort})
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
                    <FaArrowLeft className="me-2" /> Volver
                </button>
            </div>
        </div>
    );
};

export default PokemonDetails;
