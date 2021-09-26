import s from './TransactionStyle.module.css';

export default function TransactionHistory({ type, amount, currency }) {
  return (
    <tr>
      <td className={s.borderTable}>{type}</td>
      <td className={s.borderTable}>{amount}</td>
      <td className={s.borderTable}>{currency}</td>
    </tr>
  );
}
