import { BrowserRouter, Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/Authentication/LoginPage';
import RegisterPage from './pages/Authentication/RegisterPage';
import SelectionPage from './pages/Selection/SelectionPage';
import SelectionPage2 from './pages/Selection/SelectionPage2';
import SelectionPage3 from './pages/Selection/SelectionPage3';
import SelectionPage4 from './pages/Selection/SelectionPage4';
import HomePage from './pages/HomePage';

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
        <Route path="/selection_4" element={<SelectionPage4 />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
