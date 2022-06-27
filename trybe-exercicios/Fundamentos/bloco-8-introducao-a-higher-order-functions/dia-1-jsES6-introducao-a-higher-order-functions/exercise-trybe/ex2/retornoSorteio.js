const numeroEscolhido = (meuNumero, sort) => meuNumero === sort;

const sorteio = (meuNumero, callback) => {
  const sort = Math.floor(Math.random()*5);
  return callback(meuNumero, sort) ? `O número sorteado foi ${sort} - Lucky day, you won! ` : `O número sorteado foi ${sort} - Try Again! `;
}

console.log(sorteio(2, numeroEscolhido));
