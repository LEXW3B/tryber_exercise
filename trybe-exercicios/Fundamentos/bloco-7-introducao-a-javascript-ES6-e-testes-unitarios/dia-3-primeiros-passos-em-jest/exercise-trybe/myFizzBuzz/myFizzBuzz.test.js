const myFizzBuzz = require('./myFizzBuzz');

describe('testar a função myFizzBuzz', () => {
  it('verifique se o parâmetro recebido retorna o valor esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(3)).toBe('fizz');
    expect(myFizzBuzz(5)).toBe('buzz');
    expect(myFizzBuzz(1)).toBe(undefined);
    expect(myFizzBuzz('2')).toBe(false);
  });
});
