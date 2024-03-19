import { useReducer, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import {
  pokemonReducer,
  INITIAL_STATE,
} from "./reducerFunctions/pokemonReducer";
import Navabar from "./components/navbar/Navabar";
import Button from "./components/Button";
import Pokemon from "./components/Pokemon";
import Homepage from "./Pages/Homepage";
import Dex from "./Pages/dex/Dex";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export const AppContext = createContext();

function App() {
  //reducer - updates state for handelFetch status
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);
  // state for storing caught pokemon data
  const [pokemonData, setPokemonData] = useState([]);

  // Handle click for Pokemon search and call handleFetch()
  const handleClick = (e) => {
    e.preventDefault();
    handleFetch();
  };

  // fetch data function
  const handleFetch = async () => {
    try {
      // dispatch calls action type to update initial state in pokemonReducer
      dispatch({ type: "FETCH_START" });
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

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
      console.log(data);
      setPokemonData([...pokemonData, data]);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
      console.error("Something went went wrong:", err.message);
    }
  };

  return (
    <Router>
      <AppContext.Provider value={{ pokemonData }}>
        <div className="App">
          <header>
            <Navabar />
          </header>
          <main className="main-container-app">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dex" element={<Dex />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
