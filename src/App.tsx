import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
