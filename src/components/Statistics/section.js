import s from './StatisticsStyle.module.css';
export default function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}
