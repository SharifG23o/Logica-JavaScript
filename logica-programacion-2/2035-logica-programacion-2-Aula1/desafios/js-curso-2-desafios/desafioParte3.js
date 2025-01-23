/**
 * Descripción: Programa con desafíos módulo 2 parte 3 curso lógica de programación en JavaScript
 * Autor: Sharif Giraldo Obando
 * Fecha: Enero de 2025
 */


/**
 * Crea una función que calcule el índice de masa corporal (IMC) de una persona 
 * a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
 */

function calcularIMC(alturaMetros, peso){
    let imc = peso / (alturaMetros * alturaMetros);
    return imc;
}

console.log(calcularIMC(1.80, 70));


/**
 * Crea una función que calcule el valor del factorial de un número pasado como parámetro
 */

function calcularFactorial(numero){
    factorial = 1;
    while (numero >0){
        factorial = factorial * numero;
        numero = numero - 1;

    }
    return factorial;
}

console.log(calcularFactorial(4));

/**
 * Crea una función que convierta un valor en dólares, pasado como parámetro, 
 * y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). 
 * Para esto, considera la cotización del dólar igual a R$4,80.
 */


function conversionDolaresMonedaLocal(valorDolares){
    let cotizacionDolar = 4.80;
    let valorPeso= valorDolares * cotizacionDolar;
    return valorPeso;
}

console.log(conversionDolaresMonedaLocal(25))



/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular,
 *  utilizando la altura y la anchura que se proporcionarán como parámetros.
 */


function calcularArea(base, altura){
    let area = base * altura;
    return area;
}

function calcularPerimetro(base, altura){
    let perimetro = (base + altura)*2;
    return perimetro
}

alert(calcularArea(3,5));
alert(calcularPerimetro(3,5));

function calcularAreaPerimetro(base, altura){
    let area = base * altura;
    let perimetro = (base + altura)*2;
    return `El área de la sala es ${area} y el perímetro es ${perimetro}`
}


/**
 * Crea una función que muestre en pantalla el área y el perímetro de una sala circular,
 *  utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
 */

function calcularAreaCirculo(radio){
    let pi = 3.14;
    let area = pi * (radio ** 2);
    return area;
}


function calcularPerimetroCirculo(radio){
    let pi = 3.14;
    let perimetro = pi * radio * 2;
    return perimetro;
}

alert(calcularAreaCirculo(3));
alert(calcularPerimetroCirculo(3));


/**
 * Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 * @param numeroTabla 
 */

function generarTablaMultiplicacion(numeroTabla) {
    let tabla = "";
    let i = 0;  

    while (i <= 10) {
        tabla += `${numeroTabla} x ${i} = ${numeroTabla * i}\n`;
        i++;
    }

    return tabla;
}


console.log(generarTablaMultiplicacion(3));



