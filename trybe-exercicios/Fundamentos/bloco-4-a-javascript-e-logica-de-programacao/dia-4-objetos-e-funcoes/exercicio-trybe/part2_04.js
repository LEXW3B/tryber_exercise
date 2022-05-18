function bigName(search){
    let bigWord=search[0];

    for(let i=0; i<search.length; i+=1){
        if(search[i].length>bigWord.length){
            bigWord=search[i];
        }
    }
    console.log(bigWord);
}
bigName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
