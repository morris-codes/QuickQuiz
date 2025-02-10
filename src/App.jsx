import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Results from './Components/Results';
import Problems from './Components/Problems';

const App = () => {
  return (
   <Router>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/problems" element={<Problems />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      
    </Router>

  );
};

export default App
