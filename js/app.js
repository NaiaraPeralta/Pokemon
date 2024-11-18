let pokemons = pokemon;
let añadir='';
let pokemonLocal='';
let pokemonsAgregado= [];
let añadirPokemon = ''

if(!JSON.parse(window.localStorage.getItem("pokemons"))){
    añadir = window.localStorage.setItem("pokemons", JSON.stringify(pokemons));
}else{
    pokemonLocal = JSON.parse(window.localStorage.getItem("pokemons"));
}

if(!JSON.parse(window.localStorage.getItem("pokemonsAgregado"))){
    añadirPokemon = window.localStorage.setItem("pokemonsAgregado", JSON.stringify(pokemonsAgregado));    
}else{
    pokemonsAgregado = JSON.parse(window.localStorage.getItem("pokemonsAgregado"));
}

/**
 * La funcion se encarga de reiniciar los datos de los items de localStorage
 */
function reiniciarDatos(){
    window.localStorage.removeItem('pokemons');
    window.localStorage.removeItem('pokemonsAgregado');
    
    cargarDatos();
    console.log('reiniciado');
}
/**
 * La funcion se encarga de volver a cargar los datos vacios
 */
function cargarDatos(){
    location.reload();
    pokemonsAgregado= [];
    pokemons = pokemon;
    window.localStorage.setItem("pokemons", JSON.stringify(pokemons));
    window.localStorage.setItem("pokemonsAgregado", JSON.stringify(pokemonsAgregado));
}

/**
 * Muestra como es el ancho y el largo de la página en pixeles
 */
function mostrarScreen(){
    //Vamos a agregar el objeto screen y mostrar en la pantalla de index.html 
    let divScreen = document.createElement('div');
    let pWidth = document.createElement('p');
    let pHeigt = document.createElement('p');
    pWidth.textContent = "Ancho: " + screen.width + "px";
    pHeigt.textContent = "Alto: " + screen.height + "px";
    divScreen.appendChild(pWidth);
    divScreen.appendChild(pHeigt);
    divScreen.classList.add('screen');
    header[0].appendChild(divScreen);
}




// INDEX
// Primero obtengo las etiquetas header y nav que son las primeras que voy a editar
// *********************  Header  **********************
let header = document.getElementsByTagName('header');
let nav = document.getElementsByTagName('nav');

// Por cada etiqueta crearé divs

let divHeader = document.createElement('div');
let h1Header = document.createElement('h1');
h1Header.textContent = "Pokemon";
h1Header.classList.add('h1Style');

divHeader.appendChild(h1Header);
mostrarScreen();
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
labelForm.classList.add('h2Style');
inputForm.addEventListener('keyup', function(){
    let texto = inputForm.value.toLowerCase();
    let cards = document.getElementsByClassName('divCarta');

    for(let i = 0 ; i < cards.length ; i++){
        let pPoke = cards[i].getElementsByTagName('p');
        let nombrePokemon = pPoke[1].textContent.toLowerCase();
        nombrePokemon = nombrePokemon.split(': ');
        console.log(nombrePokemon[1]);
        //let cartaPokeNombre = cards[i].querySelector('p:nth-child(2)').textContent.toLowerCase();
        if(nombrePokemon[1].indexOf(texto) !== -1){
            cards[i].classList.remove('ocularTarjeta');
        } else {
            cards[i].classList.add('ocularTarjeta');
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

//aRedirect.setAttribute('href', "./pages/agregar.html");
pRedirect.textContent = "Agregar Pokemon";
pRedirect.addEventListener('click', function(){
    history.pushState({ file: "agregar.html" }, "Formulario agregar", "./agregar.html");
    window.location.href = "./pages/agregar.html";
});

let divReiniciar = document.createElement('div');
let pReiniciar = document.createElement('p');
pReiniciar.textContent = "Reiniciar datos de pokemon";
pReiniciar.addEventListener('click', reiniciarDatos);

divReiniciar.classList.add("divReiniciar");
divRedirect.classList.add("divRedireccion");


divReiniciar.appendChild(pReiniciar);
divRedirect.appendChild(pRedirect);
nav[0].appendChild(divReiniciar);
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

    //Creamos el boton para ver el pokemon
    let divVer = document.createElement('div');
    divVer.classList = 'divVer';
    let formVer = document.createElement('form');

    let hiddenId = document.createElement('input');
    hiddenId.type = "hidden";
    hiddenId.name = 'id';
    hiddenId.value = pokemon['id'];
    formVer.appendChild(hiddenId);

    let submitVer = document.createElement('button');
    submitVer.type = "submit";
    let imgVer = document.createElement('img');
    imgVer.src = "img/ver.png";

    imgVer.addEventListener('click', function(){
        history.pushState({ file: "verPokemon.html" }, "Formulario agregar", "./pages/verPokemon.html");
        window.location.href = "./pages/verPokemon.html?" + pokemon['id'];
    });

    submitVer.appendChild(imgVer);
    formVer.appendChild(submitVer);

    divVer.appendChild(formVer);
    card.appendChild(divVer);

    //Creamos el ID
    let id = document.createElement('p');
    id.textContent = `ID: ${pokemon['id']}`;
    id.classList.add('text');
    card.appendChild(id);
    //Creamos la imagen y seleccionamos que imagen queremos que nos ponga añadiendo la ruta
    let imagen = document.createElement('img');
    imagen.src= `img/${pokemon['id']}.png`;
    if( imagen.src= `img/${pokemon['id']}.png`){
        imagen.classList.add('imagen');
        card.appendChild(imagen);
    }
   
    //Creamos el nombre del pokemon y lo añadimos al div
    let nomPokemon = document.createElement('p');
    nomPokemon.textContent = `Nombre: ${pokemon['nombre']}`;
    nomPokemon.classList.add('text');
    card.appendChild(nomPokemon);
    //Creamos el tipo de pokemon y lo añadimos dentro del div
    let tipoPokemon = document.createElement('p');
    if(pokemon['tipos']){
        tipoPokemon.textContent = `Tipo: ${pokemon['tipos'].join(', ')}`;
        card.classList.add(pokemon['tipos'][0].toLowerCase());
    }
    
    tipoPokemon.classList.add('text');
    card.appendChild(tipoPokemon);
    //Creamos el boton que borrara a los pokemons que queramos
    
    let borrar = document.createElement('a');
    let imgBorrar= document.createElement('img');
    imgBorrar.src= 'img/basura.png';
    borrar.appendChild(imgBorrar);
    borrar.addEventListener('click', function(){
        eliminarPokemon(parseInt(pokemon['id']));
        card.classList.add('ocularTarjeta');
    });
    borrar.classList.add('basura');
    card.appendChild(borrar);

    return card;
}

/**
 * Funcion para mostrar los pokemons
 */
function mostrarCarta() {
    pokedex.innerHTML = '';
    let pokemonLocalStorage = JSON.parse(localStorage.getItem('pokemons'));
    for(let i in pokemonLocalStorage){
        let card = crearCarta(pokemonLocalStorage[i]);
        pokedex.appendChild(card);
    }

    let pokemonAgregado = JSON.parse(localStorage.getItem('pokemonsAgregado'));

    for(let i in pokemonAgregado){
        let card = crearCarta(pokemonAgregado[i]);
        pokedex.appendChild(card);
    }
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

