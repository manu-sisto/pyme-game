import React, { useState } from "react";
import Pieza from "./Pieza";
import Dado from "./Dado";
import Casillero from "./Casillero";
import Cartel from "./Cartel";
import { arrayDeCasilleros, jugador } from "./Casilleros";
import ProgressBar from "./ProgressBar";

const Board = () => {
  const [numero, setNumero] = useState(0);
  const [lugar, setLugar] = useState(1);
  const [activo, setActivo] = useState("cartel-inactivo");
  const [finDelJuego, setFinDelJuego] = useState(false);

  function chequearFinal(vida, plata) {
    if (vida <= 0 || plata <= 0) {
      setFinDelJuego(true);
    }
  }

  return (
    <div id="cuerpo">
      <div className="estado">
      <div className="stats">Nombre: {jugador.nombre}</div>
      <div className="stats">Posicion: {lugar}</div>
      <div className="stats">Capital: ${jugador.capital}</div>
      <div className="stats">
        Salud: <ProgressBar nivel={jugador.salud}></ProgressBar>
      </div>

      <Dado
        numero={numero}
        onTirada={(num) => {
          setNumero(num);
          setLugar(lugar + num - 1);
          //arrayDeCasilleros[lugar].evento(jugador); 
          chequearFinal(jugador.salud, jugador.capital);
        }}
        setearActivo={(x) => {
          setActivo(x);
        }}
      />
      </div>
    <div className="tablero">
      <div className="grid-container">
        {arrayDeCasilleros.map((item) => (
          <Casillero key={item.ubicacion} className={item.className}>
            {item.nombre} {lugar === item.ubicacion ? <Pieza /> : null}
          </Casillero>
        ))}

        <Cartel
          estaActivo={activo}
          posicion={lugar}
          texto={arrayDeCasilleros[lugar -1].info}
          conclusion={arrayDeCasilleros[lugar -1].conclusion}
          capital={jugador.capital}
          imagen={arrayDeCasilleros[lugar -1].imagen}
          setearActivo={(x) => {
            setActivo(x);
            arrayDeCasilleros[lugar -1].evento(jugador);
            console.log(jugador)
          }}
        ></Cartel>
      </div>
      </div>
      <div> {finDelJuego === true ? <Pieza /> : null}</div>
    </div>
  );
};

export default Board;
