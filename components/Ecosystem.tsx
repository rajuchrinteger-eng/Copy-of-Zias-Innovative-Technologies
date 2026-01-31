
import React from 'react';

const platforms = [
  {
    name: 'SeemattiStores.com',
    desc: 'Our flagship B2C/B2B platform powering the future of retail with smart logistics and AI-driven curation.',
    icon: 'fa-shopping-bag',
    color: 'text-slate-800',
    blobColor: 'bg-blue-50/50',
    hash: '#service-seemattistores'
  },
  {
    name: 'E-Academy',
    desc: 'A comprehensive digital learning ecosystem bridging skills and opportunities for the next-gen workforce.',
    icon: 'fa-graduation-cap',
    color: 'text-slate-800',
    blobColor: 'bg-emerald-50/50',
    hash: '#service-eacademy'
  },
  {
    name: 'EzyCampus ERP',
    desc: 'Revolutionizing academic management with seamless operations, finance tracking, and role-based access.',
    icon: 'fa-school',
    color: 'text-slate-800',
    blobColor: 'bg-purple-50/50',
    hash: '#service-ezycampus'
  }
];

export const Ecosystem: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">The Zias Digital Ecosystem</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Interconnected platforms designed to scale businesses, educate minds, and streamline operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {platforms.map((p, i) => (
            <div 
              key={i} 
              className="relative bg-white pt-16 pb-12 px-10 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate(p.hash)}
            >
              {/* Top Right Decorative Blob as per Image */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 ${p.blobColor} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
              
              {/* Floating Icon Container */}
              <div className="absolute top-10 left-10">
                <div className="w-16 h-16 bg-white shadow-lg shadow-slate-200/50 rounded-2xl flex items-center justify-center text-2xl text-slate-800 transition-transform group-hover:scale-110">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
              </div>

              <div className="relative mt-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-6">{p.name}</h4>
                <p className="text-slate-500 leading-relaxed mb-10 text-[15px]">
                  {p.desc}
                </p>
                
                <button className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Explore Platform <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
