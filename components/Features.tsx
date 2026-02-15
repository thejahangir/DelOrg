import React from 'react';
import { 
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer 
} from 'recharts';
import { 
  Layout, Users, BarChart2, Target, FileText, 
  ArrowUpRight, ClipboardCheck, AlertCircle, ShieldCheck, TrendingUp, Zap, Clock, CheckCircle
} from 'lucide-react';

const pieData = [
  { name: 'On Time', value: 65 },
  { name: 'At Risk', value: 25 },
  { name: 'Critical', value: 10 },
];
const PIE_COLORS = ['#10b981', '#f59e0b', '#ef4444'];

export const Features: React.FC = () => {
  return (
    <div className="bg-white">
      
      {/* --- Part 1: Value Proposition & Visualization --- */}
      <section id="why-delorg360" className="pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
            
            {/* Left Column: Text Content */}
            <div className="mb-12 lg:mb-0">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6">
                Why DelOrg360?
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                Increase your Organization’s Project Management Capabilities by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">5X Immediately</span>.
              </h2>
              
              <div className="prose prose-lg text-slate-600 space-y-6">
                <p className="font-medium text-slate-800">
                  DelOrg360 helps in achieving the delivery organization’s Operational and Financial goals in a systematic way.
                </p>
                <p>
                  DelOrg360 is the web based integrated Enterprise "Delivery and Project Portfolio Management - DPPM" product for Management of Project(s), Resources and Performance of resources in the Delivery Organization.
                </p>
                <p>
                  It provides complete information about the Resource Utilization, Gross Margins and Performance of the Resources and Projects at any given point of time to help achieve delivery organization’s operational and financial goals.
                </p>
              </div>
            </div>

            {/* Right Column: Abstract Visualization */}
            <div className="relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-slate-900">Portfolio Health Snapshot</h3>
                    <span className="text-xs font-medium px-2 py-1 bg-green-100 text-green-700 rounded-full">Live Data</span>
                 </div>
                 
                 <div className="h-64 relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                      </PieChart>
                    </ResponsiveContainer>
                    
                    {/* Center Text in Donut */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                       <div className="text-3xl font-bold text-slate-900">100%</div>
                       <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">Visibility</div>
                    </div>
                 </div>

                 <div className="grid grid-cols-3 gap-4 mt-6 text-center">
                    <div className="p-2 rounded-lg bg-green-50">
                       <div className="text-green-600 font-bold text-lg">65%</div>
                       <div className="text-xs text-slate-600">On Time</div>
                    </div>
                    <div className="p-2 rounded-lg bg-yellow-50">
                       <div className="text-yellow-600 font-bold text-lg">25%</div>
                       <div className="text-xs text-slate-600">At Risk</div>
                    </div>
                    <div className="p-2 rounded-lg bg-red-50">
                       <div className="text-red-600 font-bold text-lg">10%</div>
                       <div className="text-xs text-slate-600">Critical</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Part 2: Modern Parallax Banner --- */}
      <section 
        className="relative py-20 md:py-28 bg-fixed bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2689&q=80')"
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <div className="text-center md:text-left md:w-1/2">
              <h3 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">
                Bridge the Gap Between <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Strategy and Execution</span>
              </h3>
              <p className="text-indigo-100 text-lg mb-8 max-w-xl">
                Empower your teams with real-time insights and automated workflows. Turn chaotic data into decisive action.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-3">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">5x</div>
                <div className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Faster Delivery</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-3">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Resource Visibility</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center hover:bg-white/20 transition-colors">
                <div className="flex justify-center mb-3">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">30%</div>
                <div className="text-xs font-semibold text-indigo-200 uppercase tracking-wider">Time Saved</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Part 3: Feature Modules --- */}
      <section className="py-20 lg:py-28 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
               <h3 className="text-2xl font-heading font-bold text-slate-900">Key Capabilities</h3>
               <p className="text-slate-600 mt-2">Everything you need to manage your delivery organization.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               
               {/* 1. Project Portfolio Management */}
               <ProductCard 
                  icon={Layout}
                  color="text-indigo-600"
                  bg="bg-indigo-50"
                  title="Project Portfolio Management"
                  desc="Easily manage requirements, tasks and priorities, minimize costs and meet deadlines. Know about the Project and Portfolio status, Gross margins and performance in real time."
               />

               {/* 2. Resource Utilization */}
               <ProductCard 
                  icon={Users}
                  color="text-blue-600"
                  bg="bg-blue-50"
                  title="Resource Utilization"
                  desc="Achieve complete visibility into resource utilization, skills, roles and cost at any given point. Real-time tracking of skills and availability and centralized, up-to-date."
               />

               {/* 3. Performance Management */}
               <ProductCard 
                  icon={TrendingUp}
                  color="text-teal-600"
                  bg="bg-teal-50"
                  title="Performance Management"
                  desc="How do I know how many Developers in my Organization are very good at Software Design? Performance reviews on demand any time. On Demand Employee Performance."
               />

               {/* 4. Issue Track & Management */}
               <ProductCard 
                  icon={AlertCircle}
                  color="text-red-500"
                  bg="bg-red-50"
                  title="Issue Track & Management"
                  desc="Integrated with Tasks at Project level, Phase Level, Module Level and Screen Level. Access to client for logging in Issues, Issue becomes Task automatically if needed."
               />

               {/* 5. Test Management */}
               <ProductCard 
                  icon={ClipboardCheck}
                  color="text-emerald-600"
                  bg="bg-emerald-50"
                  title="Test Management"
                  desc="Integrated with Tasks at Project level, Phase Level, Module Level and Screen Level. Execute test cases by testing type and Mass update of test execution results."
               />

               {/* 6. Pipeline Management & More */}
               <ProductCard 
                  icon={Target}
                  color="text-orange-500"
                  bg="bg-orange-50"
                  title="Pipeline Management & More"
                  desc="Define a Product, Service and Prospect. Define Sales process for each Product or service. Update the sales cycle for each prospect until closure (Multi View)."
               />

               {/* 7. Earned Value Reporting */}
               <ProductCard 
                  icon={BarChart2}
                  color="text-purple-600"
                  bg="bg-purple-50"
                  title="Earned Value Reporting"
                  desc="In a single integrated system, Earned Value Management is able to provide accurate forecasts of project performance problems, which is an important metric."
               />

               {/* 8. CMMi Reports */}
               <ProductCard 
                  icon={ShieldCheck}
                  color="text-cyan-600"
                  bg="bg-cyan-50"
                  title="CMMi Reports"
                  desc="Auto generation of CMMi Reports like Defect Density, Resource Utilization, Cost of Quality (COQ) and other compliance metrics."
               />

               {/* 9. Powerful Reporting */}
               <ProductCard 
                  icon={FileText}
                  color="text-pink-600"
                  bg="bg-pink-50"
                  title="Powerful Reporting"
                  desc="Auto generation of CMMi Reports, Resource Utilization Reports, Project Portfolio Gross Margins Report, Resource Performance Reports...++ More."
               />

            </div>
        </div>
      </section>

      {/* Product Section (Video + Description) */}
      <section id="product" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header - Styled like Why DelOrg360 */}
            <div className="mb-12">
               <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wide mb-6">
                 Product
               </div>
               <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-tight max-w-3xl">
                 Integrated Enterprise Delivery & Project Portfolio Management
               </h2>
            </div>

            {/* Product Overview Content */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
               
               {/* Text Description */}
               <div className="prose prose-lg text-slate-600 space-y-6">
                  <p className="leading-relaxed">
                    DelOrg360 is a web based Enterprise "Delivery and Project Portfolio Management" Product for the Management of Projects & Programs, Clients, the Resources and their Performance and the Execution of Projects. DelOrg360 offers much more than a PPM Product.
                  </p>
                  <p className="leading-relaxed">
                    DelOrg360 provides complete snap-shot about the Project(s) Status, Project Tasks, Gant Chart, Risks, Project and Portfolio Gross Margins, Resource Utilization, their availability, deployment status, billability, skills, costs, Projects in pipeline, confirmed projects, resource projections, client communication, document sharing, Performance of the resource in the project and Client Management at any given point.
                  </p>
                  <p className="leading-relaxed">
                    DelOrg360 also provides many more aspects of delivery office including Quality Metrics and utilities such as Issue Management, Test Management, MOM, Time sheets and Pipeline Management. All Information is Integrated and flow seamlessly across all the above functionalities.
                  </p>
               </div>

               {/* Video Placeholder */}
               <div className="mt-12 lg:mt-0 relative">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 aspect-video group cursor-pointer hover:shadow-indigo-500/20 transition-all duration-300">
                      {/* Placeholder Image simulating a video thumbnail */}
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
                        alt="DelOrg360 Dashboard" 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity transform group-hover:scale-105 duration-700"
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-700 transition-all duration-300">
                              <svg className="w-8 h-8 text-white fill-current ml-1" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                              </svg>
                          </div>
                      </div>

                      {/* Video Title Overlay */}
                      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent">
                          <div className="flex items-center space-x-3">
                             <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-bold">D</div>
                             <div className="text-white font-medium text-lg drop-shadow-md">
                                DelOrg 360 - PPDM
                             </div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
};

interface ProductCardProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ icon: Icon, title, desc, color, bg }) => (
  <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
    <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center ${color} mb-6 group-hover:scale-110 transition-transform`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    <div className="mt-4 flex items-center text-indigo-600 text-sm font-medium cursor-pointer hover:text-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity">
      View Details <ArrowUpRight className="w-4 h-4 ml-1" />
    </div>
  </div>
);