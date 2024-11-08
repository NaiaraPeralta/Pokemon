
let cadPokemon = window.location.search;

cadPokemon = cadPokemon.split('=');

let idPokemon = cadPokemon[1];
let pokemonLocal = JSON.parse(window.localStorage.getItem('pokemons'));
let main = document.getElementsByTagName('main');

/**
 * La funcion comprueba que pokemon ha sido seleccionado y lo retorna para futuras funciones
 * @param {string} id - Pasamos por parametro el id del pokemon seleccionado en el formulario para ver el pokemon
 * @returns - Retorna el objeto pokemon encontrado el cual la id recogida por get sea igual a la id del pokemon
 */
function comprobarPokemon(id){
    for(let i of pokemonLocal){
        if(parseInt(i['id']) == parseInt(id)){
            return i;
        }
    }
}


//Creamos un div que contendrá la carta
let divTarjeta = document.createElement('div');
/**
 * La funcion crea la tarjeta del pokemon pasado por parametro y así mostrar sus estadisticas
 * @param {Object} pokemon - Pasamos por parametro el pokemon que queremos mostrar por pantalla en forma de tarjeta
 */
function crearTarjetaPokemon(pokemon){
    console.log(pokemon);
        
    //Necesitaremos crear una tabla para almacenar todos los datos del pokemon
    let tablaTarjeta = document.createElement('table');
    //Primera Fila contendrá el id del pokemon y el nombre -- usaremos 2 celdas
    let filaIdNom = tablaTarjeta.insertRow();
    let celda1 = filaIdNom.insertCell();
    celda1.innerHTML = "<strong>ID: " + pokemon['id'] + "</strong>";  
    let celda2 = filaIdNom.insertCell();
    celda2.innerHTML = "<strong>Nombre: " + pokemon['nombre'] + "</strong>"; 
    //Segunda fila contendrá la imagen del pokemon
    let filaImg = tablaTarjeta.insertRow();
    let celdaImg = filaImg.insertCell();
    celdaImg.colSpan = "2";
    let imgVer = document.createElement('img');
    imgVer.src = "../img/" + pokemon['id'] + ".png"; 
    celdaImg.appendChild(imgVer);
    //La tercera y las siguientes contendran los datos del pokemon

    //Insertamos tabla dentro de un div
     divTarjeta.appendChild(tablaTarjeta);
    
}

crearTarjetaPokemon(comprobarPokemon(idPokemon));



main[0].appendChild(divTarjeta);


