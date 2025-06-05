// Solicitar al usuario un numero 
//prompt ("Ingrese su numero ")



//Dependiendo del numero , mostrar la secuencia de fibonacci hasta ese numero 
//Imprimir la secuencia fibonacci en la consola
//Identificar que el dato sea un number , en caso contrario debe mandar un mensaje de error y volver a solicitar el dato 
//for (let i=0; )


const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

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

function pedirNumero() {
  rl.question('Ingrese su número: ', (input) => {
    const numero = Number(input);
    if (isNaN(numero) || numero < 1) {
      console.log('Por favor, ingrese un número válido mayor a 0.');
      pedirNumero();
    } else {
      // Usar la función para generar la serie de Fibonacci
      const serie = generarFibonacci(numero);
      console.log('Serie de Fibonacci:');
      console.log(serie.join(', '));
      rl.close();
    }
  });
}

pedirNumero();