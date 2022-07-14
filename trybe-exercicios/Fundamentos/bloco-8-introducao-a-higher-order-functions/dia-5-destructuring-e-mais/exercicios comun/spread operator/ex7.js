const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Gertúlio Vargas, 1000',
  accupation: 'Developer',
};

const customer = {...people, ...about};
console.log(customer);
