import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-32 bg-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-serif text-primary mb-6"
        >
          Ready to Capture Your <span className="italic">Moment?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-primary/80 mb-12 font-medium"
        >
          Let's create something timeless together. Limited booking slots available.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://wa.me/254726899459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-primary text-secondary font-medium text-sm uppercase tracking-widest hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl"
          >
            Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
