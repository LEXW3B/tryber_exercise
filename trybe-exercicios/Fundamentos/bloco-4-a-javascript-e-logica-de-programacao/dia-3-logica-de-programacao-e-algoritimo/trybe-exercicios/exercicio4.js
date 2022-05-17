// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

let bank=0;
for(let i = 0; i<arr.length; i+=1){
    let ehPrimo = true;

    for(let divisor=2; divisor<i; divisor+=1){
        if(i%divisor===0){
            ehPrimo=false;
            break;
        }
    }
    if(ehPrimo){
        bank=i;
    }
}
console.log(bank);
