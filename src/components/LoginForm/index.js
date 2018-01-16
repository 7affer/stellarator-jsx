import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import '../Form/styles.css';

function LoginForm({ onSubmit }) {

  const getValue = (event, name) => event.target.querySelector(`[name=${name}]`).value;
  const onSubmitHandler = event => {
    const email = getValue(event, 'email');
    const password = getValue(event, 'password');
    onSubmit(email, password);
    event.preventDefault();
  }

  return (
    <form className="Form" onSubmit={onSubmitHandler}>
      <div className="Form-row">
        <Input name="email" type="email" placeholder='Email' />
      </div>
      <div className="Form-row">
        <Input name="password" type="password" placeholder='Password' />
      </div>
      <div className="Form-footer">
        <button className="Form-submit" type="submit">Submit</button>
      </div>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;
