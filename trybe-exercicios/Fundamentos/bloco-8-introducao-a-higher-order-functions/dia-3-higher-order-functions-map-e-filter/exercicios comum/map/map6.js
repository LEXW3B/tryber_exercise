const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map((numero) => numero * 2));

const paresMenorQueCinco = [];
numeros.forEach((numero) => {
  if (numero < 5 && numero % 2 === 0) {
    paresMenorQueCinco.push(numero);
  }
});
console.log(paresMenorQueCinco);
