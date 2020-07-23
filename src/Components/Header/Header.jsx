import React from 'react';
import {
  Container, TextField, Grid, Button, Box,
} from '@material-ui/core';
import { logo } from '../../assets/icons';
import i18n from '../../i18n';
import CityChoice from '../CityChoice/CityChoice';
// import JoinDropdown from '../JoinDropdown/JoinDropdown';
// import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';

const { searchPlaceholder } = i18n.header;

const Header = ({ ...props }) => {
  const { isAuthenticated = false } = props;

  return (
    <Box display="flex" alignItems="center" height="70px" bgcolor="white" boxShadow={2}>
      <Container>
        <Grid container direction="row" alignItems="center" justify="space-between">
          {logo}
          <form noValidate autoComplete="off">
            <TextField label={searchPlaceholder} type="search" variant="outlined" size="small" />
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
    </Box>
  );
};

export default Header;
