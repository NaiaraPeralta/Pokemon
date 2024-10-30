let pokemons = pokemon;
let añadir= window.localStorage.setItem("pokemons", JSON.stringify(pokemons));
//JSON.parse (window.localStorage.getItem("pokemons"));



// INDEX
// Primero obtengo las etiquetas header y nav que son las primeras que voy a editar
// Header
let header = document.getElementsByTagName('header');
let nav = document.getElementsByTagName('nav');

// Por cada etiqueta crearé divs

let divHeader = document.createElement('div');
let h1Header = document.createElement('h1');
h1Header.textContent = "Pokemon";

divHeader.appendChild(h1Header);
header[0].appendChild(divHeader);

// Nav

//El nav contiene un formulario de navegación y un boton de redireccion <a>
//Creare un div que contenga el formulario
let divForm = document.createElement('div');
// Primero creo el formulario
let formNav = document.createElement('form');
let labelForm = document.createElement('label');
let inputForm = document.createElement('input');
// Ahora modifico la etiqueta input para que el tipo sea text
labelForm.textContent = "Buscar pokemon:  ";
inputForm.type = 'text';
inputForm.placeholder = "Encuentra tu pokemon";

divForm.classList.add('formularioNavegador');

formNav.appendChild(labelForm);
formNav.appendChild(inputForm);
divForm.appendChild(formNav);
nav[0].appendChild(divForm);

//Ahora haremos otro div para crear la redireccion a agregar.html
let divRedirect = document.createElement('div');
let pRedirect = document.createElement('p');
let aRedirect = document.createElement('a');

aRedirect.setAttribute('href', "./pages/agregar.html");
aRedirect.textContent = "Agregar Pokemon";

divRedirect.classList.add("divRedireccion");

pRedirect.appendChild(aRedirect);
divRedirect.appendChild(pRedirect);
nav[0].appendChild(divRedirect);





// CARDS





// AGREGAR