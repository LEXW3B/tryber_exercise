const numbers = [19,21,30,3,45,22,15];

const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
console.log(isEven);
//outro jeito

const isEven2 = numbers.filter((element) => element % 2 === 0);
console.log(isEven2);
