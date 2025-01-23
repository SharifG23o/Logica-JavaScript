/**
 * Descripción: Desafíos de programación
 * Autor: Sharif Giraldo Obando
 * Fecha: Enero de 2025
 */



/**
 * Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
 */

let mensaje = "Bienvenido a programar en javaScript";
console.log(mensaje);
alert(mensaje);

/**
 * Crea una variable llamada "nombre" y asígnale tu nombre. 
 * Luego, utiliza console.log para mostrar el mensaje "¡Hola,
 *  [tu nombre]!" en la consola del navegador.
 */

let nombre = prompt("Por favor ingresa tu nombre: ");
console.log(`¡Hola, ${nombre}!`);


/**
 * Crea una variable llamada "nombre" y asígnale tu nombre.
 *  Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

 */


let nombre2 = prompt("Por favor ingresa tu nombre: ");
alert(`¡Hola, ${nombre2}!`);

/**
 * Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?.
 *  Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
 */

let lenguajeFavorito= prompt("¿Cuál es el lenguaje de programación que más te gusta?: ");
console.log(lenguajeFavorito);


/**
 * Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, 
 * realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado".
 *  Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
 */

let valor1= 3;
let valor2=8;
let resultado= valor1+valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

/**
 * Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección.
 *  Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
 * Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
 */

let valorResta1=15;
let valorResta2=5;
let resultadoResta= valorResta1-valorResta2;
console.log(`La diferencia entre ${valorResta1} y ${valorResta2} es igual a ${resultadoResta}`);

/**
 * Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, 
 * utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
 */

let edadUsuario= prompt("Ingresa tu edad: ");

if(edadUsuario >=18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}


/**
 * Crea una variable "numero" y solicita un valor con prompt.
 *  Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
 */

let numero = prompt("Ingresa un número: ");

if(numero >0){
    console.log("El número es positivo");
    }else if(numero <0){
        console.log("El número es negativo");
        }else{
            console.log("El número es cero");
}


/**
 * Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
 */

valor=1;

while( valor <=10){
    console.log(valor);
    valor++

}

/**
 * Crea una variable "nota" y asígnale un valor numérico.
 *  Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
 */

let nota = 7;

if(nota>=7){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}


/**
 * Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
 */

let numeroRandom= Math.floor(Math.random()*10);
console.log(numeroRandom);

/**
 * Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

 */

let numeroRandomRango = Math.floor(Math.random()*10)+1;

/**
 * Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.


 */

letNumeroRandomRango2 = Math.floor(Math.random()*1000)+1;