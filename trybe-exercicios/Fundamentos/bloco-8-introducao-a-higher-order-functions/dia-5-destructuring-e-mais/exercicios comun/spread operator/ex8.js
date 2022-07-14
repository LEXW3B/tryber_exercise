//lista de frutas
const specialFruit = ['Uva', 'Maçã', 'Laranja'];
//lista de complementos a adicionar
const additionalItens = ['Manga', 'Açucar', 'Leite Condensado'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];
  return salad;
};

console.log(fruitSalad(specialFruit, additionalItens));
