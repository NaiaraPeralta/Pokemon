//El DOMContentLoaded ocurre cuando el documento ha sido completamente cargado, es decir para cuando se ha terminado
//de ejecutar todo el codigo.
document.addEventListener("DOMContentLoaded", () => {
    //  Formulario
    //creo la etiqueta form
    let form = document.createElement("form");
    //le asigno un id al formulario para que si luego necesitamos llamarlo para cualquier otra fucnion podamos llamarlo
    //por el id
    form.id = "formularioPokemon";
    form.method = "get";
  
    // Crear la etiqueta de H2 
    let title = document.createElement("h2");
    title.textContent = "Agregar un nuevo Pokémon";
    //Añado el encabezado <h2> al formulario
    form.appendChild(title);
  
    // Creo el label para el nombre
    let labelNb = document.createElement("label");
    labelNb.textContent = "Nombre: ";
    //creo el input para el nombre
    let inputNb = document.createElement("input");
    //especifico que el input es de tipo texto
    inputNb.type = "text";
    inputNb.id = "nombre";
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
    estadisticasBase.forEach(estadisticasBase => {
      let labelEB = document.createElement("label");
      //aqui utilizo las comillas invertidas para q lo de hp , ataque ... se me muestre como texto 
      //porque si lo pongo con comillas " " se pone como cadena de texto literal y no funciona 
      labelEB.textContent = `${estadisticasBase}:`;
      let inputEB = document.createElement("input");
      inputEB.type = "number";
      inputEB.id = estadisticasBase;
      inputEB.required = true;
      labelEB.appendChild(inputEB);
      form.appendChild(labelEB);
      form.appendChild(document.createElement("br"));
      form.appendChild(document.createElement("br"));
    });
  
    form.appendChild(document.createElement("br"));

    let inputboton = document.createElement("input");
    inputboton.type = "submit";
    inputboton.id = "agregar";
    inputboton.value = "Agregar Pokémon";
    form.appendChild(inputboton);
   
/** 
    // Creo el boton de agregar 
    let botonAgregar = document.createElement("button");
    botonAgregar.type = "submit";
    botonAgregar.textContent = "Agregar Pokémon";
    form.appendChild(botonAgregar);
  */


});
  

  