/**
 * Crea un contador que comience en 1 y vaya hasta 10
 *  usando un bucle 'while'. Muestra cada número.
 */


let contador=1;

while(contador <=10){
    console.log(contador)
    contador= contador+1
}


/**
 * Crea un contador que comience en 10 y vaya hasta 0 
 * usando un bucle 'while'. Muestra cada número.
 */


let contadorComienzo=10;

while (contadorComienzo>=0){
    console.log(contadorComienzo);
    contadorComienzo= contadorComienzo -1;
}

/**
 * Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
 * hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */

let numeroCuentaRegresiva= prompt("Ingrese el número para iniciar la cuenta regresiva");

while(numeroCuentaRegresiva !=0){
    console.log(numeroCuentaRegresiva);
    numeroCuentaRegresiva= numeroCuentaRegresiva -1
}

/**
 * Crea un programa de cuenta progresiva. Pide un número y cuenta desde 
 * 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
 */

let numeroCuentaProgresiva= prompt("Ingrese el numero para iniciar la cuenta progresiva");
let contadorMaximo

while (contadorMaximo <=numeroCuentaProgresiva){
    console.log(contadorMaximo);
    contadorMaximo++
}

