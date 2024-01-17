// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// PAGES/COMPONENTS
import HomePage from './pages/HomePage';

// MAIN
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
};

export default App;
