const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listaStudent) => listaStudent.filter((student) => student !== name);
const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);

console.log(newListStudents);
