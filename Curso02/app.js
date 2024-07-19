/*// conexion a HTML por Selectores de Objetos
let titulo = document.querySelector('h1');
// asigna un titulo a la etiqueta h1 con innerHTML
titulo.innerHTML = 'Juego del número secreto';
*/

/*
// Asinamos a etiqueta parrafo un Texto
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/ 
let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    // conexion a HTML por Selectores de Objetos
let elementoHTML = document.querySelector(elemento);
// asigna un titulo a la etiqueta h1 con innerHTML
elementoHTML.innerHTML = texto;
return;
}


// Creacion de Funcion intentoDelUsuario
function intentoDeUsuario(){
    alert('Click desde el Botón')
}

function generarNumeroSecreto(){
    return Math.floor((Math.random()*10)+1);
}

// llamar la funcion
asignarTextoElemento('h1','Juego del Número Secreto!');
asignarTextoElemento('p','Indica un número del 1 al 10:');

