// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('./get-pokemon-details');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    const expectError = new Error('Não temos esse pokemon para você :(');

    function callback(error, result) {
      expectError(error).toEqual(expectError);
      done();
    }
    getPokemonDetails(() => getPokemonDetails.name === 'Pokachu', callback);
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade dele é Ember';

    function callback(err, result) {
      expectedString(result).toBe(expectedString);
      done();
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});
