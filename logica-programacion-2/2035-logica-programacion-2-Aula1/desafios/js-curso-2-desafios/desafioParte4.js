/**
 * Crea una lista vacía llamada "listaGenerica".
 */

let listaGenerica = [];


/**
 * Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos:
 *  'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
 */


let lenguajesDeProgramacion = ["JavaScript", "C","C++","Kotlin","Python"];

/**
 * Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
 */

lenguajesDeProgramacion.push("Java","Ruby","GoLang");



/**
 * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
 */

function mostrarElementosListaLenguajesDeProgramacion(lenguagesDeProgramacion) {
  console.log(lenguagesDeProgramacion);
}

mostrarElementosListaLenguajesDeProgramacion(lenguajesDeProgramacion);



/**
 * Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

 */

function mostrarListaLenguajesInverso(lenguagesDeProgramacion) {
    console.log(lenguagesDeProgramacion.reverse());
    
}

mostrarListaLenguajesInverso(lenguajesDeProgramacion);


/**
 * Crea una función que calcule el promedio de los elementos en una lista de números.
 */

let listaNumeros = [3,4,6,7,5,1]


function calcularPromedioElementosLista(listaNumeros) {

    let suma = 0;
    let promedio = 0;

    for (let i = 0; i < listaNumeros.length; i++) {
    
        suma = listaNumeros[i] + suma;
        promedio = suma / (i + 1);
        }
        console.log(promedio)
        return promedio;
    
    
}

calcularPromedioElementosLista(listaNumeros);


/**
 * Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

 */


let numeros = [45, 12, 78, 3, 99, 25];
function mostrarNumeroMayorYMenor(lista) {
    if (lista.length === 0) {
        console.log("La lista está vacía.");
        return;
    }

    let numeroMenor = Math.min(...lista);
    let numeroMayor = Math.max(...lista);

    console.log(`Número más pequeño: ${numeroMenor}`);
    console.log(`Número más grande: ${numeroMayor}`);
}

mostrarNumeroMayorYMenor(numeros);



/**
 * Crea una función que devuelva la suma de todos los elementos en una lista.
 */

let listaParaSumar = [2, 6, 7, 9, 5, 30];

function sumarElementosLista(listaParaSumar) {
    let suma = 0;
    for (let i = 0; i < listaParaSumar.length; i++) {
        suma += listaParaSumar[i];  
    }
    console.log(suma);
    return suma;  
}

sumarElementosLista(listaParaSumar);


/**
 * Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
 */



let numerosPosicion = [10, 20, 30, 40, 50];

function encontrarPosicion(numerosPosicion, elemento) {

    if (numerosPosicion.includes(elemento)){
        return numerosPosicion.indexOf(elemento);
    }else{
        return -1;
    }
    
}

console.log(encontrarPosicion(numerosPosicion,2));


/**
 * Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
 */


let listaNumeros1 = [1,2,3,4,5];
let listaNumeros2 = [6,7,8,9,10];

function nuevaListaConSumas(listaNumeros1,listaNumeros2) {

    let nuevaLista=[];
    let i = 0;
    while(i <listaNumeros1.length && i < listaNumeros2.length) {
        suma = listaNumeros1[i] + listaNumeros2[i];
        nuevaLista.push(suma);
        i++;
        }
    return nuevaLista;
}

console.log(nuevaListaConSumas(listaNumeros1,listaNumeros2));


/**
 * Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

listaDeNumeros=[1,2,3,4];

function listarNumerosAlCuadrado(listaDeNumeros) {

    let listaNumerosCuadrados = [];
    i=0;

    while ( i< listaDeNumeros.length){
        cuadrados = listaDeNumeros[i]**2;
        listaNumerosCuadrados.push(cuadrados);
        i++;
        
    }
    return listaNumerosCuadrados;
    
}

console.log(listarNumerosAlCuadrado(listaDeNumeros));