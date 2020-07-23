import React, { Fragment } from 'react';
import {
  Container, TextField, Grid, Button,
} from '@material-ui/core';
import { logo } from '../../assets/icons';
import i18n from '../../i18n';
import './Header.css';
import CityChoice from '../CityChoice/CityChoice';
import JoinDropdown from '../JoinDropdown/JoinDropdown';
import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';

const { searchPlaceholder } = i18n.header;

const Header = ({ ...props }) => {
  const { isAuthenticated = false } = props;

  return (
    <div className="headerWrap">
      <Container>
        <Grid container direction="row" alignItems="center" justify="space-between">
          {logo}
          <form noValidate autoComplete="off" className = "submit-form">
          <Button type = "submit" className = "submit-btn"></Button>
            <TextField  type="search" className = "searchfield" placeholder = "Пошук"/>
          </form>
          {!isAuthenticated
            && (
            <>
              <CityChoice />
              {/* <JoinDropdown toggleModal={toggleModal} /> */}
              <NavLink variant="contained" component={Button} to="/admin/dashboard" color="primary">Cabinet</NavLink>
              {/* <Login /> */}
            </>
            )}
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
