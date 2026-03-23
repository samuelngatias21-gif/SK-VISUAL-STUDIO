import { motion } from 'motion/react';
import { MessageCircle, CalendarCheck, Camera, PackageCheck } from 'lucide-react';

const steps = [
  {
    icon: <MessageCircle size={28} />,
    title: 'Inquiry',
    desc: 'Reach out via WhatsApp to discuss your vision.',
  },
  {
    icon: <CalendarCheck size={28} />,
    title: 'Planning',
    desc: 'We align on your vision, location, and style.',
  },
  {
    icon: <Camera size={28} />,
    title: 'Shoot',
    desc: 'Professional execution on the day of your event.',
  },
  {
    icon: <PackageCheck size={28} />,
    title: 'Delivery',
    desc: 'High-quality final content delivered promptly.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 bg-muted">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-4">
            Our <span className="italic text-accent">Process</span>
          </h2>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            A seamless journey from your first message to the final delivery.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-white/10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="w-24 h-24 mx-auto bg-primary border border-accent/30 rounded-full flex items-center justify-center text-accent mb-8 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-secondary mb-4">{step.title}</h3>
                <p className="text-secondary/60">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
