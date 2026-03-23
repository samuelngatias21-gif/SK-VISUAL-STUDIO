/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="min-h-screen bg-primary text-secondary selection:bg-accent selection:text-primary">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <About />
      <CTA />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
