import { motion } from 'motion/react';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-8">
              Let's Start a <span className="italic text-accent">Conversation</span>
            </h2>
            <p className="text-secondary/60 text-lg mb-12 max-w-md">
              Whether you're planning a wedding, a corporate event, or a brand campaign, we're here to bring your vision to life.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/50 uppercase tracking-widest mb-1">WhatsApp / Call</p>
                  <a href="https://wa.me/254726899459" className="text-xl font-serif text-secondary hover:text-accent transition-colors">
                    +254 726 899 459
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/50 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:hello@skstudio.com" className="text-xl font-serif text-secondary hover:text-accent transition-colors">
                    hello@skstudio.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-accent group-hover:border-accent/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-secondary/50 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-xl font-serif text-secondary">
                    Nairobi, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-muted p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm uppercase tracking-widest text-secondary/70 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-primary border border-white/10 px-4 py-3 text-secondary focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm uppercase tracking-widest text-secondary/70 mb-2">Service</label>
                <select 
                  id="service" 
                  className="w-full bg-primary border border-white/10 px-4 py-3 text-secondary focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">Select a service</option>
                  <option value="wedding">Wedding Photography/Videography</option>
                  <option value="corporate">Corporate Content</option>
                  <option value="event">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm uppercase tracking-widest text-secondary/70 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-primary border border-white/10 px-4 py-3 text-secondary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-accent text-accent-foreground font-medium text-sm uppercase tracking-widest hover:bg-accent-hover transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
