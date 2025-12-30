
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Instagram, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  TrendingUp,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { BRAND_INFO, SERVICES, PRICING, PROCESS } from './constants';

const Logo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`bg-black rounded-xl flex items-center justify-center text-white font-bold transition-transform hover:scale-105 ${className}`}>
    H
  </div>
);

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 apple-blur py-3 border-b border-gray-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 shadow-lg" />
          <span className="font-bold text-xl tracking-tighter hidden sm:block">{BRAND_INFO.name}</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-semibold text-gray-500 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-800 transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            Audit Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-gray-100 overflow-hidden md:hidden flex flex-col shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-2xl font-bold text-gray-800 tracking-tight"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-black text-white px-6 py-4 rounded-2xl text-center font-bold text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Free Instagram Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex justify-center mb-10">
            <Logo className="w-16 h-16 shadow-2xl rounded-2xl" />
          </div>
          <span className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-10 shadow-sm">
            <TrendingUp size={14} className="text-black" />
            Join 100+ Brands & Creators
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-10 leading-[1] text-black">
            Master the <br className="hidden md:block" /> 
            <span className="text-gray-300">Growth Game.</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
            We help ambitious creators and businesses dominate Instagram using content strategy, AI-powered automation, and high-performance design.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <a 
              href="#contact" 
              className="group bg-black text-white px-10 py-5 rounded-2xl text-xl font-bold hover:bg-gray-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] flex items-center gap-3 active:scale-95"
            >
              Get a Free Growth Audit
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest flex items-center gap-2">
              <span className="text-black underline underline-offset-4 decoration-2">200%</span> REACH INCREASE
            </p>
          </div>
        </motion.div>
      </div>

      {/* Modern Background Graphics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[160px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-[100px] -z-10" />
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">About Hardik</h2>
            <h3 className="text-5xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tighter">Performance-driven digital marketing.</h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              I'm <span className="text-black font-bold">Hardik</span>, a growth-focused digital marketer specializing in high-impact Instagram strategies. My mission is to bridge the gap between creative content and data-backed performance.
            </p>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              By combining <span className="italic font-semibold text-black">AI-driven workflows</span> with premium aesthetic design, I help my clients stop scrolling and start converting. I focus on building sustainable brands that thrive in the evolving digital landscape.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="bg-gray-50 border border-gray-100 px-8 py-6 rounded-3xl">
                <div className="text-4xl font-black mb-1 tracking-tighter">100+</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Happy Clients</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 px-8 py-6 rounded-3xl">
                <div className="text-4xl font-black mb-1 tracking-tighter">200%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Avg. Reach Boost</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-2xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale"
                alt="Hardik"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-10 rounded-[40px] shadow-2xl hidden md:block max-w-[280px]">
              <div className="text-3xl font-bold mb-2">Creativity + AI</div>
              <p className="text-gray-400 text-sm font-medium">The blueprint for modern Instagram growth.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section id="results" className="py-32 px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 mb-6">Proven Credibility</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">Real results. No fluff.</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-sm group hover:bg-white/10 transition-all">
            <div className="text-8xl font-black mb-6 tracking-tighter text-white">200<span className="text-gray-600">%</span></div>
            <h4 className="text-2xl font-bold mb-4">Increase in Organic Reach</h4>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              Our strategies focus on high-retention content that tells the algorithm exactly who your audience is.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 p-12 rounded-[48px] backdrop-blur-sm group hover:bg-white/10 transition-all">
            <div className="text-8xl font-black mb-6 tracking-tighter text-white">100<span className="text-gray-600">+</span></div>
            <h4 className="text-2xl font-bold mb-4">Brands Transformed</h4>
            <p className="text-gray-400 text-lg leading-relaxed font-medium">
              From individual creators to scaling businesses, we have a proven track record across 15+ niches.
            </p>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] text-center">
          <p className="text-2xl font-semibold italic text-gray-300">
            "Working with Hardik was the best decision for my brand. My reach skyrocketed and the content quality is unmatched."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-800" />
            <div className="text-left">
              <div className="font-bold">Happy Client</div>
              <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Fashion Creator</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/50 to-transparent pointer-events-none" />
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Expert Solutions</h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Services that scale.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-gray-50 border border-gray-100 p-12 rounded-[48px] hover:bg-white hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:border-black/5 transition-all cursor-default"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-black group-hover:text-white transition-all group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-6 group-hover:text-black transition-colors">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed font-medium text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Investment</h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Flexible plans for every stage.</h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-10">
          {PRICING.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative bg-white p-12 rounded-[56px] shadow-sm border transition-all duration-500 flex flex-col ${plan.highlighted ? 'border-black ring-1 ring-black shadow-[0_40px_100px_rgba(0,0,0,0.1)] lg:-translate-y-8 z-10' : 'border-gray-100'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2 rounded-full shadow-lg">
                  Top Recommended
                </div>
              )}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-gray-400 mb-4 uppercase tracking-widest">{plan.name}</h4>
                <div className="text-5xl font-black mb-4 tracking-tighter">{plan.price}</div>
                <p className="text-gray-500 font-medium leading-relaxed">{plan.description}</p>
              </div>
              <div className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-4">
                    <CheckCircle2 size={20} className="text-black shrink-0 mt-0.5" />
                    <span className="text-base font-semibold text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <a 
                href="#contact" 
                className={`block w-full text-center py-5 rounded-[24px] font-bold text-lg transition-all active:scale-95 ${plan.highlighted ? 'bg-black text-white hover:bg-gray-800 shadow-xl' : 'bg-gray-50 text-black hover:bg-gray-100 border border-gray-100'}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">The System</h2>
          <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Your roadmap to dominance.</h3>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {PROCESS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="mb-8">
                <span className="text-8xl font-black text-gray-50 tracking-tighter group-hover:text-black/5 transition-colors absolute -top-12 left-0 -z-10">{step.number}</span>
                <div className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center text-3xl font-bold shadow-2xl group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">{step.title}</h4>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">{step.description}</p>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-10 -right-8 w-16 h-[2px] bg-gray-100" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactDetails = () => (
  <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
      <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
          <Mail size={24} />
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
          <p className="text-lg font-bold truncate">{BRAND_INFO.email}</p>
        </div>
      </a>
      <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
          <Phone size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Directly</p>
          <p className="text-lg font-bold">+91 {BRAND_INFO.phone}</p>
        </div>
      </a>
      <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
          <Instagram size={24} />
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Follow On IG</p>
          <p className="text-lg font-bold">{BRAND_INFO.instagram}</p>
        </div>
      </a>
    </div>
  </section>
);

const ContactForm = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-20 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Take the Leap</h2>
            <h3 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-[1.1]">Let's audit your brand.</h3>
            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
              Scale your impact with a free 1:1 strategy session. We'll find the gaps in your growth and build a roadmap to 200% reach.
            </p>
            <div className="flex items-center gap-4 text-gray-400 font-bold uppercase tracking-widest text-xs">
              <CheckCircle2 size={16} className="text-black" /> Limited spots available this month
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-50 p-8 md:p-14 rounded-[56px] shadow-sm"
          >
            <form action="https://formspree.io/f/xnjqwnkb" method="POST" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Your Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Hardik" 
                    className="w-full bg-white border border-gray-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-black outline-none transition-all font-semibold text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="hardik@example.com" 
                    className="w-full bg-white border border-gray-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-black outline-none transition-all font-semibold text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Instagram Handle</label>
                <div className="relative">
                  <span className="absolute left-8 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">@</span>
                  <input 
                    type="text" 
                    name="handle" 
                    placeholder="growthwithhardik" 
                    className="w-full bg-white border border-gray-100 rounded-2xl pl-14 pr-8 py-5 focus:ring-2 focus:ring-black outline-none transition-all font-semibold text-lg"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3 px-1">Your Growth Goals</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  placeholder="I want to hit 10k followers and automate my reels workflow..." 
                  className="w-full bg-white border border-gray-100 rounded-2xl px-8 py-5 focus:ring-2 focus:ring-black outline-none transition-all font-semibold text-lg resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-black text-white py-6 rounded-3xl font-black text-xl hover:bg-gray-800 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center gap-4 group active:scale-[0.98]"
              >
                Book Your Free Instagram Growth Audit
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 px-6 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-sm">
            <a href="#" className="flex items-center gap-4 mb-8 group">
              <Logo className="w-12 h-12 shadow-xl" />
              <span className="font-black text-3xl tracking-tighter">{BRAND_INFO.name}</span>
            </a>
            <p className="text-gray-500 font-semibold text-lg leading-relaxed mb-8">
              Transforming digital presences into high-growth assets. Based in India, working globally.
            </p>
            <div className="flex gap-5">
              {[Instagram, Mail].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href={idx === 0 ? BRAND_INFO.instagramUrl : `mailto:${BRAND_INFO.email}`}
                  className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-sm border border-gray-100"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 md:gap-32">
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Navigation</h5>
              <ul className="space-y-4 font-bold text-gray-600">
                <li><a href="#about" className="hover:text-black transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
                <li><a href="#pricing" className="hover:text-black transition-colors">Pricing</a></li>
                <li><a href="#results" className="hover:text-black transition-colors">Results</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-gray-400 mb-8">Social</h5>
              <ul className="space-y-4 font-bold text-gray-600">
                <li><a href={BRAND_INFO.instagramUrl} className="hover:text-black transition-colors flex items-center gap-2">Instagram <ExternalLink size={14} /></a></li>
                <li><a href="#" className="hover:text-black transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-gray-400 tracking-tight">
          <p>© {new Date().getFullYear()} {BRAND_INFO.name}. Crafted for creators.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white selection:bg-black selection:text-white antialiased">
      <Nav />
      <main>
        <Hero />
        <About />
        <Results />
        <Services />
        <Pricing />
        <Process />
        <ContactForm />
        <ContactDetails />
      </main>
      <Footer />
    </div>
  );
}
