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

function nuevoUsuarioI(){
  var nuevoUsuario = {
    "nombre": nombre,
    "puntuacionM": 0,
    "tiempo": 0,
    "preguntasCont": {
      "pregunta1": false,
      "pregunta2": false,
      "pregunta3": false,
      "pregunta4": false,
      "pregunta5": false,
      "pregunta6": false,
      "pregunta7": false,
      "pregunta8": false,
      "pregunta9": false,
      "pregunta10": false,
      "pregunta11": false,
      "pregunta12": false,
      "pregunta13": false,
      "pregunta14": false,
      "pregunta15": false,
      "pregunta16": false,
      "pregunta17": false,
      "pregunta18": false,
      "pregunta19": false,
      "pregunta20": false,
      "pregunta21": false,
      "pregunta22": false,
      "pregunta23": false,
      "pregunta24": false,
      "pregunta25": false,
      "pregunta26": false,
      "pregunta27": false,
      "pregunta28": false,
      "pregunta29": false,
      "pregunta30": false
    }
  };
  database.addUsuario(nuevoUsuario);
}



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