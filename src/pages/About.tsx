import { motion } from 'motion/react';
import { Camera, Heart, Award, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-20 bg-paper min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-crimson uppercase tracking-[0.4em] text-xs mb-4">The Story</p>
            <h1 className="text-5xl md:text-7xl font-serif text-pure-black mb-8 leading-tight">
              Artistry Beyond the <span className="italic">Surface</span>
            </h1>
            <p className="text-ink/60 text-xl leading-relaxed font-light mb-8">
              At TIDOPHOTOGRAPHY, we believe that photography is more than just a 
              record of events—it's a medium for emotional truth and cinematic 
              storytelling.
            </p>
            <p className="text-ink/60 text-lg leading-relaxed font-light">
              Founded in 2018, our studio has grown from a local passion project 
              into a premier luxury photography brand. We specialize in capturing 
              the moments that define us, with a focus on elegance, sophistication, 
              and the timeless beauty of the human experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white overflow-hidden shadow-2xl">
              <img
                src="/graduation/g5.png"
                alt="Studio"
                className="w-full h-full object-cover object-top grayscale opacity-90"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-crimson p-10 hidden md:block shadow-xl">
              <Camera className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { icon: Heart, title: 'Emotion First', desc: 'We prioritize the feeling of the moment over technical perfection, though we strive for both.' },
            { icon: Award, title: 'Excellence', desc: 'Every frame is meticulously crafted and edited to meet the highest international standards.' },
            { icon: Globe, title: 'Global Vision', desc: 'Based in Johannesburg, our aesthetic is inspired by global fashion and cinematic trends.' },
          ].map((value, idx) => (
            <div key={idx} className="bg-white border border-crimson/10 p-10 text-center group hover:border-crimson transition-all duration-500 shadow-sm hover:shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-crimson/10 mb-8 transition-transform">
                <value.icon className="w-8 h-8 text-crimson" />
              </div>
              <h3 className="text-2xl font-serif text-pure-black mb-4">{value.title}</h3>
              <p className="text-ink/50 leading-relaxed font-light">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* The Process */}
        <div className="bg-pure-black p-12 md:p-24 border border-crimson/10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Our <span className="italic">Process</span></h2>
            <p className="text-white/60 text-lg font-light">
              A seamless journey from the first spark of an idea to the final 
              heirloom-quality delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-crimson/10 hidden md:block" />
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your vision and aesthetic goals.' },
              { step: '02', title: 'Direction', desc: 'Full creative planning and location scouting.' },
              { step: '03', title: 'The Session', desc: 'A relaxed, professional shooting experience.' },
              { step: '04', title: 'Curation', desc: 'Meticulous editing and final delivery.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-pure-black pt-8">
                <span className="text-crimson font-serif text-4xl italic mb-4 block">{item.step}</span>
                <h4 className="text-xl font-serif text-white mb-2">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
