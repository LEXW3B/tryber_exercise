/*split()irá separar cada caractere de uma string e convertê-lo em um array.
reverse() pegará aquele array e inverterá os elementos dentro dele.
join() unirá os caracteres que foram revertidos pela função reverse().*/

let word = 'trybe';
let troca = word.split('').reverse().join('');

console.log(troca);
