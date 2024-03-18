import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Pokemon() {
  const displayPokeData = useContext(AppContext);

  return <div>{<div>{displayPokeData.pokemonData[0].name}</div>}</div>;
}
