
import React from 'react';

const reasons = [
  { icon: 'fa-award', title: '75+ Years Trust', desc: 'Legacy of integrity and customer satisfaction inherited from Seematti Group.' },
  { icon: 'fa-brain', title: 'Retail + Tech Expertise', desc: 'Unique domain knowledge combining traditional retail wisdom with modern engineering.' },
  { icon: 'fa-check-double', title: 'End-to-End Solutions', desc: 'From strategy to deployment and long-term maintenance, we cover it all.' },
  { icon: 'fa-expand-arrows-alt', title: 'Scalable & Customizable', desc: 'Flexible architecture built to grow with your business and handle global traffic.' },
  { icon: 'fa-handshake', title: 'Partnership Approach', desc: 'We don’t just deliver code; we build long-term relationships for sustainable success.' }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50/50 rounded-full blur-[100px] -z-10"></div>
            <img 
              src="https://picsum.photos/800/600" 
              alt="Technology" 
              className="rounded-[40px] shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl border border-slate-50 hidden md:block">
              <div className="text-blue-600 text-4xl font-bold mb-1">99.9%</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Client Satisfaction</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Why Leading Brands Choose Zias</h2>
            <div className="space-y-8">
              {reasons.map((r, i) => (
                <div key={i} className="flex space-x-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 text-lg">
                    <i className={`fa-solid ${r.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{r.title}</h4>
                    <p className="text-slate-600 leading-relaxed text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
