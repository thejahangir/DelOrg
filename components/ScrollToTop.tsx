import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      // Toggle visibility based on scroll position
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG dimensions
  const size = 56; // 3.5rem (w-14)
  const strokeWidth = 4;
  const center = size / 2;
  const radius = center - strokeWidth; // Adjust radius to fit stroke within the 56px box
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div 
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
    >
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-slate-900 shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* Progress Circle SVG */}
        <svg
          className="absolute inset-0 transform -rotate-90 pointer-events-none"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Background Ring - Dark Slate */}
          <circle
            className="text-slate-700"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
          />
          {/* Progress Indicator - Bright Brand Blue */}
          <circle
            className="text-indigo-500 transition-all duration-100 ease-out"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            r={radius}
            cx={center}
            cy={center}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>

        {/* Arrow Icon */}
        <div className="relative z-10">
           <ArrowUp className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
      </button>
    </div>
  );
};