import React from "react";
// si... posicion < 20 && salud || capital > 0 .... then
// else if .... posicion < 20 && salud || capital < 1

const Cartel = (props) => {
  const posicion = props.posicion;
  if (posicion < 19) {
    return (
      <div className={props.estaActivo}>
        <div className="cartel">
          <div id="headerCartel">
            <h3 id="tituloCartel">casillero numero: {props.posicion}</h3>
            <img id="foto" src={props.imagen} alt="" />
          </div>
          <h4>{props.texto}</h4>
          <h5>{props.conclusion}</h5>
          <button
            onClick={() => {
              props.setearActivo("cartel-inactivo");
              console.log(posicion);
            }}
          >
            aceptar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={props.estaActivo}>
      <div className="cartel">
        <h1>GANASTE!</h1>
        <p>tu ganancia fue de: {props.capital}</p>
        <button
          onClick={() => {
            props.setearActivo("cartel-inactivo");
          }}
        >
          aceptar
        </button>
      </div>
    </div>
  );
};
export default Cartel;
