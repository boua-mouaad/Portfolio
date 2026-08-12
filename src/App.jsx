import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Expertise from './pages/Expertise';
import Inquiry from './pages/Inquiry';

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;