let xadrez = prompt("Digite o nome da peça de xadrez: ".toUpperCase());

switch (xadrez){
    case "rei":
    xadrez = alert("Movimenta para todos os lados mas só uma casa.");
        break;
    case "rainha":
        xadrez = alert("Movimenta para todos os lados é quantas casa quiser.");
        break;
    case "torre":
        xadrez = alert("Movimenta-se nas laterais e horizotais é quantas casa quiser.");
        break;
    case "bispo":
        xadrez = alert("Movimenta-se somente nas diagonais é quantas casas quiser.");
        break;
    case "cavalo":
        xadrez = alert("Seu movimento forma um L pra qualquer direção.");
        break;
    case "peao":
        xadrez = alert("Só movimenta-se para frente pelas diagonais é somente uma casa.");
        break;
    default:
        xadrez = alert("ERROR");
}
//Só consegui até aqui !