let numerosPares = [1,3,5,6,8,10,12];
console.log(numerosPares);

[,,, ...numerosPares] = numerosPares;
console.log(numerosPares);
