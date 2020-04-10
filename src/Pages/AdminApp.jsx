import React from 'react';
import {
  Drawer, Box, AppBar, Toolbar, makeStyles, CssBaseline, createMuiTheme, ThemeProvider,
} from '@material-ui/core';


const customTheme = createMuiTheme({
  palette: {
    primary: { main: '#1540A4' },
  },
});

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
    <ThemeProvider theme={customTheme}>
      <Box display="flex" width={1} height="100%">
        <CssBaseline />
        <Drawer
          open
          variant="persistent"
          classes={{ paper: classes.drawer }}
          PaperProps={{ elevation: 4 }}
        >
          <Box className={classes.logo}>Logo</Box>
        </Drawer>
        <Box width={1} className={classes.main}>
          <AppBar position="relative" elevation={2}>
            <Toolbar />
          </AppBar>
          <Box className={classes.content} />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AdminApp;
