const conhecimentosTrybe = {
  softSkill: true,
  hardSkill: true,
  trabalho: true,
};

const pessoa = {
  nome: 'Nária',
  idade: '28',
  cidade: 'BH',
};

const pessoaTrybe = {
  ...pessoa,
  ...conhecimentosTrybe,
  esporte: 'corrida',
}

console.log(pessoaTrybe);
