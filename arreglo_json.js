const database = require('./database');

const usuarios = database.getAllUsuarios();
console.log(usuarios);

const nuevoUsuario = {
  id: 3,
  nombre: "Pedro",
  edad: 35
};
database.addUsuario(nuevoUsuario);
console.log(usuarios);




// const arr = [
//     {
//         "nombre": "Favio",
//         "puntuacion": 4,
//         "preguntas_respondidas":{
//             "pregunta1":true,
//             "pregunta2":false,
//             "pregunta3":true,
//             "pregunta4":true,
//             "pregunta5":true,
//             "pregunta6":false,
//             "pregunta7":true,
//             "pregunta8":false,
//             "pregunta9":false,
//             "pregunta10":false
//         }
//     }
// ]

// console.log(arr[0]);
// console.log(arr[0].nombre);
// console.log(arr[0].preguntas_respondidas.pregunta3);


// {
//     "usuario1":{
//         "nombre":"Favio",
//         "puntuacion": 4
//     },
//     "usuario2":{
//         "nombre":"Diego",
//         "puntuacion": 4
//     },
//     "usuario3":{
//         "nombre":"Rafael",
//         "puntuacion": 4
//     },
//     "usuario4":{
//         "nombre":"Andre",
//         "puntuacion": 4
//     },
//     "usuario5":{
//         "nombre":"Saul",
//         "puntuacion": 4
//     }
// }