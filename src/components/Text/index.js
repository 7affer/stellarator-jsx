import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Text({ children, heading, size }) {
  return (
    heading ?
      <h1 className={`Text Text--size-${size}`}>{children}</h1> :
      <div className={`Text Text--size-${size}`}>{children}</div>
  );
}

Text.propTypes = {
  heading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Text.defaultProps = {
  heading: false,
  size: 'medium'
};

export default Text;
