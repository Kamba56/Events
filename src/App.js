import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventsPage from './components/eventsPage';
import Footer from './components/footer';
import LandingPage from './components/landingPage';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/events' element={<EventsPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
