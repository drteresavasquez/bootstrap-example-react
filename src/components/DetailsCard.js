import React from "react";

export default function DetailsCard({ pie }) {
  return (
    <>
      <h1>{pie.name}</h1>
      <h1>{pie.ingredients}</h1>
      <h1>{pie.bakeTemp}</h1>
      <h1>{pie.drinkPairing}</h1>
      <h1>{pie.imageUrl}</h1>
      <h1>{pie.iceCream}</h1>
    </>
  );
}
