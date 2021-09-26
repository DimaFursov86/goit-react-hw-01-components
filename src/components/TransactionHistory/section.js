import s from './TransactionStyle.module.css';
export default function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}
