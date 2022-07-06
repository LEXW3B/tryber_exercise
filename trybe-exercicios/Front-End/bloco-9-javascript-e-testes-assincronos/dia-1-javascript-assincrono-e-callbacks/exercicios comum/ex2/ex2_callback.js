const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];
const renda = 1000;

const despesaMensal = (renda, despesas, callback) => {
  const despesasTotal = callback(despesas);
  const saldoFinal = renda - despesasTotal;

  console.log(`Balanço do mês:
  Recebido: R$ ${renda},00
  Gasto: R$ ${despesasTotal},00
  Saldo: R$ ${saldoFinal},00`);
};

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};
despesaMensal(renda, despesas, somaDespesas);
