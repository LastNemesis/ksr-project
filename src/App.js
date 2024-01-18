// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// PAGES/COMPONENTS
import HomePage from './pages/HomePage';
import News from './pages/News';

// MAIN
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/actualites" element={<News/>} />
        {/* Add more routes for additional pages */}
      </Routes>
    </Router>
  );
};

export default App;
