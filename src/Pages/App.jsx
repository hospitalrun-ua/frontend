import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from './HomePage/HomePage';
import AdminApp from './AdminApp';
import Footer from '../Components/Template/Footer';
import '../index.css';

const customTheme = createMuiTheme({
  palette: {
    primary: { main: '#1540A4' },
    // text: { secondary: '#B9C6E4' }
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/admin" component={AdminApp} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
