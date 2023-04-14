import PropTypes from 'prop-types';
import css from './statistics-styles.module.css';
export const Statistics = ({ data }) => {
  return (
    <section className={css.statistics}>
      <div className={css.statistics__window}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.stat__list}>
          {data.map(item => (
            <li key={item.id} className={css.stat__cell}>
              <span className="label">{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
