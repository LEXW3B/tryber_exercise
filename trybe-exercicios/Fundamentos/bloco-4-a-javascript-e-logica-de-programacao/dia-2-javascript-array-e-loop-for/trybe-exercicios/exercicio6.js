let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigValue = 0;
for(let i=0; i<numbers.length; i+=1){

    if(numbers[i] % 2==1){
        bigValue+=1;
        console.log(bigValue);   
    }else{
            console.log("nenhum valor ímpar encontrado");
        
    }
}
//AINDA ESTÁ ERRADO