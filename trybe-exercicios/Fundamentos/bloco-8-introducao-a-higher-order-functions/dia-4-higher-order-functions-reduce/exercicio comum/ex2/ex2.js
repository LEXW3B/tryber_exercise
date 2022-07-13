const collection = [1,2,3,4,5];

const getSum = (acumulador, numero) => {
  console.log(acumulador);
  return acumulador + numero;
};

//com o reduce

const sumNumbers = collection.reduce(getSum);
console.log(sumNumbers);
