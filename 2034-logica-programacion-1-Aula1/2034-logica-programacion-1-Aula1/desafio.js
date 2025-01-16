
/**
 * Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo"
 * muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
 */

let respuestaUsuario = prompt("Ingresa el día de la semana: ");

if (respuestaUsuario== sabado || respuestaUsuario== domingo){
    mensaje="¡Buen fin de semana!"
    alert(mensaje)
}else{
    mensajeSemana= "¡Buena semana"
    alert(mensajeSemana)
}


/**
 * Verifica si un número ingresado por el usuario es positivo o negativo. 
 * Muestra una alerta informativa.
 */

let numeroUsuario = prompt("Ingrese un número: ");

if(numeroUsuario >= 0){
    alert("El número es positivo")
}else(numeroUsuario<0);
{
    alert("El número es negativo")
}

/**
 * Crea un sistema de puntuación para un juego. 
 * Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!".
 *  En caso contrario, muestra "Intentalo nuevamente para ganar.".
 */

let puntuacionJuego = prompt("Ingrese su puntuación: ");

if (puntuacionJuego >=100){
    alert("¡Felicidades, has ganado!")
}else{
    alert("Intentalo nuevamente para ganar")
}

/**
 * Crea un mensaje que informe al usuario sobre el saldo de
 *  su cuenta, utilizando un template string para incluir el valor del saldo.
 */

let saldoUsuario = prompt("Ingrese el saldo de su cuenta: ");

alert(`El saldo de su cuenta es de ${saldoUsuario}`)


/**
 * Pide al usuario que ingrese su nombre mediante un prompt.
 *  Luego, muestra una alerta de bienvenida usando ese nombre.
 */

let nombre= prompt("Ingrese su nombre")

alert(`Bienvenid@ ${nombre} a nuestra página`)