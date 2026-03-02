import { motion } from 'motion/react';
import PortfolioGrid from '../components/PortfolioGrid';

export default function Portfolio() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-crimson uppercase tracking-[0.4em] text-xs mb-4"
          >
            The Gallery
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif text-pure-black mb-8"
          >
            Signature <span className="italic">Works</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="w-24 h-px bg-crimson mx-auto mb-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-ink/60 text-lg max-w-2xl mx-auto font-light"
          >
            A curated selection of our most impactful visual narratives across 
            weddings, editorial, commercial, and seasonal celebrations.
          </motion.p>
        </div>

        {/* PortfolioGrid handles all filtering internally - categories, counts, descriptions */}
        <PortfolioGrid />
      </div>
    </div>
  );
}