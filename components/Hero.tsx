import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { PlayCircle, ArrowRight, Activity, Users, Layers, TrendingUp } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const heroSlides = [
  {
    id: 1,
    title: (
      <>
        Orchestrate Your <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Enterprise Delivery
        </span>
      </>
    ),
    subtitle: "Unify Project Portfolio Management, Resource Utilization, and Financial Performance in one predictive platform tailored for IT Services and PMOs."
  },
  {
    id: 2,
    title: (
      <>
        Project Portfolio <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Management
        </span>
      </>
    ),
    subtitle: "Know about the Project and Portfolio status, Gross margins and performance in real time."
  },
  {
    id: 3,
    title: (
      <>
        Resource Utilization <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Management
        </span>
      </>
    ),
    subtitle: "Achieve complete visibility into resource utilization, skills, roles and cost at any given point."
  },
  {
    id: 4,
    title: (
      <>
        Performance <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Management
        </span>
      </>
    ),
    subtitle: "How do I know how many Developers in my Organization are very good at Software Design? Performance reviews on demand any time."
  }
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-indigo-50/50 to-white -z-10" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="mb-12 lg:mb-0 text-center lg:text-left flex flex-col justify-center">
            <div className="inline-flex items-center justify-center lg:justify-start px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6 w-fit mx-auto lg:mx-0">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
              New: AI-Driven Resource Forecasting
            </div>
            
            <div className="min-h-[280px] md:min-h-[260px] lg:min-h-[300px] flex flex-col">
                <div className={`transition-opacity duration-500 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      {slide.subtitle}
                    </p>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2 mb-8">
                {heroSlides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setFade(false);
                            setTimeout(() => {
                                setCurrentSlide(idx);
                                setFade(true);
                            }, 200);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            idx === currentSlide ? 'bg-indigo-600 w-6' : 'bg-slate-300 hover:bg-indigo-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" className="w-full sm:w-auto group">
                <PlayCircle className="mr-2 w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Visual Content (Dashboard Mock) */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-500/20 border border-slate-200 overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
              {/* Window Header */}
              <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 h-2 w-32 bg-slate-200 rounded-full"></div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase">Portfolio Health</h3>
                    <div className="text-2xl font-bold text-slate-900 mt-1">94.2% On Track</div>
                  </div>
                  <div className="flex space-x-2">
                     <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">+12% vs last month</span>
                  </div>
                </div>

                {/* Chart */}
                <div className="h-48 w-full mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0A8EC7" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0A8EC7" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                      <Tooltip 
                        contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff'}} 
                        itemStyle={{color: '#fff'}}
                      />
                      <Area type="monotone" dataKey="uv" stroke="#0A8EC7" strokeWidth={3} fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Mini Widgets */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="flex items-center text-slate-500 text-xs mb-1">
                      <Users className="w-3 h-3 mr-1" /> Resource Utl.
                    </div>
                    <div className="text-lg font-bold text-slate-900">88%</div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2">
                      <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="flex items-center text-slate-500 text-xs mb-1">
                      <Activity className="w-3 h-3 mr-1" /> Active Issues
                    </div>
                    <div className="text-lg font-bold text-slate-900">24</div>
                    <div className="text-xs text-green-600 mt-1">↓ 4 from yesterday</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -right-6 top-20 bg-white p-3 rounded-lg shadow-xl border border-slate-100 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-full text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">ROI Projected</div>
                  <div className="text-sm font-bold text-slate-900">+$1.2M</div>
                </div>
              </div>
            </div>
             <div className="absolute -left-6 bottom-32 bg-white p-3 rounded-lg shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Projects</div>
                  <div className="text-sm font-bold text-slate-900">12 Active</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};