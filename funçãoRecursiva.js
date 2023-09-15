/*
 código usando JS e node.js. 
 */

const prompt = require("prompt-sync")();

function testePrimo(maximo, dividir = 2, lista = []) {
  if (isNaN(maximo)) {
    return console.log("esse caracter não é válido.");
  } else if (maximo < 1) {
    return console.log("esse caracter não é válido.");
  }

  if (dividir > maximo) {
    return lista;
  }

  if (isprime(dividir)) {
    lista.push(dividir);
  }
  return testePrimo(maximo, dividir + 1, lista);
}

function isprime(numero, dividir = 2) {
  if (numero <= 2) {
    return numero == 2;
  }
  if (numero % dividir === 0) {
    return false;
  }

  if (dividir * dividir > numero) {
    return true;
  }
  return isprime(numero, dividir + 1);
}

/*O input foi feito com o nodeJS */

console.log(" ");
const numero = prompt("qual numero você gostaria de testar? ");

console.log(" ");
var resultado = testePrimo(numero);
console.log(resultado);
console.log(" ");
