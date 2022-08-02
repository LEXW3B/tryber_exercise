const { getGithubUserInfos } = require('./github');

describe('quando chamada, a função getGithubUserInfos...', () => {
  test('deve retornar um objeto contendo name, company, twitter, bio e location', async () => {
    expect.assertions(1);

    const expectedValue = {
      name: 'Gabriel Oliva',
      company: '@betrybe',
      twitter: 'gfpoliva',
      bio: 'Software engineer passionate for mobile development and software architecture, CocoaHeads Belo Horizonte chapter leader.',
      location: 'BeloHorizonte',
    }

    const result = await getGithubUserInfos('gfpoliva');

    expect(result).toEqual(expectedValue);

  })
});
