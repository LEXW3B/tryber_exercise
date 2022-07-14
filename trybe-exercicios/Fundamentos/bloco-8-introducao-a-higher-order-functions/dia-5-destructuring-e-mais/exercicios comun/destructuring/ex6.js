const livro = {
  autor: 'David Flanagan',
  tema: 'JavaScript',
  ano: '2012',
  editora: 'Bookman',
};
const { autor, tema, ano, editora } = livro;
console.log(autor,'- editora: ', editora, ...ano);
