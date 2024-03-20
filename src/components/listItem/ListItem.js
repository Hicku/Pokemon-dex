import React from "react";
import "./listItem.css";

export default function ListItem({ pokemon }) {
  const formatGameindex = (num) => {
    if (num < 10) {
      return `00${num}`;
    } else if (num > 10 && num < 100) {
      return `0${num}`;
    } else {
      return { num };
    }
  };

  return (
    <main className="main-item-container">
      <div className="list-container">
        <div>{formatGameindex(pokemon.game_indices[19].game_index)}</div>
        <div className="list-name-container">{pokemon.name}</div>
      </div>
    </main>
  );
}
