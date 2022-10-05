import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import LandingPage from './components/landingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
