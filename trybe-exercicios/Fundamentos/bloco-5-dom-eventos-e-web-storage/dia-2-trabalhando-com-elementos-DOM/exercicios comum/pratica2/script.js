//Crie um irmão para 'elementoOndeVoceEsta'.
let pai = document.querySelector('#pai');
let ondeCtaIrmao = document.createElement('section');
ondeCtaIrmao.id = 'ondeCTaIrmao';
pai.appendChild(ondeCtaIrmao);
//Crie um filho para 'elementoOndeVoceEsta'.
let ondeCta = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeCTa = document.createElement('section');
filhoOndeCTa.id = 'filhoOndeCTa';
ondeCta.appendChild(filhoOndeCTa);
//Crie um filho para 'primeiroFilhoDoFilho'.
let neto = document.querySelector('#primeiroFilhoDoFilho')
let bisneto = document.createElement('section');
bisneto.id = 'bisneto';
neto.appendChild(bisneto);
//A partir desse filho criado, acesse 'terceiroFilho'.
let terceiroFilho = bisneto.parentElement.parentElement.nextElementSibling;
