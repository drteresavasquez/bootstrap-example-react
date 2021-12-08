import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PieCard from "../components/PieCard";
import { pies } from "./../data/pies";

export default function Pies() {
  const [allPies, setAllPies] = useState([]);

  let { instructor } = useParams();

  useEffect(() => {
    setAllPies(pies.filter((pie) => pie.instructor === instructor));
  }, [instructor]);

  return (
    <>
      <h1>{instructor}'s Pies</h1>
      {allPies.map((pie) => (
        <PieCard key={pie.id} pie={pie} />
      ))}
    </>
  );
}
