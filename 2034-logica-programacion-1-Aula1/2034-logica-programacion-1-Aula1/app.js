// Variables
let numeroSecreto = 3;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);


/**
 * Este código
 * realiza la comparación
 */
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste el numero es: ${numeroUsuario}`);
}else{
    //La condición no se cumplió
    alert("Lo siento, no acertaste el número")
}


