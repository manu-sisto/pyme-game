import React, { useState } from "react";
import Pieza from "./Pieza";
import Dado from "./Dado";
import Casillero from "./Casillero";
import Cartel from "./Cartel";
import arrayDeObjetos from "./Casilleros";

const Board = () => {
  const [numero, setNumero] = useState(0);
  const [lugar, setLugar] = useState(1);
  const [activo, setActivo] = useState("cartel-inactivo");

  const jugador = { nombre: "manuel", capital: 200 };
  

  return (
    <div id="board">
      <p>Nombre: {jugador.nombre}</p>
      <p>Capital: ${jugador.capital}</p>
      <p>Posicion: {lugar}</p>

      <Dado numero={numero} setearNumero={(num)=> {
        setNumero(num)
        setLugar(lugar + num)
      }} setearActivo={(x)=>{setActivo(x)}} />

      <div className="grid-container"> 
      {arrayDeObjetos.map(item =>
  <Casillero key={item.ubicacion} color={item.color} pieza={item.pieza} className={item.className}>{item.nombre} {lugar === item.ubicacion ? <Pieza/> : null}</Casillero>
  )}

  <Cartel estaActivo={activo} lugar={lugar} texto={arrayDeObjetos[lugar - 1].info} setearActivo={(x)=>{setActivo(x)}}></Cartel>

      </div>
    </div>
  );
};

export default Board;
