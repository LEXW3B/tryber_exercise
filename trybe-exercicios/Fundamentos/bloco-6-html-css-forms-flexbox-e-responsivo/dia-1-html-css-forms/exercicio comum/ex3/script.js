// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

document.getElementById('HREF_LINK').addEventListener('click', (event) => {
  event.preventDefault();
});

document.getElementById('INPUT_CHECKBOX').addEventListener('click', (event) => {
  event.preventDefault();
});

document.getElementById('INPUT_TEXT').addEventListener('keypress', (event) => {
  const chars = event.key;
  if (chars !== 'a') {
    event.preventDefault();
  }  
});