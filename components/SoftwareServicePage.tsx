
import React from 'react';

export const SoftwareServicePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - Updated with Side Imagery and Dark Theme */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000" 
            alt="Software Development" 
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-fade-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-8">
                Custom Engineering Excellence
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Software Development
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light mb-10 leading-relaxed">
                Custom Digital Solutions Built for Performance & Growth.
              </p>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed">
                Zias Innovative Technologies Pvt Ltd delivers customized software development services designed to meet unique business requirements. From mobile applications to scalable e-commerce platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold transition-all shadow-xl shadow-indigo-900/40">
                  Start a Project
                </button>
                <button className="px-10 py-4 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white rounded-full font-bold transition-all">
                  Request a Consultation
                </button>
              </div>
            </div>

            {/* Added Imagery Component beside content as per screenshot */}
            <div className="lg:w-1/2 relative animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                <div className="absolute -inset-10 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
                <div className="relative overflow-hidden rounded-[60px] border border-white/10 bg-slate-800/50 backdrop-blur-sm shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                    alt="Custom Engineering" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  {/* Overlay for glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Code Snippet Decoration */}
                  <div className="absolute top-8 left-8 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl hidden md:block group-hover:-translate-y-2 transition-transform">
                    <div className="flex space-x-1.5 mb-3">
                      <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    <code className="text-[10px] text-indigo-300 font-mono">
                      const solution = await Zias.engineer();
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SOFTWARE DEVELOPMENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">About Our Software Development Services</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Our software development services focus on creating tailor-made solutions aligned with business goals. We combine strategy, design, and technology to deliver software products that are functional, scalable, and user-centric.
                </p>
                <p>
                  Zias follows a structured development approach ensuring clarity, transparency, and quality at every stage of the project. We turn complex requirements into elegant, high-performance digital experiences.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-slate-50 rounded-[60px] p-8 border border-slate-100 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Code Implementation" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE OFFERINGS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">What We Build</h2>
            <p className="text-slate-500">Comprehensive technology services for a digital-first world.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Custom App Development', icon: 'fa-mobile-screen-button', desc: 'Full-stack mobile & web applications with scalable architecture and secure standards.' },
              { title: 'E-Commerce Development', icon: 'fa-cart-plus', desc: 'Shopify customization and custom platform development for optimized storefronts.' },
              { title: 'Growth & Marketing Support', icon: 'fa-arrow-trend-up', desc: 'Marketing-ready platform setup and conversion optimization strategies.' },
              { title: 'Website Design Models', icon: 'fa-bezier-curve', desc: 'Modern UI/UX layouts and responsive brand-aligned interfaces.' },
              { title: 'App Showcase & Samples', icon: 'fa-layer-group', desc: 'Explore our feature demonstrations and real-world application use cases.' },
              { title: 'Digital Business Tools', icon: 'fa-toolbox', desc: 'Business-ready software modules and continuous platform enhancements.' }
            ].map((s, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 text-xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{s.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEVELOPMENT PROCESS FLOW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-20 text-center">Our Development Process</h2>
          <div className="relative flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-8">
            {[
              { step: '01', title: 'Analysis', icon: 'fa-magnifying-glass-chart' },
              { step: '02', title: 'Planning', icon: 'fa-pen-ruler' },
              { step: '03', title: 'Execution', icon: 'fa-code' },
              { step: '04', title: 'QA Testing', icon: 'fa-vial-circle-check' },
              { step: '05', title: 'Deployment', icon: 'fa-cloud-arrow-up' }
            ].map((p, i) => (
              <div key={i} className="relative flex-1 text-center group">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl text-indigo-600 mx-auto mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 border border-slate-100">
                  <i className={`fa-solid ${p.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{p.title}</h4>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{p.step}</div>
                {i < 4 && <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-slate-100"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COLLABORATION */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-1 bg-indigo-500 mr-4"></span> Collaborative Power
                </h3>
                <p className="text-slate-400 leading-relaxed text-lg italic">
                  "Zias Innovative Technologies collaborates with Rinteger to deliver high-quality software solutions with well-defined process flows. This partnership enables the creation of robust, future-ready digital products."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8">Powered by Experience & Collaboration</h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                By combining retail-domain legacy with modern digital agency practices, we deliver outcomes that are technically sound and commercially viable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE ZIAS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Customized Solutions', desc: 'Tailored specifically to unique business needs.' },
              { title: 'Domain Expertise', desc: 'Strong focus on e-commerce & retail applications.' },
              { title: 'Process-Driven', desc: 'Clarity and transparency throughout development.' },
              { title: 'Scalable Architecture', desc: 'Built to grow as your business scales.' },
              { title: 'Security First', desc: 'Enterprise-grade standards in every line of code.' },
              { title: 'Long-term Partnership', desc: 'Reliable support and continuous enhancements.' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <i className="fa-solid fa-circle-check text-indigo-600 mb-4 block text-xl"></i>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">Industries We Support</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Retail & E-Commerce', icon: 'fa-basket-shopping' },
              { name: 'Education', icon: 'fa-book-open-reader' },
              { name: 'Startups & SMEs', icon: 'fa-rocket' },
              { name: 'Enterprises', icon: 'fa-building-shield' }
            ].map((ind, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-white rounded-[30px] flex items-center justify-center text-3xl text-slate-800 mx-auto mb-6 shadow-sm group-hover:shadow-lg group-hover:scale-110 transition-all">
                  <i className={`fa-solid ${ind.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-800">{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-indigo-600 p-16 md:p-24 rounded-[60px] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Let’s Build Your Software Solution</h2>
          <p className="text-lg text-indigo-100 mb-12 max-w-2xl mx-auto relative z-10">
            Whether you need a custom application, e-commerce platform, or software product, Zias Innovative Technologies is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-indigo-600 rounded-full font-bold transition-all shadow-xl">
              Start a Project
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-indigo-500/50 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
