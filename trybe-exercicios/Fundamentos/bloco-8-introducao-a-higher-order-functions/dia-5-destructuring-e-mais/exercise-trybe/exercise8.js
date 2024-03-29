//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

const greet = (name, msg = 'Hi') => `${msg} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'
//se em um dos consoles não tiver o segundo parametro a resposta automagica sera "Hi"
