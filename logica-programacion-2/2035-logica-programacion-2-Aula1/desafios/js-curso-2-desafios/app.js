/**
 * Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
 */

let nuevaEtiqueta = document.querySelector('h1');
 nuevaEtiqueta.innerHTML= "Hora del desafío";

 /**
  * Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
*/

function mostrarMensajeConsola(){
    console.log("El botón fue clicado");
    alert("El botón fue clicado");
}

/**
 * Crea una función que se ejecute cuando se haga clic en el botón "prompt", 
 * preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

 */

function mostrarMensajePrompt(){
    let ciudad = prompt("Ingresa el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

/**
 * Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
 */

function mostrarMensajeAlerta(){
    alert("Yo amo JS");
}

/**
 * Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

 */

function mostrarMensajeSuma(){
    let numero1= prompt("Ingrese el primer número");
    let numero2 = prompt("Ingrese el segundo número");
    resultado= parseInt(numero1)+ parseInt(numero2);
    alert(`La suma de ${numero1} y ${numero2} es ${parseInt(resultado)}`);
}

 