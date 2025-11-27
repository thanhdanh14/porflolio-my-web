import { useEffect, useState } from 'react';
// import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import FloatingShapes from './components/FloatingShapes';
import MouseSpotlight from './components/MouseSpotlight';
import ScrollToTop from './components/ScrollToTop';
import EasterEgg from './components/EasterEgg';
import Snowfall from './components/Snowfall';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TypingGame from './components/TypingGame';
import CodeShowcase from './components/CodeShowcase';
import Projects from './components/Projects';
import Resume from './components/Resume';
import FavoriteMusic from './components/FavoriteMusic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader">
          <div className="loader-circle"></div>
          <div className="loader-text">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="App">
        <Snowfall />
        <MouseSpotlight />
        <FloatingShapes />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <TypingGame />
        <CodeShowcase />
        <Projects />
        <Resume />
        <FavoriteMusic />
        <Contact />
        <Footer />
        <ScrollToTop />
        <EasterEgg />
        {/* <Analytics /> */}
      </div>
    </LanguageProvider>
  );
}

export default App;
