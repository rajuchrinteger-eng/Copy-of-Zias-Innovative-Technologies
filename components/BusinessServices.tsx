
import React from 'react';

const businessServices = [
  {
    icon: 'fa-bullhorn',
    title: 'Marketing Support',
    desc: 'Online & offline strategies for retail growth.',
    blobColor: 'bg-blue-50/50'
  },
  {
    icon: 'fa-chart-pie',
    title: 'Marketing Technology',
    desc: 'Digital tools for marketing automation.',
    blobColor: 'bg-emerald-50/50'
  },
  {
    icon: 'fa-palette',
    title: 'Creative Services',
    desc: 'Impactful visual design and social assets.',
    blobColor: 'bg-indigo-50/50'
  },
  {
    icon: 'fa-shop',
    title: 'E-Commerce Support',
    desc: 'Store development and branding assistance.',
    blobColor: 'bg-purple-50/50'
  },
  {
    icon: 'fa-chalkboard-user',
    title: 'Mentorship & Training',
    desc: 'Digital marketing knowledge transfer.',
    blobColor: 'bg-orange-50/50'
  },
  {
    icon: 'fa-robot',
    title: 'AI Solutions',
    desc: 'Tailored AI power for process optimization.',
    blobColor: 'bg-red-50/50'
  },
  {
    icon: 'fa-bolt-lightning',
    title: 'Business Automation',
    desc: 'Streamlining workflows for efficiency.',
    blobColor: 'bg-cyan-50/50'
  }
];

export const BusinessServices: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Complete Business Support Beyond Software</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            End-to-end business, marketing, and automation services to support brands across both online and offline channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {businessServices.map((s, i) => (
            <div 
              key={i} 
              className="relative bg-white pt-16 pb-12 px-10 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate('#service-business')}
            >
              {/* Top Right Decorative Blob */}
              <div className={`absolute -top-10 -right-10 w-40 h-40 ${s.blobColor} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}></div>
              
              {/* Floating Icon Container */}
              <div className="absolute top-10 left-10">
                <div className="w-16 h-16 bg-white shadow-lg shadow-slate-200/50 rounded-2xl flex items-center justify-center text-2xl text-slate-800 transition-transform group-hover:scale-110">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
              </div>

              <div className="relative mt-12">
                <h4 className="text-xl font-bold text-slate-900 mb-6">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-10 text-[15px]">
                  {s.desc}
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
