const myRemove = require('./myRemove');

describe('testar a função myRemove', () => {
  it('Retorna um array retirando o item certo', () => {
    const arr = [1, 2, 3, 4];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4]);
    expect(myRemove(arr, 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove(arr, 5)).toEqual([1, 2, 3, 4]);
  });
});