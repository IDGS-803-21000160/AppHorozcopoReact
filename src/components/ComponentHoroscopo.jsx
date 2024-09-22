import React from "react";
import "./ComponentHoroscopo.css";

const ComponentHoroscopo = ({ signo }) => {
  return (
    <>
      <div className="container">
        {signo ? (
          <h2 className="signo-message">
            Tu signo zodiacal es: <span className="signo">{signo}</span>
          </h2>
        ) : (
          <h2 className="default-message">
            Ingresa tu fecha de nacimiento para conocer tu horóscopo
          </h2>
        )}
      </div>
    </>
  );
};

export default ComponentHoroscopo;
