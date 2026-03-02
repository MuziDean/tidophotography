import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA, type Photo } from '../constants';
import { cn } from '../lib/utils';

// Comprehensive list of categories
const CATEGORIES = [
  'All', 
  'Weddings', 
  'Portraits',
  'Commercial',
  'Editorial', 
  'Graduations', 
  'Matric Dances',
  'Christmas',
  'Real Estate',
  'Street',
  'Events'
] as const;

type Category = typeof CATEGORIES[number];

interface PortfolioGridProps {
  photos?: Photo[];
  limit?: number;
}

export default function PortfolioGrid({ photos, limit }: PortfolioGridProps) {
  const [filter, setFilter] = useState<Category>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use provided photos or fall back to all data
  const dataToUse = photos || PORTFOLIO_DATA;

  const filteredPhotos = dataToUse.filter(
    (photo) => filter === 'All' || photo.category === filter
  ).slice(0, limit);

  const getCategoryCount = (category: Category) => {
    if (category === 'All') return dataToUse.length;
    return dataToUse.filter(photo => photo.category === category).length;
  };

  const openLightbox = (photo: Photo) => {
    const index = dataToUse.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
    setSelectedPhoto(photo);
  };

  const nextPhoto = () => {
    const nextIdx = (currentIndex + 1) % dataToUse.length;
    setCurrentIndex(nextIdx);
    setSelectedPhoto(dataToUse[nextIdx]);
  };

  const prevPhoto = () => {
    const prevIdx = (currentIndex - 1 + dataToUse.length) % dataToUse.length;
    setCurrentIndex(prevIdx);
    setSelectedPhoto(dataToUse[prevIdx]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;
      
      if (e.key === 'ArrowRight') {
        nextPhoto();
      } else if (e.key === 'ArrowLeft') {
        prevPhoto();
      } else if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto]);

  // Category descriptions
  const getCategoryDescription = (category: Category) => {
    switch(category) {
      case 'Portraits':
        return 'Intimate and expressive personal portraiture';
      case 'Commercial':
        return 'Professional photography for brands and business';
      case 'Christmas':
        return 'Festive and magical holiday moments';
      case 'Real Estate':
        return 'Stunning architectural photography showcasing properties at their best';
      case 'Street':
        return 'Candid urban moments and authentic city life documentation';
      case 'Events':
        return 'Comprehensive coverage of special occasions and corporate gatherings';
      case 'Weddings':
        return 'Capturing the essence of your special day';
      case 'Graduations':
        return 'Celebrating academic achievement';
      case 'Matric Dances':
        return 'Glamorous milestone moments';
      case 'Editorial':
        return 'High-fashion and creative storytelling';
      default:
        return `Exploring our ${category.toLowerCase()} portfolio`;
    }
  };

  return (
    <div className="w-full">
      {/* Main Category Filters - Show ALL categories regardless of photo count */}
      {!limit && (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat);
            
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 group",
                  filter === cat ? "text-crimson" : "text-ink/40 hover:text-ink",
                  count === 0 && "opacity-40" // Make empty categories slightly faded
                )}
              >
                {cat}
                <span className="ml-2 text-[10px] opacity-50">
                  ({count})
                </span>
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-px bg-crimson"
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Category Description */}
      {!limit && (
        <motion.p
          key={filter}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-ink/40 text-sm italic mb-8"
        >
          {getCategoryDescription(filter)}
        </motion.p>
      )}

      {/* Results Count */}
      {!limit && (
        <motion.div
          key={`count-${filter}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-right mb-4 text-xs text-ink/30"
        >
          {filteredPhotos.length} {filteredPhotos.length === 1 ? 'image' : 'images'} found
        </motion.div>
      )}

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
              onClick={() => openLightbox(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pure-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <p className="text-crimson text-xs uppercase tracking-widest mb-2">
                  {photo.category}
                </p>
                <h3 className="text-xl font-serif text-white mb-3">
                  {photo.title}
                </h3>
                {photo.description && (
                  <p className="text-white/60 text-sm font-light mb-4 line-clamp-2">
                    {photo.description}
                  </p>
                )}
                <div className="w-10 h-10 rounded-full border border-crimson/30 flex items-center justify-center group-hover:border-crimson transition-colors">
                  <Maximize2 className="w-4 h-4 text-crimson" />
                </div>
              </div>

              {/* Category Badge (visible on mobile) */}
              <div className="absolute top-4 left-4 md:hidden">
                <span className="bg-pure-black/80 text-crimson text-[10px] px-2 py-1 uppercase tracking-wider">
                  {photo.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPhotos.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-ink/40 text-lg mb-2">No images in this category yet</p>
          <p className="text-ink/30 text-sm">Check back soon for updates</p>
        </motion.div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-pure-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-crimson transition-colors z-[110] bg-pure-black/50 p-2 rounded-full"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-crimson transition-colors z-[110] bg-pure-black/50 p-2 rounded-full"
            >
              <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-crimson transition-colors z-[110] bg-pure-black/50 p-2 rounded-full"
            >
              <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
            </button>

            {/* Image Container */}
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedPhoto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain shadow-2xl rounded-lg"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center max-w-2xl px-4"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <span className="text-crimson text-xs uppercase tracking-[0.3em]">
                    {selectedPhoto.category}
                  </span>
                  <span className="text-white/20 text-xs">
                    {currentIndex + 1} / {dataToUse.length}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-serif text-white mb-3">
                  {selectedPhoto.title}
                </h2>
                {selectedPhoto.description && (
                  <p className="text-white/60 text-sm md:text-base font-light italic max-w-xl mx-auto">
                    {selectedPhoto.description}
                  </p>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}