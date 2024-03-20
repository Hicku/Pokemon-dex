import React, { useContext } from "react";
import "./pokemon.css";

export default function Pokemon({ pokemonData }) {
  console.log("Is dataz:", pokemonData);
  return (
    <div>
      <main>
        <div className="data-container">
          <section className="image-container">
            <img src={pokemonData?.sprites.front_default}></img>
          </section>
          <section className="info-container">
            <div className="name-type-container">
              <div className="name-container">
                <h3>{pokemonData?.name}</h3>
              </div>
              <div className="type-container">
                {pokemonData?.types
                  .map((curType) => curType.type.name)
                  .join("/")}
              </div>
            </div>
            <div className="weight-height-container">
              <div>
                <div className="weight-container">
                  weight: {pokemonData?.weight}
                </div>
                <div className="height-container">
                  height: {pokemonData?.height}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
