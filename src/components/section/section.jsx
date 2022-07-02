import PropTypes from 'prop-types';
import css from './sectioon.module.css';

const Section = ({ title, children }) => (
  <div className={css.optionsWrap}>
    <h2>{title}</h2>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
