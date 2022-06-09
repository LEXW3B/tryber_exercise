/*🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.

Modifique a estrutura da função para que ela seja uma arrow function.

Modifique as concatenações para template literals.*/  

/*
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);*/

const testingScope = (escopo) => {
  const ifScope = (escopo === true) ? `ótimo, fui utilizada no escopo !`:`Não devo ser utilizada fora meu escopo`;   
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}
testingScope(true);