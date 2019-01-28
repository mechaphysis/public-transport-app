import React from "react";

const Input = props => {
  return (
    <form className="container">
      <input className="input" name="orixe" type="text" placeholder="Orixe" />
      <input
        className="input"
        name="destino"
        type="text"
        placeholder="Destino"
      />
      <button className="button" onClick={props.onButtonClick}>
        BUSCAR
      </button>
    </form>
  );
};

export default Input;
