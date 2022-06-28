const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase().split(' ').join('_');
};
names.forEach(convertToUpperCase);
console.log(names);
