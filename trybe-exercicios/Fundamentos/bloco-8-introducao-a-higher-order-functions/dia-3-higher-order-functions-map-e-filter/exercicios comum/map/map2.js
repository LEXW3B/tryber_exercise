const pessoas = ['Joicy', 'Joel', 'Ronald', 'Ana', 'Carol'];

const novasPessoas = pessoas.map((element) => {
  const registro = {};
  registro.name = element;
  registro.empresa = 'Trybe';
  return registro;
});
console.log(novasPessoas);
