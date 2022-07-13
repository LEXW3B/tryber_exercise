const numbers =[32,15,3,2,-5,56,10];
//COM O LOOP FOR
// let sumNumbers = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   sumNumbers += numbers[i];
// }
// console.log(sumNumbers);

const sumNumbers = numbers.reduce((result, number) => result + number);
console.log(sumNumbers);
