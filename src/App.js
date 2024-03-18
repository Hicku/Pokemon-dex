import { useReducer } from "react";
import "./App.css";
import {
  pokemonReducer,
  INITIAL_STATE,
} from "./reducerFunctions/pokemonReducer";

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_STATE);

  const handleClick = (e) => {
    e.preventDefault();
    handleFetch();
  };

  const handleFetch = async () => {
    try {
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
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      console.log(data);
    } catch (err) {
      dispatch({ type: "FETCH_ERROR", payload: err.message });
      console.error("Something went went wrong:", err.message);
    }
  };

  return (
    <div className="App">
      {state.error && <p>{state.curErrorMessage}</p>}
      <button onClick={handleClick}>
        {state.loading ? "waiting..." : "Catch Pokemon"}
      </button>
    </div>
  );
}

export default App;
