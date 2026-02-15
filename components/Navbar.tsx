import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from './ui/Button';

import LogoDO from "../src/assets/img/Logo-DO.png";

interface NavbarProps {
  onNavigate: (page: 'home' | 'know-more') => void;
  currentPage: 'home' | 'know-more';
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Why DelOrg360', href: '#why-delorg360', type: 'link' },
    { name: 'Product', href: '#product', type: 'link' },
    { name: 'Pricing', href: '#pricing', type: 'link' },
    { name: 'Testimonials', href: '#testimonials', type: 'link' },
    { name: 'Contact Us', href: '#contact', type: 'link' },
    { name: 'Know More', type: 'action' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();

    if (item.type === 'action') {
      onNavigate('know-more');
      setMobileMenuOpen(false);
      return;
    }

    if (item.href) {
      if (currentPage === 'know-more') {
        onNavigate('home');
        // Timeout to allow render before scrolling
        setTimeout(() => {
          const element = document.querySelector(item.href!);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.querySelector(item.href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center text-white font-bold mr-2.5 shadow-lg shadow-indigo-500/30">
              D
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-slate-900">
              DelOrg<span className="text-indigo-600">360</span>
            </span> */}

              <img src={LogoDO} className="logo-delorg" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href || '#'} 
                className={`relative group py-2 text-sm font-bold transition-colors cursor-pointer tracking-wide ${
                  (item.type === 'action' && currentPage === 'know-more') 
                    ? 'text-indigo-600' 
                    : 'text-slate-700 hover:text-indigo-600'
                }`}
                onClick={(e) => handleNavClick(e, item)}
              >
                {item.name}
                {/* Gradient Underline */}
                <span className={`absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-indigo-600 to-blue-500 transition-all duration-300 ease-out rounded-full ${
                  (item.type === 'action' && currentPage === 'know-more')
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors tracking-wide">Log in</a>
            <Button size="sm">
              Book a Demo
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href || '#'}
              className={`block px-3 py-3 text-base font-bold hover:bg-slate-50 rounded-md transition-colors ${
                 (item.type === 'action' && currentPage === 'know-more')
                  ? 'text-indigo-600'
                  : 'text-slate-700 hover:text-indigo-600'
              }`}
              onClick={(e) => handleNavClick(e, item)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100">
            <Button className="w-full justify-center">Book a Demo</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};