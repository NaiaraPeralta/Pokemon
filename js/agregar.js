//El DOMContentLoaded ocurre cuando el documento ha sido completamente cargado, es decir para cuando se ha terminado
//de ejecutar todo el codigo.
document.addEventListener("DOMContentLoaded", () => {
  let main = document.getElementsByTagName('main');
  //Div del formulario
  let divFormAgregar = document.createElement('div');
  // Crear la etiqueta de H2 
  let title = document.createElement("h2");
  title.textContent = "Agregar un nuevo Pokémon";
  title.classList.add('h2StyleAgregar');
  divFormAgregar.appendChild(title);
  //  Formulario
  //creo la etiqueta form
  let forms = document.getElementsByTagName('form');
  let form = forms[0];
  //le asigno un id al formulario para que si luego necesitamos llamarlo para cualquier otra fucnion podamos llamarlo
  //por el id
  form.id = "formularioPokemon";
  form.method = "get";


  // Creo el label para el nombre
  let labelNb = document.createElement("label");
  labelNb.textContent = "Nombre: ";
  labelNb.classList.add('datos');
  //creo el input para el nombre
  let inputNb = document.createElement("input");
  //especifico que el input es de tipo texto
  inputNb.type = "text";
  inputNb.id = "nombre";
  inputNb.name = "nombre";
  //para ponerlo como campo obligatorio a rellenar 
  inputNb.required = true;
  //Agrega un nuevo nodo como último hijo de un elemento.(explicacion profe), 
  //es decir añadimos un nuevo nodo al final del formulario 
  labelNb.appendChild(inputNb);
  form.appendChild(labelNb);
  //creo el br
  form.appendChild(document.createElement("br"));
  form.appendChild(document.createElement("br"));

  let estadisticasBase = ["HP", "Ataque", "Defensa", "Ataque Especial", "Defensa Especial", "Velocidad"];

  //recorro el array y creo q el label y el imput para las estadisticas base
  for (let i in estadisticasBase) {
    let labelEB = document.createElement("label");
    labelEB.classList.add('datos');
    //aqui utilizo las comillas invertidas para q lo de hp , ataque ... se me muestre como texto 
    //porque si lo pongo con comillas " " se pone como cadena de texto literal y no funciona 
    labelEB.textContent = estadisticasBase[i] + ": ";
    let inputEB = document.createElement("input");
    inputEB.type = "number";
    inputEB.id = estadisticasBase[i];
    inputEB.name = estadisticasBase[i];
    inputEB.required = true;
    labelEB.appendChild(inputEB);
    form.appendChild(labelEB);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
  }

  form.appendChild(document.createElement("br"));



  let inputboton = document.createElement("input");
  inputboton.type = "submit";
  inputboton.id = "agregar";
  inputboton.value = "Agregar Pokémon";
  form.appendChild(inputboton);

  divFormAgregar.appendChild(form);
  divFormAgregar.classList.add("divFormularioAgregar");
  main[0].appendChild(divFormAgregar);


  /** 
      // Creo el boton de agregar 
      let botonAgregar = document.createElement("button");
      botonAgregar.type = "submit";
      botonAgregar.textContent = "Agregar Pokémon";
      form.appendChild(botonAgregar);
    */


});


/**
 * Mediante el objeto location, utilizando search, recogemos los datos de la url y los transformamos para obtener variables
 * con los datos recogidos y llamamo a la funcion agregarPokemon pasandole como parametros las variables recogidas
 */
function recogidaDeDatos() {
  let datosUrl = window.location.search;
  let datos1 = datosUrl.split('&');
  let arrDatos = [];
  for (let i = 0; i < datos1.length; i++) {
    arrDatos.push(datos1[i].split('='));
  }
  let datosDefin = [];
  for (let i in arrDatos) {
    datosDefin.push(arrDatos[i][1]);
  }
  let nombre = datosDefin[0];
  let hp = datosDefin[1];
  let ataque = datosDefin[2];
  let defensa = datosDefin[3];
  let ataqueEspecial = datosDefin[4];
  let defensaEspecial = datosDefin[5];
  let velocidad = datosDefin[6];

  if (nombre && hp && ataque && defensa && ataqueEspecial && defensaEspecial && velocidad) {
    agregarPokemon(nombre, parseInt(hp), parseInt(ataque), parseInt(defensa), parseInt(ataqueEspecial), parseInt(defensaEspecial), parseInt(velocidad));
  }
  
  
}
recogidaDeDatos();

/**
 * La funcion se encarga de recoger los datos del item de localStorage pokemonsAgregado y agrega un nuevo pokemon dentro de pokemonsAgregado con los parametros pasados por
 * el formulario
 * @param {string} nombre - parametro de tipo string que hace referencia al nombre del pokemon agregado
 * @param {number} hp - parametro de tipo number que hace referencia al hp del pokemon agregado
 * @param {number} ataque - parametro de tipo number que hace referencia al ataque del pokemon agregado
 * @param {number} defensa - parametro de tipo number que hace referencia al defensa del pokemon agregado
 * @param {number} ataqueEspecial - parametro de tipo number que hace referencia al ataqueEspecial del pokemon agregado
 * @param {number} defensaEspecial - parametro de tipo number que hace referencia al defensaEspecial del pokemon agregado
 * @param {number} velocidad - parametro de tipo number que hace referencia a la velocidad del pokemon agregado
 */
function agregarPokemon(nombre, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad) {
  let id;
  let pokemonLocal = JSON.parse(window.localStorage.getItem("pokemonsAgregado"));

  

  let aux = 0;
  for(let i = 0 ; i < pokemonLocal.length ; i++){
    aux = pokemonLocal[i]['id'];
  }
  console.log(aux);

  if(pokemonLocal.length <= 0){
    id = 151 + pokemonLocal.length + 1;
  } else {
    id = aux + 1;
  }
  
  idAgregado =  id;


  //creo un nuevoPokemon con los datos que meto en el formulario 
  let nuevoPokemon = {
    id: idAgregado,
    nombre: nombre,
    estadisticas_base: {
      hp: hp,
      ataque: ataque,
      defensa: defensa,
      ataque_especial: ataqueEspecial,
      defensa_especial: defensaEspecial,
      velocidad: velocidad
    }
  }
  // agregar pokemon

  pokemonLocal.push(nuevoPokemon);
  window.localStorage.setItem('pokemonsAgregado', JSON.stringify(pokemonLocal));
  
}


// *********************  Header  **********************
let header = document.getElementsByTagName('header');
let nav = document.getElementsByTagName('nav');

// Por cada etiqueta crearé divs

let divHeader = document.createElement('div');
let h1Header = document.createElement('h1');
h1Header.textContent = "Agregar un nuevo pokemon";
h1Header.classList.add('h1Style');

divHeader.appendChild(h1Header);
header[0].appendChild(divHeader);

// ***************  Nav  *****************************


//Ahora haremos otro div para crear la redireccion a agregar.html
// *******************  Nav - agregar.html  *******************
let divRedirect = document.createElement('div');
let pRedirect = document.createElement('p');
pRedirect.textContent = "Volver a inicio";
pRedirect.addEventListener('click', function(){
  history.pushState({ file: "index.html" }, "Pagina principal", "../index.html");
  window.location.href = "../index.html";
});

divRedirect.classList.add("divRedireccionIndex");

divRedirect.appendChild(pRedirect);
nav[0].appendChild(divRedirect);


// *************  Footer  ****************
//Primero un footer sencillo
let footer = document.getElementsByTagName('footer');
// En el footer crearemos un pequeño div, para tenerlo todo mas organizado
let footerDiv = document.createElement('div');
// Agregamos unos pocos comentarios para que el footer sea mas "bonito"
let pComentariosFooterDiv = document.createElement('p');
pComentariosFooterDiv.textContent = "Proyecto DOM 3 - Pokedex";
let hrFooter = document.createElement('hr');
// Le agregaremos un pequeño texto diciendo quienes han sido los autores de este proyecto
let pAutoresFooterDiv = document.createElement('p');
pAutoresFooterDiv.textContent = "Proyecto creado por: Naiara Peralta Acevedo, Laura García Yuste, Francisco Garcia Gomez.";

footerDiv.classList.add('divFooter');
footerDiv.appendChild(pComentariosFooterDiv);
footerDiv.appendChild(hrFooter);
footerDiv.appendChild(pAutoresFooterDiv);
footer[0].appendChild(footerDiv);



