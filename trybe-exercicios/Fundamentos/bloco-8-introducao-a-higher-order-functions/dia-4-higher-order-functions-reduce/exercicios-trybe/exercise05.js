const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) => acc + curr.split('').reduce((acc, curr) => {
    if (curr === 'a' || curr === 'A') return acc + 1;
    return acc;
  }, 0), 0);
}
console.log(containsA());
