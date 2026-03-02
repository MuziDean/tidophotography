import { motion } from 'motion/react';
import ContactForm from '../components/ContactForm';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <p className="text-crimson uppercase tracking-[0.4em] text-xs mb-4">Connect</p>
              <h1 className="text-5xl md:text-7xl font-serif text-pure-black mb-8 leading-tight">
                Let's Create <span className="italic">Something</span> Beautiful
              </h1>
              <p className="text-ink/60 text-xl leading-relaxed font-light">
                We are currently accepting bookings for late 2025 and 2026. 
                Please fill out the form or reach out directly to start the conversation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-crimson/20 flex items-center justify-center group-hover:border-crimson transition-colors">
                  <Mail className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Email Us</p>
                  <p className="text-ink text-lg">hello@tidophotography.co.za</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-crimson/20 flex items-center justify-center group-hover:border-crimson transition-colors">
                  <Phone className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Call Us</p>
                  <p className="text-ink text-lg">+27 12 345 6789</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-crimson/20 flex items-center justify-center group-hover:border-crimson transition-colors">
                  <MapPin className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-1">Location</p>
                  <p className="text-ink text-lg">Johannesburg, South Africa</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-[10px] uppercase tracking-widest text-ink/40 mb-6">Follow Our Journey</p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full border border-crimson/20 flex items-center justify-center text-ink/60 hover:border-crimson hover:text-crimson transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-crimson/20 flex items-center justify-center text-ink/60 hover:border-crimson hover:text-crimson transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-crimson/10 p-8 md:p-16 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
