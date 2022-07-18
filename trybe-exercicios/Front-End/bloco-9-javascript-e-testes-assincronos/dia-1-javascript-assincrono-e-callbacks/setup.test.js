let names = ['Gisele', 'Leticia'];

const nameIncluded = (name) => names.includes(name);

describe('Verifica se adiciona nomes', () => {
  beforeEach(() => {
    names = [...names, 'Sheila', 'Clayton'];
  });
  
  afterEach(() => {
    names = ['Gisele', 'Leticia'];
  });
  
  test('Testa se o array names tem os nomes de Gisele, Leticia, Sheila e Clayton', () => {
    expect(nameIncluded('Gisele')).toBeTruthy();
    expect(nameIncluded('Leticia')).toBeTruthy();
    expect(nameIncluded('Sheila')).toBeTruthy();
    expect(nameIncluded('Clayton')).toBeTruthy();
  });
  
  test('Testa se o tamanho do array names é igual a 4', () => {
    expect(names).toHaveLength(4);
  });  
});

describe('Verifica se substitui nomes', () => {
  beforeEach(() => {
    names = ['Joel', 'Noel'];
  });
  afterEach(() => {
    names = [];
  });

  test('Verifica se o array names tem os nomes Joel e Noel e não possui os nomes Leticia e Gisele', () => {
    expect(nameIncluded('Joel')).toBeTruthy();
    expect(nameIncluded('Noel')).toBeTruthy();
    expect(nameIncluded('Gisele')).toBeFalsy();
    expect(nameIncluded('Leticia')).toBeFalsy();
  });

  test('Verifica se o tamnho do array names é igual a 2', () => {
    expect(names).toHaveLength(2);
  });
});
