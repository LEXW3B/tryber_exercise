const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática',
};
const { a: name, b: classAssigned, c: subject } = student;
console.log(name);
console.log(classAssigned);
console.log(subject);
//ou
const nome = student.a;
console.log(nome);//maria
