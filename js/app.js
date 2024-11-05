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
// Seleccionamos el main y creamos el contenedor principal para el pokedex
let main = document.querySelector('main');
let pokedex = document.createElement('div');
pokedex.id='pokedex';
pokedex.classList.add('contenedor');
main.appendChild(pokedex);
/**
 * Función para crear la carta de un Pokémon
 * @param {Object} pokemon 
 */
function crearCarta(pokemon) {
    //Aqui crearemos la carta
    let card = document.createElement('div');
    card.classList.add('divCarta');
    card.setAttribute('id',`pokemon${pokemon['id']}`);
    //Creamos el ID
    let id = document.createElement('p');
    id.textContent = `ID: ${pokemon['id']}`;
    card.appendChild(id);
    //Creamos la imagen y seleccionamos que imagen queremos que nos ponga añadiendo la ruta
    let imagen = document.createElement('img');
    imagen.src= `img/${pokemon['id']}.png`;
    imagen.classList.add('imagen');
    card.appendChild(imagen);
    //Creamos el nombre del pokemon y lo añadimos al div
    let nomPokemon = document.createElement('p');
    nomPokemon.textContent = `Nombre: ${pokemon['nombre']}`;
    card.appendChild(nomPokemon);
    //Creamos el tipo de pokemon y lo añadimos dentro del div
    let tipoPokemon = document.createElement('p');
    tipoPokemon.textContent = `Tipo: ${pokemon['tipos'].join(', ')}`;
    card.appendChild(tipoPokemon);
    //Creamos el boton que borrara a los pokemons que queramos
    let borrar = document.createElement('button');
    borrar.textContent = 'Eliminar';
    borrar.classList.add('buttonBorrar');
    card.appendChild(borrar);
    return card;
}

/**
 * Funcion para mostrar los pokemons
 */
function mostrarCarta() {
    pokedex.innerHTML = '';
    pokemons.forEach(i => {
    let card = crearCarta(i);
    pokedex.appendChild(card);
  });
}

// Llamar a la función para renderizar la Pokédex al cargar la página
mostrarCarta();


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