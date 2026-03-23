import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: 'Custom',
    desc: 'Perfect for small events and quick portraits.',
    features: ['2 Hours Coverage', '50 Edited Photos', 'Basic Color Grading', 'Online Gallery'],
    highlighted: false,
  },
  {
    name: 'Standard',
    price: 'Custom',
    desc: 'Our most popular choice for weddings and brands.',
    features: ['6 Hours Coverage', '200+ Edited Photos', 'Cinematic Highlight Reel', 'Advanced Retouching', 'Drone Footage (Optional)'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'Custom',
    desc: 'The ultimate luxury experience for full coverage.',
    features: ['Full Day Coverage', '500+ Edited Photos', 'Full Cinematic Film', 'Second Shooter', 'Premium Photo Book', 'Priority Delivery'],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
            Investment
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-secondary">
            Packages & <span className="italic text-accent">Pricing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 md:p-10 border transition-all duration-300 ${
                pkg.highlighted 
                  ? 'bg-muted border-accent shadow-[0_0_40px_rgba(212,175,55,0.1)] md:-translate-y-4' 
                  : 'bg-primary border-white/10 hover:border-white/30'
              }`}
            >
              {pkg.highlighted && (
                <div className="text-accent text-xs uppercase tracking-widest font-bold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-serif text-secondary mb-2">{pkg.name}</h3>
              <p className="text-secondary/50 text-sm mb-6 h-10">{pkg.desc}</p>
              
              <div className="mb-8 pb-8 border-b border-white/10">
                <span className="text-4xl font-serif text-secondary">{pkg.price}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-secondary/80">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/254726899459"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center py-4 text-sm uppercase tracking-widest font-medium transition-colors ${
                  pkg.highlighted
                    ? 'bg-accent text-accent-foreground hover:bg-accent-hover'
                    : 'border border-secondary/30 text-secondary hover:bg-secondary hover:text-primary'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
