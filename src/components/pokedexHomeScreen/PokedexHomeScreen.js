import React from "react";
import PokemonList from "../pokemonList/PokemonList";
import Pokemon from "../pokemon/Pokemon";
import "./pokedexHomeScreen.css";

export default function PokedexHomeScreen() {
  return (
    <main className="homescreen-container">
      <div>
        <input></input>
      </div>
      <div className="list-data-container">
        <section className="pokemon-list-component">
          <PokemonList />
        </section>
        <section className="pokemon-component">
          <Pokemon />
        </section>
      </div>
    </main>
  );
}
