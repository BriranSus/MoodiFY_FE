import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './pages/landingPage';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
