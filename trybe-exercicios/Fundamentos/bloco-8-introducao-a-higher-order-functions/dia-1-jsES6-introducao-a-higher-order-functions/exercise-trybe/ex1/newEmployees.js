const generator = (fName) => {
  const email = fName.toLowerCase().split(' ').join('_');
  return {fName, email: `${email}@tryber.com`};
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luisa Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(generator));
