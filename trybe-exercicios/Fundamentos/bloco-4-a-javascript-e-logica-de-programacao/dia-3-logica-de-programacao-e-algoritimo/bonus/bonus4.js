/*
Depois, faça uma pirâmide com n asteriscos de base
*/
let valorInicial = 5;
let asteriscos = '*';
let emLinha = '';

let matriz=(valorInicial+1)/2;
let ladoEsquerdo=matriz;
let ladoDireito=matriz;

for(let i=0; i<=matriz; i+=1){
  for(let c=0; c<=valorInicial; c+=1){
    if(c>ladoEsquerdo&&c<ladoDireito){
      emLinha=emLinha+asteriscos;
    }else {
      emLinha=emLinha + ' ';
    }
  }
  console.log(emLinha);
  emLinha = '';
  ladoDireito += 1;
  ladoEsquerdo -= 1
};
