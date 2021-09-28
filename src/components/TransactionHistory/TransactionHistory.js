import s from './TransactionStyle.module.css';
import PropTypes from 'prop-types';
export default function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.title}>
          <th className={s.borderTable}>Type</th>
          <th className={s.borderTable}>Amount</th>
          <th className={s.borderTable}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={s.borderTable}>{type}</td>
            <td className={s.borderTable}>{amount}</td>
            <td className={s.borderTable}>{currency}</td>
          </tr>
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
