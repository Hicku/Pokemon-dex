import React, { useEffect, useState } from "react";
import "./pokedex.css";
import PokedexHomeScreen from "../pokedexHomeScreen/PokedexHomeScreen";

export default function Pokedex() {
  const [isOn, setIsON] = useState(false);
  const [showHello, setShowHello] = useState(false);
  const [ShowHomescreen, setShowHomescreen] = useState(false);

  useEffect(() => {
    if (isOn) {
      setTimeout(() => {
        setShowHello(true);
      }, 1000);
      setTimeout(() => {
        setShowHello(false);
      }, 3000);
      setTimeout(() => {
        setShowHomescreen(true);
      }, 4000);
    }
  }, [isOn]);

  const handleClickOnOff = (e) => {
    e.preventDefault();
    if (isOn) {
      setIsON(false);
      setShowHomescreen(false);
    } else if (!isOn) {
      setIsON(true);
    }
  };

  return (
    <main className="pokemon-list-container">
      <section className="list-section">
        <div
          className="screen"
          style={{
            backgroundColor: isOn ? "#E6E6FA" : "#4A575D",
            transition: "background-color 0.5s ease",
          }}
        >
          {showHello && (
            <p
              className="hello"
              style={{
                transition: "opacity 0.5s ease 1.5s, transform 0.5s ease 0.5s",
              }}
            >
              Welcome!
            </p>
          )}
          {ShowHomescreen && (
            <PokedexHomeScreen
              style={{
                transition: "opacity 0.5s 1.5s, transform 0.5 ease 0.5",
              }}
            />
          )}
        </div>

        <div className="light-and-lines-container">
          <div className="red-light-container">
            <button
              onClick={handleClickOnOff}
              className={isOn ? "red-light-on" : "red-light-off"}
            ></button>
            <p className="on-off">On-Off</p>
          </div>

          <div className="lines-container">
            <div className="lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
