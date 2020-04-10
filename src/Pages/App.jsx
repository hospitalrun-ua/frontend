import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import AdminApp from './AdminApp';
import '../index.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/admin" component={AdminApp} />
      </Switch>
    </Router>
  );
}

export default App;
