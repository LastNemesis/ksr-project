import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      {/* Add more routes for additional pages */}
    </Router>
  );
};

export default App;
