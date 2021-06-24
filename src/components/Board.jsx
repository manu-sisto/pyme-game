import React, { useState } from "react";
import Pieza from "./Pieza";
import Dado from "./Dado";
import Casillero from "./Casillero";
import Cartel from "./Cartel";
import {arrayDeCasilleros, jugador} from "./Casilleros";



const Board = () => {
  const [numero, setNumero] = useState(0);
  const [lugar, setLugar] = useState(1);
  const [activo, setActivo] = useState("cartel-inactivo");
 
  return (
    <div id="board">
      <p>Nombre: {jugador.nombre}</p>
      <p>Capital: ${jugador.capital}</p>
      <p>Salud: {jugador.salud}</p>
      <p>Posicion: {lugar}</p>

      <Dado
        numero={numero}
        setearNumero={(num) => {
          setNumero(num);
          setLugar(lugar + num);
          console.log(jugador.capital)
          const nuevoCapital = arrayDeCasilleros[lugar].evento(jugador)
          jugador.capital = nuevoCapital;
        }}
        setearActivo={(x) => {
          setActivo(x);
        }}
      />

      <div className="grid-container">
        {arrayDeCasilleros.map((item) => (
          <Casillero
            key={item.ubicacion}
            pieza={item.pieza}
            className={item.className}
          >
            {item.nombre} {lugar === item.ubicacion ? <Pieza /> : null}
          </Casillero>
        ))}

        <Cartel
          estaActivo={activo}
          capital={jugador.capital}
          lugar={lugar}
          texto={arrayDeCasilleros[lugar - 1].info}
          setearActivo={(x) => {
            setActivo(x);
          }}
        ></Cartel>
      </div>
    </div>
  );
};

export default Board;
