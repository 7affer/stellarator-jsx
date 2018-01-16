import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Input({
  type,
  name,
  placeholder,
  label,
  value,
  size,
  error,
  onInputChange
}) {
  const classes = [`Input`, `Input--size-${size}`];
  if (error) {
    classes.push(`Input--error`);
  }

  const commonProps = {
    className: classes.join(' '),
    onChange: onInputChange ? event => onInputChange(event, name) : null,
    title: error,
    defaultValue: value,
    name,
  }

  return (
    type === 'textarea' ?
      <textarea {...commonProps}></textarea> :
      <input type={type} {...commonProps} placeholder={placeholder} />
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(['email', 'text', 'phone', 'textarea', 'password']),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  error: PropTypes.string,
  onInputChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium'
};

export default Input;
