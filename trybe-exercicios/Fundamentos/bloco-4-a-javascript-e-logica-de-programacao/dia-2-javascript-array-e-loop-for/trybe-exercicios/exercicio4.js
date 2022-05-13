let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bank = 0;
for(let i = 0; i < numbers.length; i+=1){
    bank += numbers[i]/10;
}
console.log(bank);

if(bank>20){
    console.log(`valor maior que 20, o valor foi ${bank}`)
}else{
    console.log(`valor menor ou igual a 20, o valor foi ${bank}`)
}