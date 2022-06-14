const fact = (el) => {
  let bank = 1;
  for (let i = 2; i <= el; i +=1) {
    bank *= i;
  }
  return bank;
}
console.log(fact(5));