import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query {
    pokemon_v2_pokemon(limit: 20) {
      id
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;
