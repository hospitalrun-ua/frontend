import React from 'react';
import {
  Drawer, Box, AppBar, Toolbar, makeStyles, CssBaseline, Container,
} from '@material-ui/core';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import AdminNavigation from '../Components/HospitalList/AdminNavigation';
import DashboardPage from './DashboardPage';
import ApplicationPage from './ApplicationPage/ApplicationListPage';
import { logo } from '../assets/icons';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.spacing(30),
  },
  logo: {
    height: theme.spacing(8),
    padding: `0 ${theme.spacing(2)}px`,
  },
  main: {
    marginLeft: theme.spacing(30),
  },
  content: {
    height: `calc(100% - ${theme.spacing(8)}px)`,
    overflow: 'auto',
  },
}));

const AdminApp = () => {
  const classes = useStyles();
  return (
    <Box display="flex" width={1} height="100%">
      <CssBaseline />
      <Drawer
        open
        variant="persistent"
        classes={{ paper: classes.drawer }}
        PaperProps={{ elevation: 4 }}
      >
        <Box className={classes.logo} display="flex" alignItems="center">
          <NavLink to="/">{logo}</NavLink>
        </Box>
        <AdminNavigation />
      </Drawer>
      <Box width={1} className={classes.main}>
        <AppBar position="relative" elevation={2}>
          <Toolbar />
        </AppBar>
        <Container className={classes.content}>
          <Box mt={2}>
            <Switch>
              <Route path="/admin/dashboard" component={DashboardPage} />
              <Route path="/admin/applications" component={ApplicationPage} />
            </Switch>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AdminApp;
