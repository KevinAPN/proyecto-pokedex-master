export interface PokemonType {
  pokemon_v2_type: {
    name: string;
  };
}

export interface PokemonAbility {
  pokemon_v2_ability: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemontypes: PokemonType[];
  pokemon_v2_pokemonabilities: PokemonAbility[];
}

export interface AllPokemon {
  pokemon_v2_pokemon: Pokemon[];
}
