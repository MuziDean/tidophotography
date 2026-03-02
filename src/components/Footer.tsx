import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pure-black border-t border-crimson/10 pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center mb-6">
            <img src="/logo.png" alt="TIDOPHOTOGRAPHY" className="h-24 md:h-32 w-auto object-contain" />
          </Link>
          <p className="text-white/60 max-w-md leading-relaxed mb-8">
            Crafting timeless visual narratives for those who value artistry, 
            emotion, and the power of a single moment. Based in Johannesburg, 
            available worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-crimson/20 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-crimson/20 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-all">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="mailto:hello@tidophotography.co.za" className="w-10 h-10 rounded-full border border-crimson/20 flex items-center justify-center text-white/60 hover:border-crimson hover:text-crimson transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg text-crimson mb-6 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white/60 hover:text-crimson transition-colors">Home</Link></li>
            <li><Link to="/portfolio" className="text-white/60 hover:text-crimson transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="text-white/60 hover:text-crimson transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-white/60 hover:text-crimson transition-colors">About</Link></li>
            <li><Link to="/contact" className="text-white/60 hover:text-crimson transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg text-crimson mb-6 uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-white/60">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-crimson shrink-0" />
              <span>Johannesburg, South Africa<br />Available for Travel</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-crimson shrink-0" />
              <span>hello@tidophotography.co.za</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} TIDOPHOTOGRAPHY. All Rights Reserved.
        </p>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          Designed for Excellence
        </p>
      </div>
    </footer>
  );
}
