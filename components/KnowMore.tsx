import React from 'react';
import { CheckCircle, Layers, Users, BarChart2, FileText, Target, Clipboard, Clock } from 'lucide-react';

export const KnowMore: React.FC = () => {
  return (
    <div className="pt-24 pb-16 bg-white">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">
            About DelOrg<span className="text-indigo-500">360</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            The integrated Enterprise Delivery & Project Portfolio Management Product designed to give you a complete snapshot of your organization's health.
          </p>
        </div>
      </div>

      {/* What is DelOrg360 */}
      <section className="bg-slate-50 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is DelOrg360?</h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                DelOrg360 (Delivery Organization 360) is a web-based integrated Enterprise "Delivery and Project Portfolio Management" platform. It provides a complete, integrated snapshot about Projects & Programs health status, Resource Utilization, and Performance of resources & Projects within the Delivery Organization.
              </p>
              <p>
                Whatever your role—Senior Management, PMO, Program Management, Project Management, Test Management, HR, or Development—DelOrg360 has you covered. The objective is to determine Project and Portfolio status, Gross margins, and Resource status in real-time to best achieve the organization's Operational and Financial goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Modules */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10 text-center">Important Modules</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Module 1 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-shadow p-6">
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-500 mb-4">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Project Portfolio Management</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Real-time Project & Portfolio status</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Drill down to specific areas</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Agile Phase support</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Enhanced Gantt Chart Views</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Risk & Issue Early Warnings</li>
            </ul>
          </div>

          {/* Module 2 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-shadow p-6">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Resource Utilization</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Complete visibility into utilization</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Skill & Role tracking</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Dynamic Global Resource Pool</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Forecast resource needs</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Demand vs. Availability analysis</li>
            </ul>
          </div>

          {/* Module 3 */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-lg shadow-indigo-500/5 hover:shadow-indigo-500/10 transition-shadow p-6">
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center text-teal-500 mb-4">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Management</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> On-Demand Performance reviews</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Role-wise & KRA-wise Dashboards</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Skill-based evaluation</li>
              <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" /> Determine "Right Resource for Right Work"</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Utilities */}
      <section className="bg-slate-900 py-16 text-white mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">Integrated Utilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4 text-indigo-400">
                <FileText className="w-5 h-5 mr-2" />
                <h4 className="font-bold">Issue Management</h4>
              </div>
              <p className="text-sm text-slate-300">Integrated with tasks at all levels. Track lifecycle from open to close. Capture fix times.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4 text-indigo-400">
                <Clipboard className="w-5 h-5 mr-2" />
                <h4 className="font-bold">Test Management</h4>
              </div>
              <p className="text-sm text-slate-300">Define testing types & iterations. Auto-convert failed cases to tasks. Mass update results.</p>
            </div>

             <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4 text-indigo-400">
                <Clock className="w-5 h-5 mr-2" />
                <h4 className="font-bold">Time Sheets</h4>
              </div>
              <p className="text-sm text-slate-300">Integrated with allocated tasks. Analyze productivity and profitability weekly/monthly.</p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="flex items-center mb-4 text-indigo-400">
                <Target className="w-5 h-5 mr-2" />
                <h4 className="font-bold">Pipeline Mgmt</h4>
              </div>
              <p className="text-sm text-slate-300">Define sales processes per product. Track prospects from lead to closure.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Features List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-heading font-bold text-slate-900 mb-10">Detailed Features</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 text-sm text-slate-700">
          <ul className="space-y-3">
            <li className="font-bold text-indigo-600 text-lg mb-2">Portfolio & Projects</li>
            <li>• Project Budgets & Expenses</li>
            <li>• Resource cost and Billing</li>
            <li>• Gross Margin Calculations</li>
            <li>• Gantt Chart & Task Management</li>
            <li>• Billable vs Non-Billable tracking</li>
            <li>• Client Communication & Document Sharing</li>
            <li>• MOM and Action Item Tracking</li>
            <li>• Lessons Learnt and Best Practices Repository</li>
          </ul>
          
          <ul className="space-y-3">
            <li className="font-bold text-indigo-600 text-lg mb-2">Resource & Performance</li>
            <li>• Availability based on Skill, Role and Cost</li>
            <li>• Partial resource assignment</li>
            <li>• Employee deputation tracking</li>
            <li>• Daily assignments dashboard</li>
            <li>• KPI & KRA definition category wise</li>
            <li>• Performance self-appraisal and manager review</li>
            <li>• Resource Audit logs</li>
          </ul>
        </div>
      </div>

      {/* Business Benefits */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h2 className="text-3xl font-heading font-bold mb-8 text-center">Business Benefits</h2>
           <div className="grid md:grid-cols-2 gap-6 text-indigo-50">
             <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Determine optimal resource mix for delivery to achieve operational and financial goals.</p>
             </div>
             <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Better time utilization for planning by addressing only critical issues.</p>
             </div>
             <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Reduces delays in decision making and brings accountability.</p>
             </div>
             <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Real-time visibility into Gross Margins (Monthly, Quarterly, Yearly).</p>
             </div>
             <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Identify and avoid unnecessary operational costs and reduce overhead.</p>
             </div>
              <div className="flex items-start">
               <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0 text-white" />
               <p>Simplify compliance and facilitate project audit preparation.</p>
             </div>
           </div>
        </div>
      </div>

    </div>
  );
};