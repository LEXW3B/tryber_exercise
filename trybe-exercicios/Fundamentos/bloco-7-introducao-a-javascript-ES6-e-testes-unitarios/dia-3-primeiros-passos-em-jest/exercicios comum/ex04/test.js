let gemeoUm = 'Cabelo comprido';
let gemeoDois = 'gemeoUm';

gemeoUm = 'Careca';

console.log(gemeoUm);//Careca
console.log(gemeoDois);//Cabelo comprido
console.log('-=-=-=-=-=-=-=-=-=-=-');

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol

console.log('-=-=-=-=-=-=-=-=-=-=-');

test('array and object equality', () => {
  const arr = [1, 2 ,3];
  const obj = { a: 1, b: 2, c: 3};

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
});