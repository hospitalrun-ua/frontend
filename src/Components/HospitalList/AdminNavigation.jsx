import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ViewWeekOutlinedIcon from '@material-ui/icons/ViewWeekOutlined';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  topDivider: {
    marginTop: '-0.5rem',
    marginBottom: '1rem',
  },
  bottomDivider: {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  active: {
    color: '#1540A4',
  },
  inactive: {
    color: '#000000DE',
  },
}));

const AdminNavigation = () => {
  const classes = useStyles();

  return (
    <>
      <List>
        <Divider className={classes.topDivider} />
        <ListItem component={NavLink} to="/admin/dashboard">
          <ListItemIcon>
            <DashboardOutlinedIcon className={classes.active} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className={classes.active} />
        </ListItem>
        <ListItem component={NavLink} to="/admin/applications">
          <ListItemIcon>
            <ChatBubbleOutlineIcon className={classes.inactive} />
          </ListItemIcon>
          <ListItemText primary="Applications" className={classes.inactive} />
        </ListItem>
        <ListItem component={NavLink} to="/admin/applications">
          <ListItemIcon>
            <ViewWeekOutlinedIcon className={classes.inactive} />
          </ListItemIcon>
          <ListItemText primary="Меню 3" className={classes.inactive} />
        </ListItem>
        <ListItem component={NavLink} to="#">
          <ListItemIcon>
            <ViewAgendaOutlinedIcon className={classes.inactive} />
          </ListItemIcon>
          <ListItemText primary="Меню 4" className={classes.inactive} />
        </ListItem>
        <ListItem component={NavLink} to="#">
          <ListItemIcon>
            <PermIdentityOutlinedIcon className={classes.inactive} />
          </ListItemIcon>
          <ListItemText primary="Меню 5" className={classes.inactive} />
        </ListItem>
        <Divider className={classes.bottomDivider} />
        <ListItem component={NavLink} to="#">
          <ListItemIcon>
            <MoreHorizOutlinedIcon className={classes.inactive} />
          </ListItemIcon>
          <ListItemText primary="Налаштування" className={classes.inactive} />
        </ListItem>
      </List>
    </>
  );
};
export default AdminNavigation;
