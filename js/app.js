let pokemons = pokemon;
let añadir = window.localStorage.setItem("pokemons", JSON.stringify(pokemons));
let pokemonLocal = JSON.parse(window.localStorage.getItem("pokemons"));



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
inputForm.id = "buscarPokemon";
inputForm.placeholder = "Encuentra tu pokemon";

inputForm.addEventListener('keyup', function(){
    let texto = inputForm.value;
    let cards = document.getElementsByClassName('cards-pokemon');

    for(let i = 0 ; i < cards.length ; i++){
        let cartaPokeNombre = cards[i].querySelector('thead tr td:nth-child(2)').textContent.toLowerCase();
        if(cartaPokeNombre.indexOf(texto) !== -1){
            cards[i].classList.remove('ocultarTarjeta');
        } else {
            cards[i].classList.add('ocultarTarjeta');
        }

    }
});

divForm.classList.add('formularioNavegador');

formNav.appendChild(labelForm);
formNav.appendChild(inputForm);
divForm.appendChild(formNav);
nav[0].appendChild(divForm);


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
let main = document.getElementsByTagName('main');
//Crear divs para cada tarjeta

let divCards = document.createElement('div');

for(let i of pokemonLocal){
    let divPoke = document.createElement('div');
    let tablePoke = document.createElement('table');
    let imgPoke = document.createElement('img');

    //Esto solo almacena el id y el nombre
    let thead = tablePoke.createTHead();
    let filaThead = thead.insertRow();
    let celdaId = filaThead.insertCell();
    let celdaNombre = filaThead.insertCell();
    celdaId.textContent = "ID: " + i['id'];
    celdaNombre.textContent = "Nombre: " +  i['nombre'];

    //Esto solo almacena la imagen
    let tbody = tablePoke.createTBody();
    let filaImg = tbody.insertRow();
    let celdaImg = filaImg.insertCell();
    celdaImg.colSpan = 2;
    imgPoke.src = "img/" + i['id'] + ".png";
    imgPoke.alt = i['nombre'];
    celdaImg.appendChild(imgPoke);

    //Esto solo almacena los datos del pokemon
    let filaTipo = tbody.insertRow();
    let celdaTipo = filaTipo.insertCell();
    celdaTipo.textContent = "Tipo: ";
    let celdaTipo1 = filaTipo.insertCell();
    
    if(i['tipos'].length > 1){
        celdaTipo1.textContent = i['tipos'][0] + ", "  + i['tipos'][1] ;
    } else {
        celdaTipo1.textContent = i['tipos'][0];
    }

    let filaSalud = tbody.insertRow();
    let celdaSalud = filaSalud.insertCell();
    let celdaSalud2 = filaSalud.insertCell();
    celdaSalud.textContent = "HP";
    celdaSalud2.textContent =  i['estadisticas_base']['hp'];

    let filaAtaque = tbody.insertRow();
    let celdaAtaque = filaAtaque.insertCell();
    let celdaAtaque2 = filaAtaque.insertCell();
    celdaAtaque.textContent = "Ataque";
    celdaAtaque2.textContent = i['estadisticas_base']['ataque'];

    let filaDefensa = tbody.insertRow();
    let celdaDefensa = filaDefensa.insertCell();
    let celdaDefensa2 = filaDefensa.insertCell();
    celdaDefensa.textContent = "Defensa";
    celdaDefensa2.textContent =  i['estadisticas_base']['defensa'];

    let filaVelocidad = tbody.insertRow();
    let celdaVelocidad = filaVelocidad.insertCell();
    let celdaVelocidad2 = filaVelocidad.insertCell();
    celdaVelocidad.textContent = "Velocidad";
    celdaVelocidad2.textContent =  i['estadisticas_base']['velocidad'];

    //Esto es para crear el boton eliminar
    let botonEliminar = document.createElement('img');
    let aEliminar = document.createElement('a');
    botonEliminar.src= "img/basura.png";
    botonEliminar.alt = "Eliminar Pokemon";
    botonEliminar.setAttribute('data-id', parseInt(i['id']));

    botonEliminar.addEventListener('click', function(){
        let idPokemon = botonEliminar.getAttribute('data-id');
        eliminarPokemon(idPokemon);
        divCards.removeChild(divPoke);
    })
    botonEliminar.appendChild(aEliminar);
    


    //Esto mete todas las tarjetas dentro del div de cards
    divPoke.appendChild(tablePoke);
    divPoke.classList.add('cards-pokemon');
    divPoke.appendChild(botonEliminar);
    divCards.appendChild(divPoke);
}
divCards.classList.add('divCard');
main[0].appendChild(divCards);


//Funcion eliminar pokemon
function eliminarPokemon(id){
    let pokemonLocal = JSON.parse(window.localStorage.getItem("pokemons"));
    let objPokemon = [];

    for(let i = 0 ; i < pokemonLocal.length ; i++){
        if(parseInt(pokemonLocal[i]['id']) != id){
            objPokemon.push(pokemonLocal[i]);
        }
    }
    window.localStorage.setItem("pokemons", JSON.stringify(objPokemon));
}



// AGREGAR