const jugador = { nombre: "Empresa Argentina S.A.", capital: 500000, salud: 100 };

const arrayDeCasilleros = [
  {
    ubicacion: 1,
    nombre: "1.",
    conclusion: "",
    info: " ",
    evento: () => {
    },
    className: "grid-item-1",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 2,
    nombre: "2.",
    info: "La ganancia de tus ventas llegaron.",
    conclusion: "-Ganaste $80.000.",
    evento: (jugador) => {
      jugador.capital += 80000;
      return jugador;
    },
    className: "grid-item-2",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 3,
    nombre: "3.",
    info: "tenias una reunion con un cliente, pero por una marcha de agrupaciones sociales en la 9 de julio la perdiste. Tus ganancias bajaron.",
    conclusion: "-Por el stres pierdes 10% de salud.",
    evento: (jugador) => {
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-3",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 4,
    nombre: "4.",
    info: "Subio el dolar.",
    conclusion: "-Pierdes 5% de tu capital",
    evento: (jugador) => {
      jugador.capital *= 0.95;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-4",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 5,
    nombre: "5.",
    info: "El gobierno de la ciudad saca una nueva tasa.",
    conclusion: "-Pierdes 5% de tu capital",
    evento: (jugador) => {
      jugador.capital *= 0.95;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-5",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 6,
    nombre: "6.",
    info: "Un empleado dejo de venir, te mando telegrama considerandose despedido y te hizo juicio. Tu ex-empleado gano y la justicia te ordeno pagarle.",
    conclusion: "-Pierdes $250000 -pierdes 10% salud",
    evento: (jugador) => {
      jugador.capital -= 250000;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-6",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 7,
    nombre: "7.",
    info: "El gobierno saca ley de doble indemnizacion con retroactividad, el empleado que despediste ahora te salio el doble",
    conclusion: "-Pierdes $150.000",
    evento: (jugador) => {
      jugador.capital -= 150000;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-7",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 8,
    nombre: "8.",
    info: "Pagas cargas sociales de empleados, te costó 35% del total que cobran.",
    conclusion: "-Gastaste $125.000 pesos",
    evento: (jugador) => {
      jugador.capital -= 125000;
      return jugador;
    },
    className: "grid-item-8",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 9,
    nombre: "9.",
    info: " ",
    conclusion: " ",
    evento: (jugador) => {
      jugador.capital -= 100000;
      jugador.salud -= 20;
      return jugador;
    },
    className: "grid-item-9",
    imagen: "./assets/choripan.jpg"
  },
  {
    ubicacion: 10,
    nombre: "10.",
    info: "Entraron a robar a la fabrica, la policia atrapo a los ladrones pero el fiscal los liberó. La policia se quedo con tu mercaderia como evidencia.",
    conclusion: "-Pierdes $80000 para reponer lo robado",
    evento: (jugador) => {
      jugador.capital -= 80000;
      jugador.salud -= 5;
      return jugador;
    },
    className: "grid-item-10",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 11,
    nombre: "11.",
    info: "El gobierno cierra la importación a productos necesarios para tu industria.",
    conclusion: "-Pierdes 10% de salud",
    evento: (jugador) => {
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-11",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 12,
    nombre: "12.",
    info: "Subio el dolar.",
    conclusion: "-Pierdes 5% de tu capital",
    evento: (jugador) => {
      jugador.capital *= 0.95;
      return jugador;
    },
    className: "grid-item-12",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 13,
    nombre: "13.",
    info: "Yendo a la oficina sos asaltado por motochorros.",
    conclusion: "-te robaron $2600 y tu celular. Tu salud empeora 10%.",
    evento: (jugador) => {
      jugador.capital -= 2600;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-13",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 14,
    nombre: "14.",
    info: "La ganancia de tus ventas llegaron.",
    conclusion: "-Ganaste $80.000.",
    evento: (jugador) => {
      jugador.capital += 80000;
      return jugador;
    },
    className: "grid-item-14",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 15,
    nombre: "15.",
    info: "Sube la inflacion.",
    conclusion: "-Pierdes 10% de tu capital",
    evento: (jugador) => {
      jugador.capital *= 0.90;
      return jugador;
    },
    className: "grid-item-15",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 16,
    nombre: "16.",
    info: "El gremio de camioneros te bloqueo el deposito por no tener tus empleados sindicalizados. Perdiste la plata de 3 días de trabajo.",
    conclusion: "-pierdes $60.000 -pierdes 10% salud",
    evento: (jugador) => {
      jugador.capital -= 60000;
      jugador.salud -= 10;
      return jugador;
    },
    className: "grid-item-16",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 17,
    nombre: "17.",
    info: "Paro de transporte por la inseguridad, tus empleados no pueden ir a trabajar.",
    conclusion: "-Pierdes $20000",
    evento: (jugador) => {
      jugador.capital -= 20000;
      return jugador;
    },
    className: "grid-item-17",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 18,
    nombre: "18.",
    info: "Pagas cargas sociales de empleados, te costó 35% del total que cobran.",
    conclusion: "Gastaste $125.000 pesos",
    evento: (jugador) => {
      jugador.capital += 125000;
      return jugador;
    },
    className: "grid-item-18",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 19,
    nombre: "19.",
    info: "El gobierno crea impuesto a empresas de tu rubro.",
    conclusion: "-Pierdes 5% de tu capital.",
    evento: (jugador) => {
      jugador.capital *= 0.95;
      return jugador;
    },
    className: "grid-item-19",
    imagen: "./assets/choripan.jpg",
  },
  {
    ubicacion: 20,
    nombre: "20.",
    info: "Crean una nueva licencia en el gremio de camioneros. Tus empleados deben realizar un curso.",
    conclusion: "-Pierdes $30000 en pagarlo.",
    evento: (jugador) => {
      jugador.capital *= 30000;
      return jugador;
    },
    className: "grid-item-20",
    imagen: "./assets/choripan.jpg",
  },
];

export { arrayDeCasilleros, jugador };
