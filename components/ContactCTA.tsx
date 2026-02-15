import React from 'react';
import { Button } from './ui/Button';

export const ContactCTA: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-16 text-center shadow-2xl shadow-indigo-500/30 overflow-hidden relative">
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to optimize your delivery portfolio?
            </h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Join leading organizations that use DelOrg360 to deliver projects on time and within budget. Get a personalized walkthrough today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white !text-indigo-600 hover:!bg-indigo-50 border-white">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-200 text-white hover:bg-indigo-700 hover:text-white hover:border-transparent">
                Contact Sales
              </Button>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              No credit card required for trial. SOC2 Compliant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};