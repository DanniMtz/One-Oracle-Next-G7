//Funcion para generar un numero de entero aleatorio entre un dado
function generarNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Variables
let numeroSecreto = 0 // Math.floor(Math.random()*10)+1; // .floor obtiene el entero, + 1 para no incluir el 0 (1-10)
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 3

// solicitar max y min
let numeroMax = parseInt(prompt("Ingresa un numero Maximo:"));
let numeroMin = parseInt(prompt("Ingresa un numero Minimo:"));

numeroSecreto = generarNumeroAleatorio(numeroMin,numeroMax);

while (numeroUsuario != numeroSecreto) { // Mientras numeroUsuario sea Diferente continua
    numeroUsuario = // parseInt(prompt("Me indicas un número entre 1 y 10 por favor")); // version anterior
                    parseInt(prompt(`Me indicas un número entre ${numeroMin} y ${numeroMax}  por favor:`));

    console.log(typeof(numeroUsuario)); //  obtener el tipo de dato

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
       
        // intentos = intentos + 1;
        // intentos +=1;
        intentos ++;
        // palabraVeces ='veces';
        if(intentos > maximoIntentos){
            alert(`Llegaste al número de intentos máximo ${maximoIntentos}`);
            break;
        }
         // No acertaste, condición Falsa
        // alert('Lo siento, no acerptaste el número secreto');
    }
}
