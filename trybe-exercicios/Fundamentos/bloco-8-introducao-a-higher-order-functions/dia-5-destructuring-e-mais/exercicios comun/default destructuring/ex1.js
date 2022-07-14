const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Europeu' } = person;
console.log(nationality);