/*
Agora inverta o lado do triângulo
*/
let valorInicial = 5;
let asteriscos = '*';
let emLinha = '';
let posicao = valorInicial;

for(let i=0; i<valorInicial; i+=1){
  for(let c=0; c<=valorInicial; c+=1){
    if(c<posicao){
      emLinha=emLinha + ' ';
    }else{
      emLinha=emLinha+asteriscos;
    }
  }
  console.log(emLinha);
  emLinha = '';
  posicao -= 1;
};
