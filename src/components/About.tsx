import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-muted border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] lg:h-[700px] order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=1000&auto=format&fit=crop" 
              alt="SK Studio Team"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute top-8 left-8 border border-accent/30 w-full h-full -z-10" />
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
                Our Story
              </p>
              <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-8 leading-tight">
                Passion, Professionalism, <span className="italic text-accent">Creativity</span>
              </h2>
              
              <div className="space-y-6 text-secondary/70 text-lg font-light leading-relaxed">
                <p>
                  At SK Visual Studio, we believe that every moment holds a unique story waiting to be told. Founded on a passion for visual storytelling, we have grown into a premier studio dedicated to capturing life's most significant events with elegance and precision.
                </p>
                <p>
                  Our approach is simple: blend technical mastery with an artistic eye. Whether it's the quiet intimacy of a wedding day or the bold vision of a corporate brand, we approach every project with the same level of dedication and creativity.
                </p>
                <p>
                  We don't just take photos or record videos; we craft legacies. Our team of experienced professionals works closely with you to ensure your vision is not only met but exceeded, delivering timeless results that you will cherish forever.
                </p>
              </div>
              
              <div className="mt-12">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                  alt="Signature" 
                  className="h-12 opacity-50 invert"
                />
                <p className="text-sm text-secondary/50 mt-4 uppercase tracking-widest">
                  Founder, SK Studio
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
