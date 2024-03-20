import React from "react";
import ListItem from "../listItem/ListItem";
import "./pokemonList.css";

export default function PokemonList({ pokemonListdata }) {
  return (
    <div>
      {pokemonListdata?.map((pokemon) => (
        <ListItem pokemon={pokemon} key={pokemon.game_indices[15].game_index} />
      ))}
    </div>
  );
}
