import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../components/DetailsCard";
import { pies } from "../data/pies";

export default function Details() {
  const [pie, setPie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    setPie(pies.find((pie) => pie.id === Number(id)));
  }, [id]);

  return (
    <>
      <h1>Pie Details</h1>
      <DetailsCard pie={pie} />
    </>
  );
}
