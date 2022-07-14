const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const { name, age, nationality } = user;

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const { profession, squad, squadInitials } = jobInfos;
//console.log(user, jobInfos);
const frase = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

console.log(frase);
