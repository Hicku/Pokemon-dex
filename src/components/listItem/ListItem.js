import React, { useContext } from "react";
import "./listItem.css";
import { AppContext } from "../../App";

export default function ListItem({ pokemon }) {
  const context = useContext(AppContext);
  // format gameindex to pokemon number system
  const formatGameindex = (num) => {
    if (num < 10) {
      return `00${num}`;
    } else if (num > 10 && num < 100) {
      return `0${num}`;
    } else {
      return `${num}`;
    }
  };

  const checkColourType = (pokeType) => {
    for (let i = 0; i < backgrounColours.length; i++) {
      if (pokeType === backgrounColours[i].type) {
        return backgrounColours[i].colour;
      }
    }
    return "#fbf7f5";
  };

  const backgrounColours = [
    {
      type: "fire",
      colour: "#ff7a49",
    },
    {
      type: "grass",
      colour: "#82C23A",
    },
    {
      type: "electric",
      colour: "#FFFF32",
    },
    {
      type: "bug",
      colour: "#DCE319",
    },
    {
      type: "flying",
      colour: "#C8BFD4",
    },
    {
      type: "ground",
      colour: "#F2BD1B",
    },
    {
      type: "steel",
      colour: "#CBD1D4",
    },
    {
      type: "poison",
      colour: "#DDA0DD",
    },
    {
      type: "water",
      colour: "#9FE3EE",
    },
    {
      type: "psychic",
      colour: "#9E4773",
    },
    {
      type: "dragon",
      colour: "#D7CBBD",
    },
    {
      type: "ghost",
      colour: "#7E79A8",
    },
    {
      type: "fighting",
      colour: "#78A191",
    },
    {
      type: "dark",
      colour: "#C15EE9",
    },
    {
      type: "normal",
      colour: "#EFF6E0",
    },
  ];

  return (
    <main
      className="main-item-container"
      style={{ backgroundColor: checkColourType(pokemon.types[0].type.name) }}
    >
      <div className="list-item-container">
        <div className="id-container">{formatGameindex(pokemon.id)}</div>
        <div className="list-name-container">
          {context.convertText(pokemon.name)}
        </div>
      </div>
    </main>
  );
}
