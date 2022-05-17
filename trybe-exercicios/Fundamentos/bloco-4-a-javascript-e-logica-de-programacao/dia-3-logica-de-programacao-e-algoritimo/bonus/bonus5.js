/*
Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
*/
let valorInicial = 7;
let meio = (valorInicial+1)/2;
let ladoEsquerdo = meio;
let ladoDireito = meio;
let asteriscos = '*';

for(let i=1; i<=meio; i+=1){
  let saida = '';

  for(let c=1; c<=valorInicial; c+=1){
    if(c==ladoEsquerdo||c==ladoDireito||i==meio){
      saida+=asteriscos;
    }else{
      saida+=' ';
    }
  }
  ladoEsquerdo -= 1;
  ladoDireito += 1;
  console.log(saida);
}
