const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);
console.log(isEven);

console.log(verifyEven(9));
console.log(verifyEven(14));

//outro jeito de fazer a mesma coisa sem o uso de uma função
const isEven2 = numbers.find((number) => number % 2 === 0);
console.log(isEven2);
//find feito para numeros