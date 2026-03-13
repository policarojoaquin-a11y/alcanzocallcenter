import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Clients from './components/Clients';
import Services from './components/Services';
import Equipo from './components/Trayectoria';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Trayectoria from './components/Trayectoria';
import AzoConsultoria from './components/AzoConsultoria';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(sectionId);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 200);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <Clients />
          </>
        );
      case 'quienes-somos':
        return <About />;
      case 'servicios':
        return <Services />;
      case 'comunidad':
        return <Testimonials />;
      case 'contacto':
        return <Contact />;
      case 'trayectoria':
        return <Trayectoria />;
      case 'consultoria':
        return <AzoConsultoria onNavigate={handleNavigate} />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans flex flex-col">
      <Header activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className={`flex-grow transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {renderSection()}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;