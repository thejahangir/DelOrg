import React from 'react';
import { Mail, Phone } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden border-t border-slate-800">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      {/* Dark Overlay for Readability - Reduced opacity */}
      <div className="absolute inset-0 bg-slate-900/70 z-0"></div>

      {/* Decorative Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-20" />
         <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px] opacity-20" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-10 tracking-wider uppercase drop-shadow-lg">Pricing</h2>
        
        <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 w-full max-w-4xl shadow-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          <p className="text-indigo-200 text-lg mb-8 font-medium relative z-10">
            Tailored enterprise licensing for your delivery organization.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
            <a 
              href="mailto:sales@delorg360.com" 
              className="group/item flex items-center text-white text-lg md:text-xl font-medium transition-all hover:text-indigo-300"
            >
              <div className="w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center mr-4 group-hover/item:bg-indigo-500/40 group-hover/item:scale-110 transition-all duration-300 border border-indigo-500/30">
                <Mail className="w-6 h-6 text-indigo-400" />
              </div>
              <span>sales@delorg360.com</span>
            </a>
            
            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            
            <a 
              href="tel:+919980916214" 
              className="group/item flex items-center text-white text-lg md:text-xl font-medium transition-all hover:text-indigo-300"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mr-4 group-hover/item:bg-blue-500/40 group-hover/item:scale-110 transition-all duration-300 border border-blue-500/30">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <span>+91 99809 16214</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};