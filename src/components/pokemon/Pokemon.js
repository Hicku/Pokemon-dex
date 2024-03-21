import React, { useContext } from "react";
import "./pokemon.css";
import { AppContext } from "../../App";

export default function Pokemon({ pokemonData, onHandleAddPokemon }) {
  const context = useContext(AppContext);

  // convert hieght to kg
  const convertWeight = (weight) => {
    let weightString = "";

    if (weight < 10) {
      weightString = `0.${weight}kg`;
    } else if (weight % 10 === 0) {
      weightString = `${Math.floor(weight / 10)}kg`;
    } else {
      weightString = `${Math.floor(weight / 10)}.${weight % 10}kg`;
    }
    return weightString;
  };

  //convert height to meters
  const convertHeight = (height) => {
    let heightString = "";

    if (height >= 10) {
      heightString = `${Math.floor(height / 10)}.${height % 10}m`;
    } else {
      heightString = `0.${height}m`;
    }

    return heightString;
  };

  // handle button click for adding pokemon
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
            <img
              className="image"
              src={pokemonData?.sprites.front_default}
            ></img>
          </section>
          <section className="info-container">
            <div className="name-type-container">
              <div className="name-container">
                <h3>{context.convertText(pokemonData?.name)}</h3>
              </div>
              <div className="type-container">
                {/* convert multiple types to one string */}
                {pokemonData?.types
                  .map((curType) => context.convertText(curType.type.name))
                  .join("/")}
              </div>
            </div>
            <div className="weight-height-container">
              <div>
                <div className="weight-container">
                  Weight: {convertWeight(pokemonData?.weight)}
                </div>
                <div className="height-container">
                  Height: {convertHeight(pokemonData?.height)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
