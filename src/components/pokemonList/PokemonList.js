import React from "react";
import ListItem from "../listItem/ListItem";
import "./pokemonList.css";

export default function PokemonList({ pokemonListdata }) {
  return (
    <div>
      {pokemonListdata?.map((pokemon) => (
        <ListItem pokemon={pokemon} />
      ))}
    </div>
  );
}
