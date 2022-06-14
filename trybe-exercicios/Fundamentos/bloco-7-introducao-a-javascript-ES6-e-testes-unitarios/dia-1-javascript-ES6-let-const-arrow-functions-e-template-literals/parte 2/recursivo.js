const fact = el => el > 1 ? el * fact(el - 1) : 1;
console.log(fact(5));