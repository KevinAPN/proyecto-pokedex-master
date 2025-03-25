import React from "react";
import "../assets/styles/Home.css";

const Card: React.FC = () => {
  const pokemons = [
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
      title: "Umbreon",
      description: "Un Pokémon nocturno con un brillo misterioso en la oscuridad."
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
      title: "Gengar",
      description: "Un Pokémon travieso que disfruta asustando a la gente."
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png",
      title: "Greninja",
      description: "Rápido y sigiloso, ataca con shurikens de agua."
    },
    {
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/717.png",
      title: "Yveltal",
      description: "Un Pokémon legendario con un aura oscura y poderosa."
    }
  ];

  return (
    <div className="container">
      <div className="row">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="col-md-3">
            <div className="card pokemon-card">
              <img
                src={pokemon.image}
                className="card-img-top pokemon-image"
                alt={pokemon.title}
              />
              <div className="card-body">
                <h5 className="card-title">{pokemon.title}</h5>
                <p className="card-text">{pokemon.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
