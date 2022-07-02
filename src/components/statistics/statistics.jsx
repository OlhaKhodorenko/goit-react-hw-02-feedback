import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statistic}>
      <h2 className={css.statisticTitle}>Statistic</h2>
      <div className={css.statisticWrap}>
        <div className={css.statisticData}>
          <p>
            Good: <span className={css.good}>{good}</span>
          </p>
          <p>
            Neutral: <span className={css.neutral}>{neutral}</span>{' '}
          </p>
          <p>
            Bad: <span className={css.bad}>{bad}</span>
          </p>
        </div>
        <div className={css.statisticData}>
          <p>
            Total: <span className={css.neutral}> {total}</span>
          </p>
          <p>
            Positive feedback:
            <span className={css.good}>{positivePercentage}</span>%
          </p>
        </div>
      </div>
    </div>
  );
};
export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
