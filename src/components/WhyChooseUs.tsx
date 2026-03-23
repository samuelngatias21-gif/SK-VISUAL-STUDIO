import { motion } from 'motion/react';
import { Camera, Clock, Palette, Edit3, Eye } from 'lucide-react';

const reasons = [
  { icon: <Camera size={24} />, title: 'Premium Equipment', desc: 'Industry-leading gear for uncompromised quality.' },
  { icon: <Clock size={24} />, title: 'Fast Turnaround', desc: 'Prompt delivery without sacrificing excellence.' },
  { icon: <Palette size={24} />, title: 'Creative Direction', desc: 'Guided vision to ensure your story shines.' },
  { icon: <Edit3 size={24} />, title: 'Professional Editing', desc: 'Meticulous color grading and retouching.' },
  { icon: <Eye size={24} />, title: 'Attention to Detail', desc: 'Capturing the subtle moments that matter most.' },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-primary border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-6">
              Why Choose <span className="italic text-accent">SK Studio</span>
            </h2>
            <p className="text-secondary/60 text-lg mb-10 leading-relaxed">
              We don't just capture light; we capture the soul of the story. 
              Our commitment to excellence ensures your legacy is preserved beautifully.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-secondary mb-2">{reason.title}</h4>
                    <p className="text-secondary/50">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
              alt="Photographer in action"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 border border-accent/30 translate-x-4 translate-y-4 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
