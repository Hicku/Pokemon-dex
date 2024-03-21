import React, { useContext } from "react";
import "./pokemon.css";
import { AppContext } from "../../App";

export default function Pokemon({ pokemonData, onHandleAddPokemon }) {
  const context = useContext(AppContext);

  const handleAddClick = (e) => {
    e.preventDefault();
    const pokeId = pokemonData.id;
    onHandleAddPokemon(pokeId);
  };

  console.log("Is dataz:", pokemonData);
  return (
    <div>
      <main>
        <div className="data-container">
          <section className="image-container" onClick={handleAddClick}>
            <img src={pokemonData?.sprites.front_default}></img>
          </section>
          <section className="info-container">
            <div className="name-type-container">
              <div className="name-container">
                <h3>{context.convertText(pokemonData?.name)}</h3>
              </div>
              <div className="type-container">
                {pokemonData?.types
                  .map((curType) => context.convertText(curType.type.name))
                  .join("/")}
              </div>
            </div>
            <div className="weight-height-container">
              <div>
                <div className="weight-container">
                  Weight: {pokemonData?.weight}
                </div>
                <div className="height-container">
                  Height: {pokemonData?.height}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
