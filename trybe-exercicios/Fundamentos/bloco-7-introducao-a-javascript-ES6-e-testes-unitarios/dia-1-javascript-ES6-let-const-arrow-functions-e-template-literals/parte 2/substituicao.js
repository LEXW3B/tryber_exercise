
const func1 = (el) => {
  const frase = ('Trybe x aqui!');
  const Array = frase.split(' ');

  for (let i = 0; i < Array.length; i += 1) {
    if (Array[i] === 'x') {
      Array[i] = el;
    }
  }
  const newArray = Array.join(' ');
  return newArray
};
func1('Alexandre');

const func2 = (e) => {
  const skill = ['HTML', 'CSS', 'JavaScript'];

  let bank = `${e} 
  Minhas três principais habilidades são: 
  ${skill}`;

  return bank;
}
console.log(func2(func1('Alexandre')));

