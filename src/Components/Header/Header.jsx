import React, { Fragment, useState } from 'react';
import {
  Container, TextField, Grid, Button,
} from '@material-ui/core';
import { logo } from '../../assets/icons';
import i18n from '../../i18n';
import './Header.css';
import CityChoice from '../CityChoice/CityChoice';
import JoinDropdown from '../JoinDropdown/JoinDropdown';
import OrganizationJoin from '../Modal/OrganizationJoin';
import VolunteerJoin from '../Modal/VolunteerJoin';
import Login from '../Login/Login';
import { NavLink } from 'react-router-dom';

const { searchPlaceholder } = i18n.header;

const Header = ({ ...props }) => {
  const { isAuthenticated = false } = props;
  const [showVolunteerModal, handleVolunteerModal] = useState(false);
  const [showOrganizationModal, handleOrganizationModal] = useState(false);

  const toggleVolunteerModal = () => {
    handleVolunteerModal(!showVolunteerModal);
  };
  
  const toggleOrganizationModal = () => {
    handleOrganizationModal(!showOrganizationModal);
  };

  return (
    <div className="headerWrap">
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
              <JoinDropdown toggleVolunteerModal={toggleVolunteerModal} toggleOrganizationModal={toggleOrganizationModal} />
              <NavLink variant="contained" component={Button} to="/admin/dashboard" color="primary">Cabinet</NavLink>
              
              <OrganizationJoin
                open={showOrganizationModal}
                id={0}
                onClose={toggleOrganizationModal}
              />
              <VolunteerJoin
                open={showVolunteerModal}
                id={1}
                onClose={toggleVolunteerModal}
              />
              {/* <Login /> */}
            </>
            )}
        </Grid>
      </Container>
    </div>
  );
};

export default Header;
