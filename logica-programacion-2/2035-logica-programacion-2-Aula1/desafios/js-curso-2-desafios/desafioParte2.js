/**
 * Descripción: Programa con desafíos módulo 2 parte 2 curso lógica de programación en JavaScript
 * Autor: Sharif Giraldo Obando
 * Fecha: Enero de 2025
 */

/**
 * Crear una función que muestre "¡Hola, mundo!" en la consola.
 */



function mostarMensaje(mensaje){
    console.log(mensaje);
}

mostarMensaje("Hola, mundo !");

/**
 * Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
 */

function mostrarNombre(nombre){
    console.log(`¡Hola, ${nombre}!`);
}

mostrarNombre("Sharif");


/**
 * Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
 */

function retornarDobleNumero(numero){
    console.log(numero*2);
}

retornarDobleNumero(4);

/**
 * Crear una función que reciba tres números como parámetros y devuelva su promedio.
 */

function retornarPromedio(numero1, numero2, numero3){
    let promedio = (numero1 + numero2 + numero3) / 3;
    console.log(promedio);
}

retornarPromedio(3,4,6);

/**
 * Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
 */

function calcularMayorDeDosNumeros(a, b) {
    if (a > b) {
        console.log(`${a} es mayor que ${b}`);
    } else if (b > a) {
        console.log(`${b} es mayor que ${a}`);
    } else {
        console.log("Los números son iguales");
    }
}

calcularMayorDeDosNumeros(9,7);

/**
 * Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
 */

function calcularNumeroMultiplicadoPorSiMismo(numero){
    multiplicacion = numero * numero;
    console.log(multiplicacion);
}

calcularNumeroMultiplicadoPorSiMismo(8);