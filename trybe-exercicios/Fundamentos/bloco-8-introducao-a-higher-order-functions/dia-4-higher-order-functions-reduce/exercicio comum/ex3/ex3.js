const numbers = [32,15,3,2,-5,56,10];

// const getSum = (result, number) => {
//   console.log(result);
//   return result + number;
// };

// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers);

//ou

const getSum = (result, number) => {
  console.log(result);
  return result + number;
};

const sumNumbers = numbers.reduce(getSum, 0);
console.log(sumNumbers);
