function calcularDobleTriple(numero) {
    const doble = numero * 2;
    const triple = numero * 3;
  
    return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
  }
  
  const numero = 5;
  const resultado = calcularDobleTriple(numero);
  console.log(resultado);