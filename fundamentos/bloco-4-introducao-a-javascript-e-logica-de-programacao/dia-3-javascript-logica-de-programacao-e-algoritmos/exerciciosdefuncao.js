function adicao(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}
console.log(adicao(2, 3));
console.log(subtracao(5, 2));

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maiorNumero(30, 10));

function maiorDeTresNumeros(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(maiorDeTresNumeros(30, 140, 90));

function positivoOuNegativo(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return 'Zero';
  }
}
console.log(positivoOuNegativo(10));

const trybeStudent = { 
  name: "Luiza",
  class: 15,
  favoriteSubject: "javascript",
  };
console.log(trybeStudent.name + ' ' + 'ama' + ' ' + trybeStudent.favoriteSubject)

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(property + ' = ' + object[property]);
}

function greetingsMessage(name) {
  console.log("Seja bem vindo, " + name);
};

function sum(a, b) {
  a + b;
}
console.log(sum(1, 2));

function greetingsMessage(name) {
  console.log("Boas vindas, " + name);
}
console.log('Matheus');