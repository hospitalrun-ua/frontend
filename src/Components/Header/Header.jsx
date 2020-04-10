import React, { Fragment } from 'react';
import { Container, TextField, Grid } from '@material-ui/core';
import { logo } from '../../assets/icons';
import i18n from '../../i18n';
import './Header.css';
import CityChoice from '../CityChoice/CityChoice';
import JoinDropdown from '../JoinDropdown/JoinDropdown';
import Login from '../Login/Login';

const { searchPlaceholder } = i18n.header;

const Header = ({ ...props }) => {
  const { isAuthenticated = false } = props;
  return (
    <div className="headerWrap">
      <Container>
        <Grid container direction="row" alignItems="center" justify="space-between">
          {logo}
          <form noValidate autoComplete="off">
            <TextField label={searchPlaceholder} type="search" variant="outlined" size="small" />
          </form>
          {!isAuthenticated &&
            <Fragment>
              <CityChoice />
              <JoinDropdown />
              <Login />
            </Fragment>
          }
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
