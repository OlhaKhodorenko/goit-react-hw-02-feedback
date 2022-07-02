import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => (
  <h2 className={css.notification}>{message}</h2>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
