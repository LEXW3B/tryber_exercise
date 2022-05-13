let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe'); //add no final
tasksList.unshift('logica de programação');//add no inicio

tasksList.pop();//remove o ultimo item
tasksList.shift();//remove o primeiro item

let indexOfTask = tasksList.indexOf('Reunião');//retorna o valor do indece da array
console.log(indexOfTask);

console.log(tasksList);





