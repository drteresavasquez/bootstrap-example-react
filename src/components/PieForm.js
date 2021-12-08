import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { pies } from "../data/pies";

const initialState = {
  name: "",
  ingredients: "",
  bakeTemp: "",
  drinkPairing: "",
  imageUrl: "",
  iceCream: "",
  instructor: ""
};

export default function PieForm() {
  const [formInput, setFormInput] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    pies.push({ ...formInput, id: Math.max(...pies.map((p) => p.id)) + 1 });
    navigate(`/pies/${formInput.instructor}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="name"
        name="name"
        type="text"
        value={formInput.name}
        onChange={handleChange}
        placeholder="Pie Name"
        required
      />
      <input
        id="ingredients"
        name="ingredients"
        type="text"
        value={formInput.ingredients}
        onChange={handleChange}
        placeholder="Ingredients"
        required
      />
      <input
        id="bakeTemp"
        name="bakeTemp"
        type="number"
        value={formInput.bakeTemp}
        onChange={handleChange}
        placeholder="Bake Temp"
        required
      />
      <input
        id="drinkPairing"
        name="drinkPairing"
        type="text"
        value={formInput.drinkPairing}
        onChange={handleChange}
        placeholder="Drink Pairing"
        required
      />
      <input
        id="imageUrl"
        name="imageUrl"
        type="url"
        value={formInput.imageUrl}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        id="iceCream"
        name="iceCream"
        type="text"
        value={formInput.iceCream}
        onChange={handleChange}
        placeholder="Ice Cream Pairing"
        required
      />
      <select
        id="instructor"
        name="instructor"
        required
        value={formInput.instructor}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="Trinity">Trinity</option>
        <option value="Aja">Aja</option>
        <option value="Doc">Doc</option>
      </select>
      <button>Add Pie</button>
    </form>
  );
}
