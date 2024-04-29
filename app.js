//Clase de Usuario






//Recibir los datos de localS
const data = JSON.parse(localStorage.getItem("usuarios")) || [];

//!1 - Iterar el arreglo y crear la tarjeta de cada usuario (NODOS), pasos:
//A - Capturo el contenedor de HTML donde apareceran las cards
let contenedorCards = document.getElementById("contenedor-cards");

//B - Funcion para renderizar y crear las cards
const listarUsuarios = () => {
  //limpie el html (contenedorCards)

  //a-iterar la BD
  data.forEach((item) => {
    //Crear los componentes de HTML
    let columna = document.createElement("div");
    columna.classList = "col";

    //creo la estructura de la card
    let card = `
    <div class="card h-100">
    <div class="text-center">
    <img src="${item.avatar}" class="card-img-top img-avatar" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
      <p class="card-text">
       ${item.mail}
      </p>
    </div>
    </div>
  </div>
    `;

    columna.innerHTML = card;

    //asignar la estructura de la card al CONTENEDOR
    contenedorCards.appendChild(columna);
  });
};

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





//B - Funcion para ordenar alfabeticamente
const ordenAlfabetico = (valor = 0) => {
  //limpiar el contenedor html
  contenedorCards.innerHTML = "";

  data.sort((a, b) => {
    if (a.last_name > b.last_name) {
      return 1;
    } else if (a.last_name < b.last_name) {
      return -1;
    } else {
      return 0;
    }
  });

  //orden de la z-a
  if (valor != 0) {
    data.reverse();
  }

  listarUsuarios();
};

listarUsuarios();

//! --------------------------------------------------------------------------------------------------------------------
//!3 - Agregar nuevo usuario

//A - Funcion para agregar nuevo usuario
//! --------------------------------------------------------------------------------------------------------------------
