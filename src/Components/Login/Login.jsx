import React from 'react';
import { Button } from '@material-ui/core';
import i18n from '../../i18n';

const { loginButton } = i18n.header;

const Login = () => (
  <Button color="primary" variant="contained">{loginButton}</Button>
);

export default Login;
