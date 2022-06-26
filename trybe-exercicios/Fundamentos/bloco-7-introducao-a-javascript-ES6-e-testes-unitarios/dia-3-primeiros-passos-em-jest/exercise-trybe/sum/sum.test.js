const sum = require('./sum');

describe('A função soma retorna a soma de a + b', () => {
  it('Retorno 9 quando somado (4, 5)', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('Retorno de erro quando a função sum recebe por parâmetro(4, "5")', () => {
    expect(() => sum(4, '5')).toThrow(Error);
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});