import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "DelOrg360 gave us the visibility we were missing. We improved our resource utilization by 15% in just the first quarter.",
    author: "Sarah Jenkins",
    role: "VP of Delivery",
    company: "TechGlobal",
    initials: "SJ",
    rating: 5,
  },
  {
    id: 2,
    quote: "Finally, a tool that connects Sales Pipeline with Delivery Capacity. No more over-promising to clients. It's a game changer.",
    author: "Michael Chen",
    role: "Director of PMO",
    company: "Innovate Systems",
    initials: "MC",
    rating: 5,
  },
  {
    id: 3,
    quote: "The reporting capabilities are unmatched. I can generate executive dashboards in minutes instead of days. Highly recommended.",
    author: "Elena Rodriguez",
    role: "Head of Operations",
    company: "FinServ IT",
    initials: "ER",
    rating: 5,
  },
  {
    id: 4,
    quote: "Scalability was our biggest issue. DelOrg360 handled our portfolio growth from 50 to 500 projects seamlessly.",
    author: "David Park",
    role: "CTO",
    company: "SoftSolutions",
    initials: "DP",
    rating: 4,
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-white py-10 relative overflow-hidden">
       {/* Modern Background Decor */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-2 tracking-tight">
            Trusted by Modern Delivery Teams
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto">
            See why leading enterprises are switching to DelOrg360 for their portfolio management.
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative max-w-5xl mx-auto mb-6">
            
            {/* Slider Window */}
            <div className="relative overflow-hidden min-h-[380px] md:min-h-[300px]">
                <div 
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="w-full flex-shrink-0 px-4 md:px-12 flex items-center justify-center">
                            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 w-full relative group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <Quote className="w-8 h-8 md:w-10 md:h-10 text-indigo-100 mb-4 md:mb-6 absolute top-6 left-6 md:top-8 md:left-8" />
                                
                                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-100 to-white border border-indigo-50 flex items-center justify-center text-lg md:text-xl font-bold text-indigo-600 shadow-sm">
                                            {testimonial.initials}
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-center md:justify-start space-x-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-slate-200'}`} />
                                            ))}
                                        </div>
                                        <p className="text-lg md:text-xl text-slate-800 leading-relaxed font-medium mb-4">
                                            "{testimonial.quote}"
                                        </p>
                                        <div>
                                            <div className="font-bold text-slate-900 text-base md:text-lg">{testimonial.author}</div>
                                            <div className="text-sm text-slate-500">{testimonial.role}, <span className="text-indigo-600 font-medium">{testimonial.company}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button 
                onClick={handlePrevious}
                className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all z-20"
                aria-label="Previous testimonial"
            >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button 
                onClick={handleNext}
                className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 shadow-sm hover:shadow-md transition-all z-20"
                aria-label="Next testimonial"
            >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-4">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setCurrentIndex(idx);
                            setIsAutoPlaying(false);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentIndex ? 'bg-indigo-600 w-6' : 'bg-slate-300 hover:bg-indigo-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>

        {/* Clientele Section */}
        {/* <div className="pt-6 border-t border-slate-100">
            <h3 className="text-center text-xs font-bold text-slate-400 mb-4 uppercase tracking-[0.2em]">
                Powering Delivery For
            </h3>
            
            <div className="relative w-full overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div className="flex space-x-12 animate-infinite-scroll whitespace-nowrap py-2 items-center">
                    <ClientLogos />
                    <ClientLogos />
                </div>
            </div>
        </div> */}

      </div>
      
      <style>{`
        @keyframes infinite-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
            width: max-content;
        }
        .animate-infinite-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

const ClientLogos = () => (
    <>
        <LogoPlaceholder name="NextSphere" />
        <LogoPlaceholder name="Menlo" />
        <LogoPlaceholder name="Wipro" />
        <LogoPlaceholder name="Phoenix" />
        <LogoPlaceholder name="Supernet" />
        <LogoPlaceholder name="Resonous" />
        <LogoPlaceholder name="Palred" />
        <LogoPlaceholder name="Symbiosys" />
        <LogoPlaceholder name="OSI Consulting" />
        <LogoPlaceholder name="Voxvalley" />
        <LogoPlaceholder name="Nunet" />
    </>
);

const LogoPlaceholder = ({ name }: { name: string }) => (
    <div className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-default px-4 group grayscale hover:grayscale-0">
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
             <div className="w-4 h-4 bg-slate-400 rounded-sm group-hover:bg-indigo-500 transition-colors"></div>
        </div>
        <span className="text-lg font-heading font-bold text-slate-600 group-hover:text-indigo-900 transition-colors">{name}</span>
    </div>
);