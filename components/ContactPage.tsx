
import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-50/60 rounded-full blur-[140px]"></div>
          <div className="absolute bottom-[0%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/40 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 animate-fade-up text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-8">
            Connect With Our Experts
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight">
            Get in Touch With Us
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            Let’s Discuss How We Can Help Your Business Grow
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Whether you are looking for digital solutions, education platforms, ERP systems, software development, or business support services, Zias Innovative Technologies Pvt Ltd is here to help.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION & PRIMARY FORM */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left side: Contact Details */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Details</h2>
              
              {[
                { icon: 'fa-location-dot', title: 'Office Location', detail: 'Kumbakonam, Tamil Nadu, India', color: 'text-blue-600' },
                { icon: 'fa-envelope', title: 'Email', detail: 'info@ziastech.in', color: 'text-indigo-600' },
                { icon: 'fa-phone', title: 'Phone', detail: '+91 8438355305', color: 'text-emerald-600' },
                { icon: 'fa-clock', title: 'Business Hours', detail: 'Mon – Sat | 9:30 AM – 6:30 PM', color: 'text-orange-600' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 flex items-start space-x-5 shadow-sm hover:shadow-md transition-all group">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center ${item.color} text-xl flex-shrink-0 transition-transform group-hover:scale-110`}>
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}

              <div className="pt-10">
                <h3 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider text-[10px]">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((s, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                      <i className={`fa-brands fa-${s} text-sm`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side: Lead Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-[50px] shadow-xl shadow-slate-200/50 border border-slate-100 relative">
                {isSubmitted && (
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-12 rounded-[50px] animate-fade-up">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mb-6 animate-bounce">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
                    <p className="text-slate-500 max-w-md mx-auto">Thank you for reaching out. Our team will review your requirements and get back to you within 24 business hours.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-8 text-blue-600 font-bold hover:underline">Send another message</button>
                  </div>
                )}
                
                <h2 className="text-3xl font-bold text-slate-900 mb-10">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                      <input required type="text" placeholder="John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                      <input required type="email" placeholder="john@example.com" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Mobile Number *</label>
                      <input required type="tel" placeholder="+91 00000 00000" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Company / Institution</label>
                      <input type="text" placeholder="Your Org Name" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Industry</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Retail</option>
                        <option>Education</option>
                        <option>E-Commerce</option>
                        <option>Startup</option>
                        <option>Enterprise</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Service Interested</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>SeemattiStores.com</option>
                        <option>E-Academy</option>
                        <option>Ezy Campus (ERP)</option>
                        <option>Software Development</option>
                        <option>Other Business Services</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Inquiry Type</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Request a Demo</option>
                        <option>Project Discussion</option>
                        <option>Partnership</option>
                        <option>Support</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1">Message / Requirements</label>
                    <textarea rows={5} placeholder="Tell us more about your needs..." className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none"></textarea>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input required type="checkbox" id="consent" className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                    <label htmlFor="consent" className="text-xs text-slate-500 leading-relaxed cursor-pointer select-none">
                      I agree to be contacted by Zias Innovative Technologies Pvt Ltd regarding my inquiry and for further business discussions.
                    </label>
                  </div>

                  <button type="submit" className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-200 flex items-center justify-center space-x-3 group">
                    <span>Submit Inquiry</span>
                    <i className="fa-solid fa-arrow-right-long transition-transform group-hover:translate-x-2"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUICK CONNECT BY SERVICE */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Quick Connect by Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: 'SeemattiStores', icon: 'fa-cart-shopping', label: 'E-Commerce Demo', color: 'bg-blue-50 text-blue-600' },
              { title: 'E-Academy', icon: 'fa-graduation-cap', label: 'Explore Courses', color: 'bg-emerald-50 text-emerald-600' },
              { title: 'Ezy Campus', icon: 'fa-school', label: 'Book ERP Demo', color: 'bg-purple-50 text-purple-600' },
              { title: 'Software Dev', icon: 'fa-code', label: 'Start a Project', color: 'bg-indigo-50 text-indigo-600' },
              { title: 'Business Svcs', icon: 'fa-gears', label: 'Schedule Consult', color: 'bg-orange-50 text-orange-600' }
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 group">
                <div className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-xl mx-auto mb-6 transition-transform group-hover:scale-110`}>
                  <i className={`fa-solid ${s.icon}`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-4">{s.title}</h4>
                <button className="text-[11px] font-bold text-slate-400 group-hover:text-slate-900 tracking-widest uppercase transition-colors">
                  {s.label} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CONNECT WITH US */}
      <section className="py-24 bg-slate-900 text-white rounded-[80px] mx-6">
        <div className="container mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10">Why Connect With Us?</h2>
              <div className="space-y-8">
                {[
                  { title: 'One-stop digital solutions partner', icon: 'fa-puzzle-piece' },
                  { title: '75+ years of retail legacy through Seematti', icon: 'fa-landmark' },
                  { title: 'Experienced professionals & strategic partners', icon: 'fa-user-tie' },
                  { title: 'Customized solutions for every unique client', icon: 'fa-sliders' },
                  { title: 'Fast response & dedicated long-term support', icon: 'fa-bolt-lightning' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-6 group">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <span className="text-lg font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px]"></div>
              <img 
                src="https://images.unsplash.com/photo-1573161559521-19830502c5be?auto=format&fit=crop&q=80&w=800" 
                alt="Connect" 
                className="relative z-10 rounded-[60px] grayscale brightness-125"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAP & LOCATION SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Location</h2>
            <p className="text-slate-500 font-medium">Headquartered in the cultural heart of Kumbakonam, serving clients worldwide.</p>
          </div>
          <div className="w-full h-[500px] bg-slate-100 rounded-[60px] overflow-hidden border border-slate-200 relative group shadow-inner">
            {/* Embedded Google Map Placeholder - In real use, an iframe would go here */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
               <div className="text-center p-12">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mx-auto mb-6 shadow-xl animate-pulse">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">ZIAS INNOVATIVE TECHNOLOGIES PVT LTD</h4>
                  <p className="text-slate-500">Kumbakonam, Tamil Nadu, India - 612001</p>
               </div>
            </div>
            {/* Interactive Cover */}
            <div className="absolute inset-0 bg-blue-900/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[80px] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">Let’s Build Something Great Together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
            Have an idea, requirement, or question? Connect with Zias Innovative Technologies Pvt Ltd today and take the first step toward digital growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition-all shadow-xl">
              Submit an Inquiry
            </button>
            <button 
              onClick={() => window.location.hash = '#home'}
              className="w-full sm:w-auto px-12 py-5 bg-blue-500/20 text-white border border-white/20 backdrop-blur-md rounded-full font-bold hover:bg-white/10 transition-all"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
