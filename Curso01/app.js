// Variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3

while (numeroUsuario != numeroSecreto) { // Mientras numeroUsuario sea Diferente continua
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto){ // Este código  realiza la comparación 
        // acertamos, condición Verdadera
        alert(`Acertaste,  el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`); // Template Strings - operador Ternario 
    } else {
        // se compara el numero usuario e indica si es menor que el numero secreto
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }else {
            alert('El número secreto es mayor');
        }
        // No acertaste, condición Falsa
        // alert('Lo siento, no acerptaste el número secreto');
        // intentos = intentos + 1;
        // intentos +=1;
        intentos ++;
        // palabraVeces ='veces';
        if(intentos > maximoIntentos){
            alert(`Llegaste al número de intentos máximo ${maximoIntentos}`);
            break;
        }
    }
}

