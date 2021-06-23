import React from "react";
import Pieza from "./Pieza.jsx"



const Casillero = (props) => {
/*
  const estilo = {
    fontSize: "20px",
    fontFamily: "arial",
    border: "2px solid black",
    textAlign: "center",
    display: "flex",
    margin: "2px",
    backgroundColor: props.color,
    alignItems: "start",
    justifyContent: "left",
    width: "100px",
    height: "100px"
  };
*/

  return <div /*style={estilo}*/className={`grid-item ${props.className}`} >{props.children} {props.posicion} {props.pieza === true ? <Pieza/> : null}</div>;
};

export default Casillero;
