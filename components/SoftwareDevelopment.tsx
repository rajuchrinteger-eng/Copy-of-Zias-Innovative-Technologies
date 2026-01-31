
import React from 'react';

const softwareServices = [
  {
    icon: 'fa-laptop-code',
    title: 'Customized Applications (Web & Mobile)',
    desc: 'Bespoke software built for scale.',
    items: ['Requirement analysis & design', 'Full-stack development', 'Scalable & secure architecture'],
    blobColor: 'bg-blue-50/50'
  },
  {
    icon: 'fa-cart-shopping',
    title: 'E-Commerce Website Development',
    desc: 'Retail-ready digital storefronts.',
    items: ['Shopify customization', 'Custom platform development', 'Payment & logistics integration'],
    blobColor: 'bg-emerald-50/50'
  },
  {
    icon: 'fa-magnifying-glass-chart',
    title: 'E-Commerce Growth & Marketing',
    desc: 'Driving traffic and conversions.',
    items: ['SEO & SMO for retail', 'Performance marketing', 'Conversion optimization'],
    blobColor: 'bg-indigo-50/50'
  },
  {
    icon: 'fa-pen-nib',
    title: 'Modern Website Design & UI Models',
    desc: 'User-centric design frameworks.',
    items: ['Industry-ready frameworks', 'UX focus', 'Responsive design'],
    blobColor: 'bg-purple-50/50'
  },
  {
    icon: 'fa-display',
    title: 'App Development Samples',
    desc: 'Proven real-world expertise.',
    items: ['Development samples', 'Product demos', 'Use-case showcases'],
    blobColor: 'bg-orange-50/50'
  },
  {
    icon: 'fa-diagram-project',
    title: 'End-to-End Project Execution',
    desc: 'Total visibility from start to finish.',
    items: ['Process flow by Rinteger', 'Ideation to launch', 'Post-launch support'],
    blobColor: 'bg-slate-50/50'
  }
];

export const SoftwareDevelopment: React.FC = () => {
  const navigate = (hash: string) => {
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-20 animate-fade-up">
          <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Software Development & E-Commerce Solutions</h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Zias Innovative Technologies Pvt Ltd delivers custom-built software and e-commerce solutions focused on scalability, performance, and long-term value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {softwareServices.map((s, i) => (
            <div 
              key={i} 
              className="relative bg-white pt-16 pb-12 px-10 rounded-[60px] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-up overflow-hidden group cursor-pointer" 
              style={{ animationDelay: `${i * 0.1}s` }}
              onClick={() => navigate('#service-software')}
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
                <h4 className="text-2xl font-bold text-slate-900 mb-6">{s.title}</h4>
                <p className="text-slate-500 leading-relaxed mb-6 text-[15px]">
                  {s.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {s.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <i className="fa-solid fa-check text-blue-500 mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                
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
