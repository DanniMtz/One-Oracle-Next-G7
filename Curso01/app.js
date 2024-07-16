// Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor");

console.log(numeroUsuario);

/*Este código
 realiza la comparación
 */
if (numeroUsuario == numeroSecreto){
    // acertamos, condición Verdadera
    alert(`Acertaste,  el número es: ${numeroUsuario}`); // Template Strings
} else {
    // No acertaste, condición Falsa
    alert('Lo siento, no acerptaste el número secreto')
}
