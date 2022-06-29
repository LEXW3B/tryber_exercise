const notaEstudantes = [
  {
    nome: 'Joicy',
    nota: 100
  },
  {
    nome: 'Ronald',
    nota: 50
  },
  {
    nome: 'Joel',
    nota: 80
  },
  {
    nome: 'Ana',
    nota: 90
  },
  {
    nome: 'Carol',
    nota: 70
  }
];

const aprovados = notaEstudantes.filter((element) => element.nota >= 80);
const reprovados = notaEstudantes.filter((element) => element.nota < 80);
console.log(reprovados);
