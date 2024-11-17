import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const AdminSidebar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/admin/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/admin/users">
          <ListItemText primary="Manage Users" />
        </ListItem>
        <ListItem button component={Link} to="/admin/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};

export default AdminSidebar;
