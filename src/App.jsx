import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works, Resume, LoadingScreen, ScrollProgress } from './components';
import Footer from './components/Footer';
import { setupWebGLErrorMonitoring, checkWebGLSupport } from './utils/errorMonitor';


const HomePage = () => {
  // Use React.lazy to enable code-splitting for heavy components
  const [showStars, setShowStars] = React.useState(false);
  const [webGLSupported, setWebGLSupported] = React.useState(true);
  // Check WebGL support and setup error monitoring
  React.useEffect(() => {
    // Check WebGL support before attempting to render Three.js components
    const isSupported = checkWebGLSupport();
    setWebGLSupported(isSupported);
    
    if (isSupported) {
      // Delay loading stars to improve initial page load
      const timer = setTimeout(() => {
        setShowStars(true);
        // Setup WebGL error monitoring after stars are loaded
        setTimeout(() => {
          setupWebGLErrorMonitoring();
        }, 1000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

    return (
    <div className="relative">
      {/* Load stars only after initial render and if WebGL is supported */}
      {showStars && webGLSupported && (
        <div className="fixed inset-0 z-0">
          <StarsCanvas />
        </div>
      )}
      
      {/* Page Content */}
      <div className="relative z-10">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
        </div>
        <About />
        <Experience />
        {/* Add key prop to force re-render if there were any WebGL issues */}
        <Works key={`works-${Date.now()}`} />
        <Tech />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

const App = () => {

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <LoadingScreen />
      <ScrollProgress />
      <div className="relative z-0 bg-primary">
        <Navbar  />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
