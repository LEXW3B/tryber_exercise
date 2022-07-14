const livro = {
  autor: { nome: 'André Noel', nascimento: '1978', formcao: 'Ciências da Computação'},
  tema: 'JavaScript',
  ano: { primeiraEdicao: '2019', segundaEdicao: '2021'},
  editora: 'Trybe',
};

const {
  autor: {
    nome,
    nascimento,
    formcao
  },
  tema,
  ano: {
    primeiraEdicao,
    segundaEdicao
  },
  editora
} = livro;

const textApresentation = `O professor ${nome}, formado em ${formcao}, escreveu seu primeiro livro de ${tema} em ${primeiraEdicao} pela editora ${editora}.`;

console.log(textApresentation);
