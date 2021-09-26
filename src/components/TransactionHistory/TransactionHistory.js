import TransactionItem from './TransactionItem';
import s from './TransactionStyle.module.css';
import PropTypes from 'prop-types';
export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr
          style={{
            backgroundColor: 'rgb(153, 207, 238)',
            color: '#fff',
            textTransform: 'uppercase',
          }}
        >
          <th className={s.borderTable}>Type</th>
          <th className={s.borderTable}>Amount</th>
          <th className={s.borderTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(oneTransaction => (
          <TransactionItem
            key={oneTransaction.id}
            type={oneTransaction.type}
            amount={oneTransaction.amount}
            currency={oneTransaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
