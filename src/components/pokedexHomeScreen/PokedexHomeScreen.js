import React, { useEffect, useReducer, useState } from "react";
import PokemonList from "../pokemonList/PokemonList";
import Pokemon from "../pokemon/Pokemon";
import "./pokedexHomeScreen.css";
import {
  pokemonReducer,
  INITIAL_STATE,
} from "../../reducerFunctions/pokemonReducer";

export default function PokedexHomeScreen() {
  const [pokemonSearch, setPokemonSearch] = useState("");
  //reducer - updates state for handelFetch status
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  // state for storing caught pokemon data
  const [pokemonData, setPokemonData] = useState();

  const handleSearchClick = (e) => {
    e.preventDefault();
    handleFetch();
    setPokemonSearch("");
  };

  const handleFetch = async () => {
    try {
      // dispatch calls action type to update initial state in pokemonReducer
      dispatch({ type: "FETCH_START" });
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
      );

      if (!res.ok) {
        let errorMessage = "Failed to fetch data from server";
        if (res.status === 404) {
          errorMessage = "Pokemon not found";
        } else if (res.status >= 500) {
          errorMessage = "Server error. Please try again later";
        }
        throw new Error(errorMessage);
      }

      const data = await res.json();
      // dispatch calls action type to update initial state with payload(data)
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      setPokemonData();
      setPokemonData(data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
      console.error("Something went went wrong:", err.message);
    }
  };

  return (
    <main className="homescreen-container">
      <form className="search-pokemon-form">
        <input
          className="search-pokemon"
          value={pokemonSearch}
          onChange={(e) => setPokemonSearch(e.target.value)}
        />
        <button onClick={handleSearchClick}>search</button>
      </form>
      <div className="list-data-container">
        <section className="pokemon-list-component">
          <PokemonList />
        </section>
        <section className="pokemon-component">
          <Pokemon pokemonData={pokemonData} />
        </section>
      </div>
    </main>
  );
}
