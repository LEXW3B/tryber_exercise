const salarioBruto = 3000;
let aliquota1 = "";
let aliquota2 = "";
let aliquotaINSS = 0;
let aliquotaIR = 0;
let parcelas = 0;


//INSS
if(salarioBruto<=1556.94){
    aliquota1 = "8%";
    aliquotaINSS = salarioBruto*8/100;
}
else if(salarioBruto>=1556.95 && salarioBruto<=2594.92){
    aliquota1 = "9%";
    aliquotaINSS = salarioBruto*9/100;
}
else if(salarioBruto>=2594.93 && salarioBruto<=5189.82){
    aliquota1 = "11%"
    aliquotaINSS = salarioBruto*11/100;
}
else if(salarioBruto>5189.82){
    aliquota1 = "570,88"
    aliquotaINSS = salarioBruto-570.88;
}
//IR (imposto de renda)

if((salarioBruto - aliquotaINSS)< 1903.98){
    console.log("isento de imposto de renda");
    
}
else if((salarioBruto - aliquotaINSS)>=1903.99 && (salarioBruto - aliquotaINSS)<=2826.65){
    aliquotaIR = (salarioBruto - aliquotaINSS)*7.5/100;
    aliquota2 = "7.5%";
    parcelas = 142.80;
}
else if((salarioBruto - aliquotaINSS)>=2826.66 && (salarioBruto - aliquotaINSS)<=3751.05){
    aliquota2 = "15%";
    parcelas = 354.80;
    aliquotaIR = (salarioBruto - aliquotaINSS)*15/100;
}
else if((salarioBruto - aliquotaINSS)>=3751.06 && (salarioBruto - aliquotaINSS)<=4664.68){
    aliquota2 = "22.5%";
    parcelas = 636.13;
    aliquotaIR = (salarioBruto - aliquotaINSS)*22.5/100;
}
else if((salarioBruto - aliquotaINSS)>4664.68){
    aliquota2 = "27.5%";
    parcelas = 869.36;
    aliquotaIR = (salarioBruto - aliquotaINSS)*27.5/100;
}
console.log(`O salário bruto é R$${salarioBruto}, então sua alíquota para INSS é de ${aliquota1} ou seja R$${aliquotaINSS}. É o salário base ficará de R$${salarioBruto - aliquotaINSS} com a aliquota do IR de ${aliquota2} é parcelas no valor de R$${parcelas}. Seu salário liquido será R$${((salarioBruto - aliquotaINSS)-aliquotaIR)-parcelas}`);
