import RandomColor from './RandomColor';
import s from './StatisticsStyle.module.css';
import PropTypes from 'prop-types';
export default function Statistics({ title, stats }) {
  return (
    <section className={s.box}>
      <div className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statsList}>
          {stats.map(({ id, label, percentage }) => (
            <li
              key={id}
              className={s.item}
              style={{ backgroundColor: RandomColor() }}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
