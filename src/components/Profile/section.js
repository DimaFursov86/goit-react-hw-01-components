import s from './ProfileStyle.module.css';
export default function Section({ children }) {
  return <div className={s.box}>{children}</div>;
}
