// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'

while (numeroUsuario != numeroSecreto) { // Mientras numeroUsuario sea Diferente continua
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto){ // Este código  realiza la comparación 
        // acertamos, condición Verdadera
        alert(`Acertaste,  el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`); // Template Strings
    } else {
        // se compara el numero usuario e indica si es menor que el numero secreto
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else {
            alert('El número secreto es mayor');
        }
        // No acertaste, condición Falsa
        // alert('Lo siento, no acerptaste el número secreto');
        intentos = intentos + 1;
        palabraVeces ='veces';
    }
}

