import React from 'react';
import i18n from '../../i18n';
import './Login.css';

const { loginButton } = i18n.header;

const Login = () => (
  <button type="button" className="loginButton">{loginButton}</button>
);

export default Login;
