/**
 * Descripción: Desafío final - Lógica de programación:
 * sumérgete en la programación con JavaScript
 * Autor: Sharif Giraldo Obando
 * Fecha: Enero 2025
 */


// Variables

let numeroMaximo=100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1; 
let maximosintentos=8;

while(numeroUsuario!= numeroSecreto){

    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximo} por favor: `));

    
    console.log(typeof(numeroUsuario));
    

    /**
     * Este código
     * realiza la comparación
     * Es un condicional anidado
     */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1 ? "vez" :"veces"}`);
    }else{
        //La condición no se cumplió
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor")
        }else{
            alert("El número secreto es mayor")
        }

        //Incrementamos el contador cuando no acierta

        //intentos = intentos +1;
        //intentos+=1;
        intentos++;
        

        //palabraVeces = "veces"

        if (intentos > maximosintentos){
            alert(`Llegaste al número máximo de ${maximosintentos} intentos`);
            break;
            //Rompemos el ciclo
        }
      
        
    }

}

