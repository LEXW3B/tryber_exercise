const numbers = [18,19,23,53,4,76,23,54];
const pair = numbers.filter((el) => el % 2 === 0).reduce((acc, arr) => acc + arr);

console.log(pair);
