import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12',
        scrolled ? 'bg-paper/90 backdrop-blur-md py-3 border-b border-crimson/10 shadow-sm' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Toggle & Desktop Nav (Left) */}
        <div className="flex items-center gap-6">
          <button
            className="md:hidden text-pure-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'nav-link relative group',
                  location.pathname === item.path && 'text-crimson'
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px bg-crimson transition-all duration-300 group-hover:w-full",
                  location.pathname === item.path && "w-full"
                )} />
              </Link>
            ))}
            <Link to="/contact" className="btn-premium text-xs uppercase tracking-widest px-6 py-2 border-crimson/20 hover:border-crimson">
              Book Now
            </Link>
          </div>
        </div>

        {/* Logo (Right) */}
        <Link to="/" className="flex items-center group">
          <img 
            src="/logo2.png" 
            alt="TIDOPHOTOGRAPHY" 
            className={cn(
              "w-auto object-contain transition-all duration-500",
              scrolled ? "h-16 md:h-20" : "h-24 md:h-32"
            )} 
          />
        </Link>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-paper border-b border-crimson/20 md:hidden flex flex-col p-8 gap-6 items-center shadow-2xl"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-lg uppercase tracking-[0.2em] font-serif',
                  location.pathname === item.path ? 'text-crimson' : 'text-ink/80'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="btn-premium-fill w-full text-center py-4 uppercase tracking-widest"
            >
              Book a Session
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
