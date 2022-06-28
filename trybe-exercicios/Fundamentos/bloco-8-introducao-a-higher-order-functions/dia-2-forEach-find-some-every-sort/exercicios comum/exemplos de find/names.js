const names = ['João', 'Irene', 'Fernando', 'Maria', 'Alexandre'];

const findNameWithFiveLetters = names.find((name) => name.length === 5);
console.log(findNameWithFiveLetters);
//Find só retorna o primeiro item que satisfaça a lógica
//find feito para string