import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetails from './pages/ProjectDetails';
import KnowUsPage from './pages/KnowUsPage';
import ServicesPage from './pages/ServicesPage';
import TimelinePage from './pages/TimelinePage';
import ContactPage from './pages/ContactPage';
import PhilanthropyPage from './pages/PhilanthropyPage'; // 🆕 Import added
import WhatsAppButton from './components/UI/WhatsAppButton';
import Loader from './components/UI/Loader';
import NotFoundPage from './pages/404';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.title = 'Aadriti Constructions - The Next Era';
  }, []);

  // ✅ Include /philanthropy in the valid path list
  const isNotFound =
    !['/', '/projects', '/know-us', '/services', '/timeline', '/contact', '/philanthropy'].includes(location.pathname) &&
    !/^\/projects\/[^/]+$/.test(location.pathname);

  return (
    <>
      <Loader onLoadComplete={() => setIsLoading(false)} />
      <div className={`app transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {!isNotFound && <Header />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/know-us" element={<KnowUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/philanthropy" element={<PhilanthropyPage />} /> 
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {!isNotFound && <WhatsAppButton />}
        {!isNotFound && <Footer />}
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
