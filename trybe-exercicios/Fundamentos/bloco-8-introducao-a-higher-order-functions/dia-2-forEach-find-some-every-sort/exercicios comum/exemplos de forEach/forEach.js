let listaDeAprovados = [
  'ada.lovelace@trybe.com',
  'marie.curie@trybe.com',
  'margaret.hamilton@trybe.com',
  'alan.turing@trybe.com'
];

const enviarEmail = (email) => {
  console.log(`Email para ${email} foi enviado com sucesso!`);
};

listaDeAprovados.forEach((element, index, array) => {
  enviarEmail(element);
  // console.log(' ');
  console.log(`Sua posição é: ${index}`);
  console.log(`A quantidade de pessoas no processo seletivo é: ${array.length}`);
  console.log(' ');
});
