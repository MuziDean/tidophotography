import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Zap, Award } from 'lucide-react';
import PortfolioGrid from '../components/PortfolioGrid';
import ContactForm from '../components/ContactForm';
import { SERVICES_DATA } from '../constants';

const HERO_IMAGES = ['/1.png', '/2.png', '/3.png', '/4.png', '/5.png'];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Hero Background"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full object-cover object-top"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-pure-black/50 via-pure-black/40 to-pure-black/80" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-crimson uppercase tracking-[0.5em] text-xs md:text-sm mb-6 font-medium"
          >
            Est. 2018 | Johannesburg
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8"
          >
            Timeless Visual <span className="italic text-crimson">Storytelling</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          >
            Luxury photography crafted for brands, people and unforgettable moments. 
            We capture the soul of your story with cinematic precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Link to="/contact" className="btn-premium-fill text-sm uppercase tracking-widest px-10 py-4 w-full md:w-auto">
              Book a Session
            </Link>
            <Link to="/portfolio" className="btn-premium text-sm uppercase tracking-widest px-10 py-4 w-full md:w-auto">
              View Portfolio
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-crimson to-transparent" />
        </motion.div>
      </section>

      {/* 2. Signature Portfolio Preview */}
      <section className="py-32 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-crimson uppercase tracking-[0.3em] text-xs mb-4">The Collection</p>
              <h2 className="text-4xl md:text-6xl font-serif text-pure-black">Signature <span className="italic">Portfolio</span></h2>
            </div>
            <Link to="/portfolio" className="group flex items-center gap-3 text-crimson uppercase tracking-widest text-sm hover:text-pure-black transition-colors">
              Explore Full Gallery <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <PortfolioGrid limit={6} />
        </div>
      </section>

      {/* 3. Brand Story / About */}
      <section className="py-32 px-6 md:px-12 bg-pure-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="/graduation/g3.png" alt="" className="w-full h-full object-cover grayscale" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-rich-black overflow-hidden">
              <img 
                src="/graduation/g2.png" 
                alt="The Artist" 
                className="w-full h-full object-cover object-top opacity-80"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-80 bg-crimson/10 backdrop-blur-xl border border-crimson/20 p-8 hidden md:block">
              <p className="font-serif text-3xl text-crimson italic mb-4">"Artistry over equipment."</p>
              <p className="text-white/60 text-sm leading-relaxed">
                We believe every frame should tell a story that words cannot reach.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-crimson uppercase tracking-[0.3em] text-xs">Our Philosophy</p>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Crafting <span className="italic">Emotive</span> Narratives Through the Lens
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              TIDOPHOTOGRAPHY was born from a passion for the cinematic and the profound. 
              We don't just take pictures; we curate visual experiences. Our approach is 
              rooted in artistry, trust, and a deep understanding of human connection.
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Whether it's the high-stakes world of fashion editorial or the intimate 
              whispers of a wedding day, we bring the same level of meticulous creative 
              direction and technical excellence to every project.
            </p>
            <div className="pt-6">
              <Link to="/about" className="btn-premium text-sm uppercase tracking-widest px-10 py-4 border-crimson/30 text-white hover:border-crimson">
                Our Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-32 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-crimson uppercase tracking-[0.3em] text-xs mb-4">What We Offer</p>
            <h2 className="text-4xl md:text-6xl font-serif text-pure-black">Premium <span className="italic">Services</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="group bg-white border border-crimson/10 p-8 flex flex-col h-full shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif text-pure-black mb-4 group-hover:text-crimson transition-colors">{service.title}</h3>
                <p className="text-ink/50 text-sm leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <Link to="/services" className="text-crimson text-xs uppercase tracking-widest flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose TIDOPHOTOGRAPHY */}
      <section className="py-32 px-6 md:px-12 bg-pure-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-crimson uppercase tracking-[0.3em] text-xs mb-4">The Tido Edge</p>
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-12">Why Discerning Clients Choose <span className="italic">Us</span></h2>
              
              <div className="space-y-10">
                {[
                  { icon: Star, title: 'Curated Visual Experience', desc: 'Every session is a bespoke production tailored to your unique aesthetic.' },
                  { icon: Shield, title: 'Personalized Creative Direction', desc: 'We guide you through every pose and frame to ensure absolute confidence.' },
                  { icon: Zap, title: 'Professional Production Workflow', desc: 'Seamless experience from the first inquiry to the final high-end delivery.' },
                  { icon: Award, title: 'Consistent High-End Results', desc: 'A track record of excellence across editorial, commercial, and private sectors.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-crimson/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-crimson" />
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-white mb-2">{item.title}</h4>
                      <p className="text-white/50 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-rich-black overflow-hidden rounded-full border-8 border-pure-black shadow-2xl">
                <img 
                  src="/graduation/g4.png" 
                  alt="Quality" 
                  className="w-full h-full object-cover object-top opacity-60"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-crimson/10 rounded-full animate-pulse pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Booking / Contact Section */}
      <section id="booking" className="py-32 px-6 md:px-12 bg-paper relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-crimson uppercase tracking-[0.3em] text-xs mb-4">Begin Your Journey</p>
            <h2 className="text-4xl md:text-6xl font-serif text-pure-black mb-6">Request Your <span className="italic">Session</span></h2>
            <p className="text-ink/60 text-lg font-light">
              Limited availability for 2026. Secure your date for an unforgettable visual experience.
            </p>
          </div>
          <div className="bg-white border border-crimson/10 p-8 md:p-16 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
