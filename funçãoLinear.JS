/*
 código usando JS e node.js. 
 */

const prompt = require("prompt-sync")();

function primos(maximo) {
  lista = [];

  if (isNaN(maximo)) {
    return console.log("esse caracter não é válido.");
  } else if (maximo < 1) {
    return console.log("esse caracter não é válido.");
  }

  if (maximo <= 1) {
    return console.log("esse número não é válido.");
  }

  for (let contador = 2; contador <= maximo; contador++) {
    let primo = true;

    for (let divisor = 2; divisor < contador; divisor++) {
      if (contador % divisor === 0) {
        primo = false;
        continue;
      }
    }
    if (primo) {
      lista.push(contador);
    }
  }

  return console.log(lista);
}

/*O input foi feito com o nodeJS */

console.log(" ");
const numero = prompt("qual numero você gostaria de testar? ");

console.log(" ");
primos(numero);
console.log(" ");
