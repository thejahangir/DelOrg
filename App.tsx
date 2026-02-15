import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { KnowMore } from './components/KnowMore';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'know-more'>('home');

  const handleNavigate = (page: 'home' | 'know-more') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? <Home /> : <KnowMore />}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;