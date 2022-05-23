//Acesse o elemento elementoOndeVoceEsta.
let mudaCor = document.querySelector('#elementoOndeVoceEsta');
//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
mudaCor.parentNode.style = 'color: red;';
//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let filhoDoFilho = mudaCor.firstElementChild;//essa nomenclatura acessa o filho do filho para inserir dados.
filhoDoFilho.innerText = 'Novo texto adicionado por javascript';
//Acesse o primeiroFilho a partir de pai.
let paiPraFilho = document.querySelector('#pai');
paiPraFilho.firstElementChild;
//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroFilho = mudaCor.firstElementChild;
//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let proximoNo = mudaCor.nextSibling;
//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = mudaCor.nextElementSibling;
//Agora acesse o terceiroFilho a partir de pai.
paiPraFilho = terceiroFilho;
