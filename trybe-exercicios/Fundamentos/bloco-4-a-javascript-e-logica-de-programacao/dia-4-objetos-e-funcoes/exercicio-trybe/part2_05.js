function idem(arr){
    for(let i=0; i<arr.length; i+=1){
        if(arr[i]===2){
            let igual = arr[i];
            console.log(igual);
        }
    }
}
idem([2, 3, 2, 5, 8, 2, 3]);
