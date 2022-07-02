import React from 'react';
import PropTypes from 'prop-types';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({
  onGoodBtnClick,
  onNeutralBtnClick,
  onBadBtnClick,
}) => (
  <>
    <div className={css.feedbackOptions}>
      <button type="button" className={css.goodBtn} onClick={onGoodBtnClick}>
        Good
      </button>
      <button
        type="button"
        className={css.neutralBtn}
        onClick={onNeutralBtnClick}
      >
        Neutral
      </button>
      <button type="button" className={css.badBtn} onClick={onBadBtnClick}>
        Bad
      </button>
    </div>
  </>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onGoodBtnClick: PropTypes.func.isRequired,
  onNeutralBtnClick: PropTypes.func.isRequired,
  onBadBtnClick: PropTypes.func.isRequired,
};
