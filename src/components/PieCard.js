import React from "react";
import { useNavigate } from "react-router-dom";

export default function PieCard({ pie }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <img src={pie.imageUrl} alt={pie.name} />
        <p>{pie.name}</p>
        <button onClick={() => navigate(`/details/${pie.id}`)}>Details</button>
        <button>Delete</button>
      </div>
    </>
  );
}
