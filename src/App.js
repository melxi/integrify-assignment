import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserDetails from './pages/UserDetails';

function App() {  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/:id' component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
