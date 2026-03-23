import { motion } from 'motion/react';
import { Camera, Video, Calendar, Briefcase } from 'lucide-react';

const services = [
  {
    icon: <Camera size={32} strokeWidth={1.5} />,
    title: "Photography",
    description: "Timeless images that tell your story with clarity and emotion.",
  },
  {
    icon: <Video size={32} strokeWidth={1.5} />,
    title: "Videography",
    description: "Cinematic visuals that bring your moments to life.",
  },
  {
    icon: <Calendar size={32} strokeWidth={1.5} />,
    title: "Event Coverage",
    description: "Seamless capture of every important detail.",
  },
  {
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    title: "Corporate Content",
    description: "High-end visuals that elevate your brand presence.",
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-4">
              Our <span className="italic text-accent">Services</span>
            </h2>
            <p className="text-secondary/60 text-lg">
              We see the world through a different lens. Elegant. Professional. Timeless.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 bg-muted border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500" />
              
              <div className="text-accent mb-6 relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-secondary mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-secondary/60 mb-8 relative z-10">
                {service.description}
              </p>
              
              <a 
                href="https://wa.me/254726899459" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-secondary hover:text-accent transition-colors relative z-10"
              >
                Get Quote <span className="ml-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
