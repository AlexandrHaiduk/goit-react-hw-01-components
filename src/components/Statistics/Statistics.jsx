import PropTypes from 'prop-types';
export const Statistics = ({ data }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map(item => (
          <li key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
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
