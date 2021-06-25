import React from "react";

const Dado = (props) => {

  function tirarDado() {
    return Math.ceil(Math.random() * 6);
  }


  return (
    <div>
      <button
        onClick={() => {
          setTimeout(() => {
            const tirada = tirarDado();
            props.setearNumero(tirada);
            props.setearActivo("cartel-activo");
          }, 500);
        }}
      >
        tira el dado!
      </button>
      <img className="dado" src="/assets/unnamed.gif" alt="dado girando"/>
      <p>resultado del dado: {props.numero}</p>

    </div>
  );
};

export default Dado;

