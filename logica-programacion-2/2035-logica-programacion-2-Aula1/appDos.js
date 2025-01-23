/**
 * Clase módulo 1
 */

/** 
let titulo = document.querySelector("h1");
titulo.innerHTML= "Juego del número secreto"

let parrafo = document.querySelector("p");

parrafo.innerHTML = "Indica un número del 1 al 10";


function intentoDeUsuario(){
    alert('Click desde el botón');
}

*/


/**
 * Clase módulo 2 pt.1
 * Buenas prácticas y automatizado 
 */

/** 
function asignarTextoElemento(){
    let titulo = document.querySelector("h1");
    titulo.innerHTML= "Juego del número secreto actualizado"
}

asignarTextoElemento();

*/

/**
 * Función genérica 
 */
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);



function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}


asignarTextoElemento('h1', "Juego del número secreto ");
asignarTextoElemento('p', "Indica un número del 1 al 10 ");




function generarNumeroSecreto() {
    return numeroSecreto = Math.floor(Math.random()*10)+1;
    
    
}





