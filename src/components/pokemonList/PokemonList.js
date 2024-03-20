import React from "react";
import ListItem from "../listItem/ListItem";
import "./pokemonList.css";

export default function PokemonList() {
  const defaultData = [
    {
      id: "1",
      name: "Ditto",
      num: "003",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    },
    {
      id: "2",
      name: "Bulbasaur",
      num: "002",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
      id: "3",
      name: "Vulpix",
      num: "003",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    },
  ];

  return (
    <div>
      {defaultData.map((pokemon) => (
        <ListItem pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}
