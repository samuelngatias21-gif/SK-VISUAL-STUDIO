import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="text-2xl font-serif font-bold tracking-wider text-secondary block mb-6">
              SK <span className="text-accent">STUDIO</span>
            </a>
            <p className="text-secondary/60 max-w-sm mb-8">
              Premium photography and videography for brands, events, and unforgettable moments. Your story, told beautifully.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-secondary hover:text-accent hover:border-accent transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-secondary font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-secondary/60 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-secondary/60 hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-secondary/60 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#about" className="text-secondary/60 hover:text-accent transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest text-secondary font-medium mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary/60 hover:text-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/40 text-sm">
            &copy; {new Date().getFullYear()} SK Visual Studio. All rights reserved.
          </p>
          <p className="text-secondary/40 text-sm">
            Designed with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
