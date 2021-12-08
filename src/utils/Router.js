import React from "react";
import { Route, Routes } from "react-router-dom";
import Pies from "../views/Pies";
import Home from "../views/Home";
import Create from "../views/Create";
import Details from "../views/Details";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/pies/:instructor" element={<Pies />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}
