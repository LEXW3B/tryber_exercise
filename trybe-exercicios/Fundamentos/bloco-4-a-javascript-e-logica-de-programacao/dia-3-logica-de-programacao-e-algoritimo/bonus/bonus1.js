/*
Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
*/
let valorInicial = 5;
let asteriscos = '*';
let emLinha = '';

for(let i=0; i<valorInicial; i+=1) {
  emLinha=emLinha+asteriscos;
};
for(let i=0; i<valorInicial; i+=1) {
  console.log(emLinha);
};
