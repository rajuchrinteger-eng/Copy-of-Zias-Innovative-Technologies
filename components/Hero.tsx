
import React from 'react';

export const Hero: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = '#contact';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToService = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-36 overflow-hidden bg-white">
      {/* Background Layer with Image and Gradients */}
      <div className="absolute inset-0 -z-10">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Architecture" 
          className="w-full h-full object-cover opacity-[0.03] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] bg-indigo-50/40 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-100 text-blue-600 text-[10px] font-bold tracking-[0.15em] uppercase mb-10 animate-fade-up shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2.5 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></span>
          Established Legacy Since 1948
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold text-slate-900 leading-[1.05] mb-10 animate-fade-up tracking-tight">
          75+ Years of Retail<br />
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Heritage.
          </span>
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-14 leading-relaxed animate-fade-up font-medium" style={{ animationDelay: '0.2s' }}>
          From the trusted legacy of Seematti to a diversified digital enterprise, Zias delivers world-class E-Commerce, ERP, Education, and AI-driven business solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => navigateToService('#service-software')}
            className="group w-full sm:w-auto px-12 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200/50 flex items-center justify-center"
          >
            Explore Solutions 
            <i className="fa-solid fa-arrow-right ml-3 text-sm group-hover:translate-x-1.5 transition-transform"></i>
          </button>
          <button 
            onClick={navigateToContact}
            className="w-full sm:w-auto px-12 py-5 bg-white/80 backdrop-blur-md text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 transition-all flex items-center justify-center shadow-sm"
          >
            Request a Free Demo
          </button>
        </div>
      </div>
      
      <div className="mt-24 container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        {[
          { icon: 'fa-globe', label: 'B2B & B2C Platforms' },
          { icon: 'fa-microchip', label: 'AI & Automation' },
          { icon: 'fa-chart-line', label: 'Global Scaling' },
          { icon: 'fa-shield-halved', label: 'Enterprise Security' }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-lg border border-white/60 rounded-[40px] shadow-sm hover:shadow-xl hover:bg-white/90 transition-all duration-500 group cursor-default">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-lg shadow-slate-100 flex items-center justify-center text-blue-600 text-xl mb-4 group-hover:scale-110 transition-transform">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <span className="text-[13px] font-bold text-slate-800 tracking-wide text-center">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
