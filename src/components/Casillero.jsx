import React from "react";



const Casillero = (props) => {

  return <div className={`grid-item ${props.className}`} >{props.children} {props.posicion}</div>;
};

export default Casillero;
