import React from "react";

const Cartel = (props) => {

  return (
    <div className={props.estaActivo}>
      <div className="cartel">
        <h3>casillero numero: {props.lugar}</h3>
        <p>{props.texto}</p>
        <p>tu capital es: {props.capital}</p>
        <button  onClick={() => {
            props.setearActivo("cartel-inactivo");
        }}>aceptar</button>
      </div>
    </div>
  );
};

export default Cartel;
