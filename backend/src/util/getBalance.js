export default (transaction) => {
  const { income, outcome } = transaction.reduce(
    (acc, cur) => {
      switch (cur.type) {
        case 'income':
          acc.income += Number(cur.value);
          break;
        case 'outcome':
          acc.outcome += Number(cur.value);
          break;
        default:
          break;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
    }
  );

  const total = income - outcome;

  const balance = {
    income,
    outcome,
    total,
  };

  return balance;
};
