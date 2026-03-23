import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Professional, fast, and stunning results.",
    author: "Sarah & James",
    role: "Wedding Clients"
  },
  {
    quote: "They exceeded our expectations completely.",
    author: "TechCorp Inc.",
    role: "Corporate Event"
  },
  {
    quote: "Best creative team we've worked with.",
    author: "Elena M.",
    role: "Brand Campaign"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 bg-muted border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-secondary/50 font-medium">
            Trusted by 100+ clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 bg-primary/50 border border-white/5 hover:border-accent/30 transition-colors group"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg font-serif italic text-secondary/90 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-medium text-secondary">{testimonial.author}</p>
                <p className="text-sm text-secondary/50">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
