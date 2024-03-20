import React from "react";
import "./listItem.css";

export default function ListItem({ pokemon }) {
  return (
    <main className="main-item-container">
      <div className="list-container">
        <div>{pokemon.num}</div>
        <div className="list-name-container">{pokemon.name}</div>
      </div>
    </main>
  );
}
