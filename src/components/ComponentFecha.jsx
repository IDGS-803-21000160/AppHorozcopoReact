import React, { useState } from "react";
import "./ComponentFecha.css";

const ComponentFecha = ({ onSubmit }) => {
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(date);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <label className="form-label">
          Fecha de Nacimiento:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">
          Obtener Horóscopo
        </button>
      </form>
    </>
  );
};

export default ComponentFecha;
