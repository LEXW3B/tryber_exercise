const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfArray, array) =>{
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfArray);
  console.log('Array percorrida:', array);
});
