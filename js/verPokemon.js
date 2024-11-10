
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
divTarjeta.classList.add("tarjetaPokemon");
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
    let estadisticasBase = pokemon['estadisticas_base'];
    
    // -------- HP ---------
    let filaDatos1 = tablaTarjeta.insertRow();
    let celdaDatos = filaDatos1.insertCell();
    celdaDatos.textContent = "HP: ";

    let celdaDatos1 = filaDatos1.insertCell();
    let rangoHp = document.createElement('input');
    rangoHp.type = 'range';
    rangoHp.value = estadisticasBase['hp'];
    rangoHp.disabled = true;
    let textoHp = document.createElement('span');
    textoHp.textContent = estadisticasBase['hp'];

    celdaDatos1.appendChild(rangoHp);
    celdaDatos1.appendChild(textoHp);

    // --------- Ataque ------------
    let filaDatos2 = tablaTarjeta.insertRow();
    let celdaDatosA = filaDatos2.insertCell();
    celdaDatosA.textContent = "Ataque: ";

    let celdaDatos1A = filaDatos2.insertCell();
    let rangoAt = document.createElement('input');
    rangoAt.type = 'range';
    rangoAt.value = estadisticasBase['ataque'];
    rangoAt.disabled = true;
    let textoAt = document.createElement('span');
    textoAt.textContent = estadisticasBase['ataque'];

    celdaDatos1A.appendChild(rangoAt);
    celdaDatos1A.appendChild(textoAt);
    // --------- Defensa ------------
    let filaDatos3 = tablaTarjeta.insertRow();
    let celdaDatosD = filaDatos3.insertCell();
    celdaDatosD.textContent = "Defensa: ";

    let celdaDatosD1 = filaDatos3.insertCell();
    let rangoDef = document.createElement('input');
    rangoDef.type = 'range';
    rangoDef.value = estadisticasBase['defensa'];
    rangoDef.disabled = true;
    let textoDef = document.createElement('span');
    textoDef.textContent = estadisticasBase['defensa'];

    celdaDatosD1.appendChild(rangoDef);
    celdaDatosD1.appendChild(textoDef);
    // --------- Ataque Especial ------------
    let filaDatos4 = tablaTarjeta.insertRow();
    let celdaDatosAE = filaDatos4.insertCell();
    celdaDatosAE.textContent = "Ataque Esp.: ";

    let celdaDatosAE1 = filaDatos4.insertCell();
    let rangoAE = document.createElement('input');
    rangoAE.type = 'range';
    rangoAE.value = estadisticasBase['ataque_especial'];
    rangoAE.disabled = true;
    let textoAE = document.createElement('span');
    textoAE.textContent = estadisticasBase['ataque_especial'];

    celdaDatosAE1.appendChild(rangoAE);
    celdaDatosAE1.appendChild(textoAE);
    // --------- Defensa Especial ------------
    let filaDatos5 = tablaTarjeta.insertRow();
    let celdaDatosDE = filaDatos5.insertCell();
    celdaDatosDE.textContent = "Defensa Esp.: ";

    let celdaDatosDE1 = filaDatos5.insertCell();
    let rangoDE = document.createElement('input');
    rangoDE.type = 'range';
    rangoDE.value = estadisticasBase['defensa_especial'];
    rangoDE.disabled = true;
    let textoDE = document.createElement('span');
    textoDE.textContent = estadisticasBase['defensa_especial'];

    celdaDatosDE1.appendChild(rangoDE);
    celdaDatosDE1.appendChild(textoDE);
    // --------- Velocidad ------------
    let filaDatos6 = tablaTarjeta.insertRow();
    let celdaDatosV = filaDatos6.insertCell();
    celdaDatosV.textContent = "Velocidad: ";

    let celdaDatosV1 = filaDatos6.insertCell();
    let rangoV = document.createElement('input');
    rangoV.type = 'range';
    rangoV.value = estadisticasBase['velocidad'];
    rangoV.disabled = true;
    let textoV = document.createElement('span');
    textoV.textContent = estadisticasBase['velocidad'];

    celdaDatosV1.appendChild(rangoV);
    celdaDatosV1.appendChild(textoV);
    //Insertamos tabla dentro de un div
    divTarjeta.appendChild(tablaTarjeta);
    
    
}

crearTarjetaPokemon(comprobarPokemon(idPokemon));

main[0].appendChild(divTarjeta);


