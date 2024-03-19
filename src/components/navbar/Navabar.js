import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navabar() {
  return (
    <nav className="nav-container">
      <div className="logo">Logo</div>
      <h1>PokeDex</h1>
      <div className="links">
        <NavLink to={"/"} className="nav-link">
          Homepage
        </NavLink>
        <NavLink to={"/dex"} className="nav-link">
          Dex
        </NavLink>
      </div>
    </nav>
  );
}
