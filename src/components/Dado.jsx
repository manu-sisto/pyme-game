import React from "react";

const Dado = (props) => {

  function tirarDado() {
    return Math.ceil(Math.random() * 6);
  }

  return (
    <div>
      <button
        onClick={() => {
            const tirada = tirarDado();
            props.setearNumero(tirada);
            props.setearActivo("cartel-activo")
        }}
      >
        tira el dado!
      </button>
      <p>resultado: {props.numero}</p>
    </div>
  );
};

export default Dado;

