import { motion } from 'motion/react';
import { SERVICES_DATA, ADDITIONAL_SERVICES } from '../constants';
import { Check, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Services() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="pt-32 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <p className="text-crimson uppercase tracking-[0.4em] text-xs mb-4">Our Expertise</p>
          <h1 className="text-5xl md:text-7xl font-serif text-pure-black mb-8">Premium <span className="italic">Offerings</span></h1>
          <p className="text-ink/60 text-lg max-w-2xl mx-auto font-light">
            Tailored visual solutions designed to elevate your personal brand or 
            commemorate your most significant milestones.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/5] overflow-hidden bg-white relative group shadow-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 border-[20px] border-paper/20 pointer-events-none" />
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-8">
                <span className="text-crimson font-serif text-4xl italic">0{idx + 1}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-pure-black">{service.title}</h2>
                <p className="text-ink/60 text-lg leading-relaxed font-light">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {[
                    'Full creative direction',
                    'High-resolution digital delivery',
                    'Professional retouching',
                    'Private online gallery',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-ink/80">
                      <Check className="w-5 h-5 text-crimson" />
                      <span className="text-sm uppercase tracking-widest">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link to="/contact" className="btn-premium-fill px-10 py-4 uppercase tracking-widest text-sm inline-flex items-center gap-3 group">
                    Inquire Now <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Show More Button */}
          {!showMore && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center pt-12"
            >
              <button
                onClick={() => setShowMore(true)}
                className="btn-premium px-12 py-5 uppercase tracking-widest text-sm inline-flex items-center gap-3 group"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                Show More Services
              </button>
            </motion.div>
          )}

          {/* Additional Services - Smaller Cards */}
          {showMore && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pt-20"
            >
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-pure-black mb-4">More <span className="italic">Services</span></h2>
                <p className="text-ink/60 text-lg max-w-2xl mx-auto font-light">
                  Expanding our creative horizons to meet all your visual needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {ADDITIONAL_SERVICES.map((service, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        />
                      </div>
                      <div className="p-8 border-t border-crimson/10">
                        <span className="text-crimson font-serif text-2xl italic mb-2 block">0{idx + 5}</span>
                        <h3 className="text-2xl font-serif text-pure-black mb-3">{service.title}</h3>
                        <p className="text-ink/60 text-sm leading-relaxed font-light mb-4">
                          {service.description}
                        </p>
                        <Link 
                          to="/contact" 
                          className="inline-flex items-center gap-2 text-crimson text-sm uppercase tracking-widest hover:gap-3 transition-all"
                        >
                          Inquire <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="mt-40 bg-pure-black p-12 md:p-20 text-center border border-crimson/10">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to <span className="italic">Collaborate?</span></h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 font-light">
            Every project is unique. We offer bespoke packages tailored to your 
            specific needs and creative vision.
          </p>
          <Link to="/contact" className="btn-premium px-12 py-5 uppercase tracking-widest text-sm text-white border-crimson/30 hover:border-crimson">
            Get a Custom Quote
          </Link>
        </div>
      </div>
    </div>
  );
}