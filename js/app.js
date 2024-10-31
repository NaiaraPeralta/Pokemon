let pokemons = pokemon;
let añadir= window.localStorage.setItem("pokemons", JSON.stringify(pokemons));
//JSON.parse (window.localStorage.getItem("pokemons"));



// INDEX
// Primero obtengo las etiquetas header y nav que son las primeras que voy a editar
// *********************  Header  **********************
let header = document.getElementsByTagName('header');
let nav = document.getElementsByTagName('nav');

// Por cada etiqueta crearé divs

let divHeader = document.createElement('div');
let h1Header = document.createElement('h1');
h1Header.textContent = "Pokemon";

divHeader.appendChild(h1Header);
header[0].appendChild(divHeader);

// ***************  Nav  *****************************

//El nav contiene un formulario de navegación y un boton de redireccion <a>
//Creare un div que contenga el formulario
let divForm = document.createElement('div');
// Primero creo el formulario
// **************  Nav - form  *********************
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

//Configuracion de navegador de busqueda por nombre ------ Eventos


//Ahora haremos otro div para crear la redireccion a agregar.html
// *******************  Nav - agregar.html  *******************
let divRedirect = document.createElement('div');
let pRedirect = document.createElement('p');
let aRedirect = document.createElement('a');

aRedirect.setAttribute('href', "./pages/agregar.html");
aRedirect.textContent = "Agregar Pokemon";

divRedirect.classList.add("divRedireccion");

pRedirect.appendChild(aRedirect);
divRedirect.appendChild(pRedirect);
nav[0].appendChild(divRedirect);

// **************  Main  ****************
//El main por el momento tiene poco trabajo, hasta que tengamos las cards

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


// CARDS





// AGREGAR