import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/Button';

// Custom X (formerly Twitter) Icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div>
             <div className="flex items-center mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-600 to-blue-500 mr-2"></div>
                <span className="font-heading font-bold text-lg text-slate-900">
                  DelOrg<span className="text-indigo-600">360</span>
                </span>
             </div>
             <p className="text-slate-500 text-sm leading-relaxed mb-6">
               The complete enterprise delivery operating system. Plan, track, and deliver complex portfolios with confidence.
             </p>
             <div className="flex space-x-4">
                <SocialIcon Icon={Linkedin} />
                <SocialIcon Icon={XIcon} />
                <SocialIcon Icon={Github} />
             </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">Project Portfolio Mgmt</a></li>
              <li><a href="#" className="hover:text-indigo-600">Resource Management</a></li>
              <li><a href="#" className="hover:text-indigo-600">Issue & Test Mgmt</a></li>
              <li><a href="#" className="hover:text-indigo-600">Analytics & Reporting</a></li>
            </ul>
          </div>

           {/* Links Column 2 */}
           <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
             <h4 className="font-bold text-slate-900 mb-4">Contact Us</h4>
             <ul className="space-y-3 text-sm text-slate-600">
               <li className="flex items-start">
                 <MapPin className="w-4 h-4 mr-2 mt-0.5 text-indigo-500 flex-shrink-0" />
                 <span>#226, 10 M, 100 Ft Road,<br/>HRBR Layout, Block 1, Kalyan Nagar,<br/>Bangalore - 560 043. India.</span>
               </li>
               <li className="flex items-center">
                 <Mail className="w-4 h-4 mr-2 text-indigo-500" />
                 <span>support@delorg360.com</span>
               </li>
               <li className="flex items-center">
                 <Phone className="w-4 h-4 mr-2 text-indigo-500" />
                 <span>+91 99809 16214</span>
               </li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <div>&copy; {new Date().getFullYear()} DelOrg360. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900">Terms of Service</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
    <Icon className="w-4 h-4" />
  </a>
);