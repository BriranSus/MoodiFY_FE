import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SelectionPage from './pages/SelectionPage';
import SelectionPage2 from './pages/SelectionPage2';
import SelectionPage3 from './pages/SelectionPage3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/selection_1" element={<SelectionPage />} />
        <Route path="/selection_2" element={<SelectionPage2 />} />
        <Route path="/selection_3" element={<SelectionPage3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
