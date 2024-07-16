
/*01 Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
 De lo contrario, muestra "¡Buena semana!".*/

 let diaDelaSemana = prompt("¿Que dia la semana es hoy?");
 console.log(diaDelaSemana);

 if(diaDelaSemana == "Sábado" || diaDelaSemana == "Domingo"){
    alert('¡Buen fin de semana!');
 } else{
    alert('¡Buena semana!');
 }

/* 02 Verifica si un número ingresado por el usuario es positivo o negativo.
Muestra una alerta informativa.*/

let numero = prompt('Escribe un numero positivo o negativo')
if(numero > 0){
    alert(`El número ${numero} es positivo`);
}else if (numero < 0 ){
    alert(`El número ${numero} es negativo`);
}else {
    alert(`El número ${numero} es cero`);
}

/* 03 Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
En caso contrario, muestra "Intentalo nuevamente para ganar.".*/
let puntuacion = 5;
if (puntuacion >= 100 ){
    alert(`La puntuacion es ${puntuacion}: ¡Felicidades, has ganado!`);
} else {
    alert(`La puntuacion es ${puntuacion}: Intentalo nuevamente para ganar.`);
}


// 04 Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldo = 10500;
alert(`El saldo de su cuenta es: $${saldo}`);

// 05 Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario = prompt('Ingresa tu nombre por favor');
alert(`Bienvenido ${nombreUsuario}`);
