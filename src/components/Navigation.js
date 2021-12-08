import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="pies/Trinity">Trinity</Link>
      <Link to="pies/Aja">Aja</Link>
      <Link to="pies/Doc">Doc</Link>
      <Link to="create">+ Add</Link>
    </nav>
  );
}
