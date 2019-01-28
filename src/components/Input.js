import React from "react";

const Input = () => {
  return (
    <form className="container">
      <input className="input" name="orixe" type="text" placeholder="Orixe" />
      <input
        className="input"
        name="destino"
        type="text"
        placeholder="Destino"
      />
      <button className="button">Buscar</button>
    </form>
  );
};

export default Input;
