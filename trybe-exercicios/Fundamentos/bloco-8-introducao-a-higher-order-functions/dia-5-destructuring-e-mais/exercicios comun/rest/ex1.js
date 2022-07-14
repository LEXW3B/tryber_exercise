function quantosPram(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função`;
}

console.log(quantosPram(0,1,2));
console.log(quantosPram('string', null, [1,2,3], { }));
