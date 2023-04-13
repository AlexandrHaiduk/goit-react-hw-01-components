export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr
            key={transaction.id}
            id={transaction.id}
            className="transaction-history__row"
          >
            <td className="transaction-history__cell">{transaction.type}</td>
            <td className="transaction-history__cell">{transaction.amount}</td>
            <td className="transaction-history__cell">
              {transaction.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
