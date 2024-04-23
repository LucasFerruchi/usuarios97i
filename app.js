//Clase de Usuario

//Arreglo
let usuarios = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "http://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "http://reqres.in/img/faces/8-image.jpg",
  },

  {
    id: 9,
    email: "tobias.funque@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "http://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "http://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howel@reqres.in",
    first_name: "Rachel",
    last_name: "Howel",
    avatar: "http://reqres.in/img/faces/12-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "http://reqres.in/img/faces/11-image.jpg",
  },
];
console.log(usuarios);

//Enviamos el arreglo a localS

//Recibir los datos de localS

//!1 - Iterar el arreglo y crear la tarjeta de cada usuario (NODOS), pasos:

//A - Capturo el contenedor de HTML donde apareceran las cards

//B - Funcion para renderizar y crear las cards

/* Ejemplo de card
  <div class="col">
  <div class="card">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
    </div>
  </div>
  </div>
  */

//! --------------------------------------------------------------------------------------------------------------------
//!2 - Trabajar con los botones para ordenar

//A - Metodo sort REPASO ---------------------------------------------------------------------------------------------------
//para numeros
let numeros = [12, 1, 4, 675, 45, 87, 2, 23];

let numerosOrdenados1 = numeros.sort();
console.log(numerosOrdenados1);

let numerosOrdenados2 = numeros.sort((a, b) => a - b);
console.log(numerosOrdenados2);

//para array de objetos
// usuarios.sort((a, b) => a - b);
// console.log(usuarios);

usuarios.sort((a, b) => {
  if (a.last_name > b.last_name) {
    return 1;
  } else if (a.last_name < b.last_name) {
    return -1;
  } else {
    return 0; //Si son iguales
  }
});
console.log(usuarios);

//B - Funcion para ordenar alfabeticamente

//! --------------------------------------------------------------------------------------------------------------------
//!3 - Agregar nuevo usuario

//A - Funcion para agregar nuevo usuario
//! --------------------------------------------------------------------------------------------------------------------
