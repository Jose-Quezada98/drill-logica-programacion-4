// Solicitar al usuario un numero 
//prompt ("Ingrese su numero ")



//Dependiendo del numero , mostrar la secuencia de fibonacci hasta ese numero 
//Imprimir la secuencia fibonacci en la consola
//Identificar que el dato sea un number , en caso contrario debe mandar un mensaje de error y volver a solicitar el dato 
//for (let i=0; )


// Código adaptado para navegador
function generarFibonacci(n) {
  let a = 0, b = 1;
  const resultado = [];
  for (let i = 0; i < n; i++) {
    resultado.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }
  return resultado;
}

function mostrarFibonacci() {
  const input = document.getElementById('numero');
  const resultadoDiv = document.getElementById('resultado');
  const n = Number(input.value);
  if (isNaN(n) || n < 1) {
    resultadoDiv.textContent = 'Por favor, ingresa un número válido mayor a 0.';
    return;
  }
  const serie = generarFibonacci(n);
  resultadoDiv.textContent = 'Serie de Fibonacci: ' + serie.join(', ');
}