import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navabar() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/dex"}>Dex</Link>
    </div>
  );
}
