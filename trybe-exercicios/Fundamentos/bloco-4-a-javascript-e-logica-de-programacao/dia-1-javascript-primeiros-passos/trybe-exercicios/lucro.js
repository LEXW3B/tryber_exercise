const valorCusto = 100;
const porcento = valorCusto*20/100;
const valorVenda = valorCusto + porcento

const qtdProdutoVendido =  100;
const valorTotal = valorVenda*qtdProdutoVendido

const valorParcial =  valorCusto*qtdProdutoVendido
const lucro = valorTotal - valorParcial

if(valorCusto<0 || qtdProdutoVendido<0){
    console.log("ERROR")
}else{
    console.log(lucro)
}
