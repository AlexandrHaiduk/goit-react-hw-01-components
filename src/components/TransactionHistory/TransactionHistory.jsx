import css from './transactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.table__head}>Type</th>
          <th className={css.table__head}>Amount</th>
          <th className={css.table__head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr
            key={transaction.id}
            id={transaction.id}
            className={css.transactionHistory__row}
          >
            <td className={css.transactionHistory__cell}>{transaction.type}</td>
            <td className={css.transactionHistory__cell}>
              {transaction.amount}
            </td>
            <td className={css.transactionHistory__cell}>
              {transaction.currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ),
};
