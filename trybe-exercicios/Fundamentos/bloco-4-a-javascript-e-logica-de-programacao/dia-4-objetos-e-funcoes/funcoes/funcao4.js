//exercicio 10 do lecture/4.1
function valueConst(valorCusto,qtdProdutoVendido){
    const porcento = valorCusto*20/100;
    const valorVenda = valorCusto + porcento

    const valorTotal = valorVenda*qtdProdutoVendido

    const valorParcial =  valorCusto*qtdProdutoVendido
    const lucro = valorTotal - valorParcial

    if(valorCusto<0 || qtdProdutoVendido<0){
        console.log("ERROR")
    }else{
        console.log(lucro)
    }
}
valueConst(100,100);
