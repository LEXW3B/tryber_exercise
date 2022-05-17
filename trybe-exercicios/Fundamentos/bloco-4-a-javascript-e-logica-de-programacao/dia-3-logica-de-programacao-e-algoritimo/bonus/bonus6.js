/*
Faça um programa que diz se um número definido numa variável é primo ou não.
Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.
*/
let dividir = 1;
let numeroFinal = 11;

for(let i=2; i<=numeroFinal; i+=1) {
  if(numeroFinal%i===0){
    dividir+=1;
  }
}
if(dividir===2){
    console.log(`Boa garoto(a)!!! O número ${numeroFinal} é primo!`);
}else{
    console.log(`Ops!!! O número ${numeroFinal} não é primo.`);
}
