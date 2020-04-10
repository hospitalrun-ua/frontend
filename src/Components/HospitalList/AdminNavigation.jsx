import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const AdminNavigation = () => (
  <>
    <List>
      <ListItem component={NavLink} to="/admin/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
    </List>
  </>
);
export default AdminNavigation;
