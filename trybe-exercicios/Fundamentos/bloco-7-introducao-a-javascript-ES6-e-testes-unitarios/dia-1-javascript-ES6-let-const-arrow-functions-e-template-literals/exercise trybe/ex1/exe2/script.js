const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const newArray = () => {
  const arr = oddsAndEvens.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
  });
  console.log(`A nova array é ${arr}`);
}
newArray();
//console.log(oddsAndEvens.sort()); // será necessário alterar essa linha 😉