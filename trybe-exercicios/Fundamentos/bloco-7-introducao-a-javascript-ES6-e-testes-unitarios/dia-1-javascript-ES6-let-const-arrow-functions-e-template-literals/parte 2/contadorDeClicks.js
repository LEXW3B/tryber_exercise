const botao = document.getElementById('button_test');
const texto = document.getElementById('text');
let contClicks = 0;

botao.addEventListener('click', () => {
  texto.innerHTML = contClicks += 1;
});

