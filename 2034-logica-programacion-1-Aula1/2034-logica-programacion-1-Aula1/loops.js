// Variables
let numeroSecreto = 4;

while(numeroUsuario!= numeroSecreto){

    let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

    console.log(numeroUsuario);

    /**
     * Este código
     * realiza la comparación
     * Es un condicional anidado
     */
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste el numero es: ${numeroUsuario}`);
    }else{
        //La condición no se cumplió
        if(numeroUsuario > numeroSecreto){
            alert("El número secreto es menor")
        }else{
            alert("El número secreto es mayor")
        }
        
    }

}

