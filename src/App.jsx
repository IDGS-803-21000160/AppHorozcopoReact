import { useState } from "react";
import ComponentFecha from "./components/ComponentFecha";
import ComponentHoroscopo from "./components/ComponentHoroscopo";
import "./index.css";

import "./App.css";

const App = () => {
  const [sign, setSign] = useState("");

  const calculateSign = (date) => {
    const birthDate = new Date(date);
    const mes = birthDate.getMonth() + 1;
    const dia = birthDate.getDate();

    const zodiacSigns = [
      {
        signo: "Capricornio",
        comiezo: { mes: 12, dia: 22 },
        termina: { mes: 1, dia: 19 },
      },
      {
        signo: "Acuario",
        comiezo: { mes: 1, dia: 20 },
        termina: { mes: 2, dia: 18 },
      },
      {
        signo: "Piscis",
        comiezo: { mes: 2, dia: 19 },
        termina: { mes: 3, dia: 20 },
      },
      {
        signo: "Aries",
        comiezo: { mes: 3, dia: 21 },
        termina: { mes: 4, dia: 19 },
      },
      {
        signo: "Tauro",
        comiezo: { mes: 4, dia: 20 },
        termina: { mes: 5, dia: 20 },
      },
      {
        signo: "Géminis",
        comiezo: { mes: 5, dia: 21 },
        termina: { mes: 6, dia: 20 },
      },
      {
        signo: "Cáncer",
        comiezo: { mes: 6, dia: 21 },
        termina: { mes: 7, dia: 22 },
      },
      {
        signo: "Leo",
        comiezo: { mes: 7, dia: 23 },
        termina: { mes: 8, dia: 22 },
      },
      {
        signo: "Virgo",
        comiezo: { mes: 8, dia: 23 },
        termina: { mes: 9, dia: 22 },
      },
      {
        signo: "Libra",
        comiezo: { mes: 9, dia: 23 },
        termina: { mes: 10, dia: 22 },
      },
      {
        signo: "Escorpio",
        comiezo: { mes: 10, dia: 23 },
        termina: { mes: 11, dia: 21 },
      },
      {
        signo: "Sagitario",
        comiezo: { mes: 11, dia: 22 },
        termina: { mes: 12, dia: 21 },
      },
    ];

    const zodiacSign = zodiacSigns.find(({ comiezo, termina }) => {
      if (mes === comiezo.mes && dia >= comiezo.dia) return true;
      if (mes === termina.mes && dia <= termina.dia) return true;
      return false;
    });

    setSign(zodiacSign ? zodiacSign.signo : "");
  };

  return (
    <div className="App">
      <h1>Generador de Horóscopo</h1>
      <ComponentFecha onSubmit={calculateSign} />
      <ComponentHoroscopo signo={sign} />
    </div>
  );
};

export default App;
