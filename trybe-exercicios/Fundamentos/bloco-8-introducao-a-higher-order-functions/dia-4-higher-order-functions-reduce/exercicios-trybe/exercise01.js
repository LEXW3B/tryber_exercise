const arrays = [
  ['1', '2', '3'],
  [true],
  [4,5,6],
];

function flatten() {
  const result = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return result;
}

console.log(flatten());
