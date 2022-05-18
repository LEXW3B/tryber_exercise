function addNumbers(el){
    let bank=0;
    for(let i=1; i<=el; i+=1){
        bank=bank+i
    }
    return bank;
}
console.log(addNumbers(5));
