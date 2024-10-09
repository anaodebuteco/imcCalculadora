import React, { useState } from "react";
import './Calculator.css'; 

const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight && height) {
      const heightInMeters = height / 100; // Converter cm para metros
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(calculatedBMI);
      categorizeBMI(calculatedBMI);
    } else {
      setMessage("Por favor, insira valores válidos.");
    }
  };

  const categorizeBMI = (calculatedBMI) => {
    if (calculatedBMI < 18.5) {
      setMessage("Abaixo do peso");
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setMessage("Peso normal");
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setMessage("Sobrepeso");
    } else {
      setMessage("Obesidade");
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="imc-calculator">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Peso (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Ex: 70"
          />
        </div>

        <div>
          <label>Altura (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Ex: 170"
          />
        </div>

        <button type="submit">Calcular IMC</button>
        <button type="button" onClick={resetForm}>Resetar</button>
      </form>

      {bmi && (
        <div className="result">
          <h2>Seu IMC é: {bmi}</h2>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
