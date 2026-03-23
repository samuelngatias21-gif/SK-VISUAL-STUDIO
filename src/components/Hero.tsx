import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-primary/60 z-10" /> {/* Dark overlay */}
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop"
          alt="Cinematic wedding photography"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
        >
          SK Visual Studio
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-secondary leading-tight mb-6"
        >
          Your Story, Captured with <span className="italic text-accent">Precision</span> and Elegance
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-secondary/80 max-w-2xl mb-10 font-light"
        >
          Premium photography and videography for brands, events, and unforgettable moments.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/254726899459"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-accent text-accent-foreground font-medium text-sm uppercase tracking-widest hover:bg-accent-hover transition-all hover:scale-105 text-center"
          >
            Book via WhatsApp
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 border border-secondary/30 text-secondary font-medium text-sm uppercase tracking-widest hover:bg-secondary hover:text-primary transition-all text-center"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-secondary/50">Scroll</span>
        <div className="w-[1px] h-12 bg-secondary/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
