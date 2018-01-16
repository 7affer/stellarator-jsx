import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import './styles.css';

function onSubmit(event) {
  console.log(event);
  event.preventDefault();
}

function Form({ config }) {
  return (
    <form className="Form" onSubmit={onSubmit}>
      {config.map((item, key) => (
        <div key={key} className="Form-row">
          <Input {...item} />
        </div>
      ))}
      <div className="Form-footer">
        <button className="Form-submit" type="submit">Submit</button>
      </div>
    </form>
  );
}

Form.propTypes = {
  config: PropTypes.array.isRequired
}

export default Form;
