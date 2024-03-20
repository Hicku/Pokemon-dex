import { useReducer, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navabar from "./components/navbar/Navabar";
import Button from "./components/Button";
import Homepage from "./Pages/Homepage";
import Dex from "./Pages/dex/Dex";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export const AppContext = createContext();

function App() {
  return (
    <Router>
      <AppContext.Provider>
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
