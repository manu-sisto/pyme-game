
const jugador = { nombre: "Manuel", capital: 200, salud: 100 };

const arrayDeCasilleros = [
    {
      ubicacion: 1,
      nombre: "uno",
      color: "red",
      pieza: false,
      tipo: "superior",
      info: "diste el primer paso, ganaste 100 pesos",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-1"
    },
    {
      ubicacion: 2,
      nombre: "dos",
      color: "blue",
      pieza: false,
      tipo: "superior",
      info: "diste el segundo paso, ganaste 100 pesos",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-2"
    },
    {
      ubicacion: 3,
      nombre: "tres",
      color: "purple",
      pieza: false,
      tipo: "superior",
      info: "diste el tercer paso, ganaste 100 pesos",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-3"
    },
    {
      ubicacion: 4,
      nombre: "cuatro",
      color: "yellow",
      pieza: false,
      tipo: "superior",
      info: "diste el cuarto paso, ganaste 100 pesos",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-4"
    },
    {
      ubicacion: 5,
      nombre: "cinco",
      color: "green",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-5"
    },
    {
      ubicacion: 6,
      nombre: "seis",
      color: "grey",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa, ubicacion 6",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-6"
    },
    {
      ubicacion: 7,
      nombre: "siete",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa, ubicacion 7",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-7"
    },
    {
      ubicacion: 8,
      nombre: "ocho",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-8"
    },
    {
      ubicacion: 9,
      nombre: "nueve",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-9"
    },
    {
      ubicacion: 10,
      nombre: "diez",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-10"
    },
    {
      ubicacion: 11,
      nombre: "once",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-11"
    },
    {
      ubicacion: 12,
      nombre: "doce",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-12"
    },
    {
      ubicacion: 13,
      nombre: "trece",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-13"
    },
    {
      ubicacion: 14,
      nombre: "catorce",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-14"
    },
    {
      ubicacion: 15,
      nombre: "quince",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-15"
    },
    {
      ubicacion: 16,
      nombre: "dieciseis",
      color: "white",
      pieza: false,
      tipo: "superior",
      info: "En este casillero paso X cosa",
      evento: (jugador) => jugador.capital + 100,
      className: "grid-item-16"
    }
  ];

  export {arrayDeCasilleros, jugador};