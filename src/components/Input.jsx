import { useState } from "react";
import "../styles/Input.css";
export function Input({ onChange, value }) {

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        placeholder="Buscar jugador"
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}