const maiorPalavra = ('Antônio foi no banheiro e não sabemos o que aconteceu');
const bigWord = (el) => {
  const arr = el.split(' ');
  let maximoComprimento = 0;
  let resultado = '';

  for (const palavra of arr) {
    if (palavra.length > maximoComprimento) {
      maximoComprimento = palavra.length;
      resultado = palavra;
    }
  }
  console.log(resultado);
  return resultado;
};
bigWord(maiorPalavra)