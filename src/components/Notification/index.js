import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Notification({ children, type }) {
  return (
    <div className={`Notification Notification--type-${type}`}>{children}</div>
  );
}

Notification.propTypes = {
  type: PropTypes.oneOf(['success', 'danger', 'info'])
};

Notification.defaultProps = {
  type: 'info'
};

export default Notification;
